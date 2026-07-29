"use client";

interface SizeSelectorProps {
  sizes: string[];
  selected: string | null;
  onSelect: (size: string) => void;
}

export default function SizeSelector({ sizes, selected, onSelect }: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className={`min-w-[44px] h-10 px-3 border rounded text-sm font-medium transition-all duration-150 ${
            selected === size
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-700 border-gray-300 hover:border-gray-900"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
