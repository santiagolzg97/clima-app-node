//const lugar = require('./lugar/lugar');
//const clima = require('./clima/clima');

const info = require('./Info/getInfo');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad que queremos obtener el clima',
        demand: true,
    }
}).argv;

info.getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

/*lugar.getLugarLatLng(argv.direccion)
    .then(console.log)
    .catch(console.log);*/