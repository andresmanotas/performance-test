import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Health from '../components/Health';

const Home = () => (
  <>
    <Header />
    <div className="container">
      <Hero />
      <Cards />
      <Health />
    </div>
  </>
);

Home.getInitialProps = ({
  req,
}) => req.client;

export default Home;
