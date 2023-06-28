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
       //Con esta funcion lo que hago es juntar a los perros que ese encuentren en la api y en la base de datos en un solo objeto, validandolos en el acto.
        res.status(200).json(allDogs);
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
}

module.exports={
    getDogs
}