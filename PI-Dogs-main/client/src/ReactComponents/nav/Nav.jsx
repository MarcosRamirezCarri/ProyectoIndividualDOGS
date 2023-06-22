import React from 'react';
import { useEffect } from 'react';
import { filterByTemperament, filterCreated, getTemperament, orderByName, orderByWeight } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import  SearchBar   from './searchBar';
import imagen from './dog.jpeg'
import style from './nav.module.css'
import { NavLink } from 'react-router-dom';
import ROUTE from '../../Helpers/routes';



function Nav(props) {
  const location = useLocation()

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);

  const temperaments = useSelector((state) => state.temperaments);

  const handleTemp = (e) => {
    const val = e.target.value
    props.setCurrentPage(1);
    dispatch(filterByTemperament(val));
  }
   const handleOrderByName = (e) =>{
    const val = e.target.value
    if(val === 'name_asc' || val === 'name_des'){
      dispatch(orderByName(val));
      props.setCurrentPage(1);
    };
  };
const handleOrderByWeight = (e) =>{    
    const val = e.target.value
    if(val === 'weight_asc' || val === 'weight_des'){
      dispatch(orderByWeight(val));
      props.setCurrentPage(1);
    };
   };
   const handleOrigin = (e) =>{
    const val = e.target.value
      dispatch(filterCreated(val));
      props.setCurrentPage(1)
    }
   


  return (
    <nav className={style.navContainer}>

      <div className={style.contImagenTodo}>
        <img className= {style.contImagen}src={imagen} alt=' '  />
        <p className={style.contImagenWords}>Henry Dogs</p>
      </div>
      {location.pathname !== ROUTE.HOME ? <div className={style.conButtonHome}><NavLink to={ROUTE.HOME}>
        <button className={style.ButtonHome}>Home</button>
        </NavLink>
      </div> : null}
        
          {location.pathname !== ROUTE.NEWDOG ? <div className={style.conButtonDbDog}>
            <p>Create your own dog!</p>
            <NavLink to={ROUTE.NEWDOG}>
              <button className={style.buttonContainerDbDog}>Create dog</button>
            </NavLink>
            {location.pathname === ROUTE.HOME ? <div>
              <p>Filter your created dogs!</p>
              <select className={style.buttonDbDogSelect} onChange={handleOrigin}>
              <option select disabled>Select an origin</option>
              <option value='all'>Todos</option>
              <option value = 'creados'>Creados en db</option>
              </select>
            </div>: null }
          </div> : null}

      {location.pathname === ROUTE.HOME ? <div>
           <SearchBar /> 
        </div>: null}
        {location.pathname === ROUTE.HOME ? <div className={style.contSelectTemp}>
        <p>Filter dogs by Temperaments!</p>
          <select className={style.conTemps} onChange={handleTemp}>
          <option select disabled> Select a temperament </option>
          <option value='all'>All</option>
            {temperaments.map((t) => {
              return(
              (<option key={t.id} value={t.name}>{t.name}</option>)
              )})}
          </select>
        </div> : null}
        {location.pathname === ROUTE.HOME ?<div className={style.conFilters}>
          <p>Filter dogs alphabetically or by weight!</p>
        <select className={style.filters} onChange={handleOrderByName}>
          <option select disabled> Order by </option>
          <option value='name_asc'>Name A-Z</option>
          <option value='name_des'>Name Z-A</option>
        </select>
        <select className={style.filters} onChange={handleOrderByWeight}>
          <option select disabled> Order by weight </option>
          <option value='weight_asc'>Weight Ascendant</option>
          <option value='weight_des'>Weight Descendant</option>
        </select>
        </div> : null}
    </nav>
  );
}

export default Nav;
