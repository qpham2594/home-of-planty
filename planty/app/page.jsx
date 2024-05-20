import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div> 
      <Header/>
      <main className={styles.main}>
        <section className="text-gray-600 body-font bg-white dark:bg-slate-800 rounded-xl overflow-hidden">
          <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center bg-blue-800">
            <div className="lg:flex-grow mt-5 md:mt-0 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal font-serif">
                This planet, too, can also be a green flag
              </h1>
              <p className="mb-4 md:pl-0 pl-2 pr-2 leading-relaxed dark:text-gray-300 text-lg">
                Ever saw a plant on your walk or at Lowe's or Home Depot and wondering what kind of plant it is?
                Or maybe you want to add some more greenery back into this world? <br/>
                You can find your plant here and check out all that information so that you can have a green thumb (or two green thumbs)!
              </p>
              <div className="flex justify-center">
                <a href="/search-page" className="inline-flex text-white bg-emerald-600 border-2 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg"> Find Your Plant </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
              <img className="object-cover object-center rounded" alt="hero" src="/planty-256-flag.png"/>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 py-10 ">
          <div className="h-70 rounded-lg bg-gray-200 p-6"> According to the Nature Conservancy, an estimated of 15 billion treesd are cut down each year, which means that's more than 41 MILLION trees per day. </div>
          <div className="h-70 rounded-lg bg-gray-200 p-6"> Wildflowers, with or without flowers, can attract pollinators, which then provide food sources for us and wildlife! You can go to your state website and see if they sell the regional wildflowers, or go to sites such as American Meadows to purchase them.</div>
          <div className="h-70 rounded-lg bg-gray-200 p-6"> Recently the USDA updated the country's gardening zones, and due to global warming, everything has been shifted. To find more info, check out your gardening zone and learn about the causes for this shift: <br/>
          <a href="https://apps.npr.org/plant-hardiness-garden-map/" target="_blank" rel="noreferrer" style={{fontWeight:"bold"}}> USA Updated Gardening Zones </a> </div>
        </div>
      </main>
      <Footer/>
    </div> 
  );
}