$(window).load(function(){
  console.log("chicken")
  getData;
});





var getData = (function()
{
  $.ajax({
    type: 'get',
    url: window.location.href +"results",
    dataType: 'json',
  }).done(function(data){console.log(data)})
});




// <input id="whichkey" value="type something">
// <div id="log"></div>

// function Player(name, key)
// {
//   this.name = name;
//   this.key = key;
// }


// $('#whichkey').on('mousedown',function(e){
//   $('#log').html(e.type + ': ' +  e.which );
// });






// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi")