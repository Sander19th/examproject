import React from 'react';
import ReactDOM from 'react-dom';


let element = (
  <>
  </>
)


ReactDOM.render(
  element,
  document.getElementById("root")
);


  document.getElementById('search').addEventListener('input', function() {
    var searchText = this.value.toLowerCase();
    
    var plantItems = document.querySelectorAll('.plant');
    
    plantItems.forEach(function(item) {
      var plantName = item.querySelector('h3').textContent.toLowerCase();
      if (plantName.includes(searchText)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
      console.log(plantName)
    });
  });

  const menu_button = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_button.addEventListener('click', function() {
    menu_button.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
  });
