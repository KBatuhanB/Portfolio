/**
 * Dil Tipleri
 * 
 * Tüm çeviri sisteminin tip güvenliğini sağlar.
 * Yeni bir dil eklendiğinde burada tanımlanmalıdır.
 */

// Desteklenen diller
export type Locale = 'tr' | 'en';

// Navigation menü öğeleri
export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
}

/**
 * Proje Detaylı Bilgi Tipi
 * Proje modalında gösterilecek detaylı içerik
 */
export interface ProjectDetailedInfo {
  overview: string;
  features: string[];
  techDetails: Record<string, string[]>;
  learningOutcomes: string[];
}

/**
 * Proje Verisi Tipi
 * Her bir proje için tüm bilgileri içerir
 */
export interface ProjectData {
  key: string;
  title: string;
  description: string[];
  categories: string[];
  technologies: string[];
  youtubeUrl?: string;
  images: string[];
  demoUrl?: string | null;
  githubUrl?: string | null;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  detailedInfo: ProjectDetailedInfo;
}

// Çeviri yapısı - Tüm dillerdeki içerik
export interface Translations {
  // Genel metinler
  common: {
    loading: string;
    error: string;
    retry: string;
    cancel: string;
    save: string;
    delete: string;
    edit: string;
    close: string;
    submit: string;
  };
  
  // Navigation - AppBar için
  navigation: {
    home: string;
    education: string;
    projects: string;
    skills: string;
    experience: string;
    personalInfo: string;
  };
  
  // Sayfa başlıkları
  pageTitle: {
    home: string;
    education: string;
    projects: string;
    skills: string;
    experience: string;
    personalInfo: string;
  };
  
  // Sayfa açıklamaları (SEO için)
  pageDescription: {
    home: string;
    education: string;
    projects: string;
    skills: string;
    experience: string;
    personalInfo: string;
  };

  // Eğitim bilgileri
  education: {
    current: string;
    completed: string;
    gpa: string;
    achievements: string;
    schools: Array<{
      degree: string;
      school: string;
      period: string;
      location: string;
      gpa: string;
      status: string;
      description: string;
      achievements: string[];
    }>;
  };

  // İş deneyimi bilgileri
  experience: {
    responsibilities: string;
    technologies: string;
    positions: Array<{
      title: string;
      company: string;
      period: string;
      location: string;
      type: 'internship' | 'competition' | 'freelance' | 'fulltime';
      description: string[];
      technologies: string[];
    }>;
  };

  // Kişisel bilgiler sayfası
  personalInfo: {
    aboutMe: string;
    name: string;
    title: string;
    bio: string;
    socialLinks: string;
    contactInfo: string;
    email: string;
    phone: string;
    contactMe: string;
    contactDescription: string;
    downloadCV: string;
    sendMessage: string;
    emailSubject: string;
    emailBody: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
    };
  };

  // Projeler sayfası
  projects: {
    viewProject: string;
    sourceCode: string;
    liveDemo: string;
    technologies: string;
    status: string;
    category: string;
    allProjects: string;
    filterByCategory: string;
    clickToViewDetails: string;
    viewDetails: string;
    modal: {
      overview: string;
      features: string;
      techDetails: string;
      learningOutcomes: string;
    };
    statusLabels: {
      completed: string;
      inProgress: string;
      planned: string;
    };
    categoryLabels: {
      web: string;
      backend: string;
      mobile: string;
      game: string;
      testing: string;
      ai: string;
      all: string;
    };
    projectData: Record<string, ProjectData>;
    projectList: Array<{
      title: string;
      description: string;
      longDescription?: string;
      category: string;
      technologies: string[];
      status: string;
      github?: string;
      demo?: string;
      image?: string;
      highlights?: string[];
    }>;
  };

  /**
   * Skills (Yetenekler) Sayfası
   * 
   * Profesyonel yaklaşım: Self-rating yerine objektif metrikler
   * - Deneyim süresi (yıl bazında)
   * - Aktif kullanım durumu
   * - Proje bazlı deneyim
   */
  skills: {
    /** Bölüm başlıkları */
    sectionTitles: {
      allSkills: string;
      yearsOfExperience: string;
    };
    /** Deneyim süreleri için etiketler */
    experienceLabels: {
      lessThanYear: string;
      year: string;
      years: string;
      activelyUsing: string;
    };
    /** Skill kategorileri */
    categories: SkillCategory[];
  };
}

/**
 * Skill Kategorisi Tipi
 * Her kategori birden fazla skill içerir
 */
export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: Skill[];
}

/**
 * Tekil Skill Tipi
 * 
 * Profesyonel Yaklaşım:
 * - Self-rating (level, proficiency) KALDIRILDI
 * - Objektif metrikler: deneyim süresi, aktif kullanım
 * 
 * Neden bu yaklaşım?
 * - Self-rating sübjektif ve yanıltıcı olabilir
 * - İşverenler objektif metrikleri tercih eder
 * - "3 yıl React deneyimi" > "React: %90"
 */
export interface Skill {
  /** Teknoloji/Yetenek adı */
  name: string;
  /** Deneyim yılı (zorunlu) - 0.5 = 6 ay, 1 = 1 yıl */
  yearsOfExperience: number;
  /** Aktif olarak kullanılıyor mu? (güncel projelerinde) */
  isActive?: boolean;
}

// Dil sözlüğü tipi
export type TranslationDictionary = Record<Locale, Translations>;
