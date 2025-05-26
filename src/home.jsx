
import photo from "./assets/misc-square-16.webp"



function Home() {
  return (
    <div className="content">
      <div className="h4">
        <h4 className="firsth4">design studio</h4>
        <hr className="h4line" />
      </div>
      <p className="title">
        INSPIRE <span className="spann">THROUGH</span> DESIGN
      </p>
      <p className="explanation">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
        fermentum risus. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Proin egestas, urna at rhoncus gravida.
      </p>
      <button className="ourServices">our services 
        <i id="right" class="fa-solid fa-angle-right"></i>
      </button>
      <button className="view"> view protfolio
      </button>
      <img className="photo" src={photo} alt="" />
      <div className="happy">
        <span className="number">750+</span>
        <span className="cilents">happy cilents</span>
      </div>
      <div className="yearOfexperience">
        <span className="year">10+</span>
        <span className="experience">years of experience</span>
      </div>
    </div>
  );
}

export default Home;
