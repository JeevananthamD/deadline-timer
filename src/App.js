import React,{ Component } from 'react';
import './App.css';
import InputField from './components/InputField';
import SubmitButton from './components/SubmitButton';
import Timer from './components/Timer';

class App extends Component {

  constructor() {
    super();
    this.input = "";
    this.countDownDate = 0;
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  getInput = (e) => {
    this.input = e.target.value;
  }

  submit = () => {
    if(this.input!=="") {
      this.countDownDate = new Date(this.input).getTime();
      this.calculate();
    }
  }

  calculate = () => {
    let now = new Date().getTime();
    let utc_ist_difference = 19800000;
    let count = this.countDownDate - now - utc_ist_difference;
    console.log(count);
    if(count<0){
      alert("Please choose future date");
    }
    else{
      this.timer(count);
    }
  }

  timer = (count) => {
    let interval = setInterval(() => {
      count -= 1000;
      let day = Math.floor(count / (24*60*60*1000));
      let hour = Math.floor((count % (24*60*60*1000)) / (60*60*1000));
      let minute = Math.floor((count % (60*60*1000)) / (60*1000));
      let second = Math.floor((count % (60*1000)) / (1000));
      this.setState({days: day, hours: hour, minutes: minute, seconds: second}, () => this.endTimer(interval));
    }, 1000);
  }

  endTimer = (interval) => {
    let sum = this.state.days + this.state.hours + this.state.minutes + this.state.seconds;
    if(!sum) {
      clearInterval(interval);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Timer ends on 25 December, 2021</h1>
        <Timer days={this.state.days} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds}/>
        <div id="buttons">
          <InputField getInput={this.getInput}/>
          <SubmitButton submit={this.submit}/>
        </div>
      </div>
    );
  }
}

export default App;
