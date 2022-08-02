import React from 'react';
import { useState, useEffect } from 'react';

import '../styles/reset.scss';
import '../styles/vars.scss';
import '../styles/app.scss';

import getApiData from '../services/adviceApi';

function App() {
  const [adviceData, setAdviceData] = useState([]);
  console.log(adviceData);

  //useEffect

  useEffect(() => {
    getApiData().then((response) => {
      setAdviceData(response);
    });
  }, []);

  return (
    <>
      {' '}
      <main className="main">
        <div className="card">
          <p className="card__adviceNumber">ADVICE</p>
          <p className="card__advice"></p>
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>{' '}
          <button type="button" className="card__circle">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
