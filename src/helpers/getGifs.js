export const getGifs = async (category) => {

    const api_key = 'EpGgM99bfIkRWt2aIW1UpHBaOmQLbXrT';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${api_key}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url,
        }
    });

    return gifs;
}