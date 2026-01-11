/**
 * Personal Info Page - Kişisel Bilgiler
 * 
 * Hakkımda, sosyal medya linkleri, iletişim formu ve profil resmi.
 * 
 * Tasarım Özellikleri:
 * - Pink tema - Home page'deki personal info card'ından alındı
 * - BackgroundBeamsWithCollision arka plan efekti (pink tema)
 * - 3D Card component'leri ile modern görünüm
 * - 2 sütunlu layout: Sol (Hakkımda + İletişim), Sağ (Profil Resmi)
 * - PixelatedCanvas ile interaktif profil görseli
 * - Responsive tasarım (mobil uyumlu)
 * 
 * @author Batuhan Bölükbaşı
 */

'use client';

import React, { useState } from 'react';
import { useI18n } from '@/i18n/i18n-context';
import { PortfolioNavigation } from '@/components/layout/PortfolioNavigation';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { SocialLinks } from '@/components/ui/social-links';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';

/**
 * Sosyal medya hesap bilgileri
 * URL'ler gerçek hesaplara yönlendirildi
 */
const socialLinksData = [
  {
    platform: 'github' as const,
    url: 'https://github.com/KBatuhanB',
    tooltip: 'GitHub',
  },
  {
    platform: 'linkedin' as const,
    url: 'https://www.linkedin.com/in/batuhan-b%C3%B6l%C3%BCkba%C5%9F%C4%B1-45b2b726b/',
    tooltip: 'LinkedIn',
  },
  {
    platform: 'email' as const,
    url: '#', // Gmail URL dinamik olarak açılacak
    tooltip: 'Email',
  },
  {
    platform: 'whatsapp' as const,
    url: 'https://wa.me/905059950859',
    tooltip: 'WhatsApp',
  },
];

