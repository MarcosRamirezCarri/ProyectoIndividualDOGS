import React from 'react';
import style from'./Card.module.css';
import { Link } from 'react-router-dom';
import ROUTE from '../../../../Helpers/routes';


function Card ({name, image, id, weight_min, weight_max, temperament}) {
    return (
            <div>
                 
                <div className={style.container}>
                <Link to={`${ROUTE.DETAIL}/${id}`} >
                <img className={style.containerImg} src={image} alt="img not found" width="100px" height="100px"/>
                </Link>
                <h3 className={style.containerName}>{name}</h3>
                <p className={style.containerWords}>Weight: {weight_min} - {weight_max} kg</p>
                <p className={style.containerWords}>id: {id}</p>
                <p className={style.containerTemps}>Temperaments: {temperament}</p>
                </div>
                
            </div>
    );
}
export default Card;