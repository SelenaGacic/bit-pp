import React from 'react';
import './App.css';
import {Header} from "./partials/header"
import {Footer} from "./partials/footer"
import {Main} from "./users/Main"

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
