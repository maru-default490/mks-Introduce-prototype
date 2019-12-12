import React, {Component} from 'react';
import './App.css';

import Header from './components/header';
import Slogan from './components/slogan';
import Corevalue from './components/corevalue';
import OurWork from './components/OurWork';
import OurService from './components/OurService';
import Performance from './components/OurPerformance';

class App extends Component {
  render(){
    return (
      <>
        <Header/>
        <Slogan/>
        <Corevalue/>
        <OurWork/>
        <OurService/>
        <Performance/>
      </>
    );
  }
}

export default App;
