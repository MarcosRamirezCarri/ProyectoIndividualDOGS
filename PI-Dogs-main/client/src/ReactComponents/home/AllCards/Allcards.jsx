import React from 'react';
import Card from './card/Card'
import './allCards.css'
import {getDogs} from '../../../Redux/actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../pagination/pagination';

 function AllCards(props) {
   const dispatch = useDispatch();
  const dogs = useSelector(state => state.dogs);
  
  useEffect(() => {
    dispatch(getDogs())
  }, [dispatch])
  console.log(props.indexOfFirstDog, props.indexOfLastDog)

  const CurrentDog = dogs.slice(props.indexOfFirstDog, props.indexOfLastDog)
  console.log(CurrentDog)
    const paginate =(page) => {
      props.setCurrentPage(page)
    }

    return (
    <div>
      <div className='containerCards'>
         {dogs.length === 0 ? <div className='LoaderCont'>
        <h1 className='Loader' >🐶</h1>
        <h1>Loading...</h1>
        </div> : null} 
     {CurrentDog.map((dog) => (
        <Card
          key={dog.id}
          id={dog.id}
          name={dog.name}
          temperament={dog.temperament}
          weight_min={dog.weight_min}
          weight_max={dog.weight_max}
          image={dog.image}
        />))} 
        </div>
        <Pagination
            currentPage={props.currentPage}
            paginate={paginate}
            setCurrentPage={props.setCurrentPage}
            dogsPerPage={props.dogsPerPage}
            totalPosts={dogs.length}
        />
        
    </div>
  );

}
export default AllCards;

