const worlds = require('worlds');

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