Crafty.scene('Game', function() {
	for(var x=0; x<8; x++) {
		Crafty.e('Gridded').at(x,0);
	}
	Crafty.viewport.scroll('_x',4);
	Crafty.viewport.scroll('_y',180);
	for(var rank=10; rank>=1; rank--) {
		var max = (rank>1 && rank<10)?3:6
		for(var suit=0; suit<6; suit++) {
			var x=suit;
			var y=(10-rank);

			var r=rank;
			var s=(suit%max)+1;

			if(r>=1 && r<=10) {
				Crafty.e('Card').at(x,y)
					.rank(rank)
					.face("assets/"+r+"-"+s+".jpg");
			} else {
				Crafty.e('Card').at(x,y)
					.rank(rank)
					.back();
			}
		}
	}
});
