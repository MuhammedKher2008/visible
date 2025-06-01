function Contact() {
  return (
    <div className="Contact">
      <span className="arkaContact">Contact</span>
      <h3 className="titleContact">Contact</h3>
      <p className="servicesaciklama">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="Contact-Information">
        <h3 className="contact-information-title">Contact Information</h3>
        <p className="contact-information-text">
          Dignissimos deleniti accusamus rerum voluptate. Dignissimos rerum sit
          maiores reiciendis voluptate inventore ut.
        </p>
        <div className="location-div">
          <i id="location-icon" class="fa-solid fa-map-pin"></i>
          <h4 className="location-title">our location</h4>
          <p className="thelocation">4952 Hilltop Dr, Anytown, CA 902</p>
        </div>
        <div className="email-div">
          <i id="email-icon" class="fa-solid fa-envelope"></i>{" "}
          <h4 className="email-title">email us</h4>
          <p className="theemail">info@example.com</p>
        </div>
        <div className="call-div">
          <i id="call-icon" class="fa-solid fa-phone"></i>{" "}
          <h4 className="call-title">call us</h4>
          <p className="thecall">+1 (555) 123-4567</p>
        </div>
        <div className="working-div">
          <i id="working-icon" class="fa-solid fa-clock"></i>
          <h4 className="working-title">call us</h4>
          <p className="theworking">+1 (555) 123-4567</p>
        </div>
        <h4 className="followus">follow us</h4>
        <a href="#">
          {" "}
          <i class="  facebook1     fa-brands fa-facebook"></i>
        </a>
        <a href="#">
          {" "}
          <i class="  facebook1     fa-brands fa-instagram"></i>
        </a>
        <a href="#">
          {" "}
          <i class="  facebook1     fa-brands fa-x-twitter"></i>
        </a>
        <a href="#">
          {" "}
          <i class="  facebook1     fa-brands fa-linkedin"></i>
        </a>
        <a href="#">
          {" "}
          <i class="  facebook1     fa-brands fa-youtube"></i>{" "}
        </a>
      </div>
      <iframe
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96779.56628236092!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center!5e0!3m2!1sen!2sus!4v1748771357310!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>


      <div className="message">
        <h4 className="messageTitle">
          send us a message
        </h4>
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipiscing elit mauris hendrerit faucibus imperdiet nec eget felis.
        </p>
        <input placeholder="full name" className="fullname" type="text" />
        <input className="fullname" placeholder="email address" type="mail" />
        <input className="fullname" placeholder="subject" type="text" />
        <textarea placeholder="your message" name="" id="themessage"></textarea>
        <button className="sendbutton"> send message</button>
      
      </div>
    </div>
  );
}

export default Contact;
