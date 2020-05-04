import React, { Component } from 'react';
import './App.css';
import Nbp from './Nbp.js';
import Table from './Table.js';

//var table = 'test';
//console.log(table);

class App extends Component {

  state = {
    slogan: 'Click the button to upload data.',
    data: []
  }

  render() {
    const { slogan, data } = this.state;

    return (
      <div className="App">
        
        <p>{slogan}</p>
        
        <br/>
        <br/>
        
        <button onClick={() => this.changeTable()}>Change</button>
        
        <br/>
        <br/>

        <Table /> 
      </div>    
    );
  }

  changeTable = () => {

    this.setState({
        slogan: 'Uploading data...',
    })

    var nbp = new Nbp();
    var promise = nbp.getLastCurrencyTable('A')
    promise.then(resp => {
        this.setState({data: resp[0].rates});
        this.setState({slogan: 'Data uploaded!!!'});
    });
  }
}

export default App;
