import React from 'react';
import {Header} from "./partials/Header"
import{Footer} from "./partials/Footer"
import {Main} from "./posts/Main"

import './App.css';

const App = (props) => {
  return (
      <div>
          <Header />
          <Main />
          <Footer />
      </div>
  )
}
export default App;
