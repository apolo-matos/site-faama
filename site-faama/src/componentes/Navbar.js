import logo from '../../img/'

function Navbar() {
  return (
    <nav>
      <h2>FAAMA</h2>
        <link to="/">
        <img src={logo} alt=""/>
        </link>
        <ul>
          <li>
        <link to="/">Inicio</link>
          </li>
          <li>
        <link to="/contact">Contato</link>
          </li>
          <li>
        <link to="/company">Empresas</link>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;