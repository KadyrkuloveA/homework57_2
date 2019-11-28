import React, { Component } from 'react';
import './App.css';
import nanoid from 'nanoid'
import Input from './components/input/input'
import List from './components/list/list'

class App extends Component {
  state = {
    finance: '',
    cost: '',
    finances: []
  };

  reversal = (event) => {
    let finance = event.target.value;
    this.setState({finance});
  };

  reversalCost = (event) => {
    let cost = event.target.value;
    this.setState({cost});
  };

  createFinance = () => {
    let finances = [...this.state.finances];
    let text = this.state.finance;
    let cost = this.state.cost;
    let finance = {text, cost, id: nanoid()};
    finances.push(finance);
    this.setState({finances});
  };

  del = (financeId) => {
    let finances = [...this.state.finances];
    let id = finances.findIndex(t => t.id === financeId);
    finances.splice(id, 1);
    this.setState({finances});
  };

  render() {
    let total = this.state.finances.reduce((accum, currentObj) => {
      return accum + parseInt(currentObj.cost);
    }, 0);
    return (
        <div className='App'>
          <Input
              updateFinance = {(event) => this.reversal(event)}
              updateCost = {(event) => this.reversalCost(event)}
              stringValue={this.state.finance}
              costValue={this.state.cost}
              addFinance={this.createFinance}
          />
          {this.state.finances.map(finance => (
              <List
                  text={finance.text}
                  cost={finance.cost}
                  del={() =>this.del(finance.id)}
                  key={finance.id}
              />
          ))}
          <div className='totalPrice'>
            <span>Total: {total} soms</span>
          </div>
        </div>
    )
  }
}

export default App;
