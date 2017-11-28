var JohnTravolta = function(top, left, timeBetweenSteps) {
  timeBetweenSteps = 12400;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.movement = 'right';
};

JohnTravolta.prototype = Object.create(makeDancer.prototype);

JohnTravolta.prototype.move = function() {

  var width = $("body").width();
  
  if(this.movement === 'right'){
    this.$node.css({
      left: this.left++
    });
    if(this.left > width){
      this.movement = 'left';
    }
  } 
  
  if(this.movement === 'left'){
    this.$node.css({
      left: this.left--
    });
    if(this.left < 0){
      this.movement = 'right';
    }
  }

};

JohnTravolta.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.attr('src','./src/John.gif');
  setInterval(this.move.bind(this), 1);
  //this.$node.toggle();
};

