import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    let theme = localStorage.getItem('theme');
    let { matches } = window.matchMedia('(prefers-color-scheme: dark)');

    if (!theme) {
      theme = matches ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
    }

    setTimeout(() => {
      document.body.style.visibility = 'visible';
    }, 300);
  }, []);

  return (
    <div>
      <p>ds</p>
    </div>
  );
}
