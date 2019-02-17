import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import ContactList from './components/ContactList';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div id = "book">
          <ContactList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
