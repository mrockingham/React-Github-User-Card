import React from 'react';
import axios from 'axios'

import './App.css';

export default class App extends React.Component {

  state ={
    mikegitText:'',
    mikeGit: [],
    followergit:[]
  }
 

  componentDidMount(){
    axios.get( 'https://api.github.com/users/mrockingham')
    .then(res => {
      //res.data 
      this.setState({mikeGit: res.data})
      console.log('mystuff',res.data)
    })
    

    axios.get('https://api.github.com/users/mrockingham/followers')
    .then(res2  =>{
      this.setState({followergit: res2.data})
      console.log('checkthis',res2)
    })
    .catch(err=> console.log(err))
  }
  

  render(){
  return (
    <div className="App">
      <header className="App-header">
      <h1>My Info</h1>
      </header>
    <section className='GitCArd'>
      <img src ={this.state.mikeGit.avatar_url}  alt ='' />
  <div className='MyName'>{this.state.mikeGit.name}</div>
      <div className='UserName'>{this.state.mikeGit.login}</div>
    </section>
    <section className='GitFollowerCard'>
      <h1>Follower</h1>
      {this.state.followergit.map(follower =>(
        <>
          <img src={follower.avatar_url}  alt='' />
          <div className='FollowerUserName'>{follower.login}</div>
        </>
      ))}
      
      {/* {this.state.followergit.map(follower =>(
          
          
        
      ))} */}
        
  
    </section>
    </div>
  );
}
}


