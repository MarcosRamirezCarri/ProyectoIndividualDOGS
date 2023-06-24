import React from "react";
import style from './Detail.module.css';
import imagenPata from './Pata.jpeg'

function DetailDog ({detail}) {
    return(
         <div>
            { !detail?.image ?<div className={style.LoaderCont}>
        <h1 className={style.loader} ></h1>
        </div>  : <div className={style.container}>
            <div>
            <div className={style.contImage}>
        <img className={style.image} src={detail?.image} alt=' '  />
        </div>
        <div className={style.contName}>
            <p className={style.PrevWords}>The details of...</p>
            <h1 className={style.name}>{detail?.name}</h1>
            </div>
        </div>
            
        <div className={style.conDeatils}>
           
        <h2 className={style.DeatilsTemp}>Temperaments</h2>
        <p className={style.detailsWords}>{detail?.temperament}</p>
       
        <h2 className={style.DeatilsTemp}>His Weights are</h2>
        <p className={style.detailsWords}>{detail?.weight_min}Kg to {detail?.weight_max}Kg</p>
        <h2 className={style.DeatilsTemp}>His heights are</h2>
        <p className={style.detailsWords}>{detail?.height_min} Cm to {detail?.height_max} Cm</p>
        </div>
        
        <div className={style.conDeatils}>
            <h2 className={style.DeatilsTemp}>His life span is</h2>
            <p className={style.detailsWords}>{detail?.life_span_min} to {detail?.life_span_max} years</p>
            <div className={style.conImagenPata}>
                <h4 className={style.DeatilsTemp}>Did you like this dog?</h4>
                <img  className={style.imagenPata }src={imagenPata} alt=' '  />
            </div>
            


        </div>
        </div>}
        
        </div>
    )

}
export default DetailDog;