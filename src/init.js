$(document).ready(function() {
  window.dancers = [];
  
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random() /2 + 50,
      Math.random() * 1000
    );
    $("body").append(dancer.$node);
    window.dancers.push(dancer.$node);
  });
  
  $('.lineUpDancers').on('click', function() {
    window.dancers.forEach(function(dancer){
      dancer.css({top: 300});
    });
  });
  
  $('.cleanUpDancers').on('click', function() {
    var start = 200;
    let node = $('<img class="dancer"></img>').attr('src','./src/fire.png');
    node.css({
      top: $("body").height()/2+100, 
      left: start
    });
    $('body').append(node);
    
    JohnTravolta.prototype.stopInterval();
    
    // while(parseInt(node.css('left')) < $('body').width()){
    setInterval(function(){
      node.css({
        left: start
      });
      
      var current = parseInt($('.dancer').css('left'));
      
      $('.dancer').css({
        left: current + 5
      })
      start+=5;
      
    }, 1);
    // }
    window.dancers.forEach(function(dancer){
      setInterval(function(){
      dancer.css({
        left: start
      });
      start+=5;
      
    }, 1);
    });
  });
  
});

