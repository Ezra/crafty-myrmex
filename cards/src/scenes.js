Crafty.scene('Game', function() {
	Crafty.viewport.scroll('_x',4);
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
