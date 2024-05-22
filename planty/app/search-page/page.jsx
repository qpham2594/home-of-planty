
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
        <div className="container mx-auto flex md:px-10 md:py-10 md:flex lg:flex-row flex-col items-center bg-blue-800 p-2">
            <div className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-lg sm:text-4xl md:text-4xl font-bold leading-9 tracking-tight mb-1 text-gray-900 dark:text-white sm:text-3xl sm:leading-10 md:text-5xl md:leading-normal font-serif md:w-full">
                Search for a plant, Look for it, Learn about it!
              </h1>
              <p className="mb-4 md:pl-0 pl-2 pr-2 leading-relaxed dark:text-white text-lg">
                We hope that by researching for a plant that you are interested in, it will inpsire you to explore nature more, and add more greenery in your house, whether it's indoor or outdoor. <br/> <br/>

                As our planet is experiencing the consequences of our own doings and the policies around the world, we believe that we can do something to prevent it from getting worse, and as a result,
                inspire the future generations to take care of the world we are living in. It's not too late now to do something about it, before it is actually too late. Just because we as individuals cannot
                do everything, it doesn't mean each of us cannot do something.<br/><br/>

                "You have to hold yourself accountable for your actions, and that's how we're going to protect the Earth."- Julia Butterfly Hill             
              </p>

            </div>

          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}




