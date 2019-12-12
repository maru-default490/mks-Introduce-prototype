import React from 'react';
import Header from './components/header';
import Slogan from './components/slogan';
import OurInfo from './components/ourinfo';
import Performance from './components/performance'
import Partnership from './components/partnership';
import CoreValues from './components/corevalues';
import News from './components/news';
import Location from './components/location';
import Link from './components/link';
import Footer from './components/footer';
import './App.css';
import './script';


function App() {
  return (
    <>
      <Header />
      <Slogan />
      <CoreValues />
      <OurInfo />
      <Performance />
      <Partnership />
      <News />
      <Location />
      <Link />
      <Footer />
    </>
  );
}

export default App;
