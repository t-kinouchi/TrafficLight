$(function (){
  // ①ボタンを押すたびに色が変わる動作
  $('.Green').click(function() {
    $('.GreenLight').css('background', 'blue');
    $('.YellowLight').css('background', 'black');
    $('.RedLight').css('background', 'black');
  })
  $('.Yellow').click(function() {
    $('.GreenLight').css('background', 'black');
    $('.YellowLight').css('background', 'yellow');
    $('.RedLight').css('background', 'black');
  })
  $('.Red').click(function() {
    $('.GreenLight').css('background', 'black');
    $('.YellowLight').css('background', 'black');
    $('.RedLight').css('background', 'red');
  })
  $('.Reset').click(function() {
    $('.GreenLight').css('background', 'black');
    $('.YellowLight').css('background', 'black');
    $('.RedLight').css('background', 'black');
  })
});

$(function (){
  // ②ボタンを押すと2秒毎に色が変わっていく動作
  $('#start').click(function() {
    $('#start').prop('disabled', true);
    $('#Green').prop('disabled', true);
    $('#Yellow').prop('disabled', true);
    $('#Red').prop('disabled', true);
    $('#Reset').prop('disabled', true);

    new Promise(function(resolve) {
      setTimeout(function() {
      $('.GreenLight').css('background', 'blue');
      $('.YellowLight').css('background', 'black');
      $('.RedLight').css('background', 'black');
      }, 100);
    })

    Promise.resolve()
    .then(function(resolve) {
      setTimeout(function() {
      $('.GreenLight').css('background', 'black');
      $('.YellowLight').css('background', 'yellow');
      $('.RedLight').css('background', 'black');
      }, 2000);
    })

    .then(function(rsolve) {
      setTimeout(function() {
      $('.GreenLight').css('background', 'black');
      $('.YellowLight').css('background', 'black');
      $('.RedLight').css('background', 'red');
      }, 4000);
    })

    .then(function(resolve) {
      setTimeout(function() {
      $('.GreenLight').css('background', 'black');
      $('.YellowLight').css('background', 'black');
      $('.RedLight').css('background', 'black');
      $('#start').prop('disabled', false);
      $('#Green').prop('disabled', false);
      $('#Yellow').prop('disabled', false);
      $('#Red').prop('disabled', false);
      $('#Reset').prop('disabled', false);
      }, 6000);
    });
  });
});
