var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  timeBetweenSteps = 500;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.attr('src', './src/joules.jpg');
  this.$node.toggle();
  
  this.$node.mouseover(function(){
    $(this).attr('src','./src/jack 2.jpg');
  });
};

