"use client"

// From the api route, import that in this search component, make it client-side
// But have the search-page be SSR so that information is not exposed.
// So this particular component is client-side, but the page overall at search-page is SSR

import React from 'react';
import { useState } from 'react';
import { plantSpecies } from '../api/search-page/route';
import Head from 'next/head';
import Link from 'next/link';

export default function SearchComponent() {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const plantList = await plantSpecies(query);
      setSearchResult(plantList.data); 
      setError(null);
    } catch (error) {
      setSearchResult([]);
      setError('Error fetching plant species. Please try again.');
    }
  };

  return (
    <div>
      <Head/>
      <h1>Plant Search</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter plant name or keyword"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p>{error}</p>}
      {searchResult.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul>
            {searchResult.map(plant => (
              <li key={plant.id}>
                <Link href={`/search-page/${plant.id}`}>
                {plant.default_image && plant.default_image.thumbnail && (
                  <img src={plant.default_image.thumbnail} alt={plant.common_name} />
                )}
                <div>
                  <strong>Common Name:</strong> {plant.common_name}
                  <ul>
                    <li><strong>Scientific Name:</strong> {plant.scientific_name.join(', ')}</li>
                  </ul>
                </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
