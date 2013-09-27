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

	// Get card data
	// because Myrmex wants two of each number card
	// (yes, I know datas is an improper plural)
	var datas = AllCards.slice(0);
	var length = datas.length;
	for(var i=0; i<length; i++) {
		if(datas[i].value>1 && datas[i].value<10) {
			datas[datas.length]=datas[i];
		}
	}

	// Shuffle (mutates)
	shuffle(datas);

	// Cards
	var cards = new Array();
	for(var i=0; i<datas.length; i++) {
		var data = datas[i];
		if(data.image) {
			var rank = data.value;

			var max = (rank>1 && rank<10)?3:6
			var card = Crafty.e('Card')
				.at(0,Game.map_grid.min_row)
				.rank(rank)
				.face(data.image).back();
			cards[cards.length]=card;
			if(Math.random() > 0.5 && rank > 1) {
				card.turnAround();
			}
		}
	}

	//Deal
	for(var i=0; i<cards.length; i++) {
		var x=i%Game.map_grid.w;
		var y=Math.floor(i/Game.map_grid.w);
		var card = cards[i];
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
	cards[cards.length] = "assets/back.png";
	for(var i=0; i<AllCards.length; i++) {
		var data = AllCards[i];
		if (data.image) {
			cards[cards.length] = data.image;
		}
	}
	Crafty.load(cards, function(){
		// Now that our sprites are ready to draw, start the game
		Crafty.scene('Game');
	})
});
