import React from 'react';
import AllCards from './AllCards/Allcards';
import {useState} from 'react';
import Nav from '../nav/Nav';


function Home(){


    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage] = useState(8);
    //En estos estados manejo la cantidad de perros que quiero que se muestren por pagina y seteos de paginas
  
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    //Con estas variables determino el primer y ultimo perro que se va a mostrar por pagina: 
    //El ultimo con una multiplicacion de la cantidad de perros por pagina y la pagina actual  
    //El primero con una resta de el ultimo perro con la cantidad de perros por pagina (el primer perro de todos empieza por el 0)
    
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