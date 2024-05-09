"use client"
import React, { useState } from "react";
import { plantSpecies } from "../api/search-page/route";

function SearchButton({ setSearchResult, setError }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    try {
      const plantList = await plantSpecies(query);
      setSearchResult(plantList.data);
      setError(null);
    } catch (error) {
      setSearchResult([]);
      setError("Error fetching plant species. Please try again.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter plant name or keyword"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
export default SearchButton;
