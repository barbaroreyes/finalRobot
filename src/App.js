import React , {Component} from 'react';
import CardList from './Component/CardList'
import SearchBox from './Component/SearchBox';
import './App.css';


 class App extends Component {
   constructor(){
     super()
     this.state ={
       robots :[],
       serchField: ''
     }
   }
   componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(Response => Response.json())
     .then(users => {this.setState({robots:users})})
   }
   onSearchChange = (event) => {
     this.setState({serchField: event.target.value})
   }
   render(){
     const filterRobot = this.state.robots.filter( robots => {
       return robots.name.toLowerCase().includes(this.state.serchField.toLowerCase())
     })
     if(this.state.robots.length===0){
       return <h1>Loading</h1>
     }
     else {
      return (
        <div className ='tc'>
          <h1 className ='f2'>Robots</h1>
          <SearchBox searchange = {this.onSearchChange}/>
          <CardList robots = {filterRobot}/>
        </div>
      );
     }
   }  
  
}

export default App;
