import axios from "axios";
export const GET_DOGS = 'GET_DOGS';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT';
export const DOG_POST = 'DOG_POST';
export const FILTER_CREATED = 'FILTER_CREATED';
export const FILTER_TEMPERAMENT = 'FILTER_TEMPERAMENT';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';
export const DOG_WANTED = 'DOG_WANTED';



export const getDogs = () => {
    return async function(dispatch) {
      try {
        let dogs = (await axios.get("http://localhost:3001/dogs")).data;
        console.log(dogs);
        return dispatch({
        type: GET_DOGS,
        payload: dogs
      })
      
      } catch(error) {
        console.log(error)
      }
    }
  }

  export const getDetails = (detailId) =>{
    return async function(dispatch){
      try{
        let details = (await axios(`http://localhost:3001/dogs/${detailId}`)).data
        console.log('entro en la action')
        const dogDetail = details.map(d =>{
          return {
            id: d.id,
            image: d.image,
            name: d.name,
            weight_min: d.weight_min,
            weight_max: d.weight_max,
            height_min: d.height_min,
            height_max: d.height_max,
            life_span_min: d.life_span_min,
            life_span_max: d.life_span_max,
            temperament: d.temperament,
          }
        })
        console.log(dogDetail)
        return dispatch({
          type: GET_DETAILS,
          payload: dogDetail
        })
      }catch(error){
        console.log(error);
      }
    }
  
  };

  export const getTemperament = () =>{
    return async function(dispatch){
      try{
        let temperaments = (await axios("http://localhost:3001/temperaments")).data
        let allTemps = temperaments.map(e => e)
        return dispatch({
          type: GET_TEMPERAMENT,
          payload: allTemps
        })
      }catch(error){
        console.log(error);
      }
    }

  };

  export const postDog = (payload) => {
    return async function(dispatch) {
      try {
        await axios.post("http://localhost:3001/dogs", payload);
        alert("Dog created")
        return dispatch({
          type: DOG_POST
        })
      } catch (error) {
        console.log(error)
        alert("Dog not created")
      }
    }
  };

  export const dogSearch = (dogRaza) => {
    return async function(dispatch) {
      try {
        const dogs =  ( await axios(`http://localhost:3001/search?name=${dogRaza}`)).data;

        return dispatch({
          type: DOG_WANTED,
          payload:dogs
        })
      }
       catch (error) {
        console.log(error)
        
      }
    }
  };

 export const filterByTemperament = (payload) => {
    return {
      type: FILTER_TEMPERAMENT,
      payload
    }    
  };

  export const filterCreated = (payload) => {
   return {
    type: FILTER_CREATED,
    payload
   }
  };
  export const orderByName = (payload) => {
    return {
      type: ORDER_BY_NAME,
      payload
    }
  };
  
  export const orderByWeight = (payload) => {
    return {
      type: ORDER_BY_WEIGHT,
      payload
    }
  }

  ;