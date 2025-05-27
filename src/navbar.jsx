function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <h2>
          <a className="brand" href="#">
            VISIBILE
          </a>
        </h2>

        <a className="Nav-Item home-nav" href="">home </a> 
        <a className="Nav-Item about-nav " href="">about </a>
        <a className="Nav-Item services-nav" href="">services</a>
        <a className="Nav-Item protfolio-nav" href="">protfolio</a>
        <a className="Nav-Item team-nav" href="">team</a>
        <a className="Nav-Item contact-nav" href="">contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
