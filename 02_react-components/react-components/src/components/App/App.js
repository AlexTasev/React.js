import React, { Component } from 'react';
import './App.css';
import Street from '../Street/Street';
import House from '../House/House';
import HouseDetails from '../HouseDetails/HouseDetails'
//import houses from './data/houses.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streets: [],
      selectedStreetIdx: 0,
      selectedHouseIdx: 0,
      hasFetched: false
    }
  }
  componentWillMount() {
    fetch('http://localhost:9999/feed/street/all')
    .then(rowData => rowData.json())
    .then(data => this.setState({
      streets: data.streets,
      hasFetched: true
    }))
  }

  getStreets() {
    return this.state.streets;
  }

  getSelectedHouses() {
    if (!this.state.hasFetched) {
      return [];
    }
    return this.state.streets[this.state.selectedStreetIdx].homes;
  }

  setCurrentStreet(idx) {
    this.setState({
      selectedStreetIdx: idx
    })
  }

  setCurrentHouse(idx) {
    this.setState({
      selectedHouseIdx: idx
    })
  }

  render() {
    return (
      <div className="App">
          <div className='streets'>
            <h2>Streets</h2>
              {
              this
                .getStreets()
                .map((street, idx) => (
                  <Street selectStreet={() => this.setCurrentStreet(idx)} location={street.location} key={idx} id={idx}/>
              ))
              }
          </div>
        <div className='houses'>
          <h2>Houses</h2>
          {
            this.getSelectedHouses() ? 
              this.getSelectedHouses()
                .map((house, idx) => (
                  <House selectHouse={(e) =>this.setCurrentHouse(idx, e)} imageUrl={house.imageUrl} key={idx} id={idx}/>
            )) : ''
          }
        </div>
        < div className = 'houses' >
        <h2>Details</h2>
        {this.state.hasFetched ? (
            <HouseDetails house={this.getSelectedHouses()[this.state.selectedHouseIdx]}/>
        ): ''}
        </ div>
       </div>
    );
  }
}

export default App;
