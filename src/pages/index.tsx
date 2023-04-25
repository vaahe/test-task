import Head from 'next/head';
import type { NextPage } from 'next';
import { Container } from '../components/Container';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Container />
    </>
  );
};

export default Home;
