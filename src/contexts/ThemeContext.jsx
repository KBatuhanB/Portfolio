/**
 * Theme Context - Dark/Light Theme Management
 * 
 * This context provides theme switching functionality across the application.
 * Features:
 * - Default dark theme on initial load
 * - Theme persistence in localStorage
 * - Smooth theme transitions
 * - Global theme state management
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles theme management
 * - Dependency Inversion: Components depend on theme abstraction
 */

import React, { createContext, useContext, useEffect, useState } from 'react';

/**
 * Theme context interface
 */
const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
  isDark: true
});

/**
 * Theme Provider Component
 * 
 * Provides theme state and toggle functionality to all child components.
 * Persists theme preference in localStorage and applies it to document root.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Theme provider wrapper
 */
export const ThemeProvider = ({ children }) => {
  // Initialize theme state with dark as default
  const [theme, setTheme] = useState('dark');

  /**
   * Initialize theme from localStorage or default to dark
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const initialTheme = savedTheme || 'dark'; // Default to dark theme
    
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  /**
   * Apply theme to document root
   * 
   * @param {string} themeValue - Theme to apply ('light' or 'dark')
   */
  const applyTheme = (themeValue) => {
    if (themeValue === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  /**
   * Toggle between light and dark themes
   * Saves preference to localStorage and applies immediately
   */
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    applyTheme(newTheme);
  };

  /**
   * Context value object
   */
  const contextValue = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to use theme context
 * 
 * @returns {Object} Theme context value
 * @throws {Error} If used outside of ThemeProvider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

export default ThemeContext;
