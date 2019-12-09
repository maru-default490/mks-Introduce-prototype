import React from 'react';
import Header from './components/header';
import Slogan from './components/slogan';
import OurInfo from './components/ourinfo';
import Partnership from './components/partnership';
import CoreValues from './components/corevalues';
import News from './components/news';
import './App.css';
import './script';

function App() {
  return (
    <div>
      <Header />
      <Slogan />
      <CoreValues />
      <OurInfo />
      <Partnership />
      <News />
    </div>
  );
}

export default App;
