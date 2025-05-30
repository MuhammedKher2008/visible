import portfoliophoto1 from "./assets/portfolio-portrait-1.webp";
import portfoliophoto2 from "./assets/portfolio-portrait-2.webp";
import portfoliophoto3 from "./assets/portfolio-portrait-4.webp";
import portfoliophoto4 from "./assets/portfolio-2.webp";
import portfoliophoto5 from "./assets/portfolio-5.webp";
import portfoliophoto6 from "./assets/portfolio-6.webp";

function Portfolio() {
  return (
    <div className="portfolio">
      <span className="arkaPortfolio">Portfolio</span>
      <h3 className="titlePortfolio">Portfolio</h3>
      <p className="servicesaciklama">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="category">
        <div className="allstylediv"></div>
        <ul className="category-ul">
          <li className="category-li1 ">
            <p className="category-li1text">all projects</p>
          </li>
          <li className="category-li2 category-li">photography</li>
          <li className="category-li3 category-li">dasign</li>
          <li className="category-li4 category-li">automotive</li>
          <li className="category-li5 category-li">nature</li>
        </ul>
      </div>
      <img className="portfolio-image-1 " src={portfoliophoto1} alt="" />
      <img className="portfolio-image-2 " src={portfoliophoto2} alt="" />
       <img className="portfolio-image-3 " src={portfoliophoto3} alt="" />
       <img className="portfolio-image-4 " src={portfoliophoto4} alt="" />
       <img className="portfolio-image-5 " src={portfoliophoto5} alt="" />
       <img className="portfolio-image-6 " src={portfoliophoto6} alt="" />
    </div>
  );
}

export default Portfolio;
