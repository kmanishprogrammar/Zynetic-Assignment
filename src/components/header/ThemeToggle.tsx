import { useEffect, useState } from 'react';
import { Switcher } from '@/ui-kit/switcher/switcher';

export const ThemeSwitcher = () => {
  // State to track the current theme (dark or light)
  const [isDark, setIsDark] = useState(() => {
    // Initialize theme based on system preference or default to light
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Update the body class whenever the theme changes
  useEffect(() => {
    document.body.classList.toggle('dark', isDark);
    document.body.classList.toggle('light', !isDark);
  }, [isDark]);

  // Handle theme toggle
  const handleThemeToggle = (value: boolean) => {
    setIsDark(value);
    // Optionally, save the preference to localStorage
    localStorage.setItem('theme', value ? 'dark' : 'light');
  };

  return (
    <Switcher
      label1="🌞" // Light mode icon
      label2="🌙" // Dark mode icon
      onChange={handleThemeToggle}
    />
  );
};