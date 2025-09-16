/**
 * Projects Component - Showcase of Personal and Academic Projects
 * 
 * This component displays a portfolio of projects including:
 * - Project cards with descriptions and technologies
 * - Live demo and source code links
 * - Project categories and filtering
 * - Responsive grid layout
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles project display
 * - Open/Closed: Easy to add new projects and categories
 * - Interface Segregation: Project data follows consistent structure
 */

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Github, ExternalLink, Code, Globe, Gamepad2, Smartphone, Server, Info, X, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Projects data structure for dynamic rendering
 */
const projectsKeys = [
  {
    id: 1,
    key: "collectify",
    categories: ["web", "backend"],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "Material-UI", "Jest", "Playwright", "Chart.js", "Multer"],
    images: [
      "/Portfolio/assets/Collectify1.png",
      "/Portfolio/assets/Collectify2.png", 
      "/Portfolio/assets/Collectify3.png",
      "/Portfolio/assets/Collectify4.png"
    ],
    image: "/api/placeholder/400/250",
    demoUrl: null,
    githubUrl: "https://github.com/KBatuhanB/Collectify-Books-Movies-Games-Collection-Manager-Full-Stack-",
    featured: true,
    status: "completed"
  },
  {
    id: 2,
    key: "projectManagement",
    categories: ["web", "backend"],
    technologies: ["React", "Material-UI", "Recharts", "React Query", "Node.js", "Express", "MongoDB", "Axios"],
    images: [
      "/Portfolio/assets/ProjectManagment.png",
      "/Portfolio/assets/ProjectManagment2.png"
    ],
    image: "/api/placeholder/400/250",
    demoUrl: null,
    githubUrl: "https://github.com/KBatuhanB/Project-Management-Panel",
    featured: true,
    status: "completed"
  },
  {
    id: 7,
    key: "pythonIn20Days",
    categories: ["mobile"],
    technologies: [
      "Kotlin", "Jetpack Compose", "Material 3", "MVVM", "Navigation Component", "SharedPreferences", "Custom Animations", "Manual DI", "Gradle", "Android Studio"
    ],
    images: [
      "/Portfolio/assets/PyhtonIn20Days1.jpg",
      "/Portfolio/assets/PyhtonIn20Days2.jpg",
      "/Portfolio/assets/PyhtonIn20Days3.jpg",
      "/Portfolio/assets/PyhtonIn20Days4.jpg"
    ],
    image: "/api/placeholder/400/250",
    demoUrl: "https://drive.google.com/file/d/1AoQr3gtaGzhfCeQ5O3BWnc5oRgzJyWsZ/view?usp=sharing",
    githubUrl: "https://github.com/KBatuhanB/Kotlin-Mobill-App-PhytonIn20Days",
    featured: true,
    status: "completed"
  },
  {
    id: 8,
    key: "axolotlAscension",
    categories: ["game"],
    technologies: ["Unity", "C#", "Coroutines", "Object Pooling", "Singleton Pattern", "State Machine", "Git"],
    images: [
      "/Portfolio/assets/AxoltlAccension1.png",
      "/Portfolio/assets/AxoltlAccension2.png",
      "/Portfolio/assets/AxoltlAccension3.png",
      "/Portfolio/assets/AxoltlAccension4.png",
      "/Portfolio/assets/AxoltlAccension5.png"
    ],
    image: "/api/placeholder/400/250",
    demoUrl: "https://fiuby.com/games/axolotl-ascension",
    githubUrl: "https://github.com/KBatuhanB/Ankus-Axos-GameJam-Game",
    featured: true,
    status: "completed"
  },
  {
    id: 9,
    key: "paperTale",
    categories: ["game"],
    technologies: ["Unity", "C#", "Level Design", "Game Design", "Storytelling", "Narrative Design"],
    images: [
      "/Portfolio/assets/PaperTale.png",
      "/Portfolio/assets/PaperTale1.png",
      "/Portfolio/assets/PaperTale2.png",
      "/Portfolio/assets/PaperTale3.png",
      "/Portfolio/assets/PaperTale4.png",
      "/Portfolio/assets/PaperTale5.png"
    ],
    image: "/api/placeholder/400/250",
    demoUrl: "https://erque.itch.io/papertale",
    featured: true,
    status: "completed"
  },
  {
    id: 10,
    key: "vslikeGame",
    categories: ["game"],
    technologies: ["Unity", "C#", "Game Design", "UI/UX Design", "Marketing", "Solo Development", "Indie Game Development"],
    images: [
      "/Portfolio/assets/vslike1.png",
      "/Portfolio/assets/vslike2.png",
      "/Portfolio/assets/vslike3.png",
      "/Portfolio/assets/vslike4.png"
    ],
    image: "/api/placeholder/400/250",
    demoUrl: "https://www.youtube.com/@0toMillion-dev",
    githubUrl: null,
    featured: true,
    status: "in-progress"
  },
  {
    id: 3,
    key: "todoApi",
    categories: ["backend"],
    technologies: ["Node.js", "Express.js", "MongoDB", "Swagger", "Jest", "UUID", "dotenv"],
    images: [
      "/Portfolio/assets/TOD-API.png"
    ],
    demoUrl: null,
    githubUrl: "https://github.com/KBatuhanB/Todo-API",
    featured: false,
    status: "completed"
  },
  {
    id: 4,
    key: "softwareTestingSuite",
    categories: ["testing"],
    technologies: ["Playwright", "Jest", "Node.js", "MongoDB", "JavaScript"],
    images: [
      "/Portfolio/assets/Playwright1.png",
      "/Portfolio/assets/Playwright2.png"
    ],
    demoUrl: null,
    githubUrl: "https://github.com/KBatuhanB/Software-Tests",
    featured: false,
    status: "completed"
  },
  {
    id: 5,
    key: "pythonSeleniumAutomation",
    categories: ["testing"],
    technologies: ["Python", "Selenium", "Web Automation", "Data Structures"],
    images: ["/Portfolio/assets/pyhtonExample1.png"],
    demoUrl: null,
    githubUrl: "https://github.com/KBatuhanB/Phyton-Selenium-Tests-Examples",
    featured: false,
    status: "completed"
  }
];

