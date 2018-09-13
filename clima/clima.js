'use strict'
const axios=require('axios');
const getClima=async(lat,lgn)=>{
	let resp=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lgn}&units=metrics&appid=fd2f97b24f4240516b8be6607ce0c8c7`);
	return resp.data.main.temp;
}
module.exports={
	getClima
}