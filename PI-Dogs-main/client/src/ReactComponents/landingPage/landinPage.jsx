import React from 'react';
import style from './landinPage.module.css';
import image from '../detail/Pata.jpeg'
import image2 from '../nav/dog.jpeg'
import gitHub from './gitHub.jpeg'
import linkeDin from './linkedin.jpeg'


function LandingPage(props){
const handleNavigate = () =>{
    props.buttonNavigate(true)

}

    return(
        <div className={style.container}>
        <div className={style.containerButton}>
            <div className={style.contTitulo}>
            <h1 className={style.tituloWords}> <img className={style.image2} src={image2} alt=' ' /> Welcome to Henry dogs! </h1>
            </div>
                        <h2 className={style.containerWords1}>Where you can find your nex life companion!</h2>
                <button className={style.mybutton} onClick={handleNavigate}>Go to home <img className={style.image}src={image} alt=' ' /></button>
                <div className={style.containerWords2}>
                 <a  href='https://github.com/MarcosRamirezCarri'>        <img className={style.image} src={gitHub} alt=' ' />
                </a>
                <a href='https://www.linkedin.com/in/marcos-ramirez-b8bb77253/'>
                    <img className={style.image} src={linkeDin} alt=' '/>
                </a>
                </div>

           

        </div>
        </div>
    )


}

export default LandingPage;