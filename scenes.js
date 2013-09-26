Crafty.scene('Game', function() {
	for(var x=0; x<Game.map_grid.width; x++) {
		for (var y=0; y<Game.map_grid.height; y++) {
			 var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;
			  
			  if (at_edge) {
				  Crafty.e('Block').at(x, y);
			  }
		}
	}

	Crafty.e('PlayerCharacter').at(5,5);
});
