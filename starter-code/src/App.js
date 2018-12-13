import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu';
import Detail from './components/detail';
import countries from './countries.json'

class App extends Component {
  state ={
    countries:[]
  }
  render() {
    //const countriesJson = {...this.state.countries}
    console.log(countries)
    return (
      <div className="App">
        <section className="app-detail">
          {countries.map(c =><Menu key={c.name.common} name={c.name.common} />)}
        </section>

        <section className="app-detail">
        {countries.map(c =><Detail key={c.name.common} {...c} />)}
        </section>

      </div>
    );
  }
}

export default App;