/**
 * Project categories for filtering
 */
const categories = [
  { id: 'all', label: 'projects.allFilter', icon: <Code size={20} /> },
  { id: 'web', label: 'projects.webFilter', icon: <Globe size={20} /> },
  { id: 'backend', label: 'projects.backendFilter', icon: <Server size={20} /> },
  { id: 'game', label: 'projects.gameFilter', icon: <Gamepad2 size={20} /> },
  { id: 'mobile', label: 'projects.mobileFilter', icon: <Smartphone size={20} /> },
  { id: 'testing', label: 'projects.toolsFilter', icon: <Code size={20} /> }
];

/**
 * Projects Component
 * 
 * Renders the projects section with filtering capabilities and responsive grid.
 * Includes featured projects highlighting and project status indicators.
 * 
 * @returns {JSX.Element} Projects section component
 */
const Projects = () => {
  // Get language context
  const { t } = useLanguage();
  
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('all');
  // State for modal
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // 2 rows x 3 columns for desktop, 4 for mobile
  // State for image gallery - sürekli otomatik değişim için
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});
  const [modalImageIndex, setModalImageIndex] = useState({});
  // Animation states
  const [imageAnimations, setImageAnimations] = useState({});
  const [modalImageAnimations, setModalImageAnimations] = useState({});

  /**
   * Transform project data with translations
   */
  const getProjectsData = () => {
    return projectsKeys.map(projectKey => {
      // Get the translation object directly
      const projectTranslation = t('projects.data');
      const translatedData = projectTranslation?.[projectKey.key];
      
      return {
        ...projectKey,
        title: translatedData?.title || projectKey.key,
        description: translatedData?.description || [],
        detailedInfo: translatedData?.detailedInfo || {}
      };
    });
  };

  const projectsData = getProjectsData();

  /**
   * Open project details modal
   * 
   * @param {Object} project - Project to display details for
   */
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  /**
   * Close project details modal
   */
  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  /**
   * Filter projects based on selected category
   * 
   * @returns {Array} Filtered array of projects
   */
  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.categories.includes(activeCategory));

  // Calculate pagination with responsive projects per page
  const getProjectsPerPage = () => {
    if (window.innerWidth <= 768) {
      return 4; // 2x2 for mobile
    }
    return 6; // 2x3 for desktop
  };

  const [projectsPerPageState, setProjectsPerPageState] = useState(getProjectsPerPage());

  // Update projects per page on window resize
  useEffect(() => {
    const handleResize = () => {
      const newProjectsPerPage = getProjectsPerPage();
      if (newProjectsPerPage !== projectsPerPageState) {
        setProjectsPerPageState(newProjectsPerPage);
        setCurrentPage(1); // Reset to first page when changing layout
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [projectsPerPageState]);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPageState);
  const startIndex = (currentPage - 1) * projectsPerPageState;
  const endIndex = startIndex + projectsPerPageState;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Sürekli otomatik görsel değişimi için useEffect
  useEffect(() => {
    const intervals = {};
    
    // Her projede görsel varsa otomatik değişimi başlat
    projectsData.forEach(project => {
      if (project.images && project.images.length > 1) {
        intervals[project.id] = setInterval(() => {
          // Fade out animasyonu başlat
          setImageAnimations(prev => ({ ...prev, [project.id]: 'fade-out' }));
          
          // 600ms sonra resmi değiştir ve fade in yap (daha yumuşak geçiş)
          setTimeout(() => {
            setCurrentImageIndexes(prev => ({
              ...prev,
              [project.id]: ((prev[project.id] || 0) + 1) % project.images.length
            }));
            setImageAnimations(prev => ({ ...prev, [project.id]: 'fade-in' }));
            
            // Animasyon bitince class'ı temizle (daha uzun süre)
            setTimeout(() => {
              setImageAnimations(prev => ({ ...prev, [project.id]: '' }));
            }, 1200);
          }, 600);
        }, 4000); // 4 saniyede bir değiş
      }
    });

    // Cleanup function
    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [projectsData]);

  // Reset to page 1 when filter changes
  const handleFilterChange = (filter) => {
    setActiveCategory(filter);
    setCurrentPage(1);
  };

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page);
    // Scroll to top of projects section
    document.querySelector('.projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Modal image rotation için ayrı useEffect
  useEffect(() => {
    if (isModalOpen && selectedProject?.images && selectedProject.images.length > 1) {
      const interval = setInterval(() => {
        // Modal fade out animasyonu başlat
        setModalImageAnimations(prev => ({ ...prev, [selectedProject.id]: 'fade-out' }));
        
        // 600ms sonra resmi değiştir ve fade in yap (daha yumuşak geçiş)
        setTimeout(() => {
          setModalImageIndex(prev => ({
            ...prev,
            [selectedProject.id]: ((prev[selectedProject.id] || 0) + 1) % selectedProject.images.length
          }));
          setModalImageAnimations(prev => ({ ...prev, [selectedProject.id]: 'fade-in' }));
          
          // Animasyon bitince class'ı temizle (daha uzun süre)
          setTimeout(() => {
            setModalImageAnimations(prev => ({ ...prev, [selectedProject.id]: '' }));
          }, 1200);
        }, 600);
      }, 4000); // Modal'da da 4 saniyede bir değiş

      return () => clearInterval(interval);
    }
  }, [isModalOpen, selectedProject]);

  /**
   * Get status color based on project status
   * 
   * @param {string} status - Project status
   * @returns {string} CSS color value
   */
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return '#9333EA';
      case 'in-progress':
        return '#06B6D4';
      case 'planned':
        return '#1D4ED8';
      default:
        return '#9333EA';
    }
  };

  /**
   * Get status label for display
   * 
   * @param {string} status - Project status
   * @returns {string} Formatted status label
   */
  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed':
        return t('projects.status.completed');
      case 'in-progress':
        return t('projects.status.inProgress');
      case 'planned':
        return t('projects.status.planned');
      default:
        return t('projects.status.completed');
    }
  };

  return (
    <div className="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title fade-in-up">
            {t('projects.title')}
          </h2>
          <p className="section-description fade-in-up">
            {t('projects.description')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="project-filters fade-in-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`filter-button ${activeCategory === category.id ? 'active' : ''}`}
              aria-label={`Filter by ${t(category.label)}`}
            >
              {category.icon}
              {t(category.label)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card card fade-in-up ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openProjectModal(project)}
            >
              {/* Project Image */}
              <div className="project-image">
                {project.images && project.images.length > 0 ? (
                  <div 
                    className="image-gallery"
                    style={{
                      '--bg-image': `url(${project.images[currentImageIndexes[project.id] || 0]})`
                    }}
                  >
                    <img 
                      src={project.images[currentImageIndexes[project.id] || 0]} 
                      alt={`${project.title} screenshot`}
                      className={`project-screenshot ${imageAnimations[project.id] || ''}`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="image-placeholder" style={{ display: 'none' }}>
                      <div className="placeholder-content">
                        <Code size={48} />
                        <p>Project Screenshot</p>
                      </div>
                    </div>
                    {/* Image indicators */}
                    {project.images.length > 1 && (
                      <div className="image-indicators">
                        {project.images.map((_, imgIndex) => (
                          <div 
                            key={imgIndex}
                            className={`indicator ${(currentImageIndexes[project.id] || 0) === imgIndex ? 'active' : ''}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="image-placeholder">
                    <div className="placeholder-content">
                      <Code size={48} />
                      <p>Project Screenshot</p>
                    </div>
                  </div>
                )}
                
                {/* Status Badge */}
                <div 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(project.status) }}
                >
                  {getStatusLabel(project.status)}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="featured-star">
                    <Star size={20} />
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description">
                  {Array.isArray(project.description) ? (
                    <ul className="description-list">
                      {project.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{project.description}</p>
                  )}
                </div>

                {/* Technologies */}
                <div className="project-technologies">
                  <div className="tech-carousel">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {project.technologies.map((tech, index) => (
                      <span key={`${tech}-duplicate-${index}`} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className={`project-links ${project.demoUrl && project.githubUrl ? 'multiple-links' : 'single-link'}`}>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                      aria-label={`View live demo of ${project.title}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                      {t('projects.viewLive')}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link source-link"
                      aria-label={`View source code of ${project.title}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                      {t('projects.viewCode')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination-container fade-in-up">
            <div className="pagination">
              <button
                className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={goToPrevious}
                disabled={currentPage === 1}
                aria-label="Go to previous page"
              >
                <ChevronLeft size={20} />
                {t('projects.previous')}
              </button>

              <div className="pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                    onClick={() => goToPage(page)}
                    aria-label={`Go to page ${page}`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={goToNext}
                disabled={currentPage === totalPages}
                aria-label="Go to next page"
              >
                {t('projects.next')}
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="pagination-info">
              {t('projects.showing')} {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} {t('projects.of')} {filteredProjects.length} {t('projects.projects')}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <Code size={64} />
            <h3>No projects found</h3>
            <p>No projects match the selected category.</p>
          </div>
        )}
      </div>

      {/* Render Modal with Portal outside of Projects section */}
      {isModalOpen && selectedProject && createPortal(
        <div className="modal-overlay" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <button 
                className="modal-close-btn"
                onClick={closeProjectModal}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Project Image Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <div 
                  className="modal-image-gallery"
                  style={{
                    '--modal-bg-image': `url(${selectedProject.images[modalImageIndex[selectedProject.id] || 0]})`
                  }}
                >
                  <img 
                    src={selectedProject.images[modalImageIndex[selectedProject.id] || 0]} 
                    alt={`${selectedProject.title} screenshot`}
                    className={`modal-screenshot ${modalImageAnimations[selectedProject.id] || ''}`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="modal-image-placeholder" style={{ display: 'none' }}>
                    <div className="placeholder-content">
                      <Code size={64} />
                      <p>Project Screenshot</p>
                    </div>
                  </div>
                  {/* Modal Image indicators */}
                  {selectedProject.images.length > 1 && (
                    <div className="modal-image-indicators">
                      {selectedProject.images.map((_, imgIndex) => (
                        <div 
                          key={imgIndex}
                          className={`modal-indicator ${(modalImageIndex[selectedProject.id] || 0) === imgIndex ? 'active' : ''}`}
                          onClick={() => {
                            // Manuel değişim için animasyon
                            setModalImageAnimations(prev => ({ ...prev, [selectedProject.id]: 'fade-out' }));
                            setTimeout(() => {
                              setModalImageIndex(prev => ({ ...prev, [selectedProject.id]: imgIndex }));
                              setModalImageAnimations(prev => ({ ...prev, [selectedProject.id]: 'fade-in' }));
                              setTimeout(() => {
                                setModalImageAnimations(prev => ({ ...prev, [selectedProject.id]: '' }));
                              }, 1200);
                            }, 600);
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="modal-image">
                  <div className="image-placeholder">
                    <div className="placeholder-content">
                      <Code size={64} />
                      <p>Project Screenshot</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Project Overview */}
              <div className="modal-section">
                <h3>{t('projects.modal.projectOverview')}</h3>
                <p>{selectedProject.detailedInfo?.overview || 'No detailed overview available.'}</p>
              </div>

              {/* Key Features */}
              {selectedProject.detailedInfo?.features && (
                <div className="modal-section">
                  <h3>{t('projects.modal.keyFeatures')}</h3>
                  <ul className="feature-list">
                    {selectedProject.detailedInfo.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technical Details */}
              {selectedProject.detailedInfo?.techDetails && (
                <div className="modal-section">
                  <h3>{t('projects.modal.technicalStack')}</h3>
                  <div className="tech-details">
                    {Object.entries(selectedProject.detailedInfo.techDetails).map(([category, techs]) => (
                      <div key={category} className="tech-category">
                        <h4>{category}</h4>
                        <div className="tech-items">
                          {techs.map((tech, index) => (
                            <span key={index} className="tech-item">{tech}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Learning Outcomes */}
              {selectedProject.detailedInfo?.learningOutcomes && (
                <div className="modal-section">
                  <h3>{t('projects.modal.learningOutcomes')}</h3>
                  <ul className="learning-list">
                    {selectedProject.detailedInfo.learningOutcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Project Links in Modal */}
              <div className="modal-links">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link demo-link"
                  >
                    <ExternalLink size={18} />
                    {t('projects.viewLive')}
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link source-link"
                  >
                    <Github size={18} />
                    {t('projects.viewCode')}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      <style jsx>{`
        .projects {
          background: var(--background);
          position: relative;
          overflow: hidden;
          contain: layout style paint;
          transform: translateZ(0);
          z-index: 1;
        }

        .projects::before {
          content: '';
          position: absolute;
          top: 20%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.08) 0%, transparent 70%);
          border-radius: 50%;
        }

        .projects::after {
          content: '';
          position: absolute;
          bottom: 20%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(147, 51, 234, 0.06) 0%, transparent 70%);
          border-radius: 50%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 1;
        }

        .section-title {
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #1D4ED8, #9333EA, #06B6D4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
        }

        .project-count {
          background: linear-gradient(135deg, #ffffff, #f1f5f9);
          color: #1D4ED8;
          border: 2px solid #1D4ED8;
          padding: 0.375rem 0.875rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 2.5rem;
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.2);
          margin-left: 0.75rem;
        }
        [data-theme="light"] .project-count {
          background: linear-gradient(135deg, #1e293b, #0f172a);
          color: #ffffff;
          border: 2px solid #1D4ED8;
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.3);
        }

        .section-description {
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Enhanced Filter Buttons */
        .project-filters {
          display: flex;
          justify-content: center;
          flex-wrap: nowrap;
          gap: 0.875rem;
          margin-bottom: 3rem;
          position: relative;
          z-index: 1;
          overflow-x: auto;
          padding: 0.5rem 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .project-filters::-webkit-scrollbar {
          display: none;
        }

        .filter-button {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.5rem 0.875rem;
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(6, 182, 212, 0.05));
          border: 2px solid rgba(29, 78, 216, 0.3);
          border-radius: 20px;
          color: var(--text-secondary);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          font-size: 0.8rem;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .filter-button svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        .filter-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .filter-button:hover::before {
          left: 100%;
        }

        [data-theme="light"] .filter-button {
          background: linear-gradient(135deg, rgba(29, 78, 216, 0.08), rgba(6, 182, 212, 0.03));
          border: 2px solid rgba(29, 78, 216, 0.2);
        }

        .filter-button:hover {
          border-color: #1D4ED8;
          color: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(29, 78, 216, 0.3);
        }

        .filter-button.active {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          border-color: #1D4ED8;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(29, 78, 216, 0.4);
        }

        /* Enhanced Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          position: relative;
          z-index: 1;
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .section-description {
            font-size: 1rem;
            max-width: 500px;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .project-filters {
            gap: 0.875rem;
            justify-content: center;
            margin-bottom: 2rem;
            padding: 0.75rem 0;
          }

          .filter-button {
            padding: 0.625rem 1.25rem;
            font-size: 0.9rem;
            min-width: auto;
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

          .project-filters {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.4rem;
            margin-bottom: 1.5rem;
            padding: 0.5rem 0;
          }

          .filter-button {
            padding: 0.4rem 0.7rem;
            font-size: 0.75rem;
            border-radius: 15px;
            min-width: auto;
            flex-shrink: 0;
            gap: 0.3rem;
          }

          .filter-button svg {
            width: 16px;
            height: 16px;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .project-card {
            border-radius: 16px;
          }

          .project-image {
            height: 140px;
          }

          .image-gallery {
            border-radius: 16px 16px 0 0;
          }

          .project-content {
            padding: 1rem 0.75rem;
          }

          .project-title {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          .project-description {
            font-size: 0.8rem;
            margin-bottom: 0.75rem;
            padding: 0;
          }

          .description-list {
            padding: 0;
            margin: 0;
          }

          .description-list li {
            font-size: 0.8rem;
            margin-bottom: 0.3rem;
            padding-left: 1rem;
            line-height: 1.4;
          }

          .project-technologies {
            gap: 0.4rem;
            margin-bottom: 1rem;
          }

          .tech-tag {
            padding: 0.2rem 0.5rem;
            font-size: 0.6rem;
            font-weight: 500;
            border-radius: 12px;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .project-links {
            gap: 0.5rem;
          }

          .project-link {
            padding: 0.5rem 0.8rem;
            font-size: 0.75rem;
          }

          .status-badge {
            top: 0.75rem;
            right: 0.75rem;
            padding: 0.2rem 0.5rem;
            font-size: 0.65rem;
          }

          .featured-star {
            top: 6px;
          }

          .indicator {
            width: 6px;
            height: 6px;
          }

          .pagination-btn {
            padding: 0.625rem 0.875rem;
            font-size: 0.875rem;
          }

          .pagination-number {
            width: 36px;
            height: 36px;
            font-size: 0.875rem;
          }

          .projects::before,
          .projects::after {
            width: 350px;
            height: 350px;
          }

          .modal-content {
            max-width: 95%;
            margin: 1rem;
            border-radius: 20px;
          }

          .modal-header {
            padding: 1.5rem 1.5rem 1rem;
          }

          .modal-title {
            font-size: 1.25rem;
          }

          .modal-body {
            padding: 1.5rem;
          }

          .modal-image-gallery {
            height: 200px;
            margin-bottom: 1.5rem;
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

          .project-filters {
            gap: 0.3rem;
            margin-bottom: 1.25rem;
            padding: 0.4rem 0;
          }

          .filter-button {
            padding: 0.35rem 0.6rem;
            font-size: 0.7rem;
            border-radius: 12px;
            min-width: auto;
            flex-shrink: 0;
            gap: 0.25rem;
          }

          .filter-button svg {
            width: 14px;
            height: 14px;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .project-card {
            border-radius: 12px;
          }

          .project-image {
            height: 120px;
          }

          .image-gallery {
            border-radius: 12px 12px 0 0;
          }

          .project-content {
            padding: 0.8rem 0.6rem;
          }

          .project-title {
            font-size: 0.9rem;
            margin-bottom: 0.4rem;
            line-height: 1.3;
          }

          .project-description {
            font-size: 0.75rem;
            margin-bottom: 0.6rem;
            line-height: 1.3;
            padding: 0;
          }

          .description-list li {
            font-size: 0.75rem;
            margin-bottom: 0.25rem;
            padding-left: 0.8rem;
            line-height: 1.3;
          }

          .project-technologies {
            gap: 0.25rem;
            margin-bottom: 0.8rem;
          }

          .tech-tag {
            padding: 0.15rem 0.4rem;
            font-size: 0.55rem;
            font-weight: 500;
            border-radius: 10px;
          }

          .project-links {
            gap: 0.4rem;
            flex-direction: column;
          }

          .project-link {
            padding: 0.4rem 0.7rem;
            font-size: 0.7rem;
            border-radius: 15px;
            justify-content: center;
          }

          .status-badge {
            top: 0.6rem;
            right: 0.6rem;
            padding: 0.15rem 0.4rem;
            font-size: 0.6rem;
          }

          .featured-star {
            top: 5px;
          }

          .indicator {
            width: 5px;
            height: 5px;
          }

          .pagination-container {
            margin-top: 2.5rem;
          }

          .pagination-btn {
            padding: 0.5rem 0.75rem;
            font-size: 0.8rem;
          }

          .pagination-number {
            width: 32px;
            height: 32px;
            font-size: 0.8rem;
          }

          .pagination-info {
            font-size: 0.8rem;
          }

          .projects::before,
          .projects::after {
            width: 250px;
            height: 250px;
          }

          .modal-content {
            max-width: 98%;
            margin: 0.5rem;
            border-radius: 18px;
          }

          .modal-header {
            padding: 1.25rem 1.25rem 0.875rem;
          }

          .modal-title {
            font-size: 1.125rem;
          }

          .modal-close-btn {
            width: 36px;
            height: 36px;
            padding: 0.625rem;
          }

          .modal-body {
            padding: 1.25rem;
          }

          .modal-image-gallery {
            height: 180px;
            margin-bottom: 1.25rem;
          }

          .modal-section {
            margin-bottom: 1.5rem;
          }

          .modal-section h3 {
            font-size: 1.125rem;
            margin-bottom: 0.875rem;
          }

          .modal-section p {
            font-size: 0.9rem;
            line-height: 1.6;
          }

          .feature-list li,
          .learning-list li {
            font-size: 0.875rem;
            margin-bottom: 0.625rem;
            padding-left: 1.25rem;
          }

          .tech-category h4 {
            font-size: 0.95rem;
            margin-bottom: 0.625rem;
          }

          .tech-item {
            padding: 0.3rem 0.75rem;
            font-size: 0.8rem;
          }

          .modal-links {
            gap: 0.75rem;
            margin-top: 1.5rem;
            padding-top: 1.5rem;
          }

          .modal-link {
            padding: 0.625rem 1.25rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 375px) {
          .section-title {
            font-size: 1.875rem;
          }

          .section-description {
            font-size: 0.9rem;
          }

          .filter-button {
            padding: 0.3rem 0.5rem;
            font-size: 0.65rem;
            min-width: auto;
            flex-shrink: 0;
            gap: 0.2rem;
          }

          .filter-button svg {
            width: 12px;
            height: 12px;
          }

          .projects-grid {
            gap: 0.8rem;
          }

          .project-card {
            border-radius: 10px;
          }

          .project-image {
            height: 100px;
          }

          .image-gallery {
            border-radius: 10px 10px 0 0;
          }

          .project-content {
            padding: 0.7rem 0.5rem;
          }

          .project-title {
            font-size: 0.85rem;
            margin-bottom: 0.35rem;
            line-height: 1.2;
          }

          .project-description {
            font-size: 0.7rem;
            margin-bottom: 0.5rem;
            line-height: 1.2;
            padding: 0;
          }

          .description-list li {
            font-size: 0.7rem;
            padding-left: 0.7rem;
            margin-bottom: 0.2rem;
            line-height: 1.2;
          }

          .project-technologies {
            gap: 0.2rem;
            margin-bottom: 0.7rem;
          }

          .tech-tag {
            padding: 0.1rem 0.3rem;
            font-size: 0.5rem;
            font-weight: 500;
            border-radius: 8px;
          }

          .project-links {
            flex-direction: column;
            gap: 0.3rem;
          }

          .project-link {
            padding: 0.35rem 0.6rem;
            font-size: 0.65rem;
            justify-content: center;
          }

          .status-badge {
            padding: 0.1rem 0.35rem;
            font-size: 0.55rem;
          }

          .indicator {
            width: 4px;
            height: 4px;
          }

          .modal-indicator {
            width: 10px;
            height: 10px;
          }
        }

        .project-card {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.03) 0%, 
            rgba(29, 78, 216, 0.02) 50%, 
            rgba(6, 182, 212, 0.03) 100%);
          backdrop-filter: blur(20px);
          border: 2px solid rgba(147, 51, 234, 0.1);
          border-radius: 20px;
          border-bottom: 4px solid transparent;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          will-change: transform, box-shadow, border-color;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        [data-theme="light"] .project-card {
          background: linear-gradient(135deg, 
            rgba(147, 51, 234, 0.02) 0%, 
            rgba(29, 78, 216, 0.01) 50%, 
            rgba(6, 182, 212, 0.02) 100%);
          border: 2px solid rgba(147, 51, 234, 0.08);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .project-card::before {
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

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-bottom-color: #9333EA;
          border-color: #9333EA;
          box-shadow: 
            0 20px 40px rgba(147, 51, 234, 0.2),
            0 8px 25px rgba(29, 78, 216, 0.15);
          background: var(--background-primary);
        }

        [data-theme="dark"] .project-card:hover {
          box-shadow: 
            0 20px 40px rgba(147, 51, 234, 0.3),
            0 8px 25px rgba(29, 78, 216, 0.25);
        }

        .project-card:active {
          transform: translateY(-8px) scale(1.01);
          transition: all 0.15s ease;
        }

        /* Enhanced Project Image */
        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.05) 0%, 
            rgba(6, 182, 212, 0.03) 100%);
          border-radius: 18px 18px 0 0;
        }

        .image-gallery {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 18px 18px 0 0;
          contain: layout style paint;
          z-index: 1;
        }

        .project-screenshot {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          will-change: opacity, transform;
          opacity: 1;
          transform: translateX(0);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-screenshot.fade-in {
          animation: fadeSlideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .project-screenshot.fade-out {
          animation: fadeSlideOut 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(30px) scale(0.95);
            filter: blur(3px);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes fadeSlideOut {
          from {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
          to {
            opacity: 0;
            transform: translateX(-30px) scale(0.95);
            filter: blur(3px);
          }
        }

        .image-gallery::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: var(--bg-image);
          background-size: cover;
          background-position: center;
          filter: blur(10px);
          opacity: 0.3;
          z-index: 1;
          transition: background-image 0.8s ease;
        }

        .project-card:hover .project-screenshot {
          transform: scale(1.02);
        }

        .image-indicators {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 10;
        }

        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
          border: 1px solid rgba(29, 78, 216, 0.3);
        }

        .indicator.active {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          transform: scale(1.2);
          border-color: #1D4ED8;
          box-shadow: 0 2px 8px rgba(29, 78, 216, 0.4);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          color: white;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          border-radius: 18px 18px 0 0;
        }

        .project-card:hover .image-placeholder {
          transform: scale(1.05);
          background: linear-gradient(135deg, #1E40AF, #0891B2);
        }

        .image-placeholder::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .project-card:hover .image-placeholder::before {
          left: 100%;
        }

        .placeholder-content {
          text-align: center;
          z-index: 2;
        }

        .placeholder-content p {
          margin-top: 0.5rem;
          color: white;
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .status-badge {
          position: absolute;
          top: 0.875rem;
          right: 0.875rem;
          padding: 0.375rem 0.875rem;
          border-radius: 20px;
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          z-index: 30;
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }

        .featured-star {
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          color: #ffd700;
          z-index: 15;
          filter: drop-shadow(0 2px 8px rgba(255, 215, 0, 0.6));
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .project-card:hover .featured-star {
          transform: translateX(-50%) scale(1.3) rotate(360deg);
          color: #ffed4e;
          filter: drop-shadow(0 4px 12px rgba(255, 215, 0, 0.8));
        }

        /* Enhanced Project Content */
        .project-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          position: relative;
          z-index: 2;
          justify-content: space-between;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
          transition: all 0.3s ease;
          background: linear-gradient(135deg, var(--text-primary), #1D4ED8);
          background-clip: text;
          -webkit-background-clip: text;
          background-size: 200% 200%;
        }

        .project-card:hover .project-title {
          background: linear-gradient(135deg, #9333EA, #1D4ED8);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          flex: 1;
          line-height: 1.6;
          font-size: 0.9rem;
        }

        /* Enhanced Technology Tags */
        .project-technologies {
          display: flex;
          flex-wrap: nowrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          justify-content: flex-start;
          align-items: center;
          position: relative;
          overflow: hidden;
          height: 40px;
          mask: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }

        .tech-carousel {
          display: flex;
          gap: 0.5rem;
          animation: techSlide 25s linear infinite;
          white-space: nowrap;
          will-change: transform;
        }

        .tech-tag {
          padding: 0.4rem 1rem;
          background: linear-gradient(145deg, 
            rgba(29, 78, 216, 0.9), 
            rgba(6, 182, 212, 0.8));
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          font-size: 0.75rem;
          font-weight: 600;
          color: white;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(15px);
          will-change: transform, box-shadow;
          box-shadow: 
            0 4px 15px rgba(29, 78, 216, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          flex-shrink: 0;
          min-width: fit-content;
        }

        .tech-tag::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.3), 
            transparent);
          transition: left 0.6s;
        }

        @keyframes techSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .tech-carousel:hover {
          animation-play-state: paused;
        }

        .project-card:hover .tech-carousel {
          animation-duration: 35s;
        }

        /* Desktop larger screens - faster animation */
        @media (min-width: 1200px) {
          .tech-carousel {
            animation: techSlide 30s linear infinite;
          }

          .project-card:hover .tech-carousel {
            animation-duration: 45s;
          }
        }

        /* Mobile Tech Carousel */
        @media (max-width: 768px) {
          .project-technologies {
            height: 32px;
            margin-bottom: 1rem;
            mask: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
            -webkit-mask: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          }

          .tech-carousel {
            gap: 0.4rem;
            animation: techSlide 20s linear infinite;
          }

          .tech-tag {
            padding: 0.2rem 0.6rem;
            font-size: 0.6rem;
            font-weight: 500;
            border-radius: 12px;
          }

          .project-card:hover .tech-carousel {
            animation-duration: 30s;
          }
        }

        @media (max-width: 480px) {
          .project-technologies {
            height: 28px;
            margin-bottom: 0.8rem;
          }

          .tech-carousel {
            gap: 0.3rem;
            animation: techSlide 15s linear infinite;
          }

          .tech-tag {
            padding: 0.15rem 0.5rem;
            font-size: 0.55rem;
            border-radius: 10px;
          }
        }

        @media (max-width: 375px) {
          .project-technologies {
            height: 24px;
            margin-bottom: 0.7rem;
          }

          .tech-carousel {
            gap: 0.25rem;
            animation: techSlide 12s linear infinite;
          }

          .tech-tag {
            padding: 0.1rem 0.4rem;
            font-size: 0.5rem;
            border-radius: 8px;
          }
        }

        [data-theme="light"] .tech-tag {
          background: linear-gradient(145deg, 
            rgba(29, 78, 216, 0.95), 
            rgba(6, 182, 212, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 4px 15px rgba(29, 78, 216, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .tech-tag:hover {
          background: linear-gradient(145deg, #1D4ED8, #06B6D4);
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 8px 25px rgba(29, 78, 216, 0.4),
            0 4px 15px rgba(6, 182, 212, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .tech-tag:hover::before {
          left: 100%;
        }

        /* Enhanced Project Links */
        .project-links {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .project-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .project-link:hover::before {
          left: 100%;
        }

        .primary-link {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          color: white;
          border: 2px solid transparent;
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.3);
        }

        .primary-link:hover {
          background: linear-gradient(135deg, #1e40af, #0891b2);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(29, 78, 216, 0.4);
        }

        .secondary-link {
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.1), 
            rgba(6, 182, 212, 0.05));
          color: #1D4ED8;
          border: 2px solid rgba(29, 78, 216, 0.3);
        }

        [data-theme="light"] .secondary-link {
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.08), 
            rgba(6, 182, 212, 0.03));
          border-color: rgba(29, 78, 216, 0.2);
        }

        .secondary-link:hover {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          color: white;
          border-color: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(29, 78, 216, 0.3);
        }
        /* Enhanced Description Styles */
        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .description-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .description-list li {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0.5rem;
          padding-left: 1.2rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .description-list li::before {
          content: "•";
          color: #1D4ED8;
          font-weight: bold;
          position: absolute;
          left: 0;
          top: 0;
          text-shadow: 0 0 8px rgba(29, 78, 216, 0.4);
        }

        .project-card:hover .project-description,
        .project-card:hover .description-list li {
          color: var(--text-primary);
        }

        /* Enhanced Technologies */
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          justify-content: center;
          align-items: center;
        }

        .project-links.single-link {
          justify-content: center;
        }

        .project-links.multiple-links {
          justify-content: flex-start;
        }

        /* Enhanced Demo/Source Links */
        .demo-link {
          background: transparent;
          color: #9333EA;
          border: 2px solid #9333EA;
          box-shadow: none;
        }

        .demo-link:hover {
          background: rgba(147, 51, 234, 0.1);
          color: #9333EA;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.2);
        }

        .source-link {
          background: transparent;
          color: #9333EA;
          border: 2px solid #9333EA;
        }

        [data-theme="light"] .source-link {
          background: transparent;
          color: #9333EA;
          border-color: #9333EA;
        }

        .source-link:hover {
          background: rgba(147, 51, 234, 0.1);
          color: #9333EA;
          border-color: #9333EA;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.2);
        }

        /* Enhanced Pagination Styles */
        .pagination-container {
          margin-top: 3rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .pagination {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .pagination-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.1), 
            rgba(6, 182, 212, 0.05));
          border: 2px solid rgba(29, 78, 216, 0.3);
          border-radius: 15px;
          color: #1D4ED8;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: inherit;
          backdrop-filter: blur(10px);
        }

        [data-theme="light"] .pagination-btn {
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.08), 
            rgba(6, 182, 212, 0.03));
          border-color: rgba(29, 78, 216, 0.2);
        }

        [data-theme="light"] .pagination-btn {
          background: white;
        }

        .pagination-btn:hover:not(.disabled) {
          border-color: #1D4ED8;
          color: white;
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.3);
        }

        .pagination-btn.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          filter: grayscale(1);
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
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.1), 
            rgba(6, 182, 212, 0.05));
          border: 2px solid rgba(29, 78, 216, 0.3);
          border-radius: 12px;
          color: #1D4ED8;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          backdrop-filter: blur(10px);
        }

        [data-theme="light"] .pagination-number {
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.08), 
            rgba(6, 182, 212, 0.03));
          border-color: rgba(29, 78, 216, 0.2);
        }

        .pagination-number:hover {
          border-color: #1D4ED8;
          color: white;
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.3);
        }

        .pagination-number.active {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          border-color: #1D4ED8;
          color: white;
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.4);
        }

        .pagination-info {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-top: 1rem;
        }

        /* Enhanced Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 2rem;
          animation: modalFadeIn 0.3s ease-out;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(10px);
          }
        }

        .modal-content {
          background: linear-gradient(135deg, 
            var(--background) 0%, 
            rgba(29, 78, 216, 0.02) 100%);
          border: 2px solid rgba(29, 78, 216, 0.1);
          border-radius: 24px;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.25),
            0 12px 30px rgba(29, 78, 216, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          animation: modalSlideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        [data-theme="light"] .modal-content {
          background: linear-gradient(135deg, 
            white 0%, 
            rgba(29, 78, 216, 0.01) 100%);
          border-color: rgba(29, 78, 216, 0.08);
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.15),
            0 12px 30px rgba(29, 78, 216, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 2rem 1rem;
          border-bottom: 2px solid rgba(29, 78, 216, 0.1);
          position: relative;
        }

        .modal-header::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 2rem;
          right: 2rem;
          height: 2px;
          background: linear-gradient(90deg, #1D4ED8, #06B6D4, #9333EA);
          border-radius: 1px;
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
          background: linear-gradient(135deg, var(--text-primary), #1D4ED8);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .modal-close-btn {
          background: linear-gradient(135deg, 
            rgba(29, 78, 216, 0.1), 
            rgba(6, 182, 212, 0.05));
          border: 2px solid rgba(29, 78, 216, 0.2);
          color: #1D4ED8;
          cursor: pointer;
          padding: 0.75rem;
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close-btn:hover {
          background: linear-gradient(135deg, #1D4ED8, #06B6D4);
          color: white;
          border-color: #1D4ED8;
          transform: scale(1.1) rotate(90deg);
          box-shadow: 0 4px 15px rgba(29, 78, 216, 0.3);
        }

        .modal-body {
          padding: 2rem;
          position: relative;
        }

        .modal-body::before {
          content: '';
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(29, 78, 216, 0.05) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .modal-image {
          width: 100%;
          height: 250px;
          margin-bottom: 2rem;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid rgba(29, 78, 216, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .modal-image-gallery {
          position: relative;
          width: 100%;
          height: 250px;
          margin-bottom: 2rem;
          border-radius: 8px;
          overflow: hidden;
          background-image: var(--modal-bg-image);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .modal-image-gallery::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: inherit;
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          filter: none;
          transform: scale(1);
          z-index: 1;
        }

        .modal-screenshot {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 8px;
          opacity: 0;
          position: relative;
          z-index: 2;
          transform: translateX(0);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          visibility: hidden;
        }

        .modal-screenshot.fade-in {
          animation: modalFadeSlideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .modal-screenshot.fade-out {
          animation: modalFadeSlideOut 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes modalFadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.98);
            filter: blur(2px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes modalFadeSlideOut {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px) scale(0.98);
            filter: blur(2px);
          }
        }

        .modal-image-gallery::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: var(--modal-bg-image);
          background-size: cover;
          background-position: center;
          filter: blur(15px);
          opacity: 0.2;
          border-radius: 8px;
          z-index: 1;
          transition: background-image 0.8s ease;
        }

        .modal-image-indicators {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .modal-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .modal-indicator:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: scale(1.1);
        }

        .modal-indicator.active {
          background: var(--primary-color);
          transform: scale(1.3);
        }

        .modal-image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          color: white;
          border-radius: 8px;
        }

        .modal-section {
          margin-bottom: 2rem;
        }

        .modal-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          border-bottom: 2px solid var(--primary-color);
          padding-bottom: 0.5rem;
        }

        .modal-section p {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .feature-list,
        .learning-list {
          list-style: none;
          padding: 0;
        }

        .feature-list li,
        .learning-list li {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .feature-list li::before,
        .learning-list li::before {
          content: "✓";
          color: #1D4ED8;
          font-weight: bold;
          position: absolute;
          left: 0;
          text-shadow: 0 0 8px rgba(29, 78, 216, 0.4);
        }

        .tech-details {
          display: grid;
          gap: 1.5rem;
        }

        .tech-category h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          background: linear-gradient(135deg, var(--text-primary), #1D4ED8);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tech-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-item {
          background: linear-gradient(145deg, 
            rgba(29, 78, 216, 0.95), 
            rgba(6, 182, 212, 0.9));
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(15px);
          box-shadow: 
            0 4px 15px rgba(29, 78, 216, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        .tech-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.25), 
            transparent);
          transition: left 0.5s;
        }

        [data-theme="light"] .tech-item {
          background: linear-gradient(145deg, 
            rgba(29, 78, 216, 0.95), 
            rgba(6, 182, 212, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 4px 15px rgba(29, 78, 216, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .tech-item:hover {
          transform: translateY(-2px) scale(1.08);
          box-shadow: 
            0 8px 25px rgba(29, 78, 216, 0.4),
            0 4px 15px rgba(6, 182, 212, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          background: linear-gradient(145deg, #1D4ED8, #06B6D4);
        }

        .tech-item:hover::before {
          left: 100%;
        }

        .modal-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px solid rgba(29, 78, 216, 0.1);
          position: relative;
        }

        .modal-links::before {
          content: '';
          position: absolute;
          top: -2px;
          left: 25%;
          right: 25%;
          height: 2px;
          background: linear-gradient(90deg, #1D4ED8, #06B6D4);
          border-radius: 1px;
        }

        .modal-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 15px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .modal-link.demo-link {
          background: transparent;
          color: #9333EA;
          border: 2px solid #9333EA;
          box-shadow: none;
        }

        .modal-link.demo-link:hover {
          background: rgba(147, 51, 234, 0.1);
          color: #9333EA;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.2);
        }

        .modal-link.source-link {
          background: transparent;
          color: #9333EA;
          border: 2px solid #9333EA;
        }

        .modal-link.source-link:hover {
          background: rgba(147, 51, 234, 0.1);
          color: #9333EA;
          border-color: #9333EA;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(147, 51, 234, 0.2);
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-secondary);
        }

        .empty-state h3 {
          margin: 1rem 0 0.5rem;
          color: var(--text-primary);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .project-filters {
            flex-direction: column;
            align-items: center;
          }

          .filter-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .project-links {
            flex-direction: column;
          }

          .project-link {
            text-align: center;
            justify-content: center;
          }

          .pagination {
            flex-direction: column;
            gap: 1rem;
          }

          .pagination-btn {
            width: 100%;
            max-width: 200px;
            justify-content: center;
          }

          .pagination-numbers {
            justify-content: center;
            flex-wrap: wrap;
          }

          .modal-overlay {
            padding: 1rem;
          }

          .modal-header {
            padding: 1.5rem 1.5rem 1rem;
          }

          .modal-body {
            padding: 1.5rem;
          }

          .modal-links {
            flex-direction: column;
          }

          .modal-link {
            justify-content: center;
          }

          .tech-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
