import React, {Component} from 'react';
import './App.css';

import Header from './components/header';
import Slogan from './components/slogan';
import Corevalue from './components/corevalue';
import OurWork from './components/OurWork';
import OurService from './components/OurService';
import Performance from './components/OurPerformance';
import Partnership from './components/partnership';
// import News from './components/news';
// import Location from './components/location';
import Link from './components/link';
import Footer from './components/footer';

class App extends Component {
  render(){
    return (
      <>
        <Header/>
        <Slogan/>
        <div className="topSection">
            <Corevalue/>
            <OurWork/>
            <OurService/>
            <Performance/>
            <Partnership />
            {/* <News />
            <Location /> */}
            <Link />
        </div>
        <Footer />
      </>
    );
  }
}
export default App;