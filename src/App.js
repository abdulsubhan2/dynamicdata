import React from 'react';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      students:[],
      searchField:''
    };
  }
  componentDidMount(){
    fetch( 'https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({students: users}));
  }
  render(){
    const {students, searchField} =this.state;
    const filteredStudents = students.filter(student =>
      student.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
          <div className="App">
          
            <h1>Student List</h1>
            <SearchBox 
            placeholder = "search students"
            handleChange = {e => this.setState({searchField : e.target.value})}
            />
            <CardList students= {filteredStudents}/>
          </div>
        );
      }
}

export default App;
