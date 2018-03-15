// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('body').on('submit', '#sizePicker', function makeGrid(event) {
  event.preventDefault();
  $('#pixelCanvas').children().remove();
  var row = $('#inputHeight').val();
  var col = $('#inputWeight').val();
  for (var r = 1; r <= row; r++) {
    $('#pixelCanvas').append('<tr></tr>');
    for (var c = 1; c <= col; c++) {
      $('#pixelCanvas tr:last').append('<td></td>');
    }
  }  
});

$('body').on('click', 'td', function color(){
  var colorPicked = $('#colorPicker').val();
  $(this).css('background-color', colorPicked);
});