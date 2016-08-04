var Dino = require('./../js/dino.js').dinoModule;




// var displayHumidity = function(paragraph, humidityData) {
//   $('.showDino').text("The humidity in " + paragraph + " is " + humidityData + "%");
// }
//
// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     var city = $('#location').val();
//     $('#location').val("");
//     $('.showWeather').text("The city you have chosen is " + city + ".");
//     $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
//       console.log(response);
//     });
//   });
// });


// jQuery.ajax example
var displayFunction = function(dinoText, words, paragraphs) {
    $('.showDino').text("The number of paragraphs you chose is " + paragraphs + " and the number of words per paragraph is " + words + ".");
    // console.log(dinoText);
    // $('.dinoText').html(dinoText);
};

$(document).ready(function() {
  $('#dinoParagraph').click(function() {
    var dino = new Dino();
    var paragraphs = $('#paragraphs').val();
    $('#paragraphs').val("");
    var words = $('#words').val();
    $('#words').val("");
    dino.getDino(paragraphs, words, displayFunction);
  });
});

// var getDinos      = $.get('http://dinoipsum.herokuapp.com/api/?format=html'),
// fillContainer = function(html) {
//   $('.showDino').html(html);
// },
// oops = function() {
//   console.log('Where did all the dinosaurs go?');
// };
//
// getDinos.then(fillContainer, oops);
