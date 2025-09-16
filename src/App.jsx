/**
 * Main App Component - Portfolio Website
 * 
 * This component serves as the main entry point for the portfolio website.
 * It includes all major sections: Navigation, Personal Info, Experience, Projects, and Education.
 * Uses React hooks for state management and implements smooth scrolling navigation.
 * Includes dark/light theme support with ThemeProvider.
 * 
 * Architecture follows SOLID principles:
 * - Single Responsibility: Each component handles one specific section
 * - Open/Closed: Easy to extend with new sections
 * - Interface Segregation: Components only receive props they need
 */

import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import PersonalInfo from './components/PersonalInfo';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

/**
 * App Component - Main application container
 * 
 * Renders the complete portfolio structure with all sections wrapped in ThemeProvider.
 * Each section is wrapped in a main tag with appropriate IDs for navigation.
 * 
 * @returns {JSX.Element} Complete portfolio application with theme support
 */
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          {/* Fixed Navigation Bar */}
          <Navigation />
          
          {/* Main Content Sections */}
          <main>
            {/* Personal Information Section */}
            <section id="personal" className="section">
              <PersonalInfo />
            </section>

            {/* Experience Section */}
            <section id="experience" className="section">
              <Experience />
            </section>

            {/* Projects Section */}
            <section id="projects" className="section">
              <Projects />
            </section>

            {/* Education Section */}
            <section id="education" className="section">
              <Education />
            </section>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}export default App;
