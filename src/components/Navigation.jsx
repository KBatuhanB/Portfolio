/**
 * Navigation Component - Fixed Top Navigation Bar with Theme Toggle
 * 
 * This component provides a responsive navigation bar with smooth scrolling to sections.
 * Features:
 * - Fixed position at top of page
 * - Smooth scroll behavior to sections
 * - Active section highlighting
 * - Mobile responsive design
 * - Professional styling with hover effects
 * - Dark/Light theme toggle button
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles navigation functionality
 * - Open/Closed: Easy to add new navigation items
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Navigation menu items configuration
 * Each item contains display text and target section ID
 */
const navigationItems = [
  { id: 'personal' },
  { id: 'experience' },
  { id: 'projects' },
  { id: 'education' }
];

/**
 * Navigation Component
 * 
 * Renders a fixed navigation bar with smooth scrolling functionality.
 * Includes mobile hamburger menu for responsive design.
 * 
 * @returns {JSX.Element} Navigation bar component
 */
const Navigation = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for tracking active section
  const [activeSection, setActiveSection] = useState('personal');
  // Get theme context
  const { theme, toggleTheme, isDark } = useTheme();
  // Get language context
  const { language, toggleLanguage, t } = useLanguage();

  /**
   * Smooth scroll to target section
   * 
   * @param {string} sectionId - ID of the target section
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  /**
   * Effect to track active section based on scroll position
   * Updates active section for navigation highlighting
   */
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo/Brand */}
        <div className="nav-brand">
          <h3>KBB</h3>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="nav-menu">
          {navigationItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                aria-label={`Navigate to ${t(`navigation.${item.id}`)} section`}
              >
                {t(`navigation.${item.id}`)}
              </button>
            </li>
          ))}
        </ul>

        {/* Control Buttons Container */}
        <div className="control-buttons">
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="language-toggle"
            aria-label={`Switch to ${language === 'en' ? 'Turkish' : 'English'}`}
            title={`Switch to ${language === 'en' ? 'Turkish' : 'English'}`}
          >
            <Globe size={18} />
            <span className="language-text">{language.toUpperCase()}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {t(`navigation.${item.id}`)}
            </button>
          ))}
          
          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="mobile-language-toggle"
            aria-label={`Switch to ${language === 'en' ? 'Turkish' : 'English'}`}
          >
            <Globe size={20} />
            {language === 'en' ? 'Türkçe' : 'English'}
          </button>
          
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="mobile-theme-toggle"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            {isDark ? (language === 'en' ? 'Light Mode' : 'Açık Mod') : (language === 'en' ? 'Dark Mode' : 'Koyu Mod')}
          </button>
        </div>
      )}

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .navigation::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(29, 78, 216, 0.6), 
            rgba(147, 51, 234, 0.6), 
            rgba(6, 182, 212, 0.6), 
            transparent
          );
        }

        [data-theme="light"] .navigation {
          background: rgba(255, 255, 255, 0.85);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .nav-brand h3 {
          background: linear-gradient(135deg, #1D4ED8, #9333EA, #06B6D4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 800;
          margin: 0;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 0.5rem;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          margin: 0;
        }

        .nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(6, 182, 212, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 12px;
        }

        .nav-link:hover::before {
          opacity: 1;
        }

        .nav-link:hover {
          color: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(29, 78, 216, 0.3);
        }

        .nav-link.active {
          color: #1D4ED8;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.15), rgba(6, 182, 212, 0.1));
          box-shadow: 0 2px 10px rgba(29, 78, 216, 0.2);
        }

        .control-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-left: auto;
        }

        .language-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          height: 44px;
          padding: 0 1rem;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(6, 182, 212, 0.05));
          border: 2px solid rgba(29, 78, 216, 0.3);
          border-radius: 22px;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          font-weight: 600;
          font-size: 0.875rem;
          backdrop-filter: blur(10px);
        }

        .language-toggle:hover {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          border-color: #1D4ED8;
          color: white;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(29, 78, 216, 0.4);
        }

        .language-text {
          font-size: 0.8rem;
          letter-spacing: 0.5px;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(29, 78, 216, 0.05));
          border: 2px solid rgba(147, 51, 234, 0.3);
          border-radius: 50%;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .theme-toggle:hover {
          background: linear-gradient(135deg, #9333EA, #06B6D4);
          border-color: #9333EA;
          color: white;
          transform: scale(1.15) rotate(180deg);
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.5rem;
          transition: all 0.3s ease;
        }

        .mobile-menu-toggle:hover {
          color: #1D4ED8;
          transform: scale(1.1);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
        }

        [data-theme="light"] .mobile-menu {
          background: rgba(255, 255, 255, 0.95);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          padding: 1.25rem 2rem;
          text-align: left;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .mobile-nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #1D4ED8, #06B6D4);
          transform: scaleY(0);
          transition: transform 0.3s ease;
        }

        .mobile-nav-link:hover::before,
        .mobile-nav-link.active::before {
          transform: scaleY(1);
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #1D4ED8;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(6, 182, 212, 0.05));
          padding-left: 2.5rem;
        }

        .mobile-language-toggle,
        .mobile-theme-toggle {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: none;
          border: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          padding: 1.25rem 2rem;
          text-align: left;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-language-toggle:hover,
        .mobile-theme-toggle:hover {
          color: #1D4ED8;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(6, 182, 212, 0.05));
          padding-left: 2.5rem;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .nav-container {
            padding: 0.875rem 1rem;
          }

          .nav-brand h3 {
            font-size: 1.375rem;
          }

          .control-buttons {
            margin-left: 0;
            gap: 0.5rem;
          }

          .language-toggle {
            height: 42px;
            padding: 0 0.875rem;
            font-size: 0.8rem;
            border-radius: 21px;
          }

          .theme-toggle {
            width: 42px;
            height: 42px;
          }

          .mobile-menu {
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(25px);
            border-bottom: 1px solid rgba(29, 78, 216, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            padding: 1rem 0;
          }

          [data-theme="light"] .mobile-menu {
            background: rgba(255, 255, 255, 0.98);
            border-bottom: 1px solid rgba(29, 78, 216, 0.15);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          }

          .mobile-nav-link {
            padding: 1rem 1.5rem;
            font-size: 1.125rem;
            margin: 0 1rem;
            border-radius: 12px;
            border-bottom: none;
            transition: all 0.3s ease;
          }

          .mobile-nav-link:hover,
          .mobile-nav-link.active {
            padding-left: 1.5rem;
            background: linear-gradient(135deg, rgba(29, 78, 216, 0.15), rgba(6, 182, 212, 0.08));
            border-left: 4px solid #1D4ED8;
          }

          .mobile-language-toggle,
          .mobile-theme-toggle {
            padding: 1rem 1.5rem;
            font-size: 1rem;
            margin: 0.5rem 1rem 0;
            border-radius: 12px;
            border-top: 1px solid rgba(29, 78, 216, 0.2);
            background: linear-gradient(135deg, rgba(29, 78, 216, 0.08), rgba(6, 182, 212, 0.03));
          }

          .mobile-language-toggle:hover,
          .mobile-theme-toggle:hover {
            padding-left: 1.5rem;
            background: linear-gradient(135deg, rgba(29, 78, 216, 0.12), rgba(6, 182, 212, 0.06));
            border-left: 4px solid #1D4ED8;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0.75rem 0.875rem;
          }

          .nav-brand h3 {
            font-size: 1.25rem;
          }
          
          .language-toggle {
            height: 38px;
            padding: 0 0.75rem;
            font-size: 0.75rem;
          }
          
          .theme-toggle {
            width: 38px;
            height: 38px;
          }

          .mobile-nav-link {
            padding: 0.875rem 1.25rem;
            font-size: 1rem;
            margin: 0 0.75rem;
          }

          .mobile-language-toggle,
          .mobile-theme-toggle {
            padding: 0.875rem 1.25rem;
            font-size: 0.9rem;
            margin: 0.5rem 0.75rem 0;
          }

          .mobile-menu-toggle {
            padding: 0.375rem;
          }

          .control-buttons {
            gap: 0.375rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
