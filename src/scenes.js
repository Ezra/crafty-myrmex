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

// Loading scene
// -------------
// Handles the loading of binary assets such as images and audio files
Crafty.scene('Loading', function(){
	// Draw some text for the player to see in case the file
	// takes a noticeable amount of time to load
	Crafty.e('2D, DOM, Text')
	.text('Loading...')
	.attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
	.css($text_css);
	 
	// Load our images
	var cards = new Array();
	var cards_end = 0;
	cards[cards_end] = "assets/back.png";
	cards_end++;
	for(var rank=1; rank<=10; rank++) {
		var max = (rank>1 && rank<10)?3:6
		for(var suit=0; suit<max; suit++) {
			var r=rank;
			var s=(suit%max)+1;
			cards[cards_end]= "assets/"+r+"-"+s+".jpg";
			cards_end++;
		}
	}
	Crafty.load(cards, function(){
		// Now that our sprites are ready to draw, start the game
		Crafty.scene('Game');
	})
});
