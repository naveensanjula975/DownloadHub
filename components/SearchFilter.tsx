"use client";

import { Search, Filter, X } from "lucide-react";
import { useState } from "react";

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (type: string) => void;
  activeFilter: string;
  fileTypes: string[];
}

export default function SearchFilter({ onSearch, onFilter, activeFilter, fileTypes }: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleFilterSelect = (type: string) => {
    onFilter(type);
    setIsFilterOpen(false);
  };

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          placeholder="Search files..."
          className="block w-full pl-10 pr-3 py-3 border border-custom rounded-lg bg-surface text-foreground placeholder-foreground-muted focus-ring transition-all duration-200"
        />
        {searchQuery && (
          <button
            onClick={() => handleSearchChange("")}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
          </button>
        )}
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => handleFilterSelect("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-ring ${
            activeFilter === "all"
              ? "btn-primary shadow-lg"
              : "btn-secondary hover:bg-surface-hover"
          }`}
        >
          All Files
        </button>
        {fileTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleFilterSelect(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-ring capitalize ${
              activeFilter === type
                ? "btn-primary shadow-lg"
                : "btn-secondary hover:bg-surface-hover"
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
