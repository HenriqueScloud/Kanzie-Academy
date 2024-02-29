export const fetchAlbuns = async () => {
    const url = `https://openmusic-fake-api.onrender.com/api/musics/`;
    const AlbunsData = await fetch(url).then((res) => res.json());

    let arrayAlbuns = [];

    for (let i = 0; i < AlbunsData.length; i++) {
        const id = AlbunsData[i].id;
        const title = AlbunsData[i].title;
        const genre = AlbunsData[i].genre;
        const band = AlbunsData[i].band;
        const price = AlbunsData[i].price;
        const img = AlbunsData[i].img;

        const albunObj = {
            id,
            title,
            genre,
            band,
            price,
            img,
        }
        arrayAlbuns.push(albunObj);
    }
    return  arrayAlbuns;
};


