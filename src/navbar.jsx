function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <h2>
          <a className="brand" href="#">
            VISIBILE
          </a>
        </h2>

        <a className="Nav-Item home" href="">home </a> 
        <a className="Nav-Item about " href="">about </a>
        <a className="Nav-Item services" href="">services</a>
        <a className="Nav-Item protfolio" href="">protfolio</a>
        <a className="Nav-Item team" href="">team</a>
        <a className="Nav-Item contact" href="">contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
