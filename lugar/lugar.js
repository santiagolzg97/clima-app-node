const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUlr = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'x-rapidapi-key': 'd47aab1e0bmsh29b920c1a7e734ap1c8f0bjsn5c8e66909ada' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng,
    }
};

module.exports = {
    getLugarLatLng
}