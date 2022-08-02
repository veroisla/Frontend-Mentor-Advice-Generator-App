import React from 'react';
import { useState, useEffect } from 'react';

import '../styles/reset.scss';
import '../styles/vars.scss';
import '../styles/app.scss';

import getApiData from '../services/adviceApi';
import iconDice from '../images/icon-dice.svg';
import dividerMobile from '../images/divider-mobile.svg';

function App() {
  const [adviceData, setAdviceData] = useState([]);

  console.log(adviceData);

  //useEffect

  useEffect(() => {
    getApiData().then((response) => {
      setAdviceData(response.slip);
    });
  }, []);

  return (
    <>
      {' '}
      <main className="main">
        <div className="card">
          <p className="card__adviceNumber">ADVICE #{adviceData.id}</p>
          <p className="card__advice">{adviceData.advice}</p>
          <img src={dividerMobile} alt="Linea divisoría"></img>
          <button type="button" className="card__circle">
            <img src={iconDice} alt="Icono dado"></img>
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
