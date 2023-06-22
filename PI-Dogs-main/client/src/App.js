import './App.css';
import React, { useEffect } from 'react';
import Home from './ReactComponents/home/home';
import LandingPage from './ReactComponents/landingPage/landinPage';
import Detail from './ReactComponents/detail/Detail';
import {useState} from 'react';
import ROUTE from './Helpers/routes';
import { Routes, Route, useNavigate } from "react-router-dom";
import DbDog from './ReactComponents/DbDogCreator/DbDog';

function App() {
const [acces, setAcces] = useState(false);
const navigate = useNavigate();

useEffect(() =>{
  if(acces === false) {
    navigate(ROUTE.LANDING);
  }
},[acces]);

const buttonNavigate = () => {

  setAcces(true);
  if(acces === true){navigate(ROUTE.HOME);}
  
}


  return (
    <div className="App">
    <Routes>
      <Route path={ROUTE.LANDING} element={<LandingPage buttonNavigate={buttonNavigate}/>}></Route>
      <Route path={ROUTE.HOME} element={<Home/>}> </Route>
      <Route path={`${ROUTE.DETAIL}/:detailId`} element={<Detail/>} >
        </Route>
        <Route path={ROUTE.NEWDOG} element={<DbDog/>}>
        </Route>
    </Routes>

    </div>
  );
}

export default App;
