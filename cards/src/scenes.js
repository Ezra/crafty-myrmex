Crafty.scene('Game', function() {
	// Align
	Crafty.viewport.scroll('_x',4);
	Crafty.viewport.scroll('_y',184);

	// Blanks
	Crafty.e('Gridded').at(0,-10);
	for(var x=2; x<8; x++) {
		Crafty.e('Gridded').at(x,-10);
	}
	for(var x=0; x<8; x++) {
		Crafty.e('Gridded').at(x,0);
	}

	// Cards
	var i = 0;
	for(var rank=10; rank>=1; rank--) {
		var max = (rank>1 && rank<10)?3:6
		for(var suit=0; suit<6; suit++) {
			var x=i%8;
			var y=Math.floor(i/8);

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
