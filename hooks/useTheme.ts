"use client";

import { useState, useEffect } from "react";

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('system');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Get saved theme preference or default to system
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    setTheme(savedTheme);
    
    // Function to update dark mode based on theme preference
    const updateDarkMode = (currentTheme: Theme) => {
      if (currentTheme === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(systemPrefersDark);
        return systemPrefersDark;
      } else {
        const isDarkMode = currentTheme === 'dark';
        setIsDark(isDarkMode);
        return isDarkMode;
      }
    };

    const isDarkMode = updateDarkMode(savedTheme);
    
    // Apply theme immediately
    applyTheme(isDarkMode);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      if (savedTheme === 'system') {
        const systemDark = mediaQuery.matches;
        setIsDark(systemDark);
        applyTheme(systemDark);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  // Apply theme to document
  const applyTheme = (isDarkMode: boolean) => {
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  };

  const setThemePreference = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    let isDarkMode: boolean;
    
    if (newTheme === 'system') {
      isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      isDarkMode = newTheme === 'dark';
    }
    
    setIsDark(isDarkMode);
    applyTheme(isDarkMode);
  };

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setThemePreference(newTheme);
  };

  const cycleTheme = () => {
    const nextTheme: Theme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setThemePreference(nextTheme);
  };

  return { 
    theme, 
    isDark, 
    toggleTheme, 
    cycleTheme, 
    setTheme: setThemePreference 
  };
}
