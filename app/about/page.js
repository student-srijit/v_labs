"use client";
import React from "react";
import Link from "next/link";
import "./page.css";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16 mt-12">
      {/* Hero Section */}
      <header
        className="relative text-center text-gray-900 py-32 rounded-3xl shadow-xl overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-60 animate-gradient"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-90 animate-parallax"
          style={{ backgroundImage: "url('/image1.png')" }}
        ></div>

        {/* Floating Text Animation */}
        <div className="relative z-10 animate-float">
          <h1 className="text-6xl font-extrabold tracking-wide drop-shadow-lg animate-glow">
            About Virtual Labs
          </h1>
          <p className="mt-4 text-xl text-white font-medium opacity-80 animate-fade-in">
            Revolutionizing education through ICT-based remote experimentation.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <main className="bg-white bg-opacity-80 backdrop-blur-lg p-12 rounded-3xl shadow-lg mt-12 animate-slide-up">
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Overview
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Virtual Labs is an initiative by the Ministry of Education (MoE), Government of India,
            under the National Mission on Education through ICT (NMEICT). This project involves 
            twelve participating institutes, with IIT Delhi as the coordinating body.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-6">
            Over 100 Virtual Labs with 700+ web-enabled experiments have been created to enable 
            remote access to high-quality learning resources.
          </p>
        </section>

        {/* Beneficiaries Section with 3D Floating Cards */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Intended Beneficiaries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Students & faculty without lab access",
              "High-school students for inspiration",
              "Researchers for collaboration",
              "Engineering colleges for advanced learning",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg transform hover:scale-105 hover:-rotate-1 transition-all duration-500 animate-float"
              >
                <p className="text-lg font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Virtual Labs */}
        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why Choose Virtual Labs?
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            No additional setup is required! Virtual Labs provide seamless remote 
            access to simulations-based experiments, ensuring accessible and 
            interactive learning for everyone.
          </p>
        </section>
      </main>

      {/* Call to Action with Neon Glow Effect */}
      <div className="mt-16 text-center animate-fade-in">
        <h2 className="text-3xl font-semibold text-white-800 mb-6">
          Ready to Explore Virtual Labs?
        </h2>
        <Link
          href="/labs"
          className="inline-block bg-blue-500 text-white font-semibold px-12 py-5 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 hover:bg-blue-600 transition-all duration-500 animate-pulse"
        >
          Go to Labs
        </Link>
      </div>
    </div>
  );
};

export default About;
