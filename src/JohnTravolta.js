var JohnTravolta = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
};

JohnTravolta.prototype = Object.create(makeDancer.prototype);

JohnTravolta.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.attr('src','./src/john.jpg');
  this.$node.toggle();
};

