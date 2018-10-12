import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates tenetur ex in magnam quisquam maiores recusandae debitis cum doloremque consectetur adipisci eos, explicabo facere assumenda corrupti porro quia corporis maxime.";

class Section extends Component{

  renderSection(image, text,title){
    return(
      <div className="container">
        <div className = "section">
          <img src={ image } alt=""/>
          <div className="text">
            <h2>{title}</h2>
            <p>{ text }</p>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
      {this.renderSection('https://i.vimeocdn.com/video/595198868_505x160.jpg', loremIpsum, 'Moonsoon') }
      {this.renderSection('https://i.vimeocdn.com/video/590587169_530x316.jpg', loremIpsum , 'Move 2')}
      {this.renderSection('https://i.vimeocdn.com/video/589972810_530x315.jpg', loremIpsum, 'Beams') }
      </div>
      );
  }
}
class App extends Component {
  render() {
    return (
      <Section/>
    );
  }
}

export default App;
