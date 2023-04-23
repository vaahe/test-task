import type { AppProps } from 'next/app';

import Container from '../components/Container';
import '../styles/globals.css';

const TestTaskApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Container />
      <Component {...pageProps} />
    </>
  );
};

export default TestTaskApp;
