import React,{ Component } from 'react';
import './App.css';
import InputField from './components/InputField';
import SubmitButton from './components/SubmitButton';
import Timer from './components/Timer';

class App extends Component {

  constructor() {
    super();
    // this.input = "";
    this.countDownDate = 0;
    this.interval = undefined;
    this.endDate = "";
    this.state = {
      input: "",
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  getInput = (e) => {
    this.setState({input: e.target.value});
  }

  submit = () => {
    if(this.state.input!=="") {
      this.countDownDate = new Date(this.state.input).getTime();
      this.endDate = new Date(this.state.input).toDateString();
      this.endDate = this.endDate.substring(4,10) + "," + this.endDate.substring(10, this.endDate.length);
      this.setState({input: ""});
      this.calculate();
    }
  }

  calculate = () => {
    let now = new Date().getTime();
    let utc_ist_difference = 19800000;
    let count = this.countDownDate - now - utc_ist_difference;
    if(count<0) {
      alert("Please choose future date");
      this.endDate = "";
      this.setState({days: 0, hours: 0, minutes: 0, seconds: 0}, () => this.endTimer());
    }
    else {
      this.timer(count);
    }
  }

  timer = (count) => {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
      count -= 1000;
      let days = Math.floor(count / (24*60*60*1000));
      let hours = Math.floor((count % (24*60*60*1000)) / (60*60*1000));
      let minutes = Math.floor((count % (60*60*1000)) / (60*1000));
      let seconds = Math.floor((count % (60*1000)) / (1000));
      this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds}, () => this.endTimer());
    }, 1000);
  }

  endTimer = () => {
    let {days, hours, minutes, seconds} = this.state;
    let sum = days + hours + minutes + seconds;
    if(!sum) {
      clearInterval(this.interval);
    }
  }

  render() {
    let {days, hours, minutes, seconds} = this.state;
    return (
      <div className="App">
        <h1>Timer ends on {this.endDate}</h1>
        <Timer days={days} hours={hours} minutes={minutes} seconds={seconds}/>
        <div id="buttons">
          <InputField getInput={this.getInput} value={this.state.input}/>
          <SubmitButton submit={this.submit}/>
        </div>
      </div>
    );
  }
}

export default App;
