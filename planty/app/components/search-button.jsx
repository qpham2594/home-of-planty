"use client"

// From the api route, import that in this search component, make it client-side
// But have the search-page be SSR so that information is not exposed.
// So this particular component is client-side, but the page overall at search-page is SSR

import React, { useState } from 'react';
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

      <div className="relative">
        <label htmlFor="Search" className="sr-only"> Search </label>
        <input
          type="text"
          id="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter plant name or keyword"
          className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
        />
        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" onClick={handleSearch} className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
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


{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
