import React, {Component} from 'react';
import './App.css';

import Header from './components/header';
import Slogan from './components/slogan';
import OurWork from './components/OurWork';
import OurService from './components/OurService';
import Performance from './components/OurPerformance';
import Partnership from './components/partnership';
import Location from './components/location';
import Link from './components/link';
import Footer from './components/footer';
import Corevalue from './components/corevalue';

class App extends Component {
  render(){
    return (
      <>
        <Header/>
        <Slogan/>
        <div className="topSection">
            <Corevalue />
            <OurWork/>
            <OurService/>
            <Performance/>
            <Partnership />
            <Location/>
            <Link />
        </div>
                
              
        <Footer />
      </>
    );
  }
}
export default App;
