import { GET_DOGS, GET_TEMPERAMENT, DOG_POST, FILTER_TEMPERAMENT, ORDER_BY_NAME, ORDER_BY_WEIGHT, DOG_WANTED, FILTER_CREATED,  } from "./actions";

let initialState = {
    dogs: [],//Estado de perros en general
    dogsHome: [],//Respaldo del estado de perros
    temperaments: [],//Estado de temperamentos
    allDogsFilter: [] //Respaldo del estado de perros
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                dogsHome: action.payload,
                allDogsFilter: action.payload
                //Guardo todos los perros en los estados
            };
        case GET_TEMPERAMENT:
            return {
                ...state,
                temperaments: action.payload
                //Guardo todos los temprementos
            };
        case DOG_POST:
            return {
                ...state,
                dogs: [...state.dogs, action.payload]
                //Añado un perro al estado de Dogs
            };
      
        case FILTER_CREATED:
            let allDogsFilter = state.allDogsFilter;
            let filterCreated = action.payload === 'creados' ?  allDogsFilter.filter(d => d.creadoEnDB) : state.dogsHome;
            //Filtro los perros creados en la base de datos mediante un dato que solo existe en los perros de la base de datos. Y al estado de dogs lo piso con los perros filtrados
            return {
                ...state,
                dogs: filterCreated,
            }
            case FILTER_TEMPERAMENT:
              let allDogs = state.allDogsFilter;
              console.log(allDogs)
              let filterTemperaments = action.payload === 'all' ? allDogs : allDogs.filter(el => el.temperament.includes(action.payload));
              //Filtro los perros mediante sus temperamentos pero si la opcion es 'all' muestra todos los perros. Al resultante del filtrado lo pongo en estado de dogs     
              return {
                  ...state,
                  dogs: filterTemperaments,
                
              };
        case ORDER_BY_NAME:
      const orderDogsName = action.payload === 'name_asc' ?
        state.dogs.slice().sort(function(a, b) {
          if(a.name.toLowerCase() < b.name.toLowerCase()) {return -1}
          if(b.name.toLowerCase() < a.name.toLowerCase()) {return 1}
          return 0;
        }) : 
        state.dogs.slice().sort(function(a, b) {
          if(a.name.toLowerCase() > b.name.toLowerCase()) {return -1}
          if(a.name.toLowerCase() > b.name.toLowerCase()) {return 1}
          return 0;
        })
        //Con estas dos funciones lo que hago es modificar el estado de dogs segun los parametros que se muestra. Esto para que se ordenen alfabeticamente y se acumulen entre si 
      return {
        ...state,
        dogs: orderDogsName
      }
        case ORDER_BY_WEIGHT:
      const orderDogsKg = action.payload === 'weight_asc' ?
        state.dogs.slice().sort(function(a, b) {
          if(parseInt(a.weight_min) < parseInt(b.weight_min)) {return -1}
          if(parseInt(b.weight_min) < parseInt(a.weight_min)) {return 1}
          return 0;
        }) : 
        state.dogs.slice().sort(function(a, b) {
          if(parseInt(a.weight_min) > parseInt(b.weight_min)) {return -1}
          if(parseInt(a.weight_min) > parseInt(b.weight_min)) {return 1}
          return 0;
        })
        //Con estas dos funciones lo que hago es modificar el estado de dogs segun los parametros que se muestra. Esto para que se ordenen por pesos y se acumulen entre si 
      return {
        ...state,
        dogs: orderDogsKg
      }
      case DOG_WANTED:
        return{
            ...state,
            dogs: action.payload,
        }
    
            default:
                return {...state};
}};

export default reducer;