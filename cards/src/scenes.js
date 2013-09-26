Crafty.scene('Game', function() {
	// Align
	Crafty.viewport.scroll('x',4);
	Crafty.viewport.scroll('y',4-(Game.map_grid.min_row*Game.map_grid.tile.h));

	// Blanks
	//Deck
	Crafty.e('Gridded').at(0,Game.map_grid.min_row);
	//Foundations
	for(var x=2; x<8; x++) {
		Crafty.e('Gridded').at(x,Game.map_grid.min_row);
	}
	//Tableau
	for(var x=0; x<Game.map_grid.w; x++) {
		Crafty.e('Gridded').at(x,0);
	}

	// Cards
	var i = 0;
	for(var rank=10; rank>=1; rank--) {
		var max = (rank>1 && rank<10)?3:6
		for(var suit=0; suit<6; suit++) {
			var x=i%Game.map_grid.w;
			var y=Math.floor(i/Game.map_grid.w);

			var r=rank;
			var s=(suit%max)+1;

			var card = Crafty.e('Card').at(x,y)
				.rank(rank)
				.face("assets/"+r+"-"+s+".jpg");

			if(Math.random() < 0.5) {
				card.turnAround();
			}
			i++;
		}
	}
});
