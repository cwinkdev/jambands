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
  productId: string;
  quantity: number;
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
  amount: number; // product amount in cents
  shippingCost: number; // shipping cost in cents
  currency?: string;
  productId: string;
  productName: string;
  shippingAddress: ShippingAddress;
}

