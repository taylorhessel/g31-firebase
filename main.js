var images = [
  "http://cdn.bulbagarden.net/upload/thumb/c/c6/094Gengar.png/250px-094Gengar.png",
  "http://ovicio.com.br/wp-content/uploads/gengar1.png",
  "http://vignette1.wikia.nocookie.net/pokemon/images/1/1c/094Gengar_OS_anime.png/revision/latest?cb=20150716055805",
  "http://cita.grace.edu/student/14F_Knepp/Homework/final/Gengar2.png"
];

function generate () {
  return Math.floor(Math.random() * images.length);
}

$('#thebutton').on('click', function () {
  $('.main-wrapper').css('background-image', "url('" + images[generate()] + "')");
  console.log(images[generate()]);
  console.log('Click working');
});

$('.my-form').on('submit', function (e) {
  e.preventDefault();
  //console.log('still working');
  var $someText = $('#your-text').val();
  $('#dump').text($someText);
});

$('#reset').on('click', function () {
  $('#dump').text('');
});

//console.log(generate());
