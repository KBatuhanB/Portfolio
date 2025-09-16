/**
 * Education Component - Academic Background and Achievements
 * 
 * This component displays educational information including:
 * - University/school information
 * - Degree details and GPA
 * - Relevant coursework
 * - Academic achievements and honors
 * - Certifications and online courses
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles education display
 * - Open/Closed: Easy to add new educational entries
 * - Liskov Substitution: All education items follow same interface
 */

import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, ExternalLink, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Education data keys for translation
 */
const educationDataKeys = [
  {
    id: 1,
    key: 'gaziUniversity',
    status: 'current'
  },
  {
    id: 2,
    key: 'ankaraMedipolUniversity',
    status: 'completed'
  }
];

/**
 * Certifications and online courses data
 */
// Certifications section removed as requested

/**
 * Education Component
 * 
 * Renders the complete education section with formal education,
 * certifications, and academic achievements.
 * 
 * @returns {JSX.Element} Education section component
 */
const Education = () => {
  // Get language context
  const { t } = useLanguage();
  
  // Get education data with translations
  const getEducationData = (eduKey) => {
    return {
      institution: t(`education.educations.${eduKey}.institution`),
      degree: t(`education.educations.${eduKey}.degree`),
      duration: t(`education.educations.${eduKey}.duration`),
      location: t(`education.educations.${eduKey}.location`),
      gpa: t(`education.educations.${eduKey}.gpa`),
      description: t(`education.educations.${eduKey}.description`),
      achievements: t(`education.educations.${eduKey}.achievements`)
    };
  };
  /**
   * Get status color based on education status
   * 
   * @param {string} status - Education status (current, completed)
   * @returns {string} CSS color value
   */
  const getStatusColor = (status) => {
    switch (status) {
      case 'current':
        return 'var(--primary-color)';
      case 'completed':
        return '#9333EA';
      default:
        return 'var(--primary-color)';
    }
  };

  /**
   * Get status label for display
   * 
   * @param {string} status - Education status
   * @returns {string} Formatted status label
   */
  const getStatusLabel = (status) => {
    switch (status) {
      case 'current':
        return t('education.current');
      case 'completed':
        return t('education.completed');
      default:
        return t('education.current');
    }
  };

  return (
    <div className="education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title fade-in-up">{t('education.title')}</h2>
          <p className="section-description fade-in-up">
            {t('education.description')}
          </p>
        </div>

        <div className="education-content">
          {/* Formal Education */}
          <div className="formal-education">
            <h3 className="subsection-title">
              <GraduationCap size={24} />
              {t('education.academicBackground')}
            </h3>

            <div className="education-timeline">
              {educationDataKeys.map((education, index) => {
                const eduData = getEducationData(education.key);
                return (
                <div key={education.id} className="education-item fade-in-up">
                  <div className="education-card card">
                    {/* Education Header */}
                    <div className="education-header">
                      <div className="education-main">
                        <h4 className="education-degree">{eduData.degree}</h4>
                        <h5 className="education-institution">{eduData.institution}</h5>
                        
                        <div className="education-meta">
                          <span className="education-duration">
                            <Calendar size={16} />
                            {eduData.duration}
                          </span>
                          <span className="education-location">
                            <BookOpen size={16} />
                            {eduData.location}
                          </span>
                          {eduData.gpa && (
                            <span className="education-gpa">
                              <Star size={16} />
                              GPA: {eduData.gpa}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div 
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(education.status) }}
                      >
                        {getStatusLabel(education.status)}
                      </div>
                    </div>

                    {/* Education Description */}
                    <p className="education-description">{eduData.description}</p>

                    {/* Achievements */}
                    <div className="achievements-section">
                      <h6 className="detail-title">{t('education.achievements')}</h6>
                      <ul className="achievements-list">
                        {Array.isArray(eduData.achievements) ? eduData.achievements.map((achievement, idx) => (
                          <li key={idx} className="achievement-item">
                            <Award size={16} />
                            {achievement}
                          </li>
                        )) : <li className="achievement-item"><Award size={16} />{eduData.achievements}</li>}
                      </ul>
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .education {
          position: relative;
          overflow: hidden;
        }

        .education::before {
          content: '';
          position: absolute;
          top: 15%;
          right: -15%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          animation: floatEducation 12s ease-in-out infinite;
        }

        .education::after {
          content: '';
          position: absolute;
          bottom: 10%;
          left: -20%;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          animation: floatEducation 15s ease-in-out infinite reverse;
        }

        @keyframes floatEducation {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-40px) rotate(180deg);
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
          background: linear-gradient(135deg, #1D4ED8, #9333EA, #06B6D4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientEducation 5s ease infinite;
        }

        @keyframes gradientEducation {
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

        .education-content {
          display: grid;
          gap: 4rem;
          position: relative;
          z-index: 1;
        }

        .subsection-title {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Enhanced Formal Education */
        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .education-item {
          position: relative;
        }

        .education-card {
          position: relative;
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.03) 0%, 
            rgba(147, 51, 234, 0.02) 50%, 
            rgba(6, 182, 212, 0.03) 100%);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(29, 78, 216, 0.1);
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
        }

        .education-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.05) 0%, 
            transparent 50%, 
            rgba(147, 51, 234, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
          border-radius: 18px;
        }

        .education-card:hover::before {
          opacity: 1;
        }

        .education-card:hover {
          transform: translateY(-8px);
          border-color: #1D4ED8;
          box-shadow: 
            0 20px 40px rgba(29, 78, 216, 0.2),
            0 8px 25px rgba(147, 51, 234, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        [data-theme="light"] .education-card {
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.02) 0%, 
            rgba(147, 51, 234, 0.01) 50%, 
            rgba(6, 182, 212, 0.02) 100%);
          border: 2px solid rgba(29, 78, 216, 0.08);
        }

        .education-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .education-degree {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
          transition: color 0.3s ease;
        }

        .education-card:hover .education-degree {
          background: linear-gradient(135deg, #1D4ED8, #9333EA);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .education-institution {
          font-size: 1.125rem;
          color: #1D4ED8;
          margin-bottom: 0.75rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .education-card:hover .education-institution {
          color: #1E40AF;
        }

        .education-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .education-duration,
        .education-location,
        .education-gpa {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .education-gpa {
          color: #06B6D4;
          font-weight: 600;
        }

        .education-card:hover .education-duration,
        .education-card:hover .education-location {
          color: var(--text-primary);
        }

        .status-badge {
          padding: 0.5rem 1rem;
          border-radius: 25px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.3);
          position: relative;
          z-index: 2;
        }

        .education-description {
          margin-bottom: 1.5rem;
          color: var(--text-secondary);
          line-height: 1.7;
          position: relative;
          z-index: 2;
        }

        .education-details {
          display: grid;
          gap: 2rem;
          position: relative;
          z-index: 2;
        }

        .detail-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .detail-title::before {
          content: '';
          width: 3px;
          height: 20px;
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          border-radius: 2px;
        }

        /* Enhanced Achievements */
        .achievements-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0;
          color: var(--text-secondary);
          border-bottom: 1px solid rgba(29, 78, 216, 0.1);
          font-size: 0.9rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .achievement-item:hover {
          color: #1D4ED8;
          transform: translateX(8px);
        }

        .achievement-item:last-child {
          border-bottom: none;
        }

        .achievement-item svg {
          color: #1D4ED8;
          flex-shrink: 0;
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .section-description {
            font-size: 1rem;
            max-width: 500px;
          }

          .education-content {
            gap: 3rem;
          }

          .subsection-title {
            font-size: 1.375rem;
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

          .education-content {
            gap: 2.5rem;
          }

          .subsection-title {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
            text-align: center;
            justify-content: center;
          }

          .education-timeline {
            gap: 1.5rem;
          }

          .education-card {
            border-radius: 16px;
            padding: 1.25rem;
          }

          .education-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .status-badge {
            align-self: flex-start;
            padding: 0.375rem 0.875rem;
            font-size: 0.7rem;
            border-radius: 20px;
          }

          .education-degree {
            font-size: 1.125rem;
            margin-bottom: 0.375rem;
          }

          .education-institution {
            font-size: 1rem;
            margin-bottom: 0.625rem;
          }

          .education-meta {
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 1rem;
          }

          .education-duration,
          .education-location,
          .education-gpa {
            font-size: 0.875rem;
          }

          .education-description {
            font-size: 0.9rem;
            margin-bottom: 1.25rem;
            line-height: 1.6;
          }

          .detail-title {
            font-size: 0.95rem;
            margin-bottom: 0.875rem;
          }

          .achievement-item {
            padding: 0.625rem 0;
            font-size: 0.85rem;
          }

          .education::before,
          .education::after {
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

          .education-content {
            gap: 2rem;
          }

          .subsection-title {
            font-size: 1.125rem;
            margin-bottom: 1.25rem;
            flex-direction: column;
            gap: 0.5rem;
          }

          .education-timeline {
            gap: 1.25rem;
          }

          .education-card {
            padding: 1rem;
            border-radius: 12px;
          }

          .education-header {
            gap: 0.875rem;
          }

          .status-badge {
            padding: 0.25rem 0.75rem;
            font-size: 0.65rem;
            align-self: flex-start;
          }

          .education-degree {
            font-size: 1rem;
            margin-bottom: 0.25rem;
          }

          .education-institution {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }

          .education-meta {
            gap: 0.375rem;
            margin-bottom: 0.875rem;
          }

          .education-duration,
          .education-location,
          .education-gpa {
            font-size: 0.8rem;
          }

          .education-description {
            font-size: 0.85rem;
            margin-bottom: 1rem;
            line-height: 1.5;
          }

          .detail-title {
            font-size: 0.9rem;
            margin-bottom: 0.75rem;
          }

          .achievement-item {
            padding: 0.5rem 0;
            font-size: 0.8rem;
            gap: 0.625rem;
          }

          .achievement-item svg {
            width: 14px;
            height: 14px;
          }

          .education::before,
          .education::after {
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

          .subsection-title {
            font-size: 1rem;
          }

          .education-card {
            padding: 0.875rem;
          }

          .education-degree {
            font-size: 0.95rem;
          }

          .education-institution {
            font-size: 0.85rem;
          }

          .education-duration,
          .education-location,
          .education-gpa {
            font-size: 0.75rem;
          }

          .education-description {
            font-size: 0.8rem;
          }

          .achievement-item {
            font-size: 0.75rem;
            gap: 0.5rem;
          }

          .achievement-item svg {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Education;
