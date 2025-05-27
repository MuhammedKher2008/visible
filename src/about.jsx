import aboutphoto from "./assets/about-8.webp";
function About() {
  return (
    <div className="aboutkismi">
      <span className="arkaabout">about</span>
      <h3 className="titleabout">about</h3>
      <p className="aciklama">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <img className="aboutphoto" src={aboutphoto} alt="" />
      <div className="inPhoto">
        <div className="ampul">
          <i id="iconampul" class="fa-regular fa-lightbulb"></i>
        </div>
        <h5 className="inPhotoTitle">Our Purpose</h5>
        <p className="inPhotoText">
          Focus on delivering creative solutions that empower businesses to grow
          and succeed.
        </p>
      </div>

      <div className="companyOverview">
        <p className="companyOverviewText">COMPANY OVERVIEW</p>
      </div>
      <p className="againText">
        Discover our journey and future aspirations towards innovation and
        success
      </p>

      <p className="againText1">
        Explore how we have developed our unique approach to tackle complex
        challenges and provide exceptional service across various industries.
        Our dedicated team works tirelessly to ensure client satisfaction.
      </p>
      <p className="againText2">
        Through continuous learning and adaptation, we strive to stay at the
        forefront of technology and market trends, ensuring our solutions are
        always relevant and effective.
      </p>
      <h2 className="Fundamental">Fundamental Principles</h2>
      <div className="firsttik">
        <i id="firsttikicon" class="fa-solid fa-circle-check"></i>
        <h4 className="firsttiktext">Trustworthiness</h4>
      </div>
      <div className="ikincitik">
        <i id="ikincitikicon" class="fa-solid fa-circle-check"></i>
        <h4 className="ikincitiktext">Quality</h4>
      </div>
      <div className="ucuncutik">
        <i id="ucuncutikicon" class="fa-solid fa-circle-check"></i>
        <h4 className="ucuncutiktext">Creativity</h4>
      </div>
      <div className="dorduncutik">
        <i id="dorduncutikicon" class="fa-solid fa-circle-check"></i>
        <h4 className="dorduncutiktext">Response</h4>
      </div>
      <div className="besincitik">
        <i id="besincitikicon" class="fa-solid fa-circle-check"></i>
        <h4 className="besincitiktext">Response</h4>
      </div>
      <div className="altincitik">
        <i id="altincitikicon" class="fa-solid fa-circle-check"></i>
        <h4 className="altincitiktext">Response</h4>
      </div>
    </div>
  );
}

export default About;
