import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Inicio from '../components/Inicio';
import Sensores from '../components/Sensores';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dynamox</title>
        <link rel="icon" href="/images/logo-dynamox.png" />
      </Head>
      <Header />
      <Inicio />
      <Sensores />
    </div>
  );
};

export default Home;
