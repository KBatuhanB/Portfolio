/**
 * Footer Component - Site Footer with Contact Information
 * 
 * This component provides the footer section including:
 * - Contact information and social links
 * - Quick navigation links
 * - Copyright information
 * - Professional contact details
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles footer display and contact info
 * - Open/Closed: Easy to add new social links or contact methods
 */

import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Footer Component
 * 
 * Renders the site footer with contact information, social links,
 * and navigation. Includes responsive design for mobile devices.
 * 
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
  // Get language context
  const { t } = useLanguage();
  /**
   * Social media links configuration
   */
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/KBatuhanB',
      icon: <Github size={20} />,
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/batuhan-b%C3%B6l%C3%BCkba%C5%9F%C4%B1-45b2b726b/',
      icon: <Linkedin size={20} />,
      color: '#0077b5'
    }
  ];

  /**
   * Quick navigation links
   */
  const quickLinks = [
    { label: t('navigation.personal'), href: '#personal' },
    { label: t('navigation.experience'), href: '#experience' },
    { label: t('navigation.projects'), href: '#projects' },
    { label: t('navigation.education'), href: '#education' }
  ];

  /**
   * Smooth scroll to section
   * 
   * @param {string} href - Target section ID
   */
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Handle contact method clicks
   */
  const handleEmailClick = () => {
    window.location.href = 'mailto:your.email@example.com?subject=Portfolio Inquiry';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Contact Information */}
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.getInTouch')}</h3>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            
            <div className="contact-info">
              <button 
                onClick={handleEmailClick}
                className="contact-item"
                aria-label={t('footer.sendEmail')}
              >
                <Mail size={18} />
                batuhankelami@gmail.com
              </button>
              
              <button 
                onClick={handlePhoneClick}
                className="contact-item"
                aria-label={t('footer.callPhone')}
              >
                <Phone size={18} />
                +90 (505) 995-0859
              </button>
              
              <div className="contact-item">
                <MapPin size={18} />
                Ankara, Turkey
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.quickLinks')}</h3>
            <nav className="quick-links">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="quick-link"
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.connectWithMe')}</h3>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color }}
                  aria-label={`${t('footer.visitProfile')} ${social.name} ${t('footer.profile')}`}
                >
                  {social.icon}
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          
          <div className="footer-bottom-content">
            {/* Copyright */}
            <div className="copyright">
              <p>
                © {new Date().getFullYear()} Kelami Batuhan Bölükbaşı. {t('footer.copyright')}
              </p>
            </div>

            {/* Made with love */}
            <div className="made-with">
              <p>
                {t('footer.madeWith')} <Heart size={16} className="heart-icon" /> {t('footer.using')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%);
          color: white;
          margin-top: 4rem;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: -50%;
          left: 10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          animation: floatFooter 18s ease-in-out infinite;
        }

        .footer::after {
          content: '';
          position: absolute;
          bottom: -30%;
          right: 15%;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          animation: floatFooter 22s ease-in-out infinite reverse;
        }

        @keyframes floatFooter {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(90deg);
          }
        }

        [data-theme="light"] .footer {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
          padding: 4rem 0 2rem;
          position: relative;
          z-index: 1;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #1D4ED8, #9333EA, #06B6D4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientFooter 4s ease infinite;
        }

        @keyframes gradientFooter {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .footer-description {
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        /* Enhanced Contact Information */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
          text-align: left;
          padding: 0.5rem 0;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }

        .contact-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(29, 78, 216, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .contact-item:hover::before {
          left: 100%;
        }

        .contact-item:hover {
          color: #1D4ED8;
          transform: translateX(8px);
        }

        .contact-item svg {
          color: #1D4ED8;
          transition: transform 0.3s ease;
        }

        .contact-item:hover svg {
          transform: scale(1.2);
        }

        /* Enhanced Quick Links */
        .quick-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .quick-link {
          background: none;
          border: none;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
          text-align: left;
          padding: 0.5rem 0;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }

        .quick-link::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #1D4ED8, #06B6D4);
          transition: width 0.3s ease;
        }

        .quick-link:hover {
          color: #1D4ED8;
          transform: translateX(8px);
        }

        .quick-link:hover::before {
          width: 100%;
        }

        /* Enhanced Social Links */
        .social-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .social-link:hover::before {
          left: 100%;
        }

        .social-link:hover {
          color: var(--social-color, #9333EA);
          transform: translateX(8px);
        }

        .social-link svg {
          transition: all 0.3s ease;
        }

        .social-link:hover svg {
          transform: scale(1.2) rotate(360deg);
          color: var(--social-color, #9333EA);
        }

        /* Enhanced Footer Bottom */
        .footer-bottom {
          padding-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .footer-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(29, 78, 216, 0.5), rgba(147, 51, 234, 0.5), transparent);
          margin: 2rem 0;
          border-radius: 1px;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright p,
        .made-with p {
          color: #94a3b8;
          font-size: 0.875rem;
          margin: 0;
          transition: color 0.3s ease;
        }

        .copyright:hover p,
        .made-with:hover p {
          color: #cbd5e1;
        }

        .made-with {
          display: flex;
          align-items: center;
        }

        .made-with p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .heart-icon {
          color: #ef4444;
          animation: heartbeat 1.5s ease-in-out infinite;
          filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.5));
        }

        @keyframes heartbeat {
          0%, 50%, 100% {
            transform: scale(1);
          }
          25%, 75% {
            transform: scale(1.2);
          }
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            padding: 2.5rem 0 1.5rem;
          }

          .footer-section:first-child {
            grid-column: 1 / -1;
            text-align: center;
            max-width: 500px;
            margin: 0 auto;
          }

          .footer-title {
            font-size: 1.125rem;
          }

          .contact-info {
            align-items: center;
          }
        }

        @media (max-width: 768px) {
          .footer {
            margin-top: 2rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 2rem 0 1.25rem;
            text-align: center;
          }

          .footer-section {
            max-width: 320px;
            margin: 0 auto;
          }

          .footer-section:first-child {
            grid-column: 1;
            max-width: 350px;
          }

          .footer-title {
            font-size: 1rem;
            margin-bottom: 0.875rem;
          }

          .footer-description {
            font-size: 0.875rem;
            line-height: 1.5;
            margin-bottom: 1.25rem;
          }

          .contact-info {
            gap: 0.625rem;
            align-items: center;
          }

          .contact-item {
            padding: 0.5rem 0.75rem;
            border-radius: 8px;
            background: linear-gradient(135deg, rgba(29, 78, 216, 0.06), rgba(6, 182, 212, 0.02));
            border: 1px solid rgba(29, 78, 216, 0.15);
            justify-content: center;
            min-height: 40px;
            font-size: 0.875rem;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .copyright p,
          .made-with p {
            font-size: 0.8rem;
            line-height: 1.4;
          }

          .social-links {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.625rem;
            justify-content: center;
            max-width: 280px;
            margin: 0 auto;
          }

          .social-link {
            min-height: 40px;
            padding: 0.5rem 0.75rem;
            border-radius: 8px;
            background: linear-gradient(135deg, rgba(147, 51, 234, 0.06), rgba(29, 78, 216, 0.02));
            border: 1px solid rgba(147, 51, 234, 0.15);
            flex: 1;
            max-width: 120px;
            font-size: 0.875rem;
          }

          .quick-links {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
            max-width: 300px;
            margin: 0 auto;
          }

          .quick-link {
            padding: 0.5rem 0.75rem;
            border-radius: 6px;
            background: linear-gradient(135deg, rgba(29, 78, 216, 0.05), rgba(6, 182, 212, 0.02));
            border: 1px solid rgba(29, 78, 216, 0.12);
            min-height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
          }

          .footer::before,
          .footer::after {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            padding: 1.5rem 0 1rem;
            gap: 1.25rem;
          }

          .footer-section {
            max-width: 100%;
          }

          .footer-section:first-child {
            max-width: 100%;
          }

          .footer-title {
            font-size: 0.95rem;
            margin-bottom: 0.75rem;
          }

          .footer-description {
            font-size: 0.8rem;
            margin-bottom: 1rem;
          }

          .contact-info {
            gap: 0.5rem;
          }

          .contact-item {
            padding: 0.45rem 0.625rem;
            font-size: 0.8rem;
            min-height: 36px;
          }

          .social-links {
            flex-direction: column;
            gap: 0.5rem;
            max-width: 200px;
          }

          .social-link {
            width: 100%;
            max-width: none;
            min-height: 36px;
            font-size: 0.8rem;
            padding: 0.45rem 0.625rem;
          }

          .quick-links {
            flex-direction: column;
            gap: 0.375rem;
            max-width: 180px;
          }

          .quick-link {
            width: 100%;
            min-height: 32px;
            font-size: 0.75rem;
            padding: 0.375rem 0.5rem;
          }

          .footer-bottom-content {
            gap: 0.75rem;
          }

          .copyright p,
          .made-with p {
            font-size: 0.75rem;
          }

          .footer::before,
          .footer::after {
            width: 180px;
            height: 180px;
          }
        }

        @media (max-width: 375px) {
          .footer-content {
            padding: 1.25rem 0 0.875rem;
            gap: 1rem;
          }

          .footer-title {
            font-size: 0.9rem;
            margin-bottom: 0.625rem;
          }

          .footer-description {
            font-size: 0.75rem;
            margin-bottom: 0.875rem;
          }

          .contact-item {
            padding: 0.375rem 0.5rem;
            font-size: 0.75rem;
            min-height: 32px;
          }

          .social-link {
            min-height: 32px;
            font-size: 0.75rem;
            padding: 0.375rem 0.5rem;
          }

          .quick-link {
            min-height: 28px;
            font-size: 0.7rem;
            padding: 0.25rem 0.375rem;
          }

          .copyright p,
          .made-with p {
            font-size: 0.7rem;
          }

          .footer::before,
          .footer::after {
            width: 150px;
            height: 150px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
