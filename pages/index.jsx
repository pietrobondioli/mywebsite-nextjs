// React/Next Components
import Head from 'next/head';

// Components
import Header from '../components/HomePage/Header';
import Presentation from '../components/HomePage/Presentation';

function HomePage() {
  return (
    <>
      <Head>
        <title>Pietro Bondioli</title>
      </Head>
      <Header />
      <Presentation />
    </>
  );
}

export default HomePage;
