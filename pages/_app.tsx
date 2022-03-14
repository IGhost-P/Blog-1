import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles';
import { Layout } from 'components';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sang-Kwon-Yeum</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

// export function getServerSideProps() {
// document.addEventListener('DOMContentLoaded', () => {
//   let theme = localStorage.getItem('theme');
//   let { matches } = window.matchMedia('(prefers-color-scheme: dark)');

//   if (!theme) {
//     theme = matches ? 'dark' : 'light';

//     localStorage.setItem('theme', theme);
//   }

//   document.body.classList.toggle('dark', theme === 'dark');

//   setTimeout(() => {
//     document.body.style.visibility = 'visible';
//   }, 300);
//   console.log('hello');
// });
// }

export default MyApp;
