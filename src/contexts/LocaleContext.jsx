/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useMemo } from 'react';

export const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');

  const toggleLocale = () => {
    const newLocale = locale === 'id' ? 'en' : 'id';
    localStorage.setItem('locale', newLocale);
    setLocale(newLocale);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contextValue = useMemo(() => ({ locale, toggleLocale }), [locale]);

  return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
};
