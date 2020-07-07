import React from 'react';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';

class App extends React.Component{
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
            <Courses />
            
            <Footer />
          </div>
        );
      }
}
class Courses extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tech:['React-1','NodeJS-1','MongoDB-1']
    };
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(){
      this.setState({tech: this.state.tech.reverse()});
    }
  render(){
    return(
      <div>
         <h1>List of Technologies</h1>
         <button onClick={this.handleClick}>Click to Change</button>
         <Bottom technology = {this.state.tech}/>
      </div>   
    )
  }
}
class Bottom extends React.Component{
  render(){
    return(
      <div>
        <div>{this.props.technology.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}</div>
      </div>
          )
  }
}

class Footer extends Component {
  render(){
    return(
      <h3>copyrights@2020</h3>
    )
  }
}

export default App;