export default function PersonalInfoPage() {
  const { t } = useI18n();
  
  /**
   * Form state yönetimi
   * Tüm form alanları için tek state objesi
   */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  /**
   * Form gönderim durumu
   * loading: Gönderim devam ediyor
   * success: Başarılı gönderim
   * error: Hata durumu
   */
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  /**
   * Form input değişikliklerini yakalar
   * Tek handler ile tüm inputları yönetir (DRY prensibi)
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Form gönderimi
   * Gmail compose sayfasını önceden doldurulmuş olarak açar
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    setSubmitStatus('loading');

    try {
      // Kısa bir gecikme ekle (loading animasyonu için)
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Email body oluştur
      const emailBody = `Gönderen: ${formData.name}\nE-posta: ${formData.email}\n\nMesaj:\n${formData.message}`;
      
      // Gmail compose URL'si oluştur
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(emailBody);
      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=batuhankelami@gmail.com&su=${subject}&body=${body}`;
      
      // Gmail'i yeni sekmede aç
      window.open(gmailUrl, '_blank');
      
      // Başarı durumuna geç
      setTimeout(() => {
        setSubmitStatus('success');
        // Formu temizle
        setFormData({ name: '', email: '', subject: '', message: '' });
        // 3 saniye sonra durumu sıfırla
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }, 100);
      
    } catch (error) {
      console.error('Form gönderimi hatası:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  /**
   * Email butonu için özel handler
   * Gmail compose sayfasını önceden doldurulmuş olarak açar
   */
  const handleEmailClick = () => {
    const subject = encodeURIComponent(t.personalInfo.emailSubject);
    const body = encodeURIComponent(t.personalInfo.emailBody);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=batuhankelami@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <>
      <BackgroundBeamsWithCollision colorTheme="pink">
        <div className="min-h-screen flex flex-col">
          <div className="container mx-auto py-12 pb-32 relative z-20 px-4 flex-1">
            
            {/* Sayfa Başlığı - Encrypted text efekti ile */}
            <header className="mb-12 text-center py-4">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
                <EncryptedText
                  text={t.pageTitle.personalInfo}
                  encryptedClassName="text-pink-500/50"
                  revealedClassName="text-pink-300"
                  revealDelayMs={100}
                  flipDelayMs={40}
                />
              </h1>
              <p className="text-base text-pink-200/70 max-w-2xl mx-auto">
                {t.pageDescription.personalInfo}
              </p>
            </header>

            {/* Ana İçerik - 2 Sütunlu Grid */}
            <div className="max-w-7xl mx-auto space-y-8">
              
              {/* Card 1: Hakkımda + Profil Resmi (Birleştirilmiş) */}
              <CardContainer className="inter-var w-full" rotationIntensity={200}>
                <CardBody className="bg-black/80 relative group/card hover:shadow-2xl hover:shadow-pink-500/20 border-pink-500/30 hover:border-pink-400/60 w-full h-auto rounded-xl p-6 md:p-8 border transition-all duration-300">
                  
                  {/* 2 Sütunlu Layout: Sol - Bilgiler, Sağ - Resim */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    
                    {/* Sol Kısım - Hakkımda Bilgileri (3/5) */}
                    <div className="lg:col-span-3 flex flex-col">
                      
                      {/* Hakkımda Başlığı */}
                      <CardItem translateZ={15} className="w-full mb-6">
                        <h2 className="text-2xl font-bold text-pink-300 flex items-center gap-2">
                          {t.personalInfo.aboutMe}
                        </h2>
                      </CardItem>

                      {/* İsim ve Ünvan */}
                      <CardItem translateZ={25} className="w-full mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          {t.personalInfo.name}
                        </h3>
                      </CardItem>
                      
                      <CardItem translateZ={20} className="w-full mb-6">
                        <p className="text-pink-300/90 text-sm md:text-base font-medium">
                          {t.personalInfo.title}
                        </p>
                      </CardItem>

                      {/* Bio - Hakkımda Yazısı */}
                      <CardItem translateZ={10} className="w-full mb-8 flex-1">
                        <p className="text-pink-100/80 text-sm md:text-base leading-relaxed whitespace-pre-line">
                          {t.personalInfo.bio}
                        </p>
                      </CardItem>

                      {/* Sosyal Medya Linkleri - z-index ve pointer-events düzeltmesi */}
                      <CardItem translateZ={30} className="w-full relative z-50" style={{ pointerEvents: 'auto' }}>
                        <div>
                          <h4 className="text-pink-300 font-semibold mb-4 flex items-center gap-2">
                            <span className="text-lg">🔗</span>
                            {t.personalInfo.socialLinks}
                          </h4>
                          <div className="flex items-center gap-4 flex-wrap relative z-50">
                            <SocialLinks links={socialLinksData} onEmailClick={handleEmailClick} />
                            
                            {/* CV İndirme Butonu */}
                            <a
                              href="/Portfolio/cv.pdf"
                              download="CV_Batuhan_Bolukbasi.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative z-50"
                              style={{ pointerEvents: 'auto' }}
                            >
                              <HoverBorderGradient
                                containerClassName="rounded-full"
                                className="bg-black text-pink-300 flex items-center gap-2 px-4 py-2"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="w-4 h-4"
                                >
                                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                  <polyline points="7 10 12 15 17 10" />
                                  <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                {t.personalInfo.downloadCV}
                              </HoverBorderGradient>
                            </a>
                          </div>
                        </div>
                      </CardItem>
                    </div>

                    {/* Sağ Kısım - Profil Resmi ve İletişim Bilgileri (2/5) */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                      {/* Profil Resmi */}
                      <div className="flex items-center justify-center">
                        <div className="relative group">
                          {/* Gradient Border Effect */}
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                          
                          {/* Main Image Container */}
                          <div className="relative overflow-hidden rounded-2xl border-2 border-pink-500/40 shadow-2xl shadow-pink-500/20 backdrop-blur-sm">
                            <img
                              src="/Portfolio/images/profile.jpg"
                              alt="Kelami Batuhan"
                              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                              style={{ maxWidth: '280px', maxHeight: '350px' }}
                            />
                            
                            {/* Overlay gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          </div>
                        </div>
                      </div>

                      {/* İletişim Bilgileri - Resmin altında */}
                      <CardItem translateZ={15} className="w-full">
                        <div className="space-y-3 p-4 rounded-lg bg-pink-500/10 border border-pink-500/20">
                          <div className="flex flex-col gap-3 text-sm">
                            <div className="flex items-center gap-3">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-pink-400 flex-shrink-0">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22 6 12 13 2 6" />
                              </svg>
                              <a href="mailto:batuhankelami@gmail.com" className="text-pink-200/80 hover:text-pink-300 transition-colors duration-200 truncate">
                                batuhankelami@gmail.com
                              </a>
                            </div>
                            <div className="flex items-center gap-3">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-pink-400 flex-shrink-0">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                              </svg>
                              <a href="tel:+905059950859" className="text-pink-200/80 hover:text-pink-300 transition-colors duration-200">
                                +90 505 995 0859
                              </a>
                            </div>
                          </div>
                        </div>
                      </CardItem>
                    </div>
                  </div>
                </CardBody>
              </CardContainer>

              {/* Card 2: İletişim Formu */}
              <CardContainer className="inter-var w-full" rotationIntensity={200}>
                <CardBody className="bg-black/80 relative group/card hover:shadow-2xl hover:shadow-pink-500/20 border-pink-500/30 hover:border-pink-400/60 w-full h-auto rounded-xl p-6 md:p-8 border transition-all duration-300">
                      
                      {/* İletişim Başlığı */}
                      <CardItem translateZ={15} className="w-full mb-2">
                        <h2 className="text-2xl font-bold text-pink-300 flex items-center gap-2">
                          <span className="text-2xl">✉️</span>
                          {t.personalInfo.contactMe}
                        </h2>
                      </CardItem>
                      
                      <CardItem translateZ={10} className="w-full mb-6">
                        <p className="text-pink-200/60 text-sm">
                          {t.personalInfo.contactDescription}
                        </p>
                      </CardItem>

                      {/* İletişim Formu */}
                      <CardItem translateZ={10} className="w-full">
                        <form onSubmit={handleSubmit} className="space-y-4">
                          {/* İsim ve Email - Yan Yana */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium text-pink-300 mb-2"
                              >
                                {t.personalInfo.form.name}
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-lg text-pink-100 placeholder:text-pink-300/40 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400/50 transition-all duration-200"
                                placeholder={t.personalInfo.form.namePlaceholder}
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium text-pink-300 mb-2"
                              >
                                {t.personalInfo.form.email}
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-lg text-pink-100 placeholder:text-pink-300/40 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400/50 transition-all duration-200"
                                placeholder={t.personalInfo.form.emailPlaceholder}
                              />
                            </div>
                          </div>

                          {/* Konu */}
                          <div>
                            <label
                              htmlFor="subject"
                              className="block text-sm font-medium text-pink-300 mb-2"
                            >
                              {t.personalInfo.form.subject}
                            </label>
                            <input
                              type="text"
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-lg text-pink-100 placeholder:text-pink-300/40 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400/50 transition-all duration-200"
                              placeholder={t.personalInfo.form.subjectPlaceholder}
                            />
                          </div>

                          {/* Mesaj */}
                          <div>
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium text-pink-300 mb-2"
                            >
                              {t.personalInfo.form.message}
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              required
                              rows={5}
                              className="w-full px-4 py-3 bg-black/50 border border-pink-500/30 rounded-lg text-pink-100 placeholder:text-pink-300/40 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400/50 transition-all duration-200 resize-none"
                              placeholder={t.personalInfo.form.messagePlaceholder}
                            />
                          </div>

                          {/* Gönder Butonu */}
                          <button
                            type="submit"
                            disabled={submitStatus === 'loading'}
                            className={`
                              w-full px-6 py-3 rounded-lg font-semibold text-white
                              transition-all duration-300 flex items-center justify-center gap-2
                              ${submitStatus === 'loading'
                                ? 'bg-pink-500/50 cursor-not-allowed'
                                : submitStatus === 'success'
                                  ? 'bg-green-500 hover:bg-green-600'
                                  : submitStatus === 'error'
                                    ? 'bg-red-500 hover:bg-red-600'
                                    : 'bg-pink-500 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/30'
                              }
                            `}
                          >
                            {submitStatus === 'loading' && (
                              <svg
                                className="animate-spin h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                            )}
                            {submitStatus === 'success' && '✓ Gönderildi!'}
                            {submitStatus === 'error' && '✕ Hata Oluştu'}
                            {submitStatus === 'idle' && t.personalInfo.sendMessage}
                            {submitStatus === 'loading' && 'Gönderiliyor...'}
                          </button>
                        </form>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Navigasyon Çubuğu - Sayfa altında sabit */}
      <PortfolioNavigation />
    </>
  );
}
