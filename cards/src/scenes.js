Crafty.scene('Game', function() {
	for(var rank=0; rank<=10; rank++) {
		var max = (rank>=2 && rank<=10)?3:6
		for(var suit=1; suit<=max; suit++) {
			var x=40*rank;
			var y=40*suit;
			if(rank>=1 && rank<=10) {
				Crafty.e('Card').at(x,y)
					.face("assets/"+rank+"-"+suit+".jpg");
			} else {
				Crafty.e('Card').at(x,y)
					.back();
			}
		}
	}
});
