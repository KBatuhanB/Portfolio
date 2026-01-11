/**
 * Home Page - Ana Sayfa
 * 
 * Portfolio'nun landing page'i.
 * Sparkles background, Encrypted text ve 3D Cards.
 */

'use client';

import { useI18n } from '@/i18n/i18n-context';
import { SparklesCore } from '@/components/ui/sparkles';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import Link from 'next/link';
import {
  IconSchool,
  IconCode,
  IconTrophy,
  IconBriefcase,
  IconUser,
} from '@tabler/icons-react';

export default function HomePage() {
  const { t } = useI18n();

  // Navigation cards data with unique colors
  const navigationCards = [
    {
      title: t.navigation.personalInfo,
      description: t.pageDescription.personalInfo,
      icon: <IconUser className="w-12 h-12" />,
      href: '/personal-info',
      colors: {
        icon: 'text-pink-400',
        title: 'text-pink-300',
        description: 'text-pink-200/70',
        border: 'border-pink-500/30 hover:border-pink-400/60',
        shadow: 'hover:shadow-pink-500/20',
      },
    },
    {
      title: t.navigation.experience,
      description: t.pageDescription.experience,
      icon: <IconBriefcase className="w-12 h-12" />,
      href: '/experience',
      colors: {
        icon: 'text-purple-400',
        title: 'text-purple-300',
        description: 'text-purple-200/70',
        border: 'border-purple-500/30 hover:border-purple-400/60',
        shadow: 'hover:shadow-purple-500/20',
      },
    },
    {
      title: t.navigation.projects,
      description: t.pageDescription.projects,
      icon: <IconCode className="w-12 h-12" />,
      href: '/projects',
      colors: {
        icon: 'text-green-400',
        title: 'text-green-300',
        description: 'text-green-200/70',
        border: 'border-green-500/30 hover:border-green-400/60',
        shadow: 'hover:shadow-green-500/20',
      },
    },
    {
      title: t.navigation.skills,
      description: t.pageDescription.skills,
      icon: <IconTrophy className="w-12 h-12" />,
      href: '/skills',
      colors: {
        icon: 'text-yellow-400',
        title: 'text-yellow-300',
        description: 'text-yellow-200/70',
        border: 'border-yellow-500/30 hover:border-yellow-400/60',
        shadow: 'hover:shadow-yellow-500/20',
      },
    },
    {
      title: t.navigation.education,
      description: t.pageDescription.education,
      icon: <IconSchool className="w-12 h-12" />,
      href: '/education',
      colors: {
        icon: 'text-blue-400',
        title: 'text-blue-300',
        description: 'text-blue-200/70',
        border: 'border-blue-500/30 hover:border-blue-400/60',
        shadow: 'hover:shadow-blue-500/20',
      },
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Sparkles Background - Tam ekran */}
      <div className="w-full absolute inset-0 min-h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Content - Centered */}
      <div className="relative z-20 flex flex-col items-center justify-start pt-16 px-8 w-full max-w-[1800px]">
        {/* Hero Section - Kompakt */}
        <div className="text-center space-y-4 mb-20">
          {/* Main Heading with Encrypted Text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <EncryptedText
              text="Batuhan Bölükbaşı"
              encryptedClassName="text-neutral-500"
              revealedClassName="text-white"
              revealDelayMs={90}
              flipDelayMs={20}
            />
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Software Developer
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            {t.pageDescription.home}
          </p>
        </div>

        {/* 3D Cards Grid - 5 Cards Yan Yana */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full pb-24 px-4">
          {navigationCards.map((card, index) => (
            <Link key={index} href={card.href} className="w-full">
              <CardContainer className="inter-var w-full">
                <CardBody className={`bg-black relative group/card hover:shadow-2xl ${card.colors.shadow} ${card.colors.border} w-full h-[320px] rounded-xl p-6 border flex flex-col items-center justify-between transition-all duration-300 hover:border-white/[0.4]`}>
                  {/* Icon */}
                  <CardItem
                    translateZ="100"
                    className={`w-full flex justify-center mb-4 ${card.colors.icon}`}
                  >
                    {card.icon}
                  </CardItem>

                  {/* Title */}
                  <CardItem
                    translateZ="80"
                    className={`text-lg font-bold text-center ${card.colors.title}`}
                  >
                    {card.title}
                  </CardItem>

                  {/* Description */}
                  <CardItem
                    as="p"
                    translateZ="60"
                    className={`text-xs text-center flex-grow flex items-center ${card.colors.description}`}
                  >
                    {card.description}
                  </CardItem>

                  {/* Button */}
                  <CardItem
                    translateZ="120"
                    className="w-full mt-4"
                  >
                    <HoverBorderGradient
                      containerClassName={`rounded-full w-full border ${card.colors.border}`}
                      as="button"
                      className={`bg-black ${card.colors.description} flex items-center justify-center space-x-2 w-full border ${card.colors.border}`}
                      duration={1}
                    >
                      <span className={`text-xs font-bold ${card.colors.description}`}>
                        {t.navigation.home === 'Ana Sayfa' ? 'Görüntüle →' : 'View →'}
                      </span>
                    </HoverBorderGradient>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
