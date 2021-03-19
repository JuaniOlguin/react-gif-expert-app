export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=5&api_key=x6vCmNmPZ6nfQdJ4xGCn8olc5M22VmZN`
    const resp = await fetch(url)
    const {data} = await resp.json() //recibo en formato json, solo el array data
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //? solo renderiza las imagenes 
        }
    })
   return gifs;
}