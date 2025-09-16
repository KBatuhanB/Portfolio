/**
 * Experience Component - Professional Experience Section
 * 
 * This component displays professional experience including:
 * - Work experience timeline
 * - Skills and technologies
 * - Internships and projects
 * - Professional achievements
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles experience display
 * - Open/Closed: Easy to add new experience items
 * - Liskov Substitution: Experience items follow same interface
 */

import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, Code, Briefcase, Gamepad2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Experience data structure keys for translation
 */
const experienceDataKeys = [
  {
    id: 1,
    key: 'secureComputing',
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Material-UI", "Jest", "Playwright", "Multer", "Git"],
    type: "internship"
  },
  {
    id: 2,
    key: 'ankuGameJam',
    technologies: ["Unity", "C#", "UI/UX", "Game Design"],
    type: "gamejam"
  },
  {
    id: 3,
    key: 'puraGameJam',
    technologies: ["Unity", "C#", "Level Design", "Game Design", "Storytelling"],
    type: "gamejam"
  },
  {
    id: 4,
    key: 'ayazJam',
    technologies: ["Unity", "C#"],
    type: "gamejam"
  }
];

/**
 * Skills categorized by type with translation keys
 */
const skillsData = {
  "programmingLanguages": ["Java", "Kotlin", "Python", "C#", "C", "JavaScript"],
  "webTechnologies": ["React", "Node.js", "Express.js", "HTML5"],
  "mobileGameDevelopment": ["Unity", "Kotlin"],
  "testingAutomation": ["Jest", "Selenium", "Playwright"],
  "databases": ["MongoDB"]
};

/**
 * Experience Component
 * 
 * Renders the complete experience section with timeline and skills.
 * Uses responsive design for optimal viewing on all devices.
 * 
 * @returns {JSX.Element} Experience section component
 */
