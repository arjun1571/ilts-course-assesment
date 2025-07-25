import React, { useState, useEffect, useRef } from "react";
import Icon from "../Icon/Icon";

interface SearchComponentProps {
  placeholder?: string;
  debounceTime?: number;
  onSearch: (term: string) => void;
  onClear?: () => void;
  showClearButton?: boolean;
  icon?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  iconClassName?: string;
  clearButtonClassName?: string;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  placeholder = "Search...",
  debounceTime = 300,
  onSearch,
  onClear,
  showClearButton = true,
  icon = null,
  className = "",
  inputClassName = "",
  iconClassName = "",
  clearButtonClassName = "",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Debounce the search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm && searchTerm.trim().length > 0) {
        onSearch(searchTerm.trim());
      }
    }, debounceTime);

    return () => clearTimeout(timer);
  }, [searchTerm, debounceTime, onSearch]);

  const handleClear = () => {
    setSearchTerm("");
    if (onClear) {
      onClear();
    }
    inputRef.current?.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      handleClear();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {icon && (
        <div className={`absolute left-3 top-1/2 -translate-y-1/2 ${iconClassName}`}>
          <Icon name="search" className="mt-2 text-gray-300" />
        </div>
      )}
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={`
          w-full py-2 px-4 ${icon ? "pl-10" : "pl-4"} pr-8
          rounded-lg border outline-none
          transition-all duration-200
      
          
          ${inputClassName}
        `}
      />
      {showClearButton && searchTerm && (
        <button
          onClick={handleClear}
          className={`
            absolute right-3 top-1/2 -translate-y-1/2
            bg-transparent border-none cursor-pointer
            text-gray-500 hover:text-gray-700
            ${clearButtonClassName}
          `}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchComponent;
