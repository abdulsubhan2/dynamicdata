import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();

    this.state = {
      students:[
        {
          name: 'sample1',
          id: 1
        },
        {
          name:'sample2',
          id: 2
        },
        {
          name:'sample3',
          id:3
        }]
    };
  }
  render(){
    return(
          <div className="App">
            {
              this.state.students.map(student => (<h1 key={student.id}>{student.name }</h1>))
            }
          </div>
        );
      }
}

export default App;
