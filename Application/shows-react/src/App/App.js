import React, { Component } from 'react';
import { showService } from "../services/ShowService"
import { singleShowService} from "../services/SingleShowService"
import './App.css';
import { Header } from './partials/Header';
import { Link } from 'react-router-dom';
import { ShowList } from './shows/ShowList';
import { Footer } from './partials/Footer';


class App extends Component {
  state = {
    shows: []
  }
  componentDidMount() {
    showService.getData()
      .then(myShows => {
        console.log(myShows);

        this.setState({ shows: myShows })
      })
      .catch(err => {
        console.log(err.message);
      })

  }
  render() {
    return (
      <div>
        <Header />
        <ShowList shows={this.state.shows} />
        <Footer />
      </div>
    );
  }
}






export default App;
