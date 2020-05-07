import React, { Component } from 'react';
import './App.css';
import Table from './Table.js';
import { Button } from 'react-bootstrap';

class App extends Component {

  state = {
    displayTable: false
  }

  render() {
    const { slogan, data } = this.state;

    return (
      <div className="App">
        <br/>
        
        <Button variant="primary" onClick={() => this.changeTable()}>Table A - latest [{!this.state.displayTable && <span>on</span>}{this.state.displayTable && <span>off</span>}]</Button>
        
        <br/>
        <br/>

        {this.state.displayTable &&<Table />} 
      </div>    
    );
  }

  changeTable = () => {
      this.setState({ displayTable: !this.state.displayTable });
  }
}

export default App;
