import React from 'react';
import './Curso.css';

const Curso = () => {
  const listaCursos = [
    { id: 1, nome: "DIREITO", img: "4Group 53.png", pos: "baixo" },
    { id: 2, nome: "PEDAGOGIA", img: "Group 56.png", pos: "cima" },
    { id: 3, nome: "A.D.S.", img: "Group 55.png", pos: "baixo" },
    { id: 4, nome: "PSICOLOGIA", img: "Group 57.png", pos: "cima" },
    { id: 5, nome: "TEOLOGIA", img: "Group 54.png", pos: "baixo" },
  ];

  return (
    <section className="container-cursos">
      {listaCursos.map(curso => (
        <i 
          key={curso.id} 
          className={`card-curso ${curso.pos}`}
          style={{ backgroundImage: `url(${curso.img})` }}
        >
          <strong>{curso.nome}</strong>
        </i>
      ))}
    </section>
  );
};

export default Curso;