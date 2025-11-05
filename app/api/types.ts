// API Request/Response Types

export interface ShippingAddress {
  name: string;
  street1: string;
  street2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface ShippingRateRequest {
  address: ShippingAddress;
  items: Array<{
    productId: string;
    quantity: number;
  }>;
}

export interface ShippingRate {
  rateId: string;
  carrier: string;
  service: string;
  amount: number; // in cents
  estimatedDays?: number;
}

export interface ShippingRateResponse {
  rates: ShippingRate[];
  error?: string;
}

// Shippo API response types
interface ShippoServiceLevel {
  name?: string;
  token?: string;
}

export interface ShippoRate {
  object_id: string;
  provider?: string;
  carrier?: string;
  servicelevel?: ShippoServiceLevel;
  amount: string;
  estimated_days?: number;
}

export interface ShippoRatesResponse {
  results?: ShippoRate[];
}

export type ShippoRatesData = ShippoRate[] | ShippoRatesResponse;

export interface CreatePaymentIntentRequest {
  items: Array<{
    id: string;
    productId: string;
    productName: string;
    color?: string;
    colorName?: string;
    price: number; // in cents
    quantity: number;
  }>;
  shippingCost: number; // shipping cost in cents
  currency?: string;
  shippingAddress: ShippingAddress;
}

