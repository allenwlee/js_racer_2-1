$(document).ready(function() {
  $(document).keydown(function(e){
    if (active1 === 5 || active2 === 5){
      console.log("winner");
      $('#results').text(winner)
      } else {
      if (e.keyCode == 81) {
        console.log(active1);
        active1 ++
        $("#player1_strip td").removeClass("active");
        $("#player1_strip td:nth-child("+ active1 +")").addClass("active");
        
      }
      if  (e.keyCode == 80) {
        console.log(active2);
        active2 ++
        $("#player2_strip td").removeClass("active");
        $("#player2_strip td:nth-child("+ active2 +")").addClass("active");
        
            };
    };
  });

});


var player1 = 'player1_strip td'
var player2 = 'player2_strip td'
var active1 = 1
var active2 = 1
q = 81
p = 80

var winner = (function()
{
  if (active1 = 5){
    return "player 1 won";
  }
    return "player 2 won";
});
