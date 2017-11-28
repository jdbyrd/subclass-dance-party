var Girl = function(top, left, timeBetweenSteps) {
  timeBetweenSteps = 2000;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
};

Girl.prototype = Object.create(makeDancer.prototype);

Girl.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.attr('src','./src/mia.gif');
  //this.$node.toggle();
  
  this.$node.mouseover(function(){
    $(this).attr('src','./src/mia2.gif');
  });
};

