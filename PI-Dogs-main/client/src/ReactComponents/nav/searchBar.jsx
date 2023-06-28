import React from 'react';
import { dogSearch } from '../../Redux/actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './nav.module.css'
import ROUTE from '../../Helpers/routes'

const SearchBar = () => {
     const dogs = useSelector(state => state.dogs);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');


    const handleSearch = (e) =>{
        const val = e.target.value;
        setSearch(val);
        if(search && search){
          dispatch(dogSearch(search));
       }
      }//En esta funcion cada vez que hago un cambio en el estado local "search" llamo a la accion de buscar y trae lo buscado, es decir mientras escribo esta va haciendo llamados a la accion en redux y me va mostrando poco a poco lo que se busca.
    
       const handleClick = () =>{
       setSearch(' ');
       }
       //En esta simplemente limpio la searchbar 
    return (
        <div className={style.containerSearchBar}>
        <div >
          <p>Search a dog by their Name!</p>
           <input className={style.SearchBar} type="text" placeholder="The dog name" onChange={handleSearch}/> {/* Lo dicho anteriormente, uso un onChange para que la funcion se ejecute cada que realize un cambio */}
          <button className={style.contSearchBarButton} onClick={handleClick} >🔍</button>
        </div>
  
        <div className={search.length === 0 ? null : style.contSearchBarResults}>
          
            {search && dogs.slice(0, 2).map((d, i) => {
              return (
                <div >
                  <Link className={style.results} to={`${ROUTE.DETAIL}/${d.id}`} key={i}>{d.name}</Link>
                  {/* En esta parte hice un recomendaciones que vayan apareciendo dependiendo que estes buscando, esto lo hice con un and en el estado local de search y el estado global de dogs. Al darles click, estas te llevan a los detalles del perro que te aparezca */} 
                </div>
              )
            })}
        </div> 
      </div>
     
    ) 
}
export default SearchBar;