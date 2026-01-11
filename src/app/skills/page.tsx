/**
 * Skills Page - Yetenekler
 * 
 * Teknik yeteneklerin profesyonel kategoriler halinde sergilendiği sayfa.
 * Her kategori 3D Card ile gösterilir, içinde skill'ler progress bar ile.
 * 
 * Tasarım Özellikleri:
 * - Yellow tema - Home page'deki skills card'ı ile uyumlu
 * - BackgroundBeamsWithCollision arka plan efekti (yellow tema)
 * - 3D Card component'leri ile modern görünüm
 * - Animated progress bar'lar
 * - Hover efektleri ve smooth transitions
 * - Responsive grid layout
 * 
 * Mimari:
 * - SOLID prensipleri: Her component tek sorumluluk
 * - Separation of Concerns: Veri i18n'de, UI burada
 * - DRY: Tekrar eden kodlar map ile render
 * - Type-safe: Tüm veriler TypeScript ile tip güvenli
 * 
 * @author Batuhan Bölükbaşı
 */

'use client';

import React, { useMemo, useCallback } from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { SkillCategory, Skill } from '@/types/i18n.types';
import { PortfolioNavigation } from '@/components/layout/PortfolioNavigation';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

/**
 * Proficiency seviyesine göre renk döndürür
 * Tutarlı renk kullanımı için merkezi fonksiyon
 * 
 * @param proficiency - Skill seviyesi
 * @returns Tailwind CSS renk sınıfları
 */
const getProficiencyColor = (proficiency: Skill['proficiency']): {
  bg: string;
  text: string;
  border: string;
  progress: string;
} => {
  const colors = {
    beginner: {
      bg: 'bg-gray-500/20',
      text: 'text-gray-300',
      border: 'border-gray-500/30',
      progress: 'bg-gradient-to-r from-gray-400 to-gray-500',
    },
    intermediate: {
      bg: 'bg-blue-500/20',
      text: 'text-blue-300',
      border: 'border-blue-500/30',
      progress: 'bg-gradient-to-r from-blue-400 to-blue-500',
    },
    advanced: {
      bg: 'bg-yellow-500/20',
      text: 'text-yellow-300',
      border: 'border-yellow-500/30',
      progress: 'bg-gradient-to-r from-yellow-400 to-yellow-500',
    },
    expert: {
      bg: 'bg-green-500/20',
      text: 'text-green-300',
      border: 'border-green-500/30',
      progress: 'bg-gradient-to-r from-green-400 to-green-500',
    },
  };

  return colors[proficiency] || colors.intermediate;
};

/**
 * Tek bir Skill için Progress Bar Component
 * 
 * Animasyonlu progress bar ile skill seviyesini gösterir.
 * Hover'da detaylı bilgi tooltip'i görünür.
 * 
 * @param skill - Skill verisi
 * @param proficiencyLabel - Çevrilmiş seviye etiketi
 * @param experienceLabel - Çevrilmiş deneyim etiketi
 */
interface SkillBarProps {
  skill: Skill;
  proficiencyLabel: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  skill, 
  proficiencyLabel, 
}) => {
  const colors = getProficiencyColor(skill.proficiency);

  return (
    <div className="group relative">
      {/* Skill Başlık Satırı */}
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-yellow-100 group-hover:text-yellow-300 transition-colors">
          {skill.name}
        </span>
        <div className="flex items-center gap-2">
          {/* Yüzde Göstergesi */}
          <span className={`text-xs font-semibold ${colors.text}`}>
            {skill.level}%
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-yellow-500/10 rounded-full overflow-hidden">
        <div
          className={`h-full ${colors.progress} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${skill.level}%` }}
        />
      </div>

      {/* Hover Tooltip - Proficiency Badge */}
      <div className={`
        absolute -top-8 left-1/2 transform -translate-x-1/2
        px-2 py-1 rounded text-[10px] font-medium
        ${colors.bg} ${colors.text} ${colors.border} border
        opacity-0 group-hover:opacity-100 transition-opacity duration-200
        pointer-events-none whitespace-nowrap z-10
      `}>
        {proficiencyLabel}
      </div>
    </div>
  );
};

/**
 * Skill Kategorisi Card Component
 * 
 * Her kategori için 3D Card içinde skill'leri listeler.
 * Hover efekti ve smooth animasyonlar içerir.
 * 
 * @param category - Kategori verisi
 * @param proficiencyLabels - Çevrilmiş seviye etiketleri
 * @param experienceLabel - Çevrilmiş deneyim etiketi
 */
interface SkillCategoryCardProps {
  category: SkillCategory;
  proficiencyLabels: Record<string, string>;
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({
  category,
  proficiencyLabels,
}) => {
  /**
   * Kategorideki ortalama skill seviyesini hesapla
   * Kategori kartının özet bilgisi için kullanılır
   */
  const averageLevel = useMemo(() => {
    if (category.skills.length === 0) return 0;
    const sum = category.skills.reduce((acc, skill) => acc + skill.level, 0);
    return Math.round(sum / category.skills.length);
  }, [category.skills]);

  /**
   * Skill seviyesine göre proficiency label'ını al
   */
  const getProficiencyLabel = useCallback((proficiency: string): string => {
    return proficiencyLabels[proficiency] || proficiency;
  }, [proficiencyLabels]);

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
              <h3 className="text-xl font-bold text-yellow-300">
                {category.name}
              </h3>
            </div>
            {/* Ortalama Seviye Badge */}
            <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 rounded-full border border-yellow-500/30">
              <span className="text-xs font-semibold text-yellow-300">
                {averageLevel}%
              </span>
            </div>
          </div>
        </CardItem>

        {/* Kategori Açıklama */}
        <CardItem translateZ={30} className="w-full mb-5">
          <p className="text-sm text-yellow-200/60 leading-relaxed">
            {category.description}
          </p>
        </CardItem>

        {/* Skills Listesi */}
        <CardItem translateZ={20} className="w-full">
          <div className="space-y-4">
            {category.skills.map((skill, index) => (
              <SkillBar
                key={`${category.id}-${skill.name}-${index}`}
                skill={skill}
                proficiencyLabel={getProficiencyLabel(skill.proficiency)}
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
 * Skills Page Ana Component
 * 
 * Tüm skill kategorilerini grid layout'ta sergiler.
 * Yellow tema, BackgroundBeams ve EncryptedText başlık kullanır.
 */
export default function SkillsPage() {
  const { t } = useI18n();

  /**
   * Skill kategorilerini i18n'den al
   * useMemo ile gereksiz hesaplamaları önle
   */
  const categories = useMemo(() => {
    return t.skills?.categories || [];
  }, [t.skills?.categories]);

  /**
   * Toplam skill sayısını hesapla
   * Sayfa özeti için kullanılır
   */
  const totalSkills = useMemo(() => {
    return categories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [categories]);

  /**
   * Proficiency labels'ı object olarak al
   * SkillCategoryCard'a geçirmek için
   */
  const proficiencyLabels = useMemo(() => {
    return t.skills?.proficiencyLevels || {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      expert: 'Expert',
    };
  }, [t.skills?.proficiencyLevels]);

  return (
    <>
      <BackgroundBeamsWithCollision colorTheme="yellow">
        <div className="min-h-screen flex flex-col">
          <div className="container mx-auto py-12 pb-32 relative z-20 px-4 flex-1">
            
            {/* Sayfa Başlığı - Encrypted text efekti ile */}
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
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/30">
                  <span className="text-yellow-400 text-lg">📦</span>
                  <span className="text-sm text-yellow-300">
                    {categories.length} {t.navigation.skills === 'Yetenekler' ? 'Kategori' : 'Categories'}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-full border border-yellow-500/30">
                  <span className="text-yellow-400 text-lg">⚡</span>
                  <span className="text-sm text-yellow-300">
                    {totalSkills} {t.navigation.skills === 'Yetenekler' ? 'Yetenek' : 'Skills'}
                  </span>
                </div>
              </div>
            </header>

            {/* Proficiency Legend - Seviye Göstergesi */}
            <div className="max-w-7xl mx-auto mb-10">
              <div className="flex flex-wrap gap-3 justify-center">
                {Object.entries(proficiencyLabels).map(([key, label]) => {
                  const colors = getProficiencyColor(key as Skill['proficiency']);
                  return (
                    <div
                      key={key}
                      className={`
                        flex items-center gap-2 px-3 py-1.5 rounded-full
                        ${colors.bg} ${colors.border} border
                        transition-all duration-300 hover:scale-105
                      `}
                    >
                      <div className={`w-2 h-2 rounded-full ${colors.progress}`} />
                      <span className={`text-xs font-medium ${colors.text}`}>
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skills Grid */}
            <div className="max-w-7xl mx-auto">
              {categories.length === 0 ? (
                // Boş durum - Edge case handling
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-yellow-300/70 text-lg">
                    {t.navigation.skills === 'Yetenekler' 
                      ? 'Henüz yetenek eklenmemiş.' 
                      : 'No skills added yet.'}
                  </p>
                </div>
              ) : (
                /* Masonry Layout - Sütun bazlı grid, her kart doğal yüksekliğinde */
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                  {categories.map((category) => (
                    <div key={category.id} className="break-inside-avoid">
                      <SkillCategoryCard
                        category={category}
                        proficiencyLabels={proficiencyLabels}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Navigation - Her zaman en üstte */}
      <PortfolioNavigation />
    </>
  );
}
