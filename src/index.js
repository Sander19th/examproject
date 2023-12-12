import React from 'react';
import ReactDOM from 'react-dom';

let element = (
  <>
      <h1>Plantuary</h1>
      <div></div>

      <div id="Homepagepilea">
      <img src="./images/Pilea_pot.png" alt=""></img>
      </div>
      <h3>Pilea Peperomioides</h3>
      <b>Also known as the chinese money plant for it's iconic rounded leaves..</b>
     <div></div>

      <div id="Homepagemonstera"><img src="./images/Monstera_pot.png" alt=""></img></div>
      <h3>Monstera Deliciosa</h3>
      <b>Commonly reffered to as the swiss cheese plant due to it's blossomed leaves having holes..</b>

      <div id="Homepagecocos"><img src="./images/Cocos_pot.jpg" alt=""></img></div>
      <h3>Cocos Nucifera</h3>
      <b>Lorum ipsum</b>
      <div id="Homepageimage"><img src="./images/Exotic_Leaves.jpg" alt=""></img></div>
  </>
)

ReactDOM.render(
  element,
  document.getElementById("root")
);


