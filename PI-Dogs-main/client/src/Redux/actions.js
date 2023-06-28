import axios from "axios";
export const GET_DOGS = 'GET_DOGS';
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT';
export const DOG_POST = 'DOG_POST';
export const FILTER_CREATED = 'FILTER_CREATED';
export const FILTER_TEMPERAMENT = 'FILTER_TEMPERAMENT';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT';
export const DOG_WANTED = 'DOG_WANTED';



export const getDogs = () => {
  //Con esta funcion hago el llamado al back para traer los perros con try catch y asincrono
    return async function(dispatch) {
      try {
        let dogs = (await axios.get("http://localhost:3001/dogs")).data;
        return dispatch({
        type: GET_DOGS,
        payload: dogs
      })
      
      } catch(error) {
        console.log(error)
      }
    }
  }
  export const getTemperament = () =>{
    //Con esta funcion hago el llamado al back para traer los temperamentos con try catch y asincrono
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
    //con esta action yo hago una peticion tipo post con los datos del payload
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
    //Con esta action voy buscando por el endpoint de search para buscar los perros por nombre
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
  }; //Las ultimas simplemente son filtros los cuales se terminan de definir en el reducer

  ;