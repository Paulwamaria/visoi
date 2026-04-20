import React, { Fragment } from "react";
import ReactPlayer from "react-player/lazy";
import heroMachine from "../assets/images/huller05.jpg";
import poshoCollection from "../assets/images/poshoCollection.jpg";
import chaffCutter from "../assets/images/chaff2.jpg";
import shellerCollection from "../assets/images/shellerCollection.jpg";
import mixer from "../assets/images/halftoneMixer.jpg";
import carpetDrier from "../assets/images/carpetDrier.jpg";
import charcoalPress from "../assets/images/charcoalscrewpress.jpg";
import videoThumbnail from "../assets/images/IMG_20220607_121126.jpg";
import "../styles/home.css";

class Home extends React.Component {
  render() {
    const trustBadges = [
      "Free delivery",
      "Payment on delivery",
      "Installation included",
      "Training available",
    ];

    const featuredMachines = [
      {
        name: "Posho Mills",
        image: poshoCollection,
        text: "Single-phase, three-phase, diesel, and combined motor options.",
      },
      {
        name: "Chaff Cutters",
        image: chaffCutter,
        text: "Built for reliable fodder preparation and daily farm use.",
      },
      {
        name: "Maize Shellers",
        image: shellerCollection,
        text: "Fast grain shelling for farms, traders, and commercial work.",
      },
      {
        name: "Feed Mixers",
        image: mixer,
        text: "Uniform animal feed mixing with strong working capacity.",
      },
      {
        name: "Carpet Driers",
        image: carpetDrier,
        text: "Professional drying equipment for cleaning and restoration work.",
      },
      {
        name: "Charcoal Presses",
        image: charcoalPress,
        text: "Heavy-duty screw press machines for charcoal production.",
      },
    ];

    const supportItems = [
      {
        icon: "fa fa-wrench",
        title: "Fabrication",
        text: "Machines built and adjusted for the work you need done.",
      },
      {
        icon: "fa fa-truck",
        title: "Delivery",
        text: "Qualifying orders can be delivered to your location.",
      },
      {
        icon: "fa fa-check-circle",
        title: "Installation",
        text: "Setup support so the machine is ready for real use.",
      },
      {
        icon: "fa fa-graduation-cap",
        title: "Training",
        text: "Clear handover guidance for operators and owners.",
      },
    ];

    const steps = [
      ["1", "Call or WhatsApp", "Share the machine and output you need."],
      ["2", "Get Advice", "Compare sizes, engines, and delivery options."],
      ["3", "Confirm Order", "Reserve your machine and agree delivery."],
      ["4", "Start Working", "Receive setup, training, and support."],
    ];

    return (
      <Fragment>
        <section
          className="home-hero"
          style={{ backgroundImage: `url(${heroMachine})` }}
        >
          <div className="home-hero-overlay">
            <div className="container">
              <div className="home-hero-content">
                <span className="hero-eyebrow">Visoi Machineries</span>
                <h1 className="home-hero-title">
                  Agricultural Machines Built for Real Work
                </h1>
                <p className="home-hero-copy">
                  Posho mills, chaff cutters, shellers, mixers, carpet driers,
                  charcoal presses, fabrication, maintenance, delivery, and
                  installation.
                </p>
                <div className="hero-buttons">
                  <a href="tel:0712550433" className="btn btn-primary btn-lg">
                    <i className="fa fa-phone mr-2"></i>Call Now
                  </a>
                  <a href="/gallery" className="btn btn-secondary btn-lg">
                    <i className="fa fa-images mr-2"></i>View Machines
                  </a>
                </div>
                <div className="hero-trust-list">
                  {trustBadges.map((badge) => (
                    <span key={badge}>
                      <i className="fa fa-check-circle"></i>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="stat-item">
                  <h2 className="stat-number">15+</h2>
                  <p className="stat-label">Years Experience</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="stat-item">
                  <h2 className="stat-number">500+</h2>
                  <p className="stat-label">Machines Delivered</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="stat-item">
                  <h2 className="stat-number">200+</h2>
                  <p className="stat-label">Happy Customers</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <div className="stat-item">
                  <h2 className="stat-number">24/7</h2>
                  <p className="stat-label">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-machines-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">Machines</span>
              <h2>Ready for Farm and Workshop Jobs</h2>
              <p>
                Choose from locally supported machines with delivery,
                installation, and operator guidance available.
              </p>
            </div>
            <div className="row">
              {featuredMachines.map((machine) => (
                <div className="col-lg-4 col-md-6 mb-4" key={machine.name}>
                  <article className="featured-machine-card">
                    <img src={machine.image} alt={machine.name} />
                    <div className="featured-machine-body">
                      <h3>{machine.name}</h3>
                      <p>{machine.text}</p>
                      <a href="/contacts">Inquire</a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="support-strip">
          <div className="container">
            <div className="support-grid">
              {supportItems.map((item) => (
                <div className="support-item" key={item.title}>
                  <i className={item.icon}></i>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="proof-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <span className="section-kicker">Support</span>
                <h2>Built, Delivered, and Supported</h2>
                <p>
                  Get help choosing the right machine size, engine type, and
                  setup for your workload. After delivery, installation and
                  usage guidance help your team start confidently.
                </p>
                <ul className="proof-list">
                  <li>Fabrication of new agricultural machines</li>
                  <li>Professional maintenance services</li>
                  <li>Free delivery on qualifying orders</li>
                  <li>Machine usage training</li>
                </ul>
              </div>
              <div className="col-lg-7">
                <div className="about-video">
                  <ReactPlayer
                    className="react-player"
                    url="https://www.youtube.com/shorts/thDHihzx3hA"
                    width="100%"
                    height="100%"
                    controls
                    light={videoThumbnail}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="container">
            <div className="section-heading text-center">
              <span className="section-kicker">Order Process</span>
              <h2>From Inquiry to Installation</h2>
            </div>
            <div className="row">
              {steps.map(([number, title, text]) => (
                <div className="col-lg-3 col-md-6 mb-4" key={number}>
                  <div className="process-step text-center">
                    <div className="step-number">{number}</div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container text-center">
            <h2 className="cta-title mb-4">
              Need a Machine Today?
            </h2>
            <p className="cta-subtitle mb-5">
              Call or WhatsApp for prices, delivery options, and machine
              recommendations.
            </p>
            <div className="cta-buttons">
              <a href="tel:0712550433" className="btn btn-lg btn-cta-primary">
                <i className="fa fa-phone mr-2"></i>Call: 0712 550 433
              </a>
              <a
                href="https://wa.me/254712550433"
                className="btn btn-lg btn-cta-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-whatsapp mr-2"></i>WhatsApp
              </a>
              <a
                href="mailto:mburujoseph383@gmail.com"
                className="btn btn-lg btn-cta-secondary"
              >
                <i className="fa fa-envelope-o mr-2"></i>Email Us
              </a>
            </div>
          </div>
        </section>

        <a
          href="https://wa.me/254712550433"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with us on WhatsApp"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </Fragment>
    );
  }
}

export default Home;
