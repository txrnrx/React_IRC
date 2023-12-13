import React from 'react';
import '../assets/css/card.css';

function Card() {
  return (
    <>
    <div id="scene">
      <div id="left-zone">
        <ul className="list">
          <li className="item">
            <input type="radio" id="first" name="basic_carousel" value="first" checked="checked" />
            <div className="content content_one">
              <span className="picto"></span>
             
              <div className="containerr">
                <div className="card">
                  <h3 className="title">Package</h3>
                </div>
                <div className="card">
                  <h3 className="title">Delivery</h3>
                </div>
                <div className="card">
                  <h3 className="title">Custom</h3>
                </div>
                <div className="card">
                  <h3 className="title">Service</h3>
                </div>
                <div className="card">
                  <h3 className="title">Track</h3>
                </div>
              
                
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div id="middle-border"></div>
      <div id="right-zone"></div>
    </div>
  </>
  );
}

export default Card;
