// var apiKey = require('./../.env').apiKey;
//
function Dino(){
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

Dino.prototype.getDino = function(paragraphs, words, displayFunction) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=json&words=' + words + '&paragraphs=' + paragraphs).then(function(response) {
    response.forEach(function(sentence){
      var sentenceToString = sentence.toString();
      var noCommas = sentenceToString.replace(/,/g, " ");
      $('.dinoText').html(noCommas);
      // displayFunction(response, words, paragraphs, noCommas);
    })
  });
};

    // displayFunction(response, words, paragraphs);
    // returnJSON(paragraph, response.main.humidity);

// var response2 = word.toString();
// var response1 = response2.replace(",", " ");
// sentenceToString.forEach(function(sentence) {
//   for(i = 0; i <= sentence.length; i += 1) {
//     sentence = sentence.replace(',', ' ');
//
//   }
// });
// if (sentence.has('.')) {
//   sentence.replace(i, " ");

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
