var Girl = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
};

Girl.prototype = Object.create(makeDancer.prototype);

Girl.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.attr('src','./src/girl.jpg');
  this.$node.toggle();
};

