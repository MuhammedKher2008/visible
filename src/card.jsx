function Card() {
  return (
    <div className="card-part">
      <div className="allcard">
        <div className="card1">
          <div className="circleCard">
            <i id="cardicon" class="fa-regular fa-face-smile"></i>
          </div>
          <h4 className="card1title">232</h4>
          <p className="card1text">Happy Clients</p>
        </div>
        <div className="card2">
          <div className="circleCard2">
            <i id="cardicon2" class="fa-solid fa-book"></i>
          </div>
          <h4 className="card2title">521</h4>
          <p className="card2text">projects</p>
        </div>
        <div className="card3">
          <div className="circleCard3">
            <i id="cardicon3" class="fa-solid fa-headset"></i>
          </div>
          <h4 className="card3title">1463</h4>
          <p className="card3text">Hours Of Support</p>
        </div>
        <div className="card4">
          <div className="circleCard4">
            <i id="cardicon4" class="fa-solid fa-user-group"></i>{" "}
          </div>
          <h4 className="card4title">15</h4>
          <p className="card4text">hard workes</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
