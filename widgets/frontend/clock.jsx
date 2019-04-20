import React from 'react';

class Clock extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    } 
    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    let interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(interval);
  }

  tick() { 
    this.setState({date: new Date() });
   } 


  render(){
    let time = this.state.date
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let day =  time.getDay();
    let month = time.getMonth(); 
    let date = time.getDate();
    let year = time.getFullYear();
    return (
      <div class="clock"> 
        <h1>Time: {hour}:{minutes}:{seconds} PDT</h1>
        <h1> Date: {time.toDateString()} </h1>
      </div>
    );
  }
}

export default Clock