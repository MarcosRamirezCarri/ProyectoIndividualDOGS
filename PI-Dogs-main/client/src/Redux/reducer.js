import { GET_DETAILS, GET_DOGS, GET_TEMPERAMENT, DOG_POST, FILTER_TEMPERAMENT, ORDER_BY_NAME, ORDER_BY_WEIGHT, DOG_WANTED, FILTER_CREATED,  } from "./actions";

let initialState = {
    dogs: [],
    details: [],
    dogsHome: [],
    temperaments: [],
    allDogsFilter: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                dogsHome: action.payload,
                allDogsFilter: action.payload
            };
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            };
        case GET_TEMPERAMENT:
            return {
                ...state,
                temperaments: action.payload
            };
        case DOG_POST:
            return {
                ...state,
                dogs: [...state.dogs, action.payload]
            };
      
        case FILTER_CREATED:
            let allDogsFilter = state.allDogsFilter;
            let filterCreated = action.payload === 'creados' ?  allDogsFilter.filter(d => d.creadoEnDB) : state.dogsHome;
            console.log(filterCreated)
            return {
                ...state,
                dogs: filterCreated,
            }
            case FILTER_TEMPERAMENT:
              let allDogs = state.allDogsFilter;
              console.log(allDogs)
              let filterTemperaments = action.payload === 'all' ? allDogs : allDogs.filter(el => el.temperament.includes(action.payload));     
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