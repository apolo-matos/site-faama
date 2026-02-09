import React from 'react';
import '../styles/Curso.css';
import img1 from '../Assets/Group 53.png';
import img2 from '../Assets/Group 56.png';
import img3 from '../Assets/Group 55.png';
import img4 from '../Assets/Group 57.png';

const Curso = () => {
  const listaCursos = [
    { id: 1, nome: "DIREI TO", img: img1, pos: "baixo" },
    { id: 2, nome: "PEDA GOGIA", img: img2, pos: "cima" },
    { id: 3, nome: "A.D.S.", img: img3, pos: "baixo" },
    { id: 4, nome: "PSICO LOGIA", img: img4, pos: "cima" },
 
  ];

  return (
    <section className="container-cursos">
      <h2 className="curso-secao">Cursos</h2>
      {listaCursos.map((curso) => (
        <div 
          key={curso.id} 
          className={`card-curso ${curso.pos}`}
          style={{ backgroundImage: `url(${curso.img})` }}
        >
          <strong>{curso.nome}</strong>
        </div>
      ))}
    </section>
  );
};

export default Curso;