import React, { Component } from 'react';

class Errorboundery extends Component{
  constructor(props){
    super(props);
    this.state={
      haseErrors:false,
    };

  }
  componentDidCatch(error, info){
    this.setState({haseErrors:true});
  }
  render(){
    
      if(this.state.haseErrors){
          return <h1>oooops that is not good to be seen</h1>
      }
      return this.props.children
  }

}
export default Errorboundery;