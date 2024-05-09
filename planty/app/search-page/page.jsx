

// Since this is SSR - instead of having the api route page, directly implement the api route in here and remove use client
// then make the search feature as a component and have that as a "use client"
// that way, this page is server-side rendering, but the search component is client-side?

import React from "react";
import Head from 'next/head';
import Link from 'next/link'; 
import SearchButton from "../components/search-button";

export async function plantSpecies(query) {
  const response = await fetch(`https://perenual.com/api/species-list?key=${process.env.NEXT_PUBLIC_PLANT_API}&q=${query}`)
  const data = await response.json()
  
  return (
    <div>
      <Head/>
      <h1>Plant Search</h1>
      <SearchButton/>
      {data.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul>
            {data.map(plant => (
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

export default plantSpecies;

