import person1 from "./assets/person-m-8.webp";
import person2 from "./assets/person-m-3.webp";
import person3 from "./assets/person-m-12.webp";
import person4 from "./assets/person-f-7.webp";

function Team() {
  return (
    <div className="Team">
      <h4 className="teamTitle">Our Professional Team</h4>
      <div className="team-cizgi"></div>
      <p className="teamtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus
        luctus nec ullamcorper mattis pulvinar dapibus leo.
      </p>
      <button className="yonverme">
        <i id="sag" class="fa-solid fa-angle-right"></i>
      </button>
      <button className="yonverme2">
        <i id="sag" class="fa-solid fa-angle-left"></i>
      </button>
      <div className="allperson">
        <div className="person1-card">
          <img id="person1photo" src={person1} alt="" />
          <h4 className="person1-name">daniel chen</h4>
          <p className="person1-task">Marketing Specialist</p>
          <p className="person1-text">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt.
          </p>
        </div>
        <div className="person1-card">
          <img id="person1photo" src={person2} alt="" />
          <h4 className="person1-name">marcus wilson</h4>
          <p className="person1-task">Chief Technology Officer</p>
          <p className="person1-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </p>
        </div>
        <div className="person1-card">
          <img id="person1photo" src={person4} alt="" />
          <h4 className="person1-name">Emily Rodriguez</h4>
          <p className="person1-task">Project Manager</p>
          <p className="person1-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </p>
        </div>
        <div className="person1-card">
          <img id="person1photo" src={person3} alt="" />
          <h4 className="person1-name">jason parker</h4>
          <p className="person1-task">UI/UX Designer</p>
          <p className="person1-text">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
