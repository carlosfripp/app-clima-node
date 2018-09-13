'use strict'
const axios=require('axios');

const getLugarLatLgn=async(direccion)=>{
	let encodedUrl=encodeURI(direccion);
	let resp=await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURI }&key=AIzaSyBhI8eBdYX3KzGVFZ1c3Dc_eemYHjngSxU`)
	if(resp.data.status==='ZERO_STATUS'){
		throw new Error(`No hay resultados con la direccion ${direccion}`);
	}
	let location=resp.data.results[0];
	let coord=location.geometry.location;
	return {
		direccion:location.formatted_address,
		lat:coord.lat,
		lgn:coord.lgn
	}
}
module.exports={
	getLugarLatLgn
}
