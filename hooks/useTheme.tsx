import { useState } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<string>('');

  const initTheme = () => {
    let theme = localStorage.getItem('theme');
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');

    if (!theme) {
      theme = matches ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    }
    setTheme(theme);

    document.body.classList.toggle('dark', theme === 'dark');

    setTimeout(() => {
      document.body.style.visibility = 'visible';
    }, 300);
  };

  const onToggle = () => {
    const theme = localStorage.getItem('theme') as string;

    localStorage.setItem('theme', `${theme === 'dark' ? 'light' : 'dark'}`);

    setTheme(theme);

    document.body.classList.toggle('dark');
  };

  // const isDarkMode = theme === 'dark' ? true : false;

  return { onToggle, initTheme };
}
