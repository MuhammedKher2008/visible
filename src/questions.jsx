import Questionsphoto from "./assets/illustration-5.webp";

function Questions() {
  return (
    <div className="questions">
      <span className="arkaQuestions">Frequently Asked Questions</span>
      <h3 className="titleQuestions">Frequently Asked Questions</h3>
      <p className="servicesaciklama">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <img className="photoquestions" src={Questionsphoto} alt="" />
      <div className="assistance">
        <i id="assistanceicon" class="fa-solid fa-headset"></i>
        <h4 className="assistancetitle">Need Assistance?</h4>
        <p className="assitancetext">
          Donec rutrum congue leo eget malesuada. Quisque velit nisi, pretium ut
          lacinia in, elementum id enim.
        </p>
        <button className="assitance-btn">connect with sipport</button>
      </div>
      <div className="soruturu">
        <h4 className="soruturu-div-h4">general inquiries</h4>
      </div>
      <div className="soruturu2">
        <h4 className="soruturu-h4-2">account services</h4>
      </div>
      <div className="soruturu3">
        <h4 className="soruturu-h4-2">billing & payments</h4>
      </div>
      <hr className="soruturuciz" />
      <div className="collapse1">
        <h4 className="collapse-1-title">What payment methods are accepted?</h4>
        <i id="collapse1-icon" class="fa-solid fa-caret-down"></i>
      </div>
      <div className="collapse1">
        <h4 className="collapse-1-title">When will my payment be processed?</h4>
        <i id="collapse1-icon" class="fa-solid fa-caret-down"></i>
      </div>
      <div className="collapse1">
        <h4 className="collapse-1-title">
          Can I get a refund for my purchase?
        </h4>
        <i id="collapse1-icon" class="fa-solid fa-caret-down"></i>
      </div>
    </div>
  );
}

export default Questions;
