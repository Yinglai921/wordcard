import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import words from './data/ord';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      word:{}
    }
    this.changeWord = this.changeWord.bind(this);
  }

  componentDidMount(){
    this.changeWord();
  }

  changeWord(){
    let randomNum = Math.floor((Math.random() * words.length) + 1);
    this.setState({word: words[randomNum]});
  }
  
  render() {
    return (
      <div className="container">
        <div className="row" style={{marginTop: "60px"}}>
          <h3>{this.state.word.name}</h3>
        </div>
        <div className="row">
          <h3>{this.state.word.eng}</h3>
        </div>
        <div className="row">
          <p>{this.state.word.sentence}</p>
        </div>
        <div className="row">
          <p>{this.state.word.sentenceEng}</p>
        </div>
        <div className="row">
          <button className="btn btn-secondary" onClick={this.changeWord}> Next </button>
        </div>
      </div>
    );
  }
}

export default App;
