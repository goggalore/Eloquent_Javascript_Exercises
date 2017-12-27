const worlds = require('./World');

Grid.prototype.findAll = function(char) {
  var found = [];
  this.forEach(function(critter, vector) {
    if (critter === char)
      found.push(vector);
  }, this)
  
  return found;
}

function SmartPlantEater() {
  PlantEater.call(this);
}
SmartPlantEater.prototype = Object.create(PlantEater.prototype);
SmartPlantEater.prototype.act = function(view) {
  var space = view.find(' ');
  var plant = view.find('*');
  if (this.energy > 60 && space) 
    return {type: 'reproduce', direction: space};
  if (plant && this.energy < 65) 
    return {type: 'eat', direction: plant};
  if (this.energy < 15) {
    return {type: 'findFood'};
  }
  if (space)
    return {type: 'move', direction: space};
}
SmartPlantEater.prototype.findFood = function(grid) {
  var plants = grid.findAll('*');
  var distances = plants.map(function(plant) {
    return this.distance(plant);
  }.bind(this));
  var closest = Vector.min(distances);
}

animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));