import React from 'react';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      students:[]
    };
  }
  componentDidMount(){
    fetch( 'https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({students: users}));
  }
  render(){
    return(
          <div className="App">
            <h1>Student List</h1>
            <CardList students= {this.state.students}/>
          </div>
        );
      }
}

export default App;
