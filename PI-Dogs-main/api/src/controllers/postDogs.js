const { Dog, Temperament } = require('../db');


const postDog = async(req, res ) =>{
const {name, height_min, height_max, weight_min, weight_max, temperament, image, life_span_min, life_span_max} = req.body;
     if(!name || !height_min || !height_max || !weight_min || !weight_max)
     {return res.status(400).json({message: "Faltan datos obligatorios"})}
    try {
        const newDog = await Dog.create({name, height_min, height_max, weight_min, weight_max, temperament, image, life_span_min, life_span_max});
        let tempDb = await Temperament.findAll({
            where: {id : temperament}
          })
          await newDog.addTemperament(tempDb);
          console.log(newDog)
        res.status(201).json({newDog});
    } catch (error) {
        res.status(500).json({message: error.message});
    };
    
}

module.exports = {
    postDog
}