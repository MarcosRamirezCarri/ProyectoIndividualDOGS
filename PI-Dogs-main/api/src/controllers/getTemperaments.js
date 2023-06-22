const { API_KEY} = process.env;
const { Temperament } = require('../db');
const axios = require('axios');

const getTemperaments = async(req, res) =>{
    try{
        const  temperamentApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
        const temperamentApiForm = temperamentApi.map(t => t.temperament)
        const uniendo = temperamentApiForm.filter(r => r != null).join().split(", ").join().split(",")
        let resultado = uniendo.reduce((a, e) => {
            if(!a.find(d => d == e)) a.push(e)
            return a
          }, []);
          resultado = resultado.map((t, id) => {return{name: t, id: id++}})

          const allTemps = await Temperament.findAll()
    
          if(allTemps.length === 0) {
            await Temperament.bulkCreate(resultado)
            console.log("Temperamentos guardados")
          } 
        res.status(200).json(resultado);
    }
    catch(error){
        res.status(500).json({message: error.message});

}};

module.exports = {
    getTemperaments
};