// $(document).ready(function(){
//   submitButton();
//   addPlayers();
// });

// var submitButton = (function(){
//   $('#sign_in').on('submit', function(e){
//     e.preventDefault();
//     $.ajax({
//       type: 'post',
//       url:'/sign_in',
//       data: $('#sign_in').serialize(),
//       dataType: 'json'
//     }).done(function(data){
//       window.location.href = data.redirect;
//     });
//   });
// });


// var addPlayers = (function(){
//   $('#add_players').on('submit', function(e){
//     e.preventDefault();
//     playerForm();
//   });
// });

// var playerCount = 3;

// var playerForm = function(){
//   $('#sign_in:last').append($("<input type='text' name='player "+ playerCount +"' placeholder='Player" + playerCount+"'>"));
//   playerCount ++;
// }

// var startGame = (function(data){
//   window.location.href = data.redirect;
//   getData();
// })

// var getData = (function()
// {
//   $.ajax({
//     type: 'get',
//     url: window.location.href +"results",
//     dataType: 'json',
//   }).done(function(data){console.log(data)})
// });
