// var apiKey = require('./../.env').apiKey;
//
function Dino(){
  this.idk = '';
}
//
Dino.prototype.getDino = function(paragraphs, words, displayFunction) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=html&words=' + words + '&paragraphs=' + paragraphs).then(function(response) {
    // console.log(response);
    displayFunction(response, words, paragraphs);
    // returnJSON(paragraph, response.main.humidity);
  }).fail(function(error) {
    $('.showDino').text(error.responseJSON.message);
  });
};



// var xhr = new XMLHttpRequest();
//
//   xhr.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=html&words=' + words + '&paragraphs=' + paragraphs);
//   xhr.onload = function() {
//     if (this.status === 200) {
//       document.querySelector('.showDino').innerHTML = this.response;
//       debugger;
//     } else {
//       console.log('Where did all the dinosaurs go?');
//     }
//   };
//   xhr.send();
//


exports.dinoModule = Dino;
