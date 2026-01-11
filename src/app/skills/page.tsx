/**
 * Skills Page - Yetenekler
 * 
 * Profesyonel yaklaşım ile teknik yeteneklerin sergilendiği sayfa.
 * Self-rating sistemleri yerine objektif metrikler kullanılır:
 * - Deneyim süresi (yıl bazında)
 * - Aktif kullanım durumu
 * 
 * Tasarım Felsefesi:
 * - "3 yıl React deneyimi" > "React: %90" 
 * - İşverenler sübjektif puanlamaya değil, somut deneyime bakar
 * - Tag/Badge tabanlı modern ve minimal görünüm
 * 
 * Mimari:
 * - SOLID prensipleri: Her component tek sorumluluk
 * - Clean Code: Okunabilir, bakımı kolay
 * - Type-safe: Tüm veriler TypeScript ile güvenli
 * 
 * @author Batuhan Bölükbaşı
 */

'use client';

import React, { useMemo } from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { SkillCategory, Skill } from '@/types/i18n.types';
import { PortfolioNavigation } from '@/components/layout/PortfolioNavigation';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

/**
 * Deneyim süresini formatla
 * 
 * Profesyonel portfolyolarda kullanılan format:
 * - 0.5 yıl = "< 1 yıl"
 * - 1 yıl = "1 yıl"
 * - 2+ yıl = "2+ yıl"
 * 
 * @param years - Deneyim yılı (0.5 = 6 ay)
 * @param labels - i18n etiketleri
 * @returns Formatlanmış string
 */
const formatExperience = (
  years: number,
  labels: { lessThanYear: string; year: string; years: string }
): string => {
  if (years < 1) {
    return labels.lessThanYear;
  }
  if (years === 1) {
    return `1 ${labels.year}`;
  }
  return `${years}+ ${labels.years}`;
};

/**
 * Deneyim süresine göre renk belirleme
 * 
 * Gradient renk skalası:
 * - < 1 yıl: Gri (başlangıç)
 * - 1-2 yıl: Mavi (gelişen)
 * - 2-3 yıl: Sarı (deneyimli)
 * - 3+ yıl: Yeşil (kıdemli)
 * 
 * @param years - Deneyim yılı
 * @returns Tailwind CSS renk sınıfları
 */
const getExperienceColor = (years: number): {
  bg: string;
  text: string;
  border: string;
  dot: string;
} => {
  if (years < 1) {
    return {
      bg: 'bg-slate-500/20',
      text: 'text-slate-300',
      border: 'border-slate-500/40',
      dot: 'bg-slate-400',
    };
  }
  if (years < 2) {
    return {
      bg: 'bg-blue-500/20',
      text: 'text-blue-300',
      border: 'border-blue-500/40',
      dot: 'bg-blue-400',
    };
  }
  if (years < 3) {
    return {
      bg: 'bg-yellow-500/20',
      text: 'text-yellow-300',
      border: 'border-yellow-500/40',
      dot: 'bg-yellow-400',
    };
  }
  // 3+ yıl - kıdemli
  return {
    bg: 'bg-emerald-500/20',
    text: 'text-emerald-300',
    border: 'border-emerald-500/40',
    dot: 'bg-emerald-400',
  };
};

/**
 * Tek bir Skill Badge Component
 * 
 * Modern tag/badge tasarımı:
 * - Skill adı
 * - Deneyim süresi
 * - Aktif kullanım göstergesi (opsiyonel)
 * 
 * @param skill - Skill verisi
 * @param experienceLabels - i18n deneyim etiketleri
 */
