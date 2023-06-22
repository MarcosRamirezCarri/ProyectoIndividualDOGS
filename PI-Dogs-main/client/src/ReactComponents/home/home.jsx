import React from 'react';
import AllCards from './AllCards/Allcards';
import {useState} from 'react';
import Nav from '../nav/Nav';


function Home(){


    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage] = useState(10);
  
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    
    return(
        <div>
            <Nav 
            setCurrentPage={setCurrentPage}
            />
            <AllCards
            indexOfFirstDog={indexOfFirstDog}
            indexOfLastDog={indexOfLastDog}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            dogsPerPage={dogsPerPage}
            />
        </div>
    )

}

export default Home;