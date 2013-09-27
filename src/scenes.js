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
	var cards = new Array();
	var cards_end = 0;
	for(var rank=1; rank<=10; rank++) {
		var max = (rank>1 && rank<10)?3:6
		for(var suit=0; suit<6; suit++) {
			var r=rank;
			var s=(suit%max)+1;

			var card = Crafty.e('Card')
				.at(0,Game.map_grid.min_row)
				.rank(rank)
				.face("assets/"+r+"-"+s+".jpg").back();
			cards[cards_end]=card;
			cards_end++;
					
			if(Math.random() < 0.5) {
				card.turnAround();
			}
		}
	}

	//Shuffle
	cards = shuffle(cards);

	//Deal
	for(var i=0; i<cards_end; i++) {
		var x=i%Game.map_grid.w;
		var y=Math.floor(i/Game.map_grid.w);
		var card = cards[i];
		console.log("i="+i+", x,y="+x+","+y);
		if(i<(6*10-3*8)) {
			card.at(x,y);
			if(i>=(6*10-3*8)-8) {
				card.face();
			}
		}
	}
});
