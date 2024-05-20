
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
        <section className="text-gray-600 body-font py-16 rounded-xl overflow-hidden">
          <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center bg-blue-800">
            <div className="lg:flex-grow mt-5 md:mt-0 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal font-serif">
                Search for a plant, Look for it, Learn about it!
              </h1>
              <p className="mb-4 md:pl-0 pl-2 pr-2 leading-relaxed dark:text-gray-300 text-lg">
                Ever saw a plant on your walk or at Lowe's or Home Depot and wondering what kind of plant it is?
                Or maybe you want to add some more greenery back into this world? <br/>
                You can find your plant here and check out all that information so that you can have a green thumb (or two green thumbs)!
              </p>

            </div>

          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}




