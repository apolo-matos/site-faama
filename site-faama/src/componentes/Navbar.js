
function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#333', color: '#fff' }}>
      <h2>FAAMA</h2>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
        <li>Início</li>
        <li>Sobre</li>

      </ul>
    </nav>
  );
}

export default Navbar;