interface SkillBadgeProps {
  skill: Skill;
  experienceLabels: {
    lessThanYear: string;
    year: string;
    years: string;
    activelyUsing: string;
  };
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, experienceLabels }) => {
  const colors = getExperienceColor(skill.yearsOfExperience);
  const experienceText = formatExperience(skill.yearsOfExperience, experienceLabels);

  return (
    <div
      className={`
        group relative inline-flex items-center gap-2
        px-3 py-2 rounded-lg
        ${colors.bg} ${colors.border} border
        transition-all duration-300
        hover:scale-105 hover:shadow-lg
        cursor-default
      `}
    >
      {/* Deneyim göstergesi dot */}
      <div className={`w-2 h-2 rounded-full ${colors.dot} flex-shrink-0`} />
      
      {/* Skill adı */}
      <span className="text-sm font-medium text-yellow-100">
        {skill.name}
      </span>
      
      {/* Deneyim süresi */}
      <span className={`text-xs font-semibold ${colors.text} ml-auto`}>
        {experienceText}
      </span>
      
      {/* Aktif kullanım badge'i */}
      {skill.isActive && (
        <div 
          className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black"
          title={experienceLabels.activelyUsing}
        >
          {/* Pulse animasyonu - aktif kullanımı vurgular */}
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
        </div>
      )}
    </div>
  );
};

/**
 * Skill Kategorisi Card Component
 * 
 * Her kategori için 3D Card içinde skill badge'lerini listeler.
 * Masonry layout için break-inside-avoid kullanılır.
 * 
 * @param category - Kategori verisi
 * @param experienceLabels - i18n deneyim etiketleri
 */
interface SkillCategoryCardProps {
  category: SkillCategory;
  experienceLabels: {
    lessThanYear: string;
    year: string;
    years: string;
    activelyUsing: string;
  };
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({
  category,
  experienceLabels,
}) => {
  /**
   * Aktif kullanılan skill sayısı
   */
  const activeSkillsCount = useMemo(() => {
    return category.skills.filter(skill => skill.isActive).length;
  }, [category.skills]);

  return (
    <CardContainer className="inter-var w-full" rotationIntensity={120}>
      <CardBody className={`
        bg-black/80 relative group/card 
        hover:shadow-2xl hover:shadow-yellow-500/20 
        border-yellow-500/30 hover:border-yellow-400/60 
        w-full h-full rounded-xl border 
        transition-all duration-300
        p-6
      `}>
        {/* Kategori Header */}
        <CardItem translateZ={40} className="w-full mb-4">
          <div className="flex items-center justify-between">
            {/* Icon ve İsim */}
            <div className="flex items-center gap-3">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-yellow-300">
                  {category.name}
                </h3>
                {/* Skill sayısı */}
                <span className="text-xs text-yellow-200/50">
                  {category.skills.length} teknoloji
                </span>
              </div>
            </div>
            
            {/* Aktif skill göstergesi */}
            {activeSkillsCount > 0 && (
              <div className="flex items-center gap-1 px-2 py-0.5 bg-green-500/20 rounded-full border border-green-500/30">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-[10px] font-medium text-green-300">
                  {activeSkillsCount} aktif
                </span>
              </div>
            )}
          </div>
        </CardItem>

        {/* Kategori Açıklama */}
        <CardItem translateZ={30} className="w-full mb-5">
          <p className="text-sm text-yellow-200/60 leading-relaxed">
            {category.description}
          </p>
        </CardItem>

        {/* Skills Grid - Badge formatında */}
        <CardItem translateZ={20} className="w-full">
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, index) => (
              <SkillBadge
                key={`${category.id}-${skill.name}-${index}`}
                skill={skill}
                experienceLabels={experienceLabels}
              />
            ))}
          </div>
        </CardItem>

        {/* Hover Glow Efekti */}
        <div className={`
          absolute -inset-px rounded-xl
          bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-yellow-500/0
          opacity-0 group-hover/card:opacity-100
          transition-opacity duration-500
          pointer-events-none
        `} />
      </CardBody>
    </CardContainer>
  );
};

/**
 * Experience Legend Component
 * 
 * Deneyim süresi renk skalasını açıklar
 * Kullanıcıların renk kodlamasını anlamasını sağlar
 */
interface ExperienceLegendProps {
  labels: {
    lessThanYear: string;
    year: string;
    years: string;
    activelyUsing: string;
  };
}

const ExperienceLegend: React.FC<ExperienceLegendProps> = ({ labels }) => {
  const legendItems = [
    { years: 0.5, label: labels.lessThanYear },
    { years: 1, label: `1-2 ${labels.years}` },
    { years: 2, label: `2-3 ${labels.years}` },
    { years: 3, label: `3+ ${labels.years}` },
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {legendItems.map((item, index) => {
        const colors = getExperienceColor(item.years);
        return (
          <div
            key={index}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-full
              ${colors.bg} ${colors.border} border
              transition-all duration-300 hover:scale-105
            `}
          >
            <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
            <span className={`text-xs font-medium ${colors.text}`}>
              {item.label}
            </span>
          </div>
        );
      })}
      
      {/* Aktif kullanım göstergesi */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/40">
        <div className="relative w-2 h-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
        </div>
        <span className="text-xs font-medium text-green-300">
          {labels.activelyUsing}
        </span>
      </div>
    </div>
  );
};

/**
 * Skills Page Ana Component
 * 
 * Tüm skill kategorilerini masonry grid layout'ta sergiler.
 * Yellow tema, BackgroundBeams ve EncryptedText başlık kullanır.
 */
export default function SkillsPage() {
  const { t } = useI18n();

  /**
   * Skill kategorilerini i18n'den al
   */
  const categories = useMemo(() => {
    return t.skills?.categories || [];
  }, [t.skills?.categories]);

  /**
   * Toplam skill sayısını hesapla
   */
  const totalSkills = useMemo(() => {
    return categories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [categories]);

  /**
   * Toplam aktif skill sayısı
   */
  const totalActiveSkills = useMemo(() => {
    return categories.reduce(
      (acc, cat) => acc + cat.skills.filter(s => s.isActive).length,
      0
    );
  }, [categories]);

  /**
   * Deneyim etiketlerini al
   */
  const experienceLabels = useMemo(() => {
    return t.skills?.experienceLabels || {
      lessThanYear: '< 1 yıl',
      year: 'yıl',
      years: 'yıl',
      activelyUsing: 'Aktif',
    };
  }, [t.skills?.experienceLabels]);

  /**
   * Dil kontrolü
   */
  const isTurkish = t.navigation.skills === 'Yetenekler';

  return (
    <>
      <BackgroundBeamsWithCollision colorTheme="yellow">
        <div className="min-h-screen flex flex-col">
          <div className="container mx-auto py-12 pb-32 relative z-20 px-4 flex-1">
            
            {/* Sayfa Başlığı */}
            <header className="mb-12 text-center py-4">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
                <EncryptedText
                  text={t.pageTitle.skills}
                  encryptedClassName="text-yellow-500/40"
                  revealedClassName="text-yellow-300"
                  revealDelayMs={100}
                  flipDelayMs={40}
                />
              </h1>
              <p className="text-base text-yellow-200/70 max-w-2xl mx-auto">
                {t.pageDescription.skills}
              </p>
              
              {/* Özet İstatistikler */}
              <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
                <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/30">
                  <span className="text-yellow-400 text-lg">📦</span>
                  <span className="text-sm text-yellow-300">
                    {categories.length} {isTurkish ? 'Kategori' : 'Categories'}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/30">
                  <span className="text-yellow-400 text-lg">⚡</span>
                  <span className="text-sm text-yellow-300">
                    {totalSkills} {isTurkish ? 'Teknoloji' : 'Technologies'}
                  </span>
                </div>
                {totalActiveSkills > 0 && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/30">
                    <span className="text-green-400 text-lg">🚀</span>
                    <span className="text-sm text-green-300">
                      {totalActiveSkills} {isTurkish ? 'Aktif Kullanım' : 'Actively Using'}
                    </span>
                  </div>
                )}
              </div>
            </header>

            {/* Deneyim Legend */}
            <div className="max-w-7xl mx-auto mb-10">
              <ExperienceLegend labels={experienceLabels} />
            </div>

            {/* Skills Grid */}
            <div className="max-w-7xl mx-auto">
              {categories.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-yellow-300/70 text-lg">
                    {isTurkish 
                      ? 'Henüz yetenek eklenmemiş.' 
                      : 'No skills added yet.'}
                  </p>
                </div>
              ) : (
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                  {categories.map((category) => (
                    <div key={category.id} className="break-inside-avoid">
                      <SkillCategoryCard
                        category={category}
                        experienceLabels={experienceLabels}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      <PortfolioNavigation />
    </>
  );
}
