const { API_KEY} = process.env;
const { Dog, Temperament } = require('../db');
const axios = require('axios');
const { formDogs, formDogsDb } = require('./validores/validadorDogs')

const getDogs = async(req, res) =>{
    try{
        const dogApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
        const dogDb = await Dog.findAll({include: [{model:Temperament}]});
        const validadoDogsApi = await formDogs(dogApi);
        const validadoDogsDb = await formDogsDb(dogDb);
       const allDogs = validadoDogsApi.concat(validadoDogsDb);
        res.status(200).json(allDogs);
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
}

module.exports={
    getDogs
}