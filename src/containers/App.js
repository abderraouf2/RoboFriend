import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import React  from 'react';
import './App.css';
import Scroll from '../Components/Scroll';
import Errorboundery from '../Components/Errorboundery';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      robots:[],
      searchfield:''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
    .then(users=>{this.setState({robots:users})})
  }
  onsearchChange=(event)=>{
    this.setState({searchfield:event.target.value})
  }
  render(){
    const filtredRobots=this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if(this.state.robots.length===0) {
      return <h1 className="tc">Loading</h1>
    }
    else{
  return (
    <div className="tc">
      <h1 className="f1">Robotfriends</h1>
      <SearchBox searchChange={this.onsearchChange}/>
      <Scroll>
        <Errorboundery>
          <CardList robots={filtredRobots}/>
        </Errorboundery>
      </Scroll>
    </div>
  )
}
}
}
export default App;