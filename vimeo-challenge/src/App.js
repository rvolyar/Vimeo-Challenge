import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Carousel.css'
let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates tenetur ex in magnam quisquam maiores recusandae debitis cum doloremque consectetur adipisci eos, explicabo facere assumenda corrupti porro quia corporis maxime.";
let sectionNumber=1;
class Section extends Component{

  renderSection(image, text,title){
    return(
      <div className="container">
        <div className = "section">
          { sectionNumber % 2 &&
          <div className="content image">
            <img src={ image } alt=""/>
          </div>
          }
          <div className="content">
            <div className="text">
                <h2>{title}</h2>
                <p>{ text }</p>
            </div>
          </div>
          { !(sectionNumber++ % 2) &&
          <div className="content image">
            <img src={ image } alt=""/>
          </div>
          }
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
      {this.renderSection('https://i.vimeocdn.com/video/595198868_505x160.jpg', loremIpsum, 'Moonsoon') }
      {this.renderSection('https://i.vimeocdn.com/video/589972810_530x315.jpg', loremIpsum, 'Beams') }
      {this.renderSection('https://i.vimeocdn.com/video/590587169_530x316.jpg', loremIpsum , 'Move 2')}
      </div>
      );
  }
  
}
class Slide extends Component{
  render()
   {
      return(
          <div class="slider">
            <img src="https://media1.popsugar-assets.com/files/thumbor/G8WL9ct5Wo7q7Zaug8dd99GptbY/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/07/16/938/n/1922283/d757511d5b4d0eb588dbe8.16610880_/i/Aquaman-Movie-Poster-Memes-July-2018.jpg" alt="bg-image" class  = "bg-image"/>
            <div class="arrow right">
            <a  onClick=""><i class=""></i></a>
              </div>
            <div class="arrow left">
            <a  onClick=""><i class=""></i></a>
              </div>
            <div class="slider-content">
              <div class="poster">
                <img src="https://media1.popsugar-assets.com/files/thumbor/G8WL9ct5Wo7q7Zaug8dd99GptbY/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/07/16/938/n/1922283/d757511d5b4d0eb588dbe8.16610880_/i/Aquaman-Movie-Poster-Memes-July-2018.jpg" alt="movie poster"/>
                </div>
              <div class="text">
                <h2>Aquaman</h2>
                <p>Aquaman is the ruler of Atlantis and the Earth's oceans, an Atlantean with incredible strength and speed as well as the ability to command all sea-life. His unique physiology allows him to survive on land and at the ocean's greatest depths of pressure and temperature.</p>
              <button class = "button buy" onClick="">Buy Now</button>
                <button class="button trailer" onClick="">Watch trailer</button>
              </div>
            </div>
          </div>
      );
  }  
}
class App extends Component {
  render() {
    return (
      <div>
      <Section/>
    
      <Slide/>
      </div>
      
    );
  }
}

export default App;
