$(document).ready(function() {
  $('form').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      type: 'post',
      url: '/sign_in',
      dataType: 'json',
      data: $(this).serialize()
    }).done( function(data){
      globalData = data
      player1 = new Player(data.player1.user.id, data.player1.user.name);
      player2 = new Player(data.player2.user.id, data.player2.user.name);
      game = new Game(player1, player2, data.board_length);
      game.render();
      game.renderStart();

      })
    })
  });


$(document).keydown(function(e){
  if (player1.active_position === game.boardLength - 1 || player2.active_position === game.boardLength - 1){
    if (player1.active_position === game.boardLength - 1){
      game.winner = player1; 
    } else {
      game.winner = player2;
    }
    $('#results').text(game.winner.name + ' wins!');
    $.ajax({
      type: 'post',
      url: "/results",
    })
    
  } else {
    if (e.keyCode == 81) {
      game.advancePlayer1();
    }
    if (e.keyCode == 80) {
      game.advancePlayer2();
    }
  };
});
  
  

var Player = function(id, name) {
  this.id = id,
  this.name = name
  this.active_position = 0
}

var Game = function(player1, player2, board_length) {
  this.player1 = player1,
  this.player2 = player2,
  this.boardLength = +board_length,
  this.winner = {}
}

Game.prototype = {
  render: function() {
    for ( i = 1; i <= this.boardLength; i++) {
      $('#player1_strip').append($('<td>|</td>'));
      $('#player2_strip').append($('<td>|</td>'))
    };
  },

  renderStart: function(){
    $('#player1_strip td:first-child').addClass('active');
    $('#player2_strip td:first-child').addClass('active');
  },


  advancePlayer1: function() {
    var nuts = $('#player1_strip td:eq('+player1.active_position+')')  
    $('#player1_strip td').removeClass("active");
    $(nuts).next().addClass("active");
    player1.active_position ++;
  },

  advancePlayer2: function() {
    var nuts = $('#player2_strip td:eq('+player2.active_position+')')  
    $('#player2_strip td').removeClass("active");
    $(nuts).next().addClass("active");
    player2.active_position ++;
  }
}
