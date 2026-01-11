/**
 * Projects Page - Projeler
 * 
 * Tamamlanan ve devam eden tüm projelerin sergilendiği sayfa.
 * Her proje için detaylı bilgi, teknolojiler, GitHub linki ve canlı demo.
 * 
 * Tasarım Özellikleri:
 * - Green tema - Home page'deki projects card'ından alındı
 * - BackgroundBeamsWithCollision arka plan efekti (green tema)
 * - 3D Card component'leri ile modern görünüm
 * - Filtreleme ve kategorize etme özellikleri
 * - Her satırda 3 kart, responsive grid
 * - Tıklanabilir kartlar - detay modalı açılır
 * - Teknoloji marquee bandı
 * - Otomatik görsel carousel / YouTube embed
 * 
 * Mimari:
 * - SOLID prensipleri: Her proje bağımsız, tekrar kullanılabilir
 * - Separation of Concerns: Veri, UI ve logic ayrı
 * - DRY: Tekrar eden kodlar component'lere çıkarıldı
 * 
 * @author Batuhan Bölükbaşı
 */

'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { ProjectData } from '@/types/i18n.types';
import { PortfolioNavigation } from '@/components/layout/PortfolioNavigation';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { TechMarquee } from '@/components/ui/tech-marquee';
import { ImageCarousel } from '@/components/ui/image-carousel';
import { ProjectModal } from '@/components/ui/project-modal';

/**
 * Proje kategorileri
 * Filtreleme için kullanılır
 */
type CategoryFilter = 'all' | 'web' | 'backend' | 'mobile' | 'game' | 'testing';

/**
 * Kategori listesi (UI için)
 */
const CATEGORIES: CategoryFilter[] = ['all', 'web', 'backend', 'mobile', 'game', 'testing'];

/**
 * Proje sıralama düzeni
 * Featured ve status'a göre öncelik
 */
const PROJECT_ORDER = [
  'fileGuardian',
  'sortingVisualizer',
  'handMouse',
  'collectify',
  'projectManagement',
  'pythonIn20Days',
  'axolotlAscension',
  'paperTale',
  'vslikeGame',
  'todoApi',
  'softwareTestingSuite',
  'pythonSeleniumAutomation',
];