const Experience = () => {
  // Get language context
  const { t } = useLanguage();
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('all');
  const itemsPerPage = 3;

  // Filter experiences based on selected filter
  const filteredExperiences = activeFilter === 'all' 
    ? experienceDataKeys 
    : experienceDataKeys.filter(exp => exp.type === activeFilter);

  // Calculate pagination for filtered data
  const totalPages = Math.ceil(filteredExperiences.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExperiences = filteredExperiences.slice(startIndex, endIndex);

  // Get experience data with translations
  const getExperienceData = (expKey) => {
    return {
      company: t(`experience.experiences.${expKey}.company`),
      role: t(`experience.experiences.${expKey}.role`),
      duration: t(`experience.experiences.${expKey}.duration`),
      location: t(`experience.experiences.${expKey}.location`),
      description: t(`experience.experiences.${expKey}.description`)
    };
  };

  // Reset to page 1 when filter changes
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  /**
   * Get icon based on experience type
   * 
   * @param {string} type - Type of experience (internship, research, freelance)
   * @returns {JSX.Element} Appropriate icon component
   */
  const getExperienceIcon = (type) => {
    switch (type) {
      case 'internship':
        return <Briefcase size={30} />;
      case 'research':
        return <Code size={20} />;
      case 'freelance':
        return <ExternalLink size={20} />;
      case 'gamejam':
        return <Gamepad2 size={30} />;
      default:
        return <Briefcase size={20} />;
    }
  };

  /**
   * Get color theme based on experience type
   * 
   * @param {string} type - Type of experience
   * @returns {string} CSS color variable
   */
  const getTypeColor = (type) => {
    switch (type) {
      case 'internship':
        return 'var(--primary-color)';
      case 'research':
        return 'var(--accent-color)';
      case 'freelance':
        return '#10b981';
      default:
        return 'var(--primary-color)';
    }
  };

  return (
    <div className="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title fade-in-up">{t('experience.title')}</h2>
          <p className="section-description fade-in-up">
            {t('experience.description')}
          </p>
        </div>

        <div className="experience-content">
          {/* Experience Timeline */}
          <div className="experience-timeline">
            <h3 className="subsection-title">{t('experience.experienceTitle')}</h3>
            
            {/* Filter Buttons */}
            <div className="filter-buttons">
              <button 
                onClick={() => handleFilterChange('all')}
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              >
                <Briefcase size={16} />
                {t('experience.allFilter')}
              </button>
              <button 
                onClick={() => handleFilterChange('internship')}
                className={`filter-btn ${activeFilter === 'internship' ? 'active' : ''}`}
              >
                <Briefcase size={16} />
                {t('experience.internshipFilter')}
              </button>
              <button 
                onClick={() => handleFilterChange('gamejam')}
                className={`filter-btn ${activeFilter === 'gamejam' ? 'active' : ''}`}
              >
                <Gamepad2 size={16} />
                {t('experience.gamejamFilter')}
              </button>
              <button 
                onClick={() => handleFilterChange('freelance')}
                className={`filter-btn ${activeFilter === 'freelance' ? 'active' : ''}`}
              >
                <ExternalLink size={16} />
                Freelance
              </button>
            </div>
            
            <div className="timeline">
              {currentExperiences.map((experience, index) => {
                const expData = getExperienceData(experience.key);
                return (
                <div key={experience.id} className={`timeline-item fade-in-up`}>
                  {/* Timeline Connector */}
                  <div className="timeline-connector">
                    <div 
                      className="timeline-icon"
                      style={{ backgroundColor: getTypeColor(experience.type) }}
                    >
                      {getExperienceIcon(experience.type)}
                    </div>
                    {index < currentExperiences.length - 1 && (
                      <div className="timeline-line"></div>
                    )}
                  </div>

                  {/* Experience Content */}
                  <div className="timeline-content">
                    <div className="experience-card card">
                      {/* Experience Header */}
                      <div className="experience-header">
                        <h4 className="experience-role">{expData.role}</h4>
                        <h5 className="experience-company">{expData.company}</h5>
                        
                        <div className="experience-meta">
                          <span className="experience-duration">
                            <Calendar size={16} />
                            {expData.duration}
                          </span>
                          <span className="experience-location">
                            <MapPin size={16} />
                            {expData.location}
                          </span>
                        </div>
                      </div>

                      {/* Experience Description */}
                      <ul className="experience-description">
                        {Array.isArray(expData.description) ? expData.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        )) : <li>{expData.description}</li>}
                      </ul>

                      {/* Technologies Used */}
                      <div className="experience-technologies">
                        {experience.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="pagination-controls">
                <button 
                  onClick={goToPrevious}
                  disabled={currentPage === 1}
                  className="pagination-btn"
                >
                  <ChevronLeft size={16} />
                  {t('experience.previous')}
                </button>

                <div className="pagination-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={goToNext}
                  disabled={currentPage === totalPages}
                  className="pagination-btn"
                >
                  {t('experience.next')}
                  <ChevronRight size={16} />
                </button>
              </div>
            )}

            {/* No results message */}
            {filteredExperiences.length === 0 && (
              <div className="no-results">
                <p>No experiences found for this category.</p>
              </div>
            )}
          </div>

          {/* Skills Section */}
          <div className="skills-section">
            <h3 className="subsection-title">{t('experience.skillsTitle')}</h3>
            
            <div className="skills-grid">
              {Object.entries(skillsData).map(([categoryKey, skills]) => (
                <div key={categoryKey} className="skill-category card fade-in-up">
                  <h4 className="skill-category-title">{t(`experience.skills.${categoryKey}`)}</h4>
                  <div className="skill-items">
                    {skills.map((skill) => (
                      <span key={skill} className="skill-item">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience {
          position: relative;
          overflow: hidden;
        }

        .experience::before {
          content: '';
          position: absolute;
          top: 20%;
          left: -10%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          animation: floatExperience 14s ease-in-out infinite;
        }

        .experience::after {
          content: '';
          position: absolute;
          bottom: 15%;
          right: -15%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          animation: floatExperience 10s ease-in-out infinite reverse;
        }

        @keyframes floatExperience {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-35px) rotate(180deg);
          }
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .section-title {
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #9333EA, #1D4ED8, #06B6D4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientExperience 6s ease infinite;
        }

        @keyframes gradientExperience {
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

        .section-description {
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .experience-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          position: relative;
          z-index: 1;
        }

        .subsection-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        /* Enhanced Filter Buttons */
        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(147, 51, 234, 0.2);
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(29, 78, 216, 0.05));
          border: 2px solid rgba(147, 51, 234, 0.3);
          border-radius: 25px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 600;
          font-size: 0.9rem;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .filter-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .filter-btn:hover::before {
          left: 100%;
        }

        .filter-btn:hover {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
          border-color: #9333EA;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
          border-color: #9333EA;
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
        }

        [data-theme="light"] .filter-btn {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.08), rgba(29, 78, 216, 0.03));
          border: 2px solid rgba(147, 51, 234, 0.2);
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 3rem 0;
          color: var(--text-secondary);
        }

        .no-results p {
          font-size: 1.1rem;
          margin: 0;
        }

        /* Enhanced Timeline Styles */
        .timeline {
          position: relative;
        }

        .timeline-item {
          display: flex;
          margin-bottom: 2rem;
        }

        .timeline-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 2rem;
        }

        .timeline-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .timeline-item:hover .timeline-icon {
          transform: scale(1.1) rotate(360deg);
          box-shadow: 0 12px 30px rgba(147, 51, 234, 0.5);
        }

        .timeline-line {
          width: 3px;
          height: 100%;
          background: linear-gradient(180deg, rgba(147, 51, 234, 0.3), rgba(29, 78, 216, 0.2));
          margin-top: 1rem;
          min-height: 60px;
          border-radius: 2px;
        }

        .timeline-content {
          flex: 1;
        }

        .experience-card {
          position: relative;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.03) 0%, 
            rgba(29, 78, 216, 0.02) 50%, 
            rgba(6, 182, 212, 0.03) 100%);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(147, 51, 234, 0.1);
          border-radius: 20px;
          border-left: 4px solid transparent;
          overflow: hidden;
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.05) 0%, 
            transparent 50%, 
            rgba(29, 78, 216, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
          border-radius: 18px;
        }

        .experience-card:hover::before {
          opacity: 1;
        }

        .experience-card:hover {
          transform: translateX(4px);
          border-left-color: #9333EA;
          border-color: #9333EA;
          box-shadow: 
            0 20px 40px rgba(147, 51, 234, 0.2),
            0 8px 25px rgba(29, 78, 216, 0.15);
          background: var(--background-primary);
        }

        [data-theme="light"] .experience-card {
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.02) 0%, 
            rgba(29, 78, 216, 0.01) 50%, 
            rgba(6, 182, 212, 0.02) 100%);
          border: 2px solid rgba(147, 51, 234, 0.08);
        }

        [data-theme="dark"] .experience-card:hover {
          box-shadow: 
            0 20px 40px rgba(147, 51, 234, 0.3),
            0 8px 25px rgba(29, 78, 216, 0.25);
        }

        .experience-header {
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .experience-role {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .experience-card:hover .experience-role {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .experience-company {
          font-size: 1.125rem;
          color: #9333EA;
          margin-bottom: 0.75rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .experience-card:hover .experience-company {
          color: #7c3aed;
        }

        .experience-meta {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .experience-duration,
        .experience-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .experience-card:hover .experience-duration,
        .experience-card:hover .experience-location {
          color: var(--text-primary);
        }

        .experience-description {
          margin: 1rem 0;
          padding-left: 1rem;
          position: relative;
          z-index: 2;
        }

        .experience-description li {
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .experience-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
          position: relative;
          z-index: 2;
        }

        .tech-tag {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(147, 51, 234, 0.3);
        }

        .tech-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(147, 51, 234, 0.4);
        }

        [data-theme="light"] .tech-tag {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
        }

        /* Enhanced Skills Section */
        .skills-grid {
          display: grid;
          gap: 1.5rem;
        }

        .skill-category {
          padding: 1.5rem;
          transition: all 0.3s ease;
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.03) 0%, 
            rgba(29, 78, 216, 0.02) 100%);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(147, 51, 234, 0.1);
          border-radius: 15px;
          border-left: 3px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .skill-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .skill-category:hover::before {
          left: 100%;
        }

        .skill-category:hover {
          border-left-color: #9333EA;
          border-color: #9333EA;
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(147, 51, 234, 0.2);
        }

        [data-theme="light"] .skill-category {
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.02) 0%, 
            rgba(29, 78, 216, 0.01) 100%);
          border: 2px solid rgba(147, 51, 234, 0.08);
        }

        [data-theme="dark"] .skill-category:hover {
          box-shadow: 0 12px 30px rgba(147, 51, 234, 0.3);
        }

        [data-theme="dark"] .skill-category::before {
          background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.2), transparent);
        }

        .skill-category-title {
          font-size: 1.125rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .skill-category:hover .skill-category-title {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .skill-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-item {
          padding: 0.5rem 0;
          color: var(--text-secondary);
          border-bottom: 1px solid rgba(147, 51, 234, 0.1);
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .skill-item::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #9333EA, #1D4ED8);
          transition: width 0.3s ease;
        }

        .skill-item:hover {
          color: #9333EA;
          transform: translateX(4px);
        }

        .skill-item:hover::before {
          width: 100%;
        }

        .skill-item:last-child {
          border-bottom: none;
        }

        /* Enhanced Pagination Styles */
        .pagination-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
          padding: 1rem 0;
        }

        .pagination-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(29, 78, 216, 0.05));
          border: 2px solid rgba(147, 51, 234, 0.3);
          border-radius: 12px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .pagination-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
          border-color: #9333EA;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
        }

        .pagination-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pagination-numbers {
          display: flex;
          gap: 0.5rem;
        }

        .pagination-number {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(29, 78, 216, 0.05));
          border: 2px solid rgba(147, 51, 234, 0.3);
          border-radius: 12px;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .pagination-number:hover {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
          border-color: #9333EA;
          transform: scale(1.1);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4);
        }

        .pagination-number.active {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          color: white;
          border-color: #9333EA;
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.4);
        }

        [data-theme="light"] .pagination-btn,
        [data-theme="light"] .pagination-number {
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.08), rgba(29, 78, 216, 0.03));
          border: 2px solid rgba(147, 51, 234, 0.2);
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .experience-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .section-description {
            font-size: 1rem;
            max-width: 500px;
          }

          .filter-buttons {
            justify-content: center;
          }

          .timeline-connector {
            margin-right: 1.5rem;
          }

          .timeline-icon {
            width: 44px;
            height: 44px;
          }
        }

        @media (max-width: 768px) {
          .section-header {
            margin-bottom: 3rem;
          }

          .section-title {
            font-size: 2.25rem;
          }

          .section-description {
            font-size: 1rem;
            max-width: 100%;
            padding: 0 1rem;
          }

          .subsection-title {
            font-size: 1.375rem;
            margin-bottom: 1.5rem;
            text-align: center;
          }

          .filter-buttons {
            justify-content: center;
            gap: 0.625rem;
            margin-bottom: 1.5rem;
            padding: 0.75rem 0;
          }

          .filter-btn {
            padding: 0.625rem 0.875rem;
            font-size: 0.85rem;
            border-radius: 20px;
            min-width: auto;
          }

          .timeline-item {
            margin-bottom: 1.5rem;
          }

          .timeline-connector {
            margin-right: 1rem;
          }

          .timeline-icon {
            width: 40px;
            height: 40px;
          }

          .timeline-line {
            width: 2px;
            min-height: 40px;
          }

          .experience-card {
            border-radius: 16px;
            padding: 1.25rem;
          }

          .experience-role {
            font-size: 1.125rem;
          }

          .experience-company {
            font-size: 1rem;
          }

          .experience-meta {
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 1rem;
          }

          .experience-duration,
          .experience-location {
            font-size: 0.875rem;
          }

          .experience-description {
            padding-left: 0;
            margin: 1rem 0;
          }

          .experience-description li {
            font-size: 0.9rem;
            margin-bottom: 0.375rem;
          }

          .experience-technologies {
            margin-top: 1rem;
          }

          .tech-tag {
            padding: 0.375rem 0.75rem;
            font-size: 0.8rem;
            border-radius: 16px;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.875rem;
          }

          .skill-category {
            padding: 0.875rem;
            border-radius: 12px;
          }

          .skill-category-title {
            font-size: 0.9rem;
            margin-bottom: 0.625rem;
            text-align: center;
          }

          .skill-items {
            gap: 0.25rem;
          }

          .skill-item {
            padding: 0.375rem 0;
            font-size: 0.8rem;
            border-bottom: 1px solid rgba(147, 51, 234, 0.08);
          }

          .pagination-controls {
            flex-direction: column;
            gap: 1rem;
            margin-top: 1.5rem;
          }

          .pagination-btn {
            padding: 0.625rem 0.875rem;
            font-size: 0.9rem;
            border-radius: 10px;
          }

          .pagination-numbers {
            gap: 0.375rem;
          }

          .pagination-number {
            width: 36px;
            height: 36px;
            font-size: 0.875rem;
            border-radius: 10px;
          }

          .experience::before,
          .experience::after {
            width: 350px;
            height: 350px;
          }
        }

        @media (max-width: 480px) {
          .section-header {
            margin-bottom: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-description {
            font-size: 0.95rem;
            padding: 0 0.5rem;
          }

          .subsection-title {
            font-size: 1.25rem;
            margin-bottom: 1.25rem;
          }

          .filter-buttons {
            flex-wrap: wrap;
            gap: 0.5rem;
            padding: 0.5rem 0;
          }

          .filter-btn {
            padding: 0.5rem 0.75rem;
            font-size: 0.8rem;
            flex: 1;
            min-width: 120px;
            justify-content: center;
          }

          .timeline-item {
            margin-bottom: 1.25rem;
          }

          .timeline-connector {
            margin-right: 0.75rem;
          }

          .timeline-icon {
            width: 36px;
            height: 36px;
          }

          .timeline-line {
            width: 2px;
            min-height: 30px;
          }

          .experience-card {
            padding: 1rem;
            border-radius: 12px;
          }

          .experience-role {
            font-size: 1rem;
            margin-bottom: 0.375rem;
          }

          .experience-company {
            font-size: 0.9rem;
            margin-bottom: 0.625rem;
          }

          .experience-meta {
            gap: 0.375rem;
            margin-bottom: 0.875rem;
          }

          .experience-duration,
          .experience-location {
            font-size: 0.8rem;
          }

          .experience-description li {
            font-size: 0.85rem;
            margin-bottom: 0.25rem;
          }

          .tech-tag {
            padding: 0.25rem 0.625rem;
            font-size: 0.75rem;
            border-radius: 12px;
          }

          .skill-category {
            padding: 1rem;
          }

          .skill-category-title {
            font-size: 0.95rem;
            margin-bottom: 0.75rem;
          }

          .skill-item {
            padding: 0.5rem 0;
            font-size: 0.85rem;
          }

          .pagination-controls {
            gap: 0.75rem;
          }

          .pagination-btn {
            padding: 0.5rem 0.75rem;
            font-size: 0.85rem;
            width: 100%;
            max-width: 150px;
          }

          .pagination-number {
            width: 32px;
            height: 32px;
            font-size: 0.8rem;
          }

          .no-results {
            padding: 2rem 0;
          }

          .no-results p {
            font-size: 0.95rem;
          }

          .experience::before,
          .experience::after {
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 375px) {
          .section-title {
            font-size: 1.875rem;
          }

          .section-description {
            font-size: 0.9rem;
          }

          .filter-btn {
            font-size: 0.75rem;
            padding: 0.5rem 0.625rem;
            min-width: 100px;
          }

          .timeline-icon {
            width: 32px;
            height: 32px;
          }

          .experience-card {
            padding: 0.875rem;
          }

          .experience-role {
            font-size: 0.95rem;
          }

          .experience-company {
            font-size: 0.85rem;
          }

          .tech-tag {
            padding: 0.25rem 0.5rem;
            font-size: 0.7rem;
          }

          .pagination-number {
            width: 28px;
            height: 28px;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
