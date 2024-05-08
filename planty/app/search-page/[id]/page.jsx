import Image from "next/image";
import styles from "@/app/page.module.css";
import Header from "@/app/components/header";
import { plantDetails } from "@/app/api/search-page/route";

export async function detailsPage({params: {id}}) {
  try {
    const data = await plantDetails(id);
    console.log(data)
    return {
      props: {
        data
      }
    };
  } catch (error) {
    console.error("Error fetching plant details:", error);
    return {
      props: {
        data: null
      }
    };
  }
}

export default function Search({ data }) {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h1>Species List</h1>
          {data && (
            <>
              <Image src={data.default_image.regular_url} alt="Plant Image" width={300} height={300} />
              <p>Common Name: {data.common_name}</p>
              <p>Cycle: {data.cycle}</p>
              <p>Watering: {data.watering}</p>
              <p>Sunlight: {data.sunlight}</p>
              <p>Sunlight: {data.description}</p>
            </>
          )}
          {!data && <p>No data available</p>}
        </div>
      </main>
    </div>
  );
}
