/**
 * PersonalInfo Component - Hero Section with Personal Information
 * 
 * This component displays the main personal information section including:
 * - Professional introduction
 * - Profile picture placeholder
 * - Call-to-action buttons
 * - Social media links
 * - Professional summary
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles personal information display
 * - Dependency Inversion: Uses props for customization (future enhancement)
 */

import React, { useState } from 'react';
import { Mail, Github, Linkedin, Download, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
// Profile image for production build
const profileImg = '/Portfolio/assets/MePhoto.jpg';

/**
 * PersonalInfo Component
 * 
 * Renders the hero section with personal information, introduction,
 * and call-to-action elements. Includes animated elements for engagement.
 * 
 * @returns {JSX.Element} Personal information hero section
 */
const PersonalInfo = () => {
  // State for button feedback
  const [emailClicked, setEmailClicked] = useState(false);
  const [cvDownloaded, setCvDownloaded] = useState(false);
  
  // Get language context
  const { language, t } = useLanguage();

  /**
   * Handle contact button click
   * Opens email client with pre-filled information
   */
  const handleContactClick = () => {
  setEmailClicked(true);
  const subject = encodeURIComponent(t('personalInfo.emailSubject'));
  const body = encodeURIComponent(t('personalInfo.emailBody'));
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=batuhankelami@gmail.com&su=${subject}&body=${body}`;
  window.open(gmailUrl, '_blank');
  setTimeout(() => {
    setEmailClicked(false);
  }, 3000);
};

  /**
   * Handle resume download
   * Downloads the CV file or opens it in a new tab
   */
  const handleResumeDownload = () => {
    setCvDownloaded(true);
    
    // Option 1: Direct download (CV dosyasını public klasörüne koy)
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // public/cv.pdf dosyasını koymalısın
    link.download = 'Kelami_Batuhan_CV.pdf';
    link.click();
    
    // Option 2: Yeni tab'da aç
    // window.open('/cv.pdf', '_blank');
    
    // Option 3: Google Drive link kullan
    // window.open('https://drive.google.com/file/d/YOUR_FILE_ID/view', '_blank');
    
    // Reset state after 3 seconds
    setTimeout(() => {
      setCvDownloaded(false);
    }, 3000);
  };

  /**
   * Scroll to next section (Experience)
   */
  const scrollToNextSection = () => {
    document.getElementById('experience')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="personal-info">
      <div className="container">
        <div className="personal-content">
          {/* Left Side - Text Content */}
          <div className="personal-text">
            <div className="intro-text fade-in-up">
              <h1 className="main-title">
                {t('personalInfo.greeting')} <span className="highlight">{t('personalInfo.name')}</span>
              </h1>
              <h2 className="subtitle">
                {t('personalInfo.title')}
              </h2>
              <p className="description">
                {t('personalInfo.description')}
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="cta-buttons fade-in-up">
              <button 
                onClick={handleContactClick}
                className={`btn btn-primary ${emailClicked ? 'btn-success' : ''}`}
                aria-label="Contact via email"
                disabled={emailClicked}
              >
                {emailClicked ? <Check size={20} /> : <Mail size={20} />}
                {emailClicked ? t('personalInfo.emailOpened') : t('personalInfo.getInTouch')}
              </button>
              <button 
                onClick={handleResumeDownload}
                className={`btn btn-outline ${cvDownloaded ? 'btn-success' : ''}`}
                aria-label="Download resume"
                disabled={cvDownloaded}
              >
                {cvDownloaded ? <Check size={20} /> : <Download size={20} />}
                {cvDownloaded ? t('personalInfo.downloaded') : t('personalInfo.downloadCV')}
              </button>
            </div>

            {/* Social Links */}
            <div className="social-links fade-in-up">
              <a 
                href="https://github.com/KBatuhanB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label={t('personalInfo.githubProfile')}
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/batuhan-b%C3%B6l%C3%BCkba%C5%9F%C4%B1-45b2b726b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label={t('personalInfo.linkedinProfile')}
              >
                <Linkedin size={24} />
              </a>
              <button
                className="social-link"
                aria-label={t('personalInfo.emailContact')}
                type="button"
                onClick={handleContactClick}
              >
                <Mail size={24} />
              </button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="personal-image fade-in-up">
            <div className="image-container">
              {/* Placeholder for profile image */}
              <div className="profile-placeholder">
                <img
                  src={profileImg}
                  alt={t('personalInfo.name')}
                  className="profile-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }}
                />
              </div>
              
              {/* Decorative elements */}
              <div className="image-decoration decoration-1"></div>
              <div className="image-decoration decoration-2"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .personal-info {
          min-height: 90vh;
          display: flex;
          align-items: center;
          background: var(--background);
          padding-top: 20px; /* Account for fixed navigation */
          position: relative;
          overflow: hidden;
        }

        .personal-info::before {
          content: '';
          position: absolute;
          top: 10%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .personal-info::after {
          content: '';
          position: absolute;
          bottom: 10%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite reverse;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .personal-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 5rem;
          align-items: center;
          width: 100%;
          position: relative;
          z-index: 1;
        }

        .personal-text {
          max-width: 800px;
        }

        .main-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        .highlight {
          background: linear-gradient(135deg, #1D4ED8, #9333EA, #06B6D4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
          position: relative;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #1D4ED8, #9333EA, #06B6D4);
          border-radius: 2px;
          animation: gradientShift 4s ease infinite;
          background-size: 200% 200%;
        }

        @keyframes gradientShift {
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

        .subtitle {
          font-size: clamp(1rem, 2.5vw, 1.75rem);
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 600;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .description {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          color: var(--text-secondary);
          max-width: 90%; 
        }

        .cta-buttons {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          align-items: center;
          justify-content: center;
          max-width: 85%;
          margin: 0 auto;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 56px;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(6, 182, 212, 0.05));
          border: 2px solid rgba(29, 78, 216, 0.3);
          border-radius: 16px;
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          flex: 1;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .social-link:hover::before {
          left: 100%;
        }

        [data-theme="light"] .social-link {
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.08), rgba(6, 182, 212, 0.03));
          border: 2px solid rgba(29, 78, 216, 0.2);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .social-link:hover {
          color: white;
          border-color: #1D4ED8;
          transform: translateY(-3px) scale(1.05);
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          box-shadow: 0 8px 25px rgba(29, 78, 216, 0.4);
        }

        .personal-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .profile-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1D4ED8, #9333EA, #06B6D4);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 80px rgba(29, 78, 216, 0.3);
          position: relative;
          z-index: 2;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .profile-placeholder:hover {
          transform: scale(1.05) rotate(2deg);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.4),
            0 0 100px rgba(29, 78, 216, 0.4);
        }

        .profile-image {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .profile-placeholder:hover .profile-image {
          transform: scale(1.1);
        }

        .placeholder-content {
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          text-align: center;
        }

        .image-decoration {
          position: absolute;
          border-radius: 24px;
          z-index: 1;
          animation: float 4s ease-in-out infinite;
        }

        .decoration-1 {
          top: -30px;
          right: -30px;
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(6, 182, 212, 0.1));
          animation-delay: -2s;
        }

        .decoration-2 {
          bottom: -30px;
          left: -30px;
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(29, 78, 216, 0.1));
          animation-delay: -1s;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .personal-content {
            gap: 3rem;
          }
          
          .image-container {
            width: 350px;
            height: 350px;
          }

          .main-title {
            font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          }

          .subtitle {
            font-size: clamp(1rem, 2.2vw, 1.5rem);
          }
        }

        @media (max-width: 768px) {
          .personal-info {
            min-height: 85vh;
            padding-top: 2rem;
          }

          .personal-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
            padding: 1rem 0;
          }

          .personal-text {
            max-width: 100%;
            order: 2;
          }

          .personal-image {
            order: 1;
          }

          .main-title {
            white-space: normal;
            line-height: 1.2;
            margin-bottom: 1.25rem;
          }

          .subtitle {
            white-space: normal;
            overflow: visible;
            text-overflow: unset;
            margin-bottom: 1.25rem;
          }

          .description {
            max-width: 100%;
            font-size: 1rem;
            margin-bottom: 2rem;
            line-height: 1.7;
          }

          .image-container {
            width: 280px;
            height: 280px;
            margin: 0 auto;
          }

          .cta-buttons {
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .btn {
            min-width: 140px;
            padding: 0.875rem 1.5rem;
            font-size: 0.95rem;
          }

          .social-links {
            justify-content: center;
            max-width: 100%;
            gap: 0.75rem;
          }

          .social-link {
            width: 48px;
            height: 48px;
            flex: none;
            border-radius: 12px;
          }
        }

        @media (max-width: 480px) {
          .personal-info {
            min-height: 80vh;
            padding-top: 1.5rem;
          }

          .personal-content {
            gap: 2rem;
            padding: 0.5rem 0;
          }

          .main-title {
            font-size: clamp(2rem, 8vw, 2.75rem);
            margin-bottom: 1rem;
          }

          .subtitle {
            font-size: clamp(0.9rem, 5vw, 1.25rem);
            margin-bottom: 1rem;
          }

          .description {
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }

          .image-container {
            width: 240px;
            height: 240px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 0.875rem;
            margin-bottom: 1.75rem;
          }

          .btn {
            width: 100%;
            max-width: 280px;
            min-width: unset;
            padding: 1rem 1.5rem;
            font-size: 1rem;
          }

          .social-links {
            gap: 0.625rem;
            max-width: 200px;
          }

          .social-link {
            width: 44px;
            height: 44px;
          }

          .decoration-1 {
            width: 120px;
            height: 120px;
            top: -20px;
            right: -20px;
          }

          .decoration-2 {
            width: 100px;
            height: 100px;
            bottom: -20px;
            left: -20px;
          }
        }

        @media (max-width: 375px) {
          .personal-content {
            gap: 1.5rem;
          }

          .main-title {
            font-size: clamp(1.75rem, 9vw, 2.5rem);
          }

          .subtitle {
            font-size: clamp(0.85rem, 5vw, 1.125rem);
          }

          .description {
            font-size: 0.9rem;
          }

          .image-container {
            width: 220px;
            height: 220px;
          }

          .btn {
            padding: 0.875rem 1.25rem;
            font-size: 0.95rem;
          }

          .social-link {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default PersonalInfo;
