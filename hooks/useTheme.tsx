export function useTheme() {
  const initTheme = () => {
    let theme = localStorage.getItem('theme');
    const { matches } = window.matchMedia('(prefers-color-scheme: dark)');

    if (!theme) {
      theme = matches ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    }

    document.body.classList.toggle('dark', theme === 'dark');

    setTimeout(() => {
      document.body.style.visibility = 'visible';
    }, 300);
  };

  const onToggle = () => {
    const theme = localStorage.getItem('theme') as string;

    localStorage.setItem('theme', `${theme === 'dark' ? 'light' : 'dark'}`);

    document.body.classList.toggle('dark');
  };

  return { onToggle, initTheme };
}
