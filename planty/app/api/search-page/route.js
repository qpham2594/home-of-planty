export async function plantSpecies(query) {
    const response = await fetch(`https://perenual.com/api/species-list?key=${process.env.NEXT_PUBLIC_PLANT_API}&q=${query}`)
    if (response.status !==200)
        return null
    const data = await response.json()
    console.log(data)
    return data
}

export async function plantDetails(id) {
    const response = await fetch(`https://perenual.com/api/species/details/${id}?key=${process.env.NEXT_PUBLIC_PLANT_API}`);
    if (response.status !== 200)
        return null;
    const data = await response.json();
    console.log(data);
    return data;
}
