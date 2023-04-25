import type { AppProps } from 'next/app';
import '../styles/globals.css';

const TestTaskApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default TestTaskApp;
