import React, {useState} from "react";
import './pagination.css'
import gitHub from '../../landingPage/gitHub.jpeg'
import linkedin from '../../landingPage/linkedin.jpeg'

function Pagination(props) {

  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(props.totalPosts / props.dogsPerPage); i++) {
    pageNumbers.push(i)
  }

  function handleNext() {
    if(props.currentPage !== pageNumbers.length){
      props.setCurrentPage(props.currentPage + 1)
    }

    if(props.currentPage + 1 >maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  function handlePrev() {
    if(props.currentPage !== 1) {
      props.setCurrentPage(props.currentPage - 1)

      if((props.currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }

    }
  } return(
    <div className="pagination_component">
      <ul className="pagination">
        <button className="page" onClick={handlePrev}>Prev</button>
        {pageNumbers && pageNumbers.map((page, i) => {
          if(page < maxPageNumberLimit+1 && page > minPageNumberLimit) {
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
      <a href='https://github.com/MarcosRamirezCarri'> <img className='image' src={gitHub} alt=' ' /></a>
      <a href='https://www.linkedin.com/in/marcos-ramirez-b8bb77253/'> <img className='image' src={linkedin} alt=' ' /></a>
      </div>
      
    </div>
  )

  
}

export default Pagination;