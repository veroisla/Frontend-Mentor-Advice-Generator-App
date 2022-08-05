import React from 'react';
import { useState, useEffect } from 'react';

import '../styles/reset.scss';
import '../styles/vars.scss';
import '../styles/app.scss';

import getApiData from '../services/adviceApi';
import iconDice from '../images/icon-dice.svg';
import lineMobile from '../images/divider-mobile.svg';
import lineDesktop from '../images/divider-desktop.svg';

function App() {
  const [adviceData, setAdviceData] = useState([]);
  const [pressButton, setPressButton] = useState(true);

  // console.log(adviceData);

  useEffect(() => {
    getApiData(pressButton).then((response) => {
      setAdviceData(response.slip);
    });
  }, [pressButton]);

  const handleClick = (ev) => {
    setPressButton(ev.target);
  };

  return (
    <>
      {' '}
      <main className="main">
        <div className="card">
          <p className="card__adviceNumber">ADVICE #{adviceData.id}</p>
          <p className="card__advice">{adviceData.advice}</p>
          <img
            className="card__lineMobile"
            src={lineMobile}
            alt="Linea divisoría"
          ></img>
          <img
            className="card__lineDesktop"
            src={lineDesktop}
            alt="Linea divisoría"
          ></img>
          <button type="button" className="card__circle" onClick={handleClick}>
            <img src={iconDice} alt="Icono dado"></img>
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
