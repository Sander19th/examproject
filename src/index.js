import React from 'react';
import ReactDOM from 'react-dom';

/*
let element = (
  <>
    
  </>
)


ReactDOM.render(
  element,
  document.getElementById("root")
);
*/

  document.getElementById('search').addEventListener('input', function() {
   
    var searchText = this.value.toLowerCase();

   
    var plantItems = document.querySelectorAll('.plant');

   
    plantItems.forEach(function(item) {
      
      var plantText = item.textContent.toLowerCase();

      if (plantText.includes(searchText)) {
        
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });