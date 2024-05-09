
// Since this is SSR - instead of having the api route page, directly implement the api route in here and remove use client
// then make the search feature as a component and have that as a "use client"
// that way, this page is server-side rendering, but the search component is client 

import React from 'react';
import Head from 'next/head';
import SearchComponent from '../components/search-button';

export default function PlantSearchPage() {
  return (
    <div>
      <Head/>
      <SearchComponent/>
    </div>
  );
}




