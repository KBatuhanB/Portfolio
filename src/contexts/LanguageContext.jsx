/**
 * Language Context - Multi-language Support System
 * 
 * This context provides language switching functionality across the application.
 * Supports Turkish and English languages with default English setting.
 * Includes translation system and language state management.
 * 
 * Architecture follows SOLID principles:
 * - Single Responsibility: Only handles language state and translations
 * - Open/Closed: Easy to add new languages
 * - Interface Segregation: Simple API for components
 */

import React, { createContext, useState, useContext } from 'react';
import enTranslations from '../data/en.json';
import trTranslations from '../data/tr.json';

/**
 * Language Context for state management
 */
const LanguageContext = createContext();

/**
 * Available languages configuration
 */
export const LANGUAGES = {
  EN: 'en',
  TR: 'tr'
};

/**
 * Language Context Provider Component
 * 
 * Provides language state and switching functionality to child components.
 * Manages current language state and provides translation functions.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Language provider wrapper
 */
export const LanguageProvider = ({ children }) => {
  // Current language state (default: English)
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES.EN);

  /**
   * Toggle between Turkish and English
   */
  const toggleLanguage = () => {
    setCurrentLanguage(prevLang => 
      prevLang === LANGUAGES.EN ? LANGUAGES.TR : LANGUAGES.EN
    );
  };

  /**
   * Set specific language
   * 
   * @param {string} language - Language code (en/tr)
   */
  const setLanguage = (language) => {
    if (Object.values(LANGUAGES).includes(language)) {
      setCurrentLanguage(language);
    }
  };

  /**
   * Helper function to get translation by key path
   * 
   * @param {string} language - Current language ('en' or 'tr')
   * @param {string} keyPath - Dot notation path to translation (e.g., 'personalInfo.greeting')
   * @returns {string|array} Translated text/array or fallback to English
   */
  const getTranslation = (language, keyPath) => {
    const keys = keyPath.split('.');
    const translationsData = language === 'en' ? enTranslations : trTranslations;
    let translation = translationsData;
    
    // Navigate through the nested object
    for (const key of keys) {
      if (translation && typeof translation === 'object' && key in translation) {
        translation = translation[key];
      } else {
        // Fallback to English if translation not found
        translation = enTranslations;
        for (const fallbackKey of keys) {
          if (translation && typeof translation === 'object' && fallbackKey in translation) {
            translation = translation[fallbackKey];
          } else {
            return `[${keyPath}]`; // Return key if not found
          }
        }
        break;
      }
    }
    
    // Return the translation if it's a string or array, otherwise return error key
    return (typeof translation === 'string' || Array.isArray(translation) || typeof translation === 'object') ? translation : `[${keyPath}]`;
  };

  /**
   * Check if current language is Turkish
   * 
   * @returns {boolean} True if Turkish, false if English
   */
  const isTurkish = () => currentLanguage === LANGUAGES.TR;

  /**
   * Check if current language is English
   * 
   * @returns {boolean} True if English, false if Turkish
   */
  const isEnglish = () => currentLanguage === LANGUAGES.EN;

  /**
   * Get language display name
   * 
   * @returns {string} Display name of current language
   */
  const getLanguageDisplayName = () => {
    return currentLanguage === LANGUAGES.EN ? 'English' : 'Türkçe';
  };

  /**
   * Get language flag emoji
   * 
   * @returns {string} Flag emoji for current language
   */
  const getLanguageFlag = () => {
    return currentLanguage === LANGUAGES.EN ? '🇺🇸' : '🇹🇷';
  };

  /**
   * Translation function
   * 
   * @param {string} keyPath - Dot notation path to translation (e.g., 'personalInfo.greeting')
   * @returns {string} Translated text
   */
  const t = (keyPath) => {
    return getTranslation(currentLanguage, keyPath);
  };

  // Context value object
  const value = {
    language: currentLanguage,
    currentLanguage,
    toggleLanguage,
    setLanguage,
    isTurkish,
    isEnglish,
    getLanguageDisplayName,
    getLanguageFlag,
    t,
    LANGUAGES
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Custom hook to use Language Context
 * 
 * Provides easy access to language state and functions.
 * Throws error if used outside of LanguageProvider.
 * 
 * @returns {Object} Language context value
 * @throws {Error} If used outside LanguageProvider
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};

export default LanguageContext;
