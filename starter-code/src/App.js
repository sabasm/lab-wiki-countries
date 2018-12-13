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

{countries.map(c => <div>
  <Menu name={c.name.common} />
</div>)}
        
        </section>

        <section className="app-detail">
        <Detail {...this.state.countries}/>
        </section>

      </div>
    );
  }
}

export default App;
