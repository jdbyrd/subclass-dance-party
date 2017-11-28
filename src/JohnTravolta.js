var JohnTravolta = function(top, left, timeBetweenSteps) {
  timeBetweenSteps = 12400;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.movement = 'right';
  this.$node.addClass("john");
  this.$node.attr('src','./src/John.gif');
  this.interval = setInterval(this.move.bind(this), 5);
};

JohnTravolta.prototype = Object.create(makeDancer.prototype);

JohnTravolta.prototype.move = function() {

  var width = $("body").width();
  
  if(this.movement === 'right'){
    this.$node.css({
      left: this.left++
    });
    if(this.left > width-399){
      this.movement = 'left';
    }
  } 
  
  if(this.movement === 'left'){
    this.$node.css({
      left: this.left--
    });
    if(this.left < 175){
      this.movement = 'right';
    }
  }

};

JohnTravolta.prototype.stopInterval = function() {
  clearInterval(this.interval);
};

// JohnTravolta.prototype.step = function() {
//   makeDancer.prototype.step.call(this);

//   //this.$node.toggle();
// };

