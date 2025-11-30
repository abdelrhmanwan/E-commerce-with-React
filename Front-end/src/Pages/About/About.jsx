import { useState } from "react";
import "./About.css";
import FloatingPageAddress from "../../component/floatingPageAddress/floatingPageAddress";
import { Container, Row, Col } from "react-bootstrap";
import Sideimage from "./img/Side Image.png";
import image1 from "./img/image 1.png";
import image2 from "./img/image 2.png";
import image3 from "./img/image 3.png";
import image4 from "./img/image 4.png";
const cards = [
  { name: "Mohamed Eid", 
    role: "Frontend Developer", 
    img: image1,
    socials: {linkedin: "#",Github: "#", whatsapp: "#",  instagram: "#"} },

  { name: "Abdel-Rahman Waleed", 
    role: "Frontend Developer & UI/UX Designer", 
    img: image2,
    socials: {linkedin: "https://www.linkedin.com/in/abdel-rahman-elghazaly-8278162b4/",Github: "https://github.com/abdelrhmanwan", whatsapp: "#",  instagram: "#"} },

  { name: "Omar Yasser", 
    role: "Frontend Developer", 
    img: image3,
    socials: {linkedin: "https://www.linkedin.com/in/omar-yasser-96613b357/",Github: "https://github.com/Omyaseer", whatsapp: "#",  instagram: "#"} },

  { name: "Abdel-Rahman Maged", 
    role: "Frontend Developer", 
    img: image4,
    socials: {linkedin: "http://www.linkedin.com/in/abdelrahman-maged-8008a0344",Github: "https://github.com/abdelrahmenmaged", whatsapp: "#",  instagram: "#"} },
];

const About = () => {
const [activeIndex, setActiveIndex] = useState(2);
  return (
    <>
    <FloatingPageAddress hideSource={"Home /"} currentSource={" About"} />

    <Container className="about-container p-5 container">

      <Row className="align-items-center pt-5 pb-5 mt-5  mb-5 about-row-1">
        <Col lg={6} md={12}>
          <h2 className="fs-2 fw-bold mb-3">Our Story</h2>
          <p className="mb-4">
            Launched in 2015, Dealwala is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Dealwala hosts 100k sellers and 300 brands and serves 6 million
            customers across the region.
          </p>
          <p>
            Dealwala has more than 1 billion products to offer, growing at a very
            fast rate while offering a diverse assortment in categories ranging
            from consumer goods to electronics.
          </p>
        </Col>

        <Col lg={6} md={12}>
          <div className="story-image pt-3">
            <img src={Sideimage} alt="Shopping" className="img-fluid story-image"/>
          </div>
        </Col>
      </Row>

      <Row className=" pt-5 pb-5 gap-4 about-row-2" lg={12} md={12}>
        <Col  className="mb-4 text-center border border-1 rounded p-5 abo">
          <div className="icons">
            <i className="fa-solid fa-store services-icons"></i>
          </div>
          <h6 className="fw-bold mt-3 fs-2">10.5K</h6>
          <p className="pt-2">Return money within 30 days</p>
        </Col>

        <Col  className="mb-4 text-center border border-1 rounded p-5 abo">
          <div className="icons">
            <i className="fa-solid fa-dollar services-icons"></i>
          </div>
          <h6 className="fw-bold mt-3 fs-2">33K</h6>
          <p className=" pt-2">Return money within 30 days</p>
        </Col>

        <Col  className="mb-4 text-center border border-1 rounded p-5 abo">
          <div className="icons">
            <i className="fa-solid fa-gift services-icons"></i>
          </div>
          <h6 className="fw-bold mt-3 fs-2">45.5K</h6>
          <p className="pt-2">Friendly 24/7 customer service</p>
        </Col>

        <Col  className="mb-4 text-center border border-1 rounded p-5 abo">
          <div className="icons">
            <i className="fa-solid fa-sack-dollar services-icons"></i>
          </div>
          <h6 className="fw-bold mt-3 fs-2">25K</h6>
          <p className="pt-2">Friendly 24/7 customer service</p>
        </Col>

      </Row>

    <Row className="pt-5 pb-3  gap-3 about-row-3" lg={12} md={12}>
      {cards.map((member, idx) => (
        <Col key={idx} className="mb-4">
          <div className="card border-0 p-3" style={{transition: "0.4s", 
            transform: activeIndex === idx ? "scale(1.1)" : "scale(1)",
            opacity: activeIndex === idx ? 1 : 0.5, boxShadow:
            activeIndex === idx ? "0 0 15px rgba(0,0,0,0.3)" : "none",
            }}>

        <div className="d-flex justify-content-start mb-1 team-card">
          <img src={member.img} alt="Team Member" className=" w-100 h-100"/>
        </div>
        <h5 className="fw-bold mt-2 pb-2">{member.name}</h5>
        <p className="text-muted pb-2">{member.role}</p>

        <div className="d-flex justify-content-start gap-3 social-icon">
          <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </a>
          <a href={member.socials.Github} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github fa-xl"></i>
          </a>
          <a href={member.socials.whatsapp} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp fa-xl"></i>
          </a>
          <a href={member.socials.instagram} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram fa-xl"></i>
          </a>
        </div>
      </div>
    </Col>
    ))}
    </Row>
        {/* dots */}
      <div className="dots pt-5 ">
          {cards.map((_, idx) => (
          <span key={idx} onClick={() => setActiveIndex(idx)}
            style={{background: activeIndex === idx ? "#DB4444" : "#c0c0c0",
            cursor: "pointer",transition: "0.3s",}}> </span>
          ))}
      </div>
    <Row className="about-row-4 pt-5 pb-5 gap-3 " lg={12} md={12}>
      <Col  className="mb-4 pt-3 text-center">
        <div className="icons">
          <i className="fa-solid fa-truck-fast services-icons"></i>
        </div>
        <h6 className="fw-bold mt-3">FREE AND FAST DELIVERY</h6>
        <p className="text-muted small">Free delivery for all orders over $140</p>
      </Col>

      <Col className="mb-4 pt-3 text-center">
        <div className="icons">
          <i className="fa-solid fa-headset services-icons"></i>
        </div>
        <h6 className="fw-bold mt-3">24/7 CUSTOMER SERVICE</h6>
        <p className="text-muted small">Friendly 24/7 customer service</p>
      </Col>

      <Col className="mb-4  pt-3 text-center">
        <div className="icons">
          <i className="fa-solid fa-shield-halved services-icons"></i>
        </div>
        <h6 className="fw-bold mt-3">SECURE PAYMENT</h6>
        <p className="text-muted small">100% secure payment</p>
      </Col>

      <Col className="mb-4 pt-3 text-center">
        <div className="icons">
          <i className="fa-solid fa-tags services-icons"></i>
        </div>
        <h6 className="fw-bold mt-3">BEST PRICES & OFFERS</h6>
        <p className="text-muted small">Get the best deals every day</p>
      </Col>
    </Row>
    </Container>
    </>
  );
};

export default About;


