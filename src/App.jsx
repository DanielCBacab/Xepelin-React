import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

// Componentes
import { TopBanner } from './components/TopBanner';
import { SecondScreen } from './components/SecondScreen';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';

function App() {
  return (
    <Fragment>
      <TopBanner className="position-relative"/>
      <SecondScreen/>
      <Testimonial/>
      <Footer/>
    </Fragment>
  )
}

export default App;
