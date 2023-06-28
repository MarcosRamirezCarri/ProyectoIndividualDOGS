const { API_KEY} = process.env;
const { Dog, Temperament } = require('../db');
const axios = require('axios');
const { formDogs, formDogsDb } = require('./validores/validadorDogs')

const getById = async(req, res) =>{
    const {idRaza} = req.params;
    if(!idRaza){
        return res.status(400).json({message: "Ingrese un Id correcto"});
    }
    try{
        const dogApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
       const dogDb = await Dog.findAll({include: Temperament});
       const validadoDogsApi = await formDogs(dogApi);
        const validadoDogsDb = await formDogsDb(dogDb);

        const allDogs = validadoDogsApi.concat(validadoDogsDb);

       const dogRaza = allDogs.filter(d => d.id == idRaza);
       console.log(dogRaza)
        res.status(200).json(dogRaza);
        //En esta funcion se obtiene el id por params y esta lo que hace es filtrar a los perros traidos por su id
        }
        catch(error){
            res.status(500).json({message: error.message});
        };
}

module.exports = {
    getById
}