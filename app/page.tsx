"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <span className="nav__logo">RED <span className="nav__logo-thin">Construction</span></span>
          <div className="nav__links">
            <a href="#services" className="nav__link">Services</a>
            <a href="#about" className="nav__link">About</a>
            <a href="#testimonials" className="nav__link">Reviews</a>
            <a href="#contact" className="nav__link">Contact</a>
          </div>
          <a href="tel:9562151853" className="nav__phone">(956) 215-1853</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero__bg-shape hero__bg-shape--1"></div>
        <div className="hero__bg-shape hero__bg-shape--2"></div>
        <div className="hero__bg-shape hero__bg-shape--3"></div>
        <div className="hero__content">
          <p className="hero__eyebrow">McAllen, TX &mdash; Est. Excellence</p>
          <h1 className="hero__h1">
            Building <span className="hero__h1-accent">Dreams,</span><br />
            Delivering <span className="hero__h1-accent">Results.</span>
          </h1>
          <p className="hero__sub">
            Residential &amp; commercial construction and remodeling — crafted with precision, built to last.
          </p>
          <div className="hero__cta-group">
            <a href="#contact" className="btn btn--primary">Get a Free Quote</a>
            <a href="#services" className="btn btn--ghost">Explore Services</a>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <span className="hero__scroll-line"></span>
          <span className="hero__scroll-text">Scroll</span>
        </div>
      </section>

      {/* TRUST */}
      <section id="trust" className="trust">
        <div className="container">
          <div className="trust__grid">
            <div className="trust__item">
              <span className="trust__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <p className="trust__stat">5.0</p>
              <p className="trust__label">Google Rating</p>
            </div>
            <div className="trust__divider"></div>
            <div className="trust__item">
              <p className="trust__stat">32</p>
              <p className="trust__label">Verified Reviews</p>
            </div>
            <div className="trust__divider"></div>
            <div className="trust__item">
              <p className="trust__stat">100%</p>
              <p className="trust__label">Client Satisfaction</p>
            </div>
            <div className="trust__divider"></div>
            <div className="trust__item">
              <p className="trust__stat">RGV</p>
              <p className="trust__label">Proudly Local</p>
            </div>
          </div>
          <p className="trust__proof">
            Trusted by homeowners and businesses across McAllen, Edinburg, Mission, and the Rio Grande Valley.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What We Do</p>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-sub">From concept to completion — every project executed with uncompromising craftsmanship.</p>
          </div>
          <div className="services__grid">
            <div className="service-card">
              <div className="service-card__icon">&#9632;</div>
              <h3 className="service-card__title">Residential Remodeling</h3>
              <p className="service-card__desc">
                Transform your home with full-scale interior and exterior renovations. Kitchens, bathrooms, additions, flooring — tailored to your vision.
              </p>
              <a href="#contact" className="service-card__link">Start Your Project &rarr;</a>
            </div>
            <div className="service-card service-card--featured">
              <div className="service-card__icon">&#9650;</div>
              <h3 className="service-card__title">New Construction</h3>
              <p className="service-card__desc">
                Ground-up residential and commercial builds delivered on time and on budget. We manage every phase from foundation to finishing.
              </p>
              <a href="#contact" className="service-card__link">Start Your Project &rarr;</a>
            </div>
            <div className="service-card">
              <div className="service-card__icon">&#9670;</div>
              <h3 className="service-card__title">Commercial Remodeling</h3>
              <p className="service-card__desc">
                Upgrade your commercial space with minimal disruption. Offices, retail, and industrial — built to code and built to impress.
              </p>
              <a href="#contact" className="service-card__link">Start Your Project &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="container">
          <div className="about__layout">
            <div className="about__visual">
              <div className="about__shape-outer">
                <div className="about__shape-inner">
                  <span className="about__shape-text">RED</span>
                </div>
              </div>
              <div className="about__badge">
                <span className="about__badge-text">McAllen, TX</span>
              </div>
            </div>
            <div className="about__content">
              <p className="section-eyebrow">Our Story</p>
              <h2 className="section-title about__title">Built on Integrity,<br />Driven by Craft.</h2>
              <p className="about__body">
                RED Construction &amp; Remodeling LLC was founded on a simple belief: every client deserves exceptional quality, honest communication, and results that exceed expectations. Based in McAllen, Texas, we serve the entire Rio Grande Valley with pride.
              </p>
              <p className="about__body">
                Whether you&apos;re envisioning a full home renovation or constructing a commercial facility from the ground up, our experienced team brings technical expertise and genuine care to every project. No shortcuts. No compromises.
              </p>
              <div className="about__pillars">
                <div className="about__pillar">
                  <span className="about__pillar-mark">01</span>
                  <span className="about__pillar-text">Quality Craftsmanship</span>
                </div>
                <div className="about__pillar">
                  <span className="about__pillar-mark">02</span>
                  <span className="about__pillar-text">Transparent Pricing</span>
                </div>
                <div className="about__pillar">
                  <span className="about__pillar-mark">03</span>
                  <span className="about__pillar-text">On-Time Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Client Reviews</p>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testimonials__grid">
            <div className="testimonial-card">
              <div className="testimonial-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-card__quote">
                &ldquo;RED Construction transformed our kitchen completely. The team was professional, clean, and finished ahead of schedule. The quality of the work is absolutely outstanding. Highly recommend to anyone in the Valley.&rdquo;
              </p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__avatar">MR</span>
                <div>
                  <p className="testimonial-card__name">Maria R.</p>
                  <p className="testimonial-card__location">McAllen, TX</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-card__quote">
                &ldquo;We hired RED for a full commercial office remodel and they knocked it out of the park. Communication was excellent throughout, pricing was fair, and the final result exceeded every expectation. Will use them again.&rdquo;
              </p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__avatar">JL</span>
                <div>
                  <p className="testimonial-card__name">Jorge L.</p>
                  <p className="testimonial-card__location">Edinburg, TX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="cta-section">
        <div className="cta-section__bg-shape"></div>
        <div className="container cta-section__inner">
          <p className="cta-section__eyebrow">Ready to Build?</p>
          <h2 className="cta-section__title">Your Project Starts<br />With One Call.</h2>
          <p className="cta-section__sub">Free consultations. No obligation. Just honest expertise.</p>
          <a href="tel:9562151853" className="btn btn--cta">(956) 215-1853</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Find Us</p>
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <div className="contact__grid">
            <div className="contact__block">
              <p className="contact__block-label">Company</p>
              <p className="contact__block-value">RED Construction &amp; Remodeling LLC</p>
            </div>
            <div className="contact__block">
              <p className="contact__block-label">Address</p>
              <p className="contact__block-value">3911 N 10th St STE M<br />McAllen, TX 78501, USA</p>
            </div>
            <div className="contact__block">
              <p className="contact__block-label">Phone</p>
              <a href="tel:9562151853" className="contact__block-value contact__block-link">(956) 215-1853</a>
            </div>
            <div className="contact__block">
              <p className="contact__block-label">Service Area</p>
              <p className="contact__block-value">McAllen · Edinburg · Mission<br />Rio Grande Valley, TX</p>
            </div>
          </div>
          <div className="contact__cta-row">
            <a href="tel:9562151853" className="btn btn--primary">Call Now</a>
            <a href="#hero" className="btn btn--ghost">Back to Top</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__brand">RED Construction &amp; Remodeling LLC</span>
          <span className="footer__copy">&copy; {new Date().getFullYear()} All rights reserved. McAllen, TX</span>
        </div>
      </footer>
    </>
  );
}