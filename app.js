'use strict'
const lugar=require('./lugar/lugar.js');
const clima=require('./clima/clima.js');
const argv=require('yargs').options({
	direccion:{
		alias:'d',
		descripcion:'direccion de la ciudad para obtener el clima',
		demand:true
	}
}).argv;

let getInfo=async (direccion) =>{
	try{
		let coord=lugar.getLugarLatLgn(direccion);
		let temp=clima.getClima(coord.lat,coord.lgn);
		return `El clima de la ciudad ${coord.direccion} es de ${temp}`;
	}
	catch(e){
		return `No se pudo encontrar el clima en el lugar ${direccion}`;
	}
}

getInfo(argv.direccion)
	.then(resp=>console.log(resp))
	.catch(e=>console.log(e));