export default function ProjectsPage() {
  const { t } = useI18n();

  /**
   * State: Seçili kategori filtresi
   */
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  /**
   * State: Seçili proje (modal için)
   */
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  /**
   * State: Modal açık mı?
   */
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Projeler listesini i18n'den al ve sırala
   * useMemo ile gereksiz hesaplamaları önlüyoruz
   */
  const projects = useMemo(() => {
    const projectData = t.projects.projectData;
    
    // PROJECT_ORDER'a göre sırala
    return PROJECT_ORDER
      .map((key) => projectData[key])
      .filter(Boolean) as ProjectData[];
  }, [t.projects.projectData]);

  /**
   * Filtrelenmiş projeler
   * Seçili kategoriye göre filtrele
   */
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return projects;
    }
    
    return projects.filter((project) => 
      project.categories.includes(selectedCategory)
    );
  }, [projects, selectedCategory]);

  /**
   * Kategori değiştirme handler'ı
   */
  const handleCategoryChange = useCallback((category: CategoryFilter) => {
    setSelectedCategory(category);
  }, []);

  /**
   * Proje kartına tıklama handler'ı
   * Modal açar
   */
  const handleProjectClick = useCallback((project: ProjectData) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  /**
   * Modal kapatma handler'ı
   */
  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    // Animasyon bitene kadar project'i tutuyoruz
    setTimeout(() => setSelectedProject(null), 300);
  }, []);

  /**
   * Kategori label'ını al
   */
  const getCategoryLabel = useCallback((category: CategoryFilter): string => {
    if (category === 'all') {
      return t.projects.allProjects;
    }
    return t.projects.categoryLabels[category] || category;
  }, [t.projects]);

  /**
   * Status badge'ini render et
   */
  const renderStatusBadge = useCallback((status: string) => {
    const statusConfig = {
      completed: {
        label: t.projects.statusLabels.completed,
        icon: '✓',
        class: 'bg-green-500/20 text-green-400 border-green-500/30',
      },
      'in-progress': {
        label: t.projects.statusLabels.inProgress,
        icon: '⏳',
        class: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      },
      planned: {
        label: t.projects.statusLabels.planned,
        icon: '📋',
        class: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.planned;

    return (
      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${config.class}`}>
        {config.icon} {config.label}
      </span>
    );
  }, [t.projects.statusLabels]);

  return (
    <>
      <BackgroundBeamsWithCollision colorTheme="green">
        <div className="min-h-screen flex flex-col">
          <div className="container mx-auto py-12 pb-32 relative z-20 px-4 flex-1">
            
            {/* Sayfa Başlığı - Encrypted text efekti ile */}
            <header className="mb-12 text-center py-4">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
                <EncryptedText
                  text={t.pageTitle.projects}
                  encryptedClassName="text-green-500/40"
                  revealedClassName="text-green-300"
                  revealDelayMs={100}
                  flipDelayMs={40}
                />
              </h1>
              <p className="text-base text-green-200/70 max-w-2xl mx-auto">
                {t.pageDescription.projects}
              </p>
            </header>

            {/* Kategori Filtresi */}
            <div className="max-w-7xl mx-auto mb-10">
              <div className="flex flex-wrap gap-3 justify-center">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`
                      px-5 py-2 rounded-full font-medium text-sm
                      transition-all duration-300
                      ${selectedCategory === category
                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/30 scale-105'
                        : 'bg-green-500/10 text-green-300 border border-green-500/30 hover:bg-green-500/20 hover:scale-105'
                      }
                    `}
                  >
                    {getCategoryLabel(category)}
                  </button>
                ))}
              </div>
            </div>

            {/* Projeler Grid */}
            <div className="max-w-7xl mx-auto">
              {filteredProjects.length === 0 ? (
                // Boş durum
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-green-300/70 text-lg">
                    Bu kategoride henüz proje bulunmuyor.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {filteredProjects.map((project) => (
                    <CardContainer 
                      key={project.key} 
                      className="inter-var w-full min-h-[600px]" 
                      rotationIntensity={80}
                    >
                      <CardBody 
                        className={`
                          bg-black/80 relative group/card 
                          hover:shadow-2xl hover:shadow-green-500/20 
                          border-green-500/30 hover:border-green-400/60 
                          w-full h-full rounded-xl border 
                          transition-all duration-300
                          cursor-pointer
                          flex flex-col
                          overflow-hidden
                        `}
                        onClick={() => handleProjectClick(project)}
                      >
                        {/* Tıklanabilirlik indicator - overlay */}
                        <div className={`
                          absolute inset-0 rounded-xl z-30
                          opacity-0 group-hover/card:opacity-100
                          transition-opacity duration-300
                          bg-gradient-to-t from-green-500/20 via-transparent to-transparent
                          pointer-events-none
                        `} />

                        {/* "Click to view" tooltip */}
                        <div className={`
                          absolute top-3 right-3 z-40
                          opacity-0 group-hover/card:opacity-100
                          transition-all duration-300
                          transform translate-y-2 group-hover/card:translate-y-0
                        `}>
                          <span className="px-2 py-1 bg-green-500/90 text-white text-[10px] font-medium rounded-full">
                            {t.projects.clickToViewDetails}
                          </span>
                        </div>

                        {/* Görsel Carousel / YouTube */}
                        <CardItem translateZ={60} className="w-full">
                          <ImageCarousel
                            images={project.images}
                            youtubeUrl={project.youtubeUrl}
                            height={240}
                            colorTheme="green"
                            alt={project.title}
                            className="rounded-t-xl"
                          />
                        </CardItem>

                        {/* Kart İçeriği */}
                        <div className="p-7 flex-1 flex flex-col overflow-hidden gap-1">
                          {/* Başlık ve Status */}
                          <CardItem translateZ={50} className="w-full">
                            <div className="flex items-start justify-between gap-3 mb-4">
                              <h3 className="text-xl font-bold text-green-300 line-clamp-2 flex-1 break-words overflow-hidden max-w-full leading-tight">
                                {project.title}
                              </h3>
                              {renderStatusBadge(project.status)}
                            </div>
                          </CardItem>

                         

                          {/* Açıklama maddeleri */}
                          <CardItem translateZ={35} className="w-full mb-6 overflow-hidden flex-1">
                            <ul className="space-y-2.5">
                              {project.description.slice(0, 3).map((desc, index) => (
                                <li 
                                  key={index} 
                                  className="text-sm text-gray-300 flex items-start gap-2 overflow-hidden group/item"
                                  title={desc}
                                >
                                  <span className="text-green-400 mt-1 shrink-0 text-base">•</span>
                                  <span className="line-clamp-2 break-words overflow-hidden leading-relaxed">
                                    {desc}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </CardItem>

                          {/* Teknoloji Marquee */}
                          <CardItem translateZ={30} className="w-full overflow-hidden mb-5">
                            <TechMarquee
                              technologies={project.technologies}
                              colorTheme="green"
                              speed={25}
                              pauseOnHover={true}
                            />
                          </CardItem>

                          {/* Alt kısım - Butonlar */}
                          <CardItem translateZ={55} className="w-full mt-auto flex-shrink-0 overflow-hidden pt-3 border-t border-green-500/10">
                            <div className="flex items-center gap-2.5 flex-wrap overflow-hidden">
                              {/* GitHub Button */}
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className={`
                                    flex items-center gap-2 px-4 py-2 rounded-lg
                                    bg-gray-800 hover:bg-gray-700
                                    text-white text-sm font-medium
                                    transition-all duration-200
                                    hover:scale-105
                                    z-50 relative
                                  `}
                                >
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                                  </svg>
                                  GitHub
                                </a>
                              )}

                              {/* Demo Button */}
                              {project.demoUrl && (
                                <a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className={`
                                    flex items-center gap-2 px-4 py-2 rounded-lg
                                    bg-green-500/20 hover:bg-green-500/30
                                    text-green-300 text-sm font-medium
                                    border border-green-500/30
                                    transition-all duration-200
                                    hover:scale-105
                                    z-50 relative
                                  `}
                                >
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                  Demo
                                </a>
                              )}

                              {/* Spacer */}
                              <div className="flex-1" />

                              {/* View details indicator */}
                              <span className="text-green-500/60 text-sm flex items-center gap-1 group-hover/card:text-green-400 transition-colors whitespace-nowrap">
                                {t.projects.viewDetails}
                                <svg className="w-3.5 h-3.5 transform group-hover/card:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                            </div>
                          </CardItem>
                        </div>

                        {/* Hover glow efekti */}
                        <div className={`
                          absolute -inset-px rounded-xl
                          bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0
                          opacity-0 group-hover/card:opacity-100
                          transition-opacity duration-500
                          pointer-events-none
                        `} />
                      </CardBody>
                    </CardContainer>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Proje Detay Modalı */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
        colorTheme="green"
        translations={{
          sourceCode: t.projects.sourceCode,
          liveDemo: t.projects.liveDemo,
          technologies: t.projects.technologies,
          close: t.common.close,
          overview: t.projects.modal.overview,
          features: t.projects.modal.features,
          techDetails: t.projects.modal.techDetails,
          learningOutcomes: t.projects.modal.learningOutcomes,
        }}
      />

      {/* Navigation - Her zaman en üstte */}
      <PortfolioNavigation />
    </>
  );
}
