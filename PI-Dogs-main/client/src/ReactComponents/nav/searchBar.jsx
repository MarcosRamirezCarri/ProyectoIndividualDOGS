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
        if(search){
          dispatch(dogSearch(search));
       }
      }
    
       const handleClick = () =>{
       setSearch('');
       }
    return (
        <div className={style.containerSearchBar}>
        <div >
          <p>Search a dog by their Name!</p>
          <input className={style.SearchBar} type="text" placeholder="The dog name" onChange={handleSearch}/>
          <button className={style.contSearchBarButton} onClick={handleClick} >🔍</button>
        </div>
  
        <div className={search.length === 0 ? null : style.contSearchBarResults}>
          <div >
            {search && dogs.slice(0, 10).map((d, i) => {
              return (
                <div >
                  <Link className={style.results} to={`${ROUTE.DETAIL}/${d.id}`} key={i}>{d.name}</Link>
                </div>
              )
            })}
          </div>
        </div> 
      </div>
     
    ) 
}
export default SearchBar;