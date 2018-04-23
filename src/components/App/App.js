import React, { Component } from 'react';
import axios from 'axios';
import ReflectionList from '../ReflectionList/ReflectionList.js';
import ReflectionForm from '../ReflectionForm/ReflectionForm.js';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reflectionArray: [ ],
    }
  }

  //Testing to see if GET will display on DOM through componentDidMount
  componentDidMount() {
    this.getReflections();
  }

  getReflections = () => {
    console.log('component done mouting!');
    axios.get('/reflection')
    .then( (response) => {
      this.setState({
        reflectionArray: response.data,
      });
      console.log(response.data)
    }).catch( (error) => {
      console.log('Error in clientside GET:', error);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Oh, the places you've been</h1>
          <h4><i>Reflection Board</i></h4>
        </header>
        <Router>
        <div>
          <ReflectionForm />
          <ul>
          {/* <pre>{JSON.stringify(this.state.reflectionArray)}</pre> */}
          {/* <li><Link to = "/list">Reflection List</Link></li> */}
          <ReflectionList reflectionArray = {this.state.reflectionArray} />
          </ul>
          <Route path = "/list" component = {ReflectionList} />
        </div>
        </Router>
        <br/>
      </div>
    );
  }
}

export default App;
