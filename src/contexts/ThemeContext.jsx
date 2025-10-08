/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useMemo, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Ambil tema dari localStorage atau default ke 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Terapkan kelas 'dark' pada elemen <html> saat tema berubah
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  // Gunakan useMemo untuk efisiensi
  const contextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
