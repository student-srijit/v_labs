"use client";
import React, { useState, useEffect } from "react";
import Institutes from "./components/Institutes";
import "./styles.css"; // Custom CSS file
import BroadAreasSection from "./components/Section";
import TestimonialsSection from "./components/Testomonials";
import Particles from "react-tsparticles"; // Particle animations
import Announcements from "./components/announcement";
import Counter from "./components/counter";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const [activeTab, setActiveTab] = useState("objectives");
  const backgroundImages = [
    "virtual-network.jpg",
    "car-image.jpg",
    "vlab-network.jpg"
  ]; 
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage-container">
      <Particles 
        id="particles-js"
        options={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 5,
            },
          },
        }}
      />
      {/* Parallax Background Image Section */}
      <div
        className="background-section"
        style={{
          backgroundImage: `url(${backgroundImages[currentImage]})`,
        }}
      ></div>

      {/* Content Section */}
      <div className="glassmorphic-wrapper">
  {/* Glassmorphic Container */}
  <div className="glassmorphic-container">
    <h2 className="glassmorphic-title animate-fade-in">
      Welcome to Virtual Labs
    </h2>
    <p className="glassmorphic-description animate-fade-in delay-1s">
      Dive into immersive labs, interactively learn, and boost your engineering skills with hands-on simulations.
    </p>

    {/* Scrolling Text */}
    <div className="scrolling-text animate-fade-in delay-2s">
      <span className="scrolling-content">
        Explore Virtual Labs • Experiment Anywhere • Learn Beyond Limits • Innovate Freely
      </span>
    </div>

    <div className="search-bar">
      <input type="text" placeholder="Search for labs..." className="search-input" />
      <button className="search-button">
        <MagnifyingGlassIcon className="search-icon" />
      </button>
    </div>

    <div className="tabs-section">
      <button className={`tab-button ${activeTab === "objectives" ? "active" : ""}`} onClick={() => setActiveTab("objectives")}>
        OBJECTIVES
      </button>
      <button className={`tab-button ${activeTab === "philosophy" ? "active" : ""}`} onClick={() => setActiveTab("philosophy")}>
        THE PHILOSOPHY
      </button>
    </div>

    <div className="tab-content">
      {activeTab === "objectives" ? (
        <div className="tab-box">
          <ul className="tab-list">
            <li>Provide remote-access to simulation-based labs in Science and Engineering.</li>
            <li>Encourage students to conduct experiments, fostering curiosity.</li>
            <li>Offer a comprehensive Learning Management System with video lectures and self-evaluation tools.</li>
          </ul>
        </div>
      ) : (
        <div className="tab-box">
          <p className="tab-paragraph">
            Virtual Labs enable learning beyond physical boundaries, bridging the gap between theory and practical experiments.
          </p>
        </div>
      )}
    </div>
  </div>
</div>

      {/* Additional Sections */}
      <BroadAreasSection />
      <Institutes />
      <Announcements/>

      <TestimonialsSection />
      <Counter />
    </div>
  );
}

