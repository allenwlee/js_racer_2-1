$(document).ready(function() {

  $(document).keydown(function(e){
    if (active1 === boardSize || active2 === boardSize){
      $('#results').text(winner);
      $.ajax({
        type: 'post',
        url: window.location.href +"/results",
        data: {winner:(winner)}
      });
    } else {
      if (e.keyCode == 81) {
        active1 ++
        advancePlayer(player1, active1);
      }
      if  (e.keyCode == 80) {
       active2 ++
       advancePlayer(player2, active2);
      };
    };
    
  });
});


var player1 = '#player1_strip td'
var player2 = '#player2_strip td'
var active1 = 1
var active2 = 1
var boardSize = 5
// q = 81
// p = 80

var winner = (function()
{
  if (active1 == boardSize){
    return 1;
  }
  return 2;
});

var advancePlayer = (function(player, active)
{

 $(player).removeClass("active");
 $(player + ":nth-child("+ active +")").addClass("active");   
});
