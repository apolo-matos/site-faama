import React from 'react';
import '../styles/Curso.css';
import educacaoImagem from '../Assets/Group 62.png';
import fotoAluna from '../Assets/Ellipse 1.png';
import seta from '../Assets/weui_arrow-filled.png';
import img1 from '../Assets/Group 53.png';
import img2 from '../Assets/Group 56.png';
import img3 from '../Assets/Group 55.png';
import img4 from '../Assets/Group 57.png';
import img5 from '../Assets/Group 54.png';

const Curso = () => {
  const listaCursos = [
    { id: 1, nome: "DIREI TO", img: img1, pos: "baixo" },
    { id: 2, nome: "PEDA GOGIA", img: img2, pos: "cima" },
    { id: 3, nome: "A.D.S.", img: img3, pos: "baixo" },
    { id: 4, nome: "PSICO LOGIA", img: img4, pos: "cima" },
    { id: 5, nome: "TEO LOGIA", img: img5, pos: "baixo"}
  ];

  return (
    <section className="container-cursos">
      <h1 className="curso-secao">Cursos</h1>
      <div className="grupo-cards">
      {listaCursos.map((curso) => (
        <div 
        key={curso.id} 
        className={`card-curso ${curso.pos}`}
        style={{ backgroundImage: `url(${curso.img})` }}
        >
          <strong>{curso.nome}</strong>
          </div>
      ))}
      </div>
         <div className="educacao-container">
           <img src={educacaoImagem} alt="Destaque" className="imagem-educacao"/>
          <button className="botao-saiba-mais">saiba mais</button>
          </div>
          <div className='faama-container'>
            <h2>ALUNOS</h2>
            <h3>sobre a FAAMA:</h3>
            <img src={fotoAluna} alt="foto aluna" className="foto-aluna" />
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec efficitur, ex sed sagittis vehicula, massa orci rutrum
              elit, vitae laoreet odio diam sit amet massa. Nulla non
              tristique augue, nec maximus quam"</p>
              <p>Maria, aluna de Enfermagem</p>
          <button className='proxima-pagina' onClick={() => console.log("Clicou!")}>
            <img src={seta} alt="Próxima página" />
          </button>
          </div>
          
    </section>
  );
};

export default Curso;