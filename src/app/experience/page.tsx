/**
 * Experience Page - İş Deneyimi
 * 
 * Profesyonel iş geçmişi, stajlar ve yarışma deneyimleri.
 * 
 * Tasarım Özellikleri:
 * - Mor (purple) tema - Home page'deki experience card'ından alındı
 * - Timeline çubuğu SAĞ tarafta (Education'dan farklı)
 * - BackgroundBeamsWithCollision arka plan efekti
 * - 3D Card component'leri ile modern görünüm
 * - Responsive tasarım (mobil uyumlu)
 * 
 * @author Batuhan Bölükbaşı
 */

'use client';

import { useI18n } from '@/i18n/i18n-context';
import { PortfolioNavigation } from '@/components/layout/PortfolioNavigation';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

/**
 * Deneyim tipine göre badge stilini belirler
 * Staj, yarışma ve tam zamanlı pozisyonlar farklı renklerle gösterilir
 */
const getTypeBadge = (type: string, locale: string) => {
  const badges: Record<string, { label: string; style: string }> = {
    internship: {
      label: locale === 'tr' ? 'Staj' : 'Internship',
      style: 'bg-purple-500/20 text-purple-300 border border-purple-500/50',
    },
    competition: {
      label: locale === 'tr' ? 'Yarışma' : 'Competition',
      style: 'bg-amber-500/20 text-amber-300 border border-amber-500/50',
    },
    freelance: {
      label: locale === 'tr' ? 'Serbest' : 'Freelance',
      style: 'bg-green-500/20 text-green-300 border border-green-500/50',
    },
    fulltime: {
      label: locale === 'tr' ? 'Tam Zamanlı' : 'Full-time',
      style: 'bg-blue-500/20 text-blue-300 border border-blue-500/50',
    },
  };
  return badges[type] || badges.fulltime;
};

export default function ExperiencePage() {
  const { t, locale } = useI18n();

  return (
    <>
      <BackgroundBeamsWithCollision colorTheme="purple">
        <div className="min-h-screen flex flex-col">
          <div className="container mx-auto py-12 pb-32 relative z-20 px-4 flex-1">
            
            {/* Sayfa Başlığı - Encrypted text efekti ile */}
            <header className="mb-12 text-center py-4">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
                <EncryptedText
                  text={t.pageTitle.experience}
                  encryptedClassName="text-purple-500/50"
                  revealedClassName="text-purple-300"
                  revealDelayMs={100}
                  flipDelayMs={40}
                />
              </h1>
              <p className="text-base text-purple-200/70 max-w-2xl mx-auto">
                {t.pageDescription.experience}
              </p>
            </header>

            {/* Timeline Container - Sağ Tarafta Timeline */}
            <div className="max-w-6xl mx-auto relative">
              {/* 
                Timeline Çizgisi - SAĞ TARAFTA (Desktop only)
                Education page'den farklı olarak timeline sağda konumlandırıldı
                Gradient efekti yukarıdan aşağıya purple tonlarında
              */}
              <div className="hidden md:block absolute right-8 md:right-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent"></div>

              {/* Deneyim Kartları */}
              <div className="space-y-12">
                {t.experience.positions.map((position, index) => {
                  const badge = getTypeBadge(position.type, locale);
                  
                  return (
                    <div key={index} className="relative md:pr-28">
                      {/* 
                        Timeline Noktası - Sağ tarafta (Desktop only)
                        Her kart için parlayan mor nokta
                      */}
                      <div className="hidden md:block absolute right-6 md:right-10 top-8 w-5 h-5 rounded-full bg-purple-500 border-4 border-black shadow-lg shadow-purple-500/50"></div>

                      {/* 
                        3D Card Component
                        rotationIntensity={200} - Düşük hareket (education ile aynı)
                        Mor tema renkleri kullanılıyor
                      */}
                      <CardContainer className="inter-var w-full" rotationIntensity={200}>
                        <CardBody className="bg-black/80 relative group/card hover:shadow-2xl hover:shadow-purple-500/20 border-purple-500/30 hover:border-purple-400/60 w-full h-auto rounded-xl p-6 border transition-all duration-300">
                          
                          {/* Üst Satır: Tip Badge + Konum Bilgisi */}
                          <CardItem translateZ={10} className="flex items-center justify-between mb-4 w-full flex-wrap gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.style}`}>
                              {badge.label}
                            </span>
                            <div className="flex items-center gap-3 text-purple-300/70 text-sm">
                              <span>📅 {position.period}</span>
                              <span>📍 {position.location}</span>
                            </div>
                          </CardItem>

                          {/* Pozisyon Başlığı */}
                          <CardItem translateZ={25} className="w-full">
                            <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-2">
                              {position.title}
                            </h3>
                          </CardItem>

                          {/* Şirket/Organizasyon Adı */}
                          <CardItem translateZ={20} className="w-full">
                            <p className="text-lg md:text-xl text-purple-200 mb-4 flex items-center gap-2">
                              {position.company}
                            </p>
                          </CardItem>

                          {/* Sorumluluklar Listesi */}
                          <CardItem translateZ={15} className="w-full">
                            <div className="mb-6">
                              <h4 className="text-purple-300 font-semibold mb-3 flex items-center gap-2">
                                <span className="text-lg">📋</span>
                                {t.experience.responsibilities}
                              </h4>
                              <ul className="space-y-2">
                                {position.description.map((item, idx) => (
                                  <li key={idx} className="flex gap-2 items-start">
                                    {/* Checkmark ikonu - Her madde için */}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className="h-4 w-4 text-purple-500 mt-1 shrink-0"
                                    >
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                      <path
                                        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                                        fill="currentColor"
                                        strokeWidth="0"
                                      />
                                    </svg>
                                    <span className="text-purple-100/90 text-sm leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardItem>

                          {/* Teknoloji Etiketleri */}
                          <CardItem translateZ={20} className="w-full">
                            <div>
                              <h4 className="text-purple-300 font-semibold mb-3 flex items-center gap-2">
                                <span className="text-lg">🛠️</span>
                                {t.experience.technologies}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {position.technologies.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-purple-500/10 text-purple-200 text-xs rounded-full border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-500/20 transition-all duration-200"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </CardItem>
                        </CardBody>
                      </CardContainer>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      
      {/* Navigasyon Çubuğu - Sayfa altında sabit */}
      <PortfolioNavigation />
    </>
  );
}
