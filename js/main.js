$(function (){    //①の処理
  $('#Green').click(function() {
    $('.GreenLight').css('background', 'blue');
    $('.YellowLight').css('background', 'black');
    $('.RedLight').css('background', 'black');
  })
  $('#Yellow').click(function() {
    $('.GreenLight').css('background', 'black');
    $('.YellowLight').css('background', 'yellow');
    $('.RedLight').css('background', 'black');
  })
  $('#Red').click(function() {
    $('.GreenLight').css('background', 'black');
    $('.YellowLight').css('background', 'black');
    $('.RedLight').css('background', 'red');
  })
  $('#Reset').click(function() {
    $('.GreenLight').css('background', 'black');
    $('.YellowLight').css('background', 'black');
    $('.RedLight').css('background', 'black');
  })
  });


$(function (){    //②の処理
  $('#start').click(function() {
    $('#start').prop('disabled', true);
    $('#Green').prop('disabled', true);
    $('#Yellow').prop('disabled', true);
    $('#Red').prop('disabled', true);
    $('#Reset').prop('disabled', true);
    setTimeout(function() {
      $('.GreenLight').css('background', 'blue');
      $('.YellowLight').css('background', 'black');
      $('.RedLight').css('background', 'black');
    }, 100);
    setTimeout(function() {
      $('.GreenLight').css('background', 'black');
      $('.YellowLight').css('background', 'yellow');
      $('.RedLight').css('background', 'black');
    }, 2000);
    setTimeout(function() {
      $('.GreenLight').css('background', 'black');
      $('.YellowLight').css('background', 'black');
      $('.RedLight').css('background', 'red');
    }, 4000);
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
    })
  });
