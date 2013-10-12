$(function() {
  $('input.nominee').prettyCheckable({
    color: 'red',
    lablPosition: 'left'
  });

  $('#submit').on('click', function(e) {
    e.preventDefault();
    alert("You Chose " + $("input:checked").val());
  })


});
