$(document).ready(function() {
  $('form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      type: 'post',
      url: '/sign_in',
      data: $(this).serialize()
    }).done( function(data){
      alert("hey");
      console.log(data);
    })
  });
});


var Game = function(player1, player2, board_length) {
  this.player1 = player1,
  this.player2 = player2,
  this.boardLength = board_length
}

Game.prototype = {
  render: function(board_length) {
    for ( i = 1; i <= board_length; i++){
      $('#player1_strip').append($('<td></td>'));
      $('#player2_strip').append($('<td></td>'))
    };


  }

  var Player = function(id, name) {
    this.id = id,
    this.name = name
  }






// script var gameID = @game close script

//   getData();
//   $(document).keydown(function(e){
//     if (active1 === boardSize || active2 === boardSize){
//       $('#results').text(winner);
//       gameOver(winner);
//     } else {
//       if (e.keyCode == 81) {
//         active1 ++
//         advancePlayer(player1, active1);
//       }
//       if (e.keyCode == 80) {
//        active2 ++
//        advancePlayer(player2, active2);
//      };
//    };
//  });
// });

// var Game = function(player1, player2, boardSize) {
//   this.player1 = player1
//   this.player2 = player2
//   this.boardSize = boardSize
// }

// Game.prototype = {
//   render: function() {

//   }
// }

// var player1 = '#player1_strip td'
// var player2 = '#player2_strip td'
// var active1 = 1
// var active2 = 1
// var boardSize = 6

// var winner = (function()
// {
//   if (active1 == boardSize){
//     return 1;
//   }
//   return 2;
// });





// var advancePlayer = (function(player, active)
// {
//  $(player).removeClass("active");
//  $(player + ":nth-child("+ active +")").addClass("active");   
// });

// var gameOver = (function(winner)
// {
//   $.ajax({
//     type: 'post',
//     url: window.location.href +"results",
//     data: {winner:(winner)}
//   })
// });

// var getData = (function()
// {
//   $.ajax({
//     type: 'get',
//     url: window.location.href +"results",
//     dataType: 'json',
//   }).done(function(data){console.log(data)})
// });

// var getGameData = (function()
