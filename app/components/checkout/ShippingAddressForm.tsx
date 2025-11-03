'use client';

import { useState } from 'react';
import { ShippingAddress } from '@/app/api/types';

interface ShippingAddressFormProps {
  onAddressSubmit: (address: ShippingAddress) => void;
  initialAddress?: Partial<ShippingAddress>;
  isLoading?: boolean;
}

export default function ShippingAddressForm({
  onAddressSubmit,
  initialAddress,
  isLoading = false,
}: ShippingAddressFormProps) {
  const [formData, setFormData] = useState<ShippingAddress>({
    name: initialAddress?.name || '',
    street1: initialAddress?.street1 || '',
    street2: initialAddress?.street2 || '',
    city: initialAddress?.city || '',
    state: initialAddress?.state || '',
    zip: initialAddress?.zip || '',
    country: initialAddress?.country || 'US',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ShippingAddress, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ShippingAddress, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.street1.trim()) {
      newErrors.street1 = 'Street address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    if (!formData.zip.trim()) {
      newErrors.zip = 'ZIP code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zip)) {
      newErrors.zip = 'Invalid ZIP code format';
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onAddressSubmit(formData);
    }
  };

  const handleChange = (field: keyof ShippingAddress) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange('name')}
          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
          placeholder="John Doe"
          disabled={isLoading}
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="street1" className="block text-sm font-medium text-gray-300 mb-1">
          Street Address *
        </label>
        <input
          type="text"
          id="street1"
          value={formData.street1}
          onChange={handleChange('street1')}
          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
          placeholder="123 Main St"
          disabled={isLoading}
        />
        {errors.street1 && <p className="text-red-400 text-xs mt-1">{errors.street1}</p>}
      </div>

      <div>
        <label htmlFor="street2" className="block text-sm font-medium text-gray-300 mb-1">
          Apt, Suite, etc. (optional)
        </label>
        <input
          type="text"
          id="street2"
          value={formData.street2}
          onChange={handleChange('street2')}
          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
          placeholder="Apt 4B"
          disabled={isLoading}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">
            City *
          </label>
          <input
            type="text"
            id="city"
            value={formData.city}
            onChange={handleChange('city')}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="Los Angeles"
            disabled={isLoading}
          />
          {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-1">
            State *
          </label>
          <input
            type="text"
            id="state"
            value={formData.state}
            onChange={handleChange('state')}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="CA"
            maxLength={2}
            disabled={isLoading}
          />
          {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-gray-300 mb-1">
            ZIP Code *
          </label>
          <input
            type="text"
            id="zip"
            value={formData.zip}
            onChange={handleChange('zip')}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
            placeholder="90001"
            pattern="\d{5}(-\d{4})?"
            disabled={isLoading}
          />
          {errors.zip && <p className="text-red-400 text-xs mt-1">{errors.zip}</p>}
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">
            Country *
          </label>
          <select
            id="country"
            value={formData.country}
            onChange={handleChange('country')}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 transition-colors"
            disabled={isLoading}
          >
            <option value="US">United States</option>
            <option value="CA">Canada</option>
          </select>
          {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full border-gradient-rgb hover:bg-white/10 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:border-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 glow-rgb mt-6"
      >
        {isLoading ? 'Calculating...' : 'Calculate Shipping'}
      </button>
    </form>
  );
}

