const lugar = require('../lugar/lugar');
const clima = require('../clima/clima');
getLugar = lugar.getLugarLatLng;
getClima = clima.getClima;
const getInfo = async(direc) => {

    try {
        const coord = await getLugar(direc);
        const temp = await getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direc} es: ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direc}`;
    }
}

module.exports = {
    getInfo
}