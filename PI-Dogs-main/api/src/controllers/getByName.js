const { API_KEY} = process.env;
const { Dog, Temperament } = require('../db');
const axios = require('axios');
const { formDogs, formDogsDb } = require('./validores/validadorDogs')

const getByName = async(req, res) =>{
const { name } = req.query;
    try {
        console.log(`funciona la ruta ${name}`)
        const dogApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
        const dogDb = await Dog.findAll({include: Temperament});
        const validadoDogsApi = await formDogs(dogApi);
        const validadoDogsDb = await formDogsDb(dogDb);

        const allDogs = validadoDogsApi.concat(validadoDogsDb);
        
        if(!name){
            res.send(allDogs)
            console.log("no hay nada")
          } else {
            const dog = await allDogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))
            return res.status(200).send(dog);
          }
        
    } catch (error) {
        res.status(500).json({message: error.message});
    };
}

module.exports = {
    getByName
}
