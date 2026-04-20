import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import workshopImage from "../assets/images/huller05.jpg";
import machineImage from "../assets/images/poshoCollection.jpg";
import "../styles/about.css";

const About = () => {
  const values = [
    {
      icon: "fa fa-wrench",
      title: "Practical Fabrication",
      text: "We build and adapt machines for real farm, workshop, and processing needs.",
    },
    {
      icon: "fa fa-truck",
      title: "Delivery Support",
      text: "Customers can get help moving machinery safely to their working location.",
    },
    {
      icon: "fa fa-graduation-cap",
      title: "Operator Guidance",
      text: "We explain machine use, setup, and care so teams can start confidently.",
    },
  ];

  const services = [
    "Agricultural machine fabrication",
    "Posho mills, choppers, shellers, mixers, and related equipment",
    "Machine delivery and installation",
    "Maintenance, repairs, and usage training",
  ];

  return (
    <div className="about-page">
      <section className="about-header">
        <Container>
          <span className="about-kicker">About Visoi</span>
          <h1 className="about-title">Machinery Built Around the Work</h1>
          <p className="about-subtitle">
            Visoi Machineries supplies and supports agricultural machinery for
            farmers, processors, businesses, and workshops across Kenya.
          </p>
        </Container>
      </section>

      <section className="about-story">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-4 mb-lg-0">
              <img
                src={workshopImage}
                alt="Visoi machinery workshop equipment"
                className="about-story-image"
              />
            </Col>
            <Col lg="6">
              <div className="about-story-content">
                <span className="about-kicker">What We Do</span>
                <h2>Reliable Machines, Setup, and Support</h2>
                <p>
                  We focus on equipment that helps customers process feed,
                  maize, grain, and other materials more efficiently. Our work
                  covers machine sales, fabrication, installation, operator
                  training, and ongoing maintenance support.
                </p>
                <ul className="about-service-list">
                  {services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-values">
        <Container>
          <div className="about-section-heading">
            <span className="about-kicker">Why Customers Choose Us</span>
            <h2>Support That Goes Beyond the Sale</h2>
          </div>
          <Row>
            {values.map((value) => (
              <Col lg="4" md="6" className="mb-4" key={value.title}>
                <article className="about-value-card">
                  <i className={value.icon}></i>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="about-cta">
        <Container>
          <Row className="align-items-center">
            <Col lg="7" className="mb-4 mb-lg-0">
              <h2>Need Help Choosing the Right Machine?</h2>
              <p>
                Tell us the work you need done and we will help you compare
                machine size, power options, delivery, and setup.
              </p>
              <div className="about-cta-buttons">
                <a href="tel:0712550433" className="btn about-call-btn">
                  <i className="fa fa-phone mr-2"></i>Call Now
                </a>
                <a
                  href="https://wa.me/254712550433"
                  className="btn about-whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-whatsapp mr-2"></i>WhatsApp
                </a>
              </div>
            </Col>
            <Col lg="5">
              <img
                src={machineImage}
                alt="Visoi agricultural machinery collection"
                className="about-cta-image"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
