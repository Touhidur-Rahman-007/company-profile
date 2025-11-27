"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aureus Corporation",
  description: "Leading provider of innovative business solutions",
  url: "https://aureus-corporation.com",
  logo: "https://aureus-corporation.com/logo.png",
  foundingDate: "2010",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-234-567-8900",
    contactType: "customer service",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://facebook.com/aureus-corp",
    "https://twitter.com/aureus_corp",
    "https://linkedin.com/company/aureus-corporation",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Business Avenue",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
};

export default function CompanyProfile() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600&display=swap");

        :root {
          --primary-navy: #0a1628;
          --secondary-navy: #1a2d4a;
          --accent-gold: #c9a962;
          --accent-copper: #b87333;
          --text-light: #e8e6e3;
          --text-muted: #8b9bb4;
          --gradient-start: #0d1f3c;
          --gradient-end: #1a3a5c;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: "Source Sans 3", sans-serif;
          background: var(--primary-navy);
          color: var(--text-light);
          overflow-x: hidden;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .main-container {
          min-height: 100vh;
          position: relative;
        }

        .bg-pattern {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.03;
          background-image: repeating-linear-gradient(
              45deg,
              var(--accent-gold) 0,
              var(--accent-gold) 1px,
              transparent 1px,
              transparent 50px
            ),
            repeating-linear-gradient(
              -45deg,
              var(--accent-gold) 0,
              var(--accent-gold) 1px,
              transparent 1px,
              transparent 50px
            );
        }

        .floating-orbs {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          animation: pulse 4s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(201, 169, 98, 0.15),
            transparent
          );
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: radial-gradient(
            circle,
            rgba(26, 58, 92, 0.3),
            transparent
          );
          bottom: 20%;
          left: 5%;
          animation-delay: 2s;
        }

        .orb-3 {
          width: 250px;
          height: 250px;
          background: radial-gradient(
            circle,
            rgba(184, 115, 51, 0.1),
            transparent
          );
          top: 50%;
          left: 40%;
          animation-delay: 1s;
        }

        /* Header */
        header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.5rem 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(
            to bottom,
            rgba(10, 22, 40, 0.95),
            transparent
          );
          backdrop-filter: blur(10px);
        }

        .logo {
          font-family: "Playfair Display", serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--accent-gold);
          letter-spacing: 2px;
          text-decoration: none;
        }

        nav {
          display: flex;
          gap: 3rem;
        }

        nav a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.3s ease;
          position: relative;
        }

        nav a::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent-gold);
          transition: width 0.3s ease;
        }

        nav a:hover {
          color: var(--text-light);
        }

        nav a:hover::after {
          width: 100%;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8rem 4rem 4rem;
          z-index: 10;
        }

        .hero-content {
          text-align: center;
          max-width: 900px;
        }

        .hero-badge {
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border: 1px solid var(--accent-gold);
          border-radius: 30px;
          font-size: 0.8rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent-gold);
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.2s;
        }

        .hero h1 {
          font-family: "Playfair Display", serif;
          font-size: 5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.4s;
        }

        .hero h1 span {
          background: linear-gradient(
            135deg,
            var(--accent-gold),
            var(--accent-copper)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 3rem;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.6s;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.8s;
        }

        .hero-image-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0.1;
        }

        .btn-primary {
          padding: 1rem 2.5rem;
          background: linear-gradient(
            135deg,
            var(--accent-gold),
            var(--accent-copper)
          );
          border: none;
          border-radius: 4px;
          color: var(--primary-navy);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 2s infinite;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(201, 169, 98, 0.3);
        }

        .btn-secondary {
          padding: 1rem 2.5rem;
          background: transparent;
          border: 1px solid var(--text-muted);
          border-radius: 4px;
          color: var(--text-light);
          font-weight: 500;
          font-size: 0.9rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          border-color: var(--accent-gold);
          color: var(--accent-gold);
          transform: translateY(-3px);
        }

        /* Stats Section */
        .stats {
          padding: 6rem 4rem;
          position: relative;
          z-index: 10;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .stat-card {
          text-align: center;
          padding: 2.5rem;
          background: linear-gradient(
            135deg,
            rgba(26, 45, 74, 0.5),
            rgba(10, 22, 40, 0.8)
          );
          border: 1px solid rgba(201, 169, 98, 0.1);
          border-radius: 8px;
          transition: all 0.4s ease;
          opacity: 0;
          animation: scaleIn 0.6s ease forwards;
        }

        .stat-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .stat-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .stat-card:nth-child(3) {
          animation-delay: 0.3s;
        }
        .stat-card:nth-child(4) {
          animation-delay: 0.4s;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-gold);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .stat-number {
          font-family: "Playfair Display", serif;
          font-size: 3.5rem;
          font-weight: 700;
          background: linear-gradient(
            135deg,
            var(--accent-gold),
            var(--accent-copper)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* About Section */
        .about {
          padding: 8rem 4rem;
          position: relative;
          z-index: 10;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .about-content {
          opacity: 0;
          animation: fadeInLeft 0.8s ease forwards;
        }

        .section-label {
          font-size: 0.8rem;
          color: var(--accent-gold);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .section-title {
          font-family: "Playfair Display", serif;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .about-text {
          color: var(--text-muted);
          line-height: 1.9;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .about-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .feature-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            var(--accent-gold),
            var(--accent-copper)
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-icon svg {
          width: 12px;
          height: 12px;
          fill: var(--primary-navy);
        }

        .feature-text {
          font-size: 0.95rem;
          color: var(--text-light);
        }

        .about-visual {
          position: relative;
          opacity: 0;
          animation: fadeInRight 0.8s ease forwards;
          animation-delay: 0.3s;
        }

        .about-image-wrapper {
          position: relative;
          width: 100%;
          height: 500px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(201, 169, 98, 0.2);
        }

        .visual-card {
          background: linear-gradient(
            135deg,
            var(--secondary-navy),
            var(--primary-navy)
          );
          border: 1px solid rgba(201, 169, 98, 0.2);
          border-radius: 12px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }

        .visual-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(
            90deg,
            var(--accent-gold),
            var(--accent-copper)
          );
        }

        .visual-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .visual-item {
          aspect-ratio: 1;
          background: rgba(201, 169, 98, 0.05);
          border: 1px solid rgba(201, 169, 98, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .visual-item:hover {
          background: rgba(201, 169, 98, 0.1);
          transform: scale(1.05);
        }

        .visual-item svg {
          width: 32px;
          height: 32px;
          stroke: var(--accent-gold);
          stroke-width: 1.5;
          fill: none;
        }

        /* Services Section */
        .services {
          padding: 8rem 4rem;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(26, 45, 74, 0.3),
            transparent
          );
          position: relative;
          z-index: 10;
        }

        .services-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 4rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          background: linear-gradient(
            135deg,
            rgba(26, 45, 74, 0.6),
            rgba(10, 22, 40, 0.9)
          );
          border: 1px solid rgba(201, 169, 98, 0.1);
          border-radius: 12px;
          padding: 2.5rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .service-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(201, 169, 98, 0.05),
            transparent
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-gold);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(
            135deg,
            rgba(201, 169, 98, 0.2),
            rgba(184, 115, 51, 0.1)
          );
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .service-icon svg {
          width: 28px;
          height: 28px;
          stroke: var(--accent-gold);
          stroke-width: 1.5;
          fill: none;
        }

        .service-title {
          font-family: "Playfair Display", serif;
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-light);
        }

        .service-description {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        /* Contact Section */
        .contact {
          padding: 8rem 4rem;
          position: relative;
          z-index: 10;
        }

        .contact-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }

        .contact-item {
          padding: 2rem;
          background: linear-gradient(
            135deg,
            rgba(26, 45, 74, 0.4),
            rgba(10, 22, 40, 0.6)
          );
          border: 1px solid rgba(201, 169, 98, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          border-color: var(--accent-gold);
          transform: translateY(-5px);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          margin: 0 auto 1rem;
          background: linear-gradient(
            135deg,
            var(--accent-gold),
            var(--accent-copper)
          );
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-icon svg {
          width: 22px;
          height: 22px;
          fill: var(--primary-navy);
        }

        .contact-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
        }

        .contact-value {
          font-size: 1rem;
          color: var(--text-light);
        }

        /* Footer */
        footer {
          padding: 3rem 4rem;
          border-top: 1px solid rgba(201, 169, 98, 0.1);
          position: relative;
          z-index: 10;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-logo {
          font-family: "Playfair Display", serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--accent-gold);
        }

        .footer-text {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(201, 169, 98, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--accent-gold);
          border-color: var(--accent-gold);
        }

        .social-link svg {
          width: 18px;
          height: 18px;
          fill: var(--text-muted);
          transition: fill 0.3s ease;
        }

        .social-link:hover svg {
          fill: var(--primary-navy);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero h1 {
            font-size: 3.5rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .contact-info {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          header {
            padding: 1rem 2rem;
          }

          nav {
            display: none;
          }

          .hero {
            padding: 6rem 2rem 4rem;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .stats-grid,
          .services-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2.2rem;
          }

          .about-features {
            grid-template-columns: 1fr;
          }

          .footer-content {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>

      <div className="main-container">
        <div className="bg-pattern" aria-hidden="true" />
        <div className="floating-orbs" aria-hidden="true">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        <header role="banner">
          <a href="/" className="logo" aria-label="Company Home">
            AUREUS
          </a>
          <nav role="navigation" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-image-wrapper">
              <Image
                src="/images/hero-bg.jpg"
                alt="Modern business environment"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            <div className="hero-content">
              <span className="hero-badge">Established 2010</span>
              <h1 id="hero-title">
                Building Tomorrow&apos;s <span>Success</span> Today
              </h1>
              <p className="hero-description">
                We are a forward-thinking organization dedicated to delivering
                exceptional business solutions that drive growth, innovation,
                and lasting success for our clients worldwide.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary" type="button">
                  Get Started
                </button>
                <button className="btn-secondary" type="button">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          <section className="stats" aria-label="Company Statistics">
            <div className="stats-grid">
              <article className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </article>
              <article className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Clients Served</div>
              </article>
              <article className="stat-card">
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </article>
              <article className="stat-card">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </article>
            </div>
          </section>

          <section className="about" id="about" aria-labelledby="about-title">
            <div className="about-container">
              <div className="about-content">
                <span className="section-label">Who We Are</span>
                <h2 id="about-title" className="section-title">
                  Excellence Through Innovation
                </h2>
                <p className="about-text">
                  Founded with a vision to transform businesses through
                  strategic thinking and innovative solutions, we have grown
                  into a trusted partner for organizations across industries.
                  Our commitment to excellence drives everything we do.
                </p>
                <div className="about-features">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="feature-text">Strategic Planning</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="feature-text">Expert Team</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="feature-text">Global Reach</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="feature-text">24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="about-visual">
                <div className="about-image-wrapper">
                  <Image
                    src="/images/about-team.jpg"
                    alt="Our professional team working together"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section
            className="services"
            id="services"
            aria-labelledby="services-title"
          >
            <div className="services-header">
              <span className="section-label">What We Offer</span>
              <h2 id="services-title" className="section-title">
                Our Premium Services
              </h2>
            </div>
            <div className="services-grid">
              <article className="service-card">
                <div className="service-image-wrapper">
                  <Image
                    src="/images/service-consulting.jpg"
                    alt="Strategic consulting services"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="service-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="service-title">Strategic Consulting</h3>
                <p className="service-description">
                  Expert guidance to navigate complex business challenges and
                  unlock new opportunities for sustainable growth.
                </p>
              </article>
              <article className="service-card">
                <div className="service-image-wrapper">
                  <Image
                    src="/images/service-digital.jpg"
                    alt="Digital transformation solutions"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="service-icon">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <h3 className="service-title">Digital Transformation</h3>
                <p className="service-description">
                  Modernize your operations with cutting-edge technology
                  solutions designed for the digital age.
                </p>
              </article>
              <article className="service-card">
                <div className="service-image-wrapper">
                  <Image
                    src="/images/service-talent.jpg"
                    alt="Talent solutions and development"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="service-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="service-title">Talent Solutions</h3>
                <p className="service-description">
                  Build high-performing teams with our comprehensive talent
                  acquisition and development services.
                </p>
              </article>
            </div>
          </section>

          <section
            className="contact"
            id="contact"
            aria-labelledby="contact-title"
          >
            <div className="contact-container">
              <span className="section-label">Get In Touch</span>
              <h2 id="contact-title" className="section-title">
                Let&apos;s Start a Conversation
              </h2>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-label">Address</div>
                  <div className="contact-value">
                    123 Business Ave, New York
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="contact-label">Phone</div>
                  <div className="contact-value">+1 (234) 567-8900</div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">hello@aureus.com</div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer role="contentinfo">
          <div className="footer-content">
            <div className="footer-logo">AUREUS</div>
            <div className="footer-text">
              © 2024 Aureus Corporation. All rights reserved.
            </div>
            <div className="footer-social">
              <a
                href="#"
                className="social-link"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </svg>
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="social-link"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
