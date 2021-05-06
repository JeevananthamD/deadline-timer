import React,{ Component } from 'react';
import './App.css';
import InputField from './components/InputField';
import SubmitButton from './components/SubmitButton';
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Timer ends on 25 December, 2021</h1>
        <Timer/>
        <div id="buttons">
          <InputField/>
          <SubmitButton/>
        </div>
      </div>
    );
  }
}

export default App;
