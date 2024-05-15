import React from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";
import Header from "@/app/components/header";
import { plantDetails } from "@/app/api/search-page/route";
import Footer from "@/app/components/footer";

async function fetchPlantDetails(id) {
  try {
    const data = await plantDetails(id);
    return data;
  } catch (error) {
    console.error("Error fetching plant details:", error);
    return null;
  }
}

export default async function PlantDetailsPage({ params }) {
  const { id } = params;
  // Fetch plant details within the component
  const data = await fetchPlantDetails(id);
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h1>{data.common_name}</h1> <br/>
          {data && (
            <>
              <Image src={data.default_image.regular_url} alt="Plant Image" width={300} height={300} /> <br/>
              <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <p key={data.id}>Common Name: {data.common_name}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <p>Cycle: {data.cycle}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <p>Watering: {data.watering}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <p>Sunlight: {data.sunlight}</p>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                    <p>Description: {data.description}</p>   
                  </div>
                </dl>
              </div>                                                   
            </>
          )}
          {!data && <p>No data available</p>}
        </div>           
      </main>
      <Footer/>
    </div>
  );
}


