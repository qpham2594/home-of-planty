
// Since this is SSR - instead of having the api route page, directly implement the api route in here and remove use client
// then make the search feature as a component and have that as a "use client"
// that way, this page is server-side rendering, but the search component is client 

import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import SearchComponent from '../components/search-button';
import Footer from '../components/footer';
import Breadcrumbs from "../components/breadcrumbs";

export default function PlantSearchPage() {
  return (
    <div>
      <main>
        <Head/>
        <Header/>
        <Breadcrumbs/>
        <SearchComponent/>
      </main>
      <Footer/>
    </div>
  );
}




