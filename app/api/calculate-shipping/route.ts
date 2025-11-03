import { NextRequest, NextResponse } from 'next/server';
import { ShippingRateRequest, ShippingRateResponse, ShippingRate, ShippoRatesData, ShippoRate } from '../types';
import { haloI } from '@/app/data/products/lamps';

// Shippo API base URL
const SHIPPO_API_BASE = 'https://api.goshippo.com';

// Get API key from environment (use test key for development)
const SHIPPO_API_KEY = process.env.SHIPPO_API_KEY || process.env.SHIPPO_TEST_API_KEY;

// Your shipping origin address (update these with your actual warehouse/fulfillment address)
const SHIPPING_ORIGIN = {
  name: 'Jambands',
  street1: process.env.SHIPPING_ORIGIN_STREET1 || '123 Main St',
  city: process.env.SHIPPING_ORIGIN_CITY || 'Los Angeles',
  state: process.env.SHIPPING_ORIGIN_STATE || 'CA',
  zip: process.env.SHIPPING_ORIGIN_ZIP || '90001',
  country: 'US',
};

export async function POST(request: NextRequest) {
  try {
    if (!SHIPPO_API_KEY) {
      console.error('Shippo API key not configured');
      return NextResponse.json(
        { error: 'Shipping service not configured' },
        { status: 500 }
      );
    }

    const body: ShippingRateRequest = await request.json();
    const { address, productId, quantity } = body;

    // Validate required fields
    if (!address || !address.street1 || !address.city || !address.state || !address.zip || !address.country) {
      return NextResponse.json(
        { error: 'Invalid shipping address' },
        { status: 400 }
      );
    }

    // Get product shipping weight
    // For now, we'll use the halo product - you can expand this to fetch from a products map
    let product;
    if (productId === 'halo') {
      product = haloI;
    } else {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    if (!product.shippingWeight) {
      return NextResponse.json(
        { error: 'Product weight not configured' },
        { status: 400 }
      );
    }

    // Calculate total weight for multiple quantities
    // Weight is the primary factor for USPS rate calculation
    const totalWeight = product.shippingWeight * quantity;

    // For multiple items, stack them (height increases)
    // Dimensions are secondary - weight is what determines USPS pricing
    const boxLength = product.shippingLength || 6;
    const boxWidth = product.shippingWidth || 6;
    const boxHeight = (product.shippingHeight || 7) * quantity; // Stack items

    // Shippo API: Create addresses and parcel, then create shipment to get rates
    // Step 1: Create recipient address
    const recipientAddressResponse = await fetch(`${SHIPPO_API_BASE}/addresses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `ShippoToken ${SHIPPO_API_KEY}`,
      },
      body: JSON.stringify({
        name: address.name,
        street1: address.street1,
        street2: address.street2 || '',
        city: address.city,
        state: address.state,
        zip: address.zip,
        country: address.country,
        validate: false, // Set to true if you want Shippo to validate addresses
      }),
    });

    if (!recipientAddressResponse.ok) {
      const errorData = await recipientAddressResponse.json().catch(() => ({}));
      console.error('Shippo address creation error:', errorData);
      throw new Error('Failed to create recipient address');
    }

    const recipientAddress = await recipientAddressResponse.json();

    // Step 2: Create sender address (origin)
    const senderAddressResponse = await fetch(`${SHIPPO_API_BASE}/addresses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `ShippoToken ${SHIPPO_API_KEY}`,
      },
      body: JSON.stringify({
        name: SHIPPING_ORIGIN.name,
        street1: SHIPPING_ORIGIN.street1,
        city: SHIPPING_ORIGIN.city,
        state: SHIPPING_ORIGIN.state,
        zip: SHIPPING_ORIGIN.zip,
        country: SHIPPING_ORIGIN.country,
        validate: false,
      }),
    });

    if (!senderAddressResponse.ok) {
      const errorData = await senderAddressResponse.json().catch(() => ({}));
      console.error('Shippo sender address creation error:', errorData);
      throw new Error('Failed to create sender address');
    }

    const senderAddress = await senderAddressResponse.json();

    // Step 3: Create parcel
    // Weight is the primary factor for USPS rate calculation
    // Dimensions are used by Shippo but weight determines the actual shipping cost
    const parcelResponse = await fetch(`${SHIPPO_API_BASE}/parcels`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `ShippoToken ${SHIPPO_API_KEY}`,
      },
      body: JSON.stringify({
        weight: totalWeight.toString(), // Combined weight is what matters for pricing
        weight_unit: 'oz',
        length: boxLength.toString(),
        width: boxWidth.toString(),
        height: boxHeight.toString(), // Stacked height for multiple items
        distance_unit: 'in',
      }),
    });

    if (!parcelResponse.ok) {
      const errorData = await parcelResponse.json().catch(() => ({}));
      console.error('Shippo parcel creation error:', errorData);
      throw new Error('Failed to create parcel');
    }

    const parcel = await parcelResponse.json();

    // Step 4: Create shipment to get rates
    const shipmentResponse = await fetch(`${SHIPPO_API_BASE}/shipments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `ShippoToken ${SHIPPO_API_KEY}`,
      },
      body: JSON.stringify({
        address_from: senderAddress.object_id,
        address_to: recipientAddress.object_id,
        parcels: [parcel.object_id],
        async: false, // Get rates immediately
      }),
    });

    if (!shipmentResponse.ok) {
      const errorData = await shipmentResponse.json().catch(() => ({}));
      console.error('Shippo shipment creation error:', errorData);

      // If API fails, return a fallback rate
      const fallbackRates: ShippingRate[] = [
        {
          rateId: 'fallback-standard',
          carrier: 'Standard',
          service: 'Standard Shipping',
          amount: 500, // $5.00 fallback
          estimatedDays: 5,
        },
      ];

      return NextResponse.json({
        rates: fallbackRates,
        error: 'Using fallback rates. Please verify Shippo configuration.',
      } as ShippingRateResponse);
    }

    const shipment = await shipmentResponse.json();

    // Shippo includes rates in the shipment response when async: false
    // If rates aren't included, we can fetch them separately
    let ratesData: ShippoRatesData | undefined = (shipment.rates || shipment.rates_list) as ShippoRatesData | undefined;

    // If rates aren't in shipment response, fetch them
    if (!ratesData || (Array.isArray(ratesData) && ratesData.length === 0) || (!Array.isArray(ratesData) && (!ratesData.results || ratesData.results.length === 0))) {
      const ratesResponse = await fetch(`${SHIPPO_API_BASE}/shipments/${shipment.object_id}/rates`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `ShippoToken ${SHIPPO_API_KEY}`,
        },
      });

      if (!ratesResponse.ok) {
        const errorData = await ratesResponse.json().catch(() => ({}));
        console.error('Shippo rates retrieval error:', errorData);

        const fallbackRates: ShippingRate[] = [
          {
            rateId: 'fallback-standard',
            carrier: 'Standard',
            service: 'Standard Shipping',
            amount: 500,
            estimatedDays: 5,
          },
        ];

        return NextResponse.json({
          rates: fallbackRates,
          error: 'Using fallback rates. Please verify Shippo configuration.',
        } as ShippingRateResponse);
      }

      const ratesResponseData = await ratesResponse.json();
      ratesData = (ratesResponseData.results || ratesResponseData) as ShippoRatesData;
    }

    // Transform Shippo rates to our format
    // Handle both array format and results object format
    const ratesArray: ShippoRate[] = Array.isArray(ratesData)
      ? ratesData
      : ('results' in ratesData && ratesData.results ? ratesData.results : []);

    // Log raw rates for debugging
    console.log('Raw Shippo rates:', JSON.stringify(ratesArray, null, 2));
    console.log('Parcel details:', { weight: totalWeight, length: boxLength, width: boxWidth, height: boxHeight });

    const rates: ShippingRate[] = ratesArray.map((rate: ShippoRate) => {
      const serviceName = rate.servicelevel?.name || rate.servicelevel?.token || 'Standard Shipping';
      const amountInDollars = parseFloat(rate.amount || '0');

      // Log each rate for debugging
      console.log(`Rate: ${serviceName} - $${amountInDollars.toFixed(2)} (${rate.provider || rate.carrier})`);

      return {
        rateId: rate.object_id,
        carrier: rate.provider || rate.carrier || 'Unknown',
        service: serviceName,
        amount: Math.round(amountInDollars * 100), // Convert dollars to cents
        estimatedDays: rate.estimated_days || undefined,
      };
    });

    // If no rates returned, use fallback
    if (rates.length === 0) {
      const fallbackRates: ShippingRate[] = [
        {
          rateId: 'fallback-standard',
          carrier: 'Standard',
          service: 'Standard Shipping',
          amount: 500,
          estimatedDays: 5,
        },
      ];
      return NextResponse.json({ rates: fallbackRates } as ShippingRateResponse);
    }

    // Sort rates by amount (cheapest first)
    rates.sort((a, b) => a.amount - b.amount);

    return NextResponse.json({ rates } as ShippingRateResponse);
  } catch (error) {
    console.error('Error calculating shipping:', error);

    // Return fallback rates on error
    const fallbackRates: ShippingRate[] = [
      {
        rateId: 'fallback-standard',
        carrier: 'Standard',
        service: 'Standard Shipping',
        amount: 500, // $5.00 fallback
        estimatedDays: 5,
      },
    ];

    return NextResponse.json({
      rates: fallbackRates,
      error: 'Error calculating shipping. Using fallback rates.',
    } as ShippingRateResponse);
  }
}

