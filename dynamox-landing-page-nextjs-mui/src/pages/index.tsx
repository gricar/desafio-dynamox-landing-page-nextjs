import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dynamox</title>
        <link rel="icon" href="/images/logo-dynamox.png" />
      </Head>
      <Header />
    </div>
  );
};

export default Home;
