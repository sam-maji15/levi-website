import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    return (<div></div>)
  }
}


const root = document.getElementById('react-app')
ReactDOM.render(<App/>, root)
