import React, {useState} from "react";
import './pagination.css'
import gitHub from '../../landingPage/gitHub.jpeg'
import linkedin from '../../landingPage/linkedin.jpeg'

function Pagination(props) {

  const [pageNumberLimit] = useState(5); //Este es el estado local del limite de paginas el cual se puede modificar
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);//Con este estado local determino la ultima pagina a mostrar en la paginacion, este tiene un "set" para que este se pueda ir modificando 
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);//Con este estado local determino la primera pagina a mostrar en la paginacion, este tiene un "set" para que este se pueda ir modificando 
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(props.totalPosts / props.dogsPerPage); i++) {
    pageNumbers.push(i)
  }//Con este for voy contando la cantidad de paginas que voy a tener en total

  function handleNext() {
    if(props.currentPage !== pageNumbers.length){
      props.setCurrentPage(props.currentPage + 1)
    }

    if(props.currentPage + 1 >maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }//Con esta funcion paso de una pagina a la otra. Primero pregunto si la pagina acutal no es igual a la cantidad de paginas, si esto es cierto seteo la pagina actual a la siguiente con un mas 1
  //Luego para mostrar las siguientes paginas pregunto si la pagina acutal mas uno es mayor al numero maximo de paginas acutal. Entonces si esto es cierto seteo el limite de paginas minimo y maximo sumando el valor limite de paginas a estas.

  function handlePrev() {
    if(props.currentPage !== 1) {
      props.setCurrentPage(props.currentPage - 1)

      if((props.currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }

    }
  }//Con esta funcion se pasa de la pagina actual a la anterior. Primero pregunto si la pagina acutal no es igual a uno, si esto es cierto seteo la pagina actual a la anterior con un menos uno.
  //Luego para mostrar las sieguentes paginas pregunto si el resto entre la pagina actual menos uno y el limite de paginas es cero (esto esta hecho asi para evitar que se renderizen mas paginas despues del 0), si esto es cierto seteo el limite de paginas minimo y maximo restando el valor limite a estas
  return(
    <div className="pagination_component">
      <ul className="pagination">
        <button className="page" onClick={handlePrev}>Prev</button>
        {pageNumbers && pageNumbers.map((page, i) => {
          if(page < maxPageNumberLimit+1 && page > minPageNumberLimit) { //Aca pregunto el numero de paginas a renderizar
            return(
              <li key={i} className="pagination_item">
                <span className={props.currentPage === page ? "page active" : "page"} onClick={() => props.paginate(page)}>{page}</span>
              </li>
            )
          } else {
            return null
          }
        })}
       <button className="page" onClick={handleNext}>Next</button>
      </ul>
      <div className='containerImg'>
      <a target="new_blank" href='https://github.com/MarcosRamirezCarri'> <img className='image' src={gitHub} alt=' ' /></a>
      <a target="new_blank" href='https://www.linkedin.com/in/marcos-ramirez-b8bb77253/'> <img className='image' src={linkedin} alt=' ' /></a>
      </div>
      
    </div>
  )

  
}

export default Pagination;