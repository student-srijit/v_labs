"use client";
import React, { useState } from "react";
import "./contact.css"; // Import the CSS file
import confetti from "canvas-confetti"; // Confetti effect

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [clickSound] = useState(() => new Audio("/click.mp3"));

  const playClickSound = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };

  // Trigger Confetti on Form Submit
  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#00bcd4", "#f39c12", "#8e44ad"],
    });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  return (
    <div className="contact-container">
      {/* Animated Floating Box */}
      <div className="floating-box">
        <h1 className="title">📩 Contact Us</h1>

        <p className="contact-details">
          Wireless Research Lab <br />
          Room No - 206/IIA <br />
          Bharti School of Telecom <br />
          Indian Institute of Technology Delhi <br />
          Hauz Khas, New Delhi-110016, INDIA
        </p>

        <div className="contact-info">
          <p>📞 011-26582050</p>
          <p>
            ✉️{" "}
            <a href="mailto:support@vlab.co.in" className="email-link">
              support@vlab.co.in
            </a>
          </p>
        </div>

        {/* Form Section */}
        <h2 className="form-title">Send Us a Message</h2>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            triggerConfetti();
          }}
        >
          <div className="input-container">
            <label>Name</label>
            <input type="text" placeholder="Your Name" className="input-field" />
          </div>

          <div className="input-container">
            <label>Email</label>
            <input type="email" placeholder="Your Email" className="input-field" />
          </div>

          <div className="input-container">
            <label>Message</label>
            <textarea placeholder="Write your message here..." className="input-field"></textarea>
          </div>

          <button type="submit" className="submit-btn" onClick={playClickSound}>
            Submit
          </button>
        </form>
      </div>

      {/* Google Map Section */}
      <div className="map-container">
        <h2 className="map-title">Find Us on Google Maps</h2>
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps?q=28.5458982,77.185786&hl=en&z=17&output=embed"
          allowFullScreen=""
          loading="lazy"
          className="map-frame"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
