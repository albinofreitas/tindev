import React from 'react';

import './styles.css';
import itsamatch from '../../assets/itsamatch.png';

export default function Match({ dev, setMatchDev }) {
  return (
    <div className="match-container">
      <img src={itsamatch} alt="Is A Match" />
      <img className="avatar" src={dev.avatar} alt="Dev Avatar" />

      <strong>{dev.name}</strong>
      <p>{dev.bio}</p>

      <button type="button" onClick={() => setMatchDev(null)}>FECHAR</button>
    </div>
  );
}
