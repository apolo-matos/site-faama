import React from 'react';
import "../styles/Banner.css";
import minhaImagem from "../Assets/74cb7cc28b6604f1e737e52a11e122e293e951db.png";


function Banner() {
  return (
    <>
      <section className="Banner">
        <div className="Banner-content">
          <h1>onde tudo faz sentido.</h1>
          <p>FAAMA - Faculdade Adventista da Amazônia</p>
        </div>
      </section>
        <div className="estudante-container">
        <div className="quadrado lateral-sombra"></div>
          <img src={minhaImagem} alt="Destaque" className="imagem-estudante"/>
          <div className="quadrado lateral-sombra"></div>
        </div>

       <section className="informacao">
          <h1>Conheça nossa rede de ensino.</h1>
  
        <div className="informacao">
          <p>9.589 unidades escolares</p>
          <p>264.741 alunos</p>
          <p>111.476 professores</p>
        </div>
      </section>
    </>
  );
}

export default Banner;