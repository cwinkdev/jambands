'use client';

import { useState } from 'react';

interface ColorOption {
  id: string;
  name: string;
  color: string;
  description?: string;
}

interface ColorPickerProps {
  colors: ColorOption[];
  selectedColor: string;
  onColorChange: (colorId: string) => void;
  onColorHover?: (colorId: string | null) => void;
}

export default function ColorPicker({ colors, selectedColor, onColorChange, onColorHover }: ColorPickerProps) {
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  const handleMouseEnter = (colorId: string) => {
    setHoveredColor(colorId);
    onColorHover?.(colorId);
  };

  const handleMouseLeave = () => {
    setHoveredColor(null);
    onColorHover?.(null);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-white mb-4">Color Options</h3>
      <div className="grid grid-cols-2 gap-3">
        {colors.map((color) => (
          <button
            key={color.id}
            type="button"
            onClick={() => onColorChange(color.id)}
            onMouseEnter={() => handleMouseEnter(color.id)}
            onMouseLeave={handleMouseLeave}
            className={`p-3 rounded-lg border-2 transition-all duration-200 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              selectedColor === color.id
                ? 'border-accent ring-2 ring-accent/50 bg-accent/10'
                : hoveredColor === color.id
                ? 'border-gray-400 bg-gray-700/50'
                : 'border-gray-600 hover:border-gray-400 bg-gray-800/50'
            }`}
            aria-pressed={selectedColor === color.id}
            aria-label={`${color.name} color option`}
          >
            <div className="flex items-center space-x-3">
              <div
                className="w-6 h-6 rounded-full border border-gray-500"
                style={{ backgroundColor: color.color }}
                aria-hidden="true"
                role="presentation"
              />
              <div>
                <div className="text-white font-medium">{color.name}</div>
                {color.description && (
                  <div className="text-gray-400 text-sm">{color.description}</div>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
