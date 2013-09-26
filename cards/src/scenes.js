Crafty.scene('Game', function() {
	for(var rank=0; rank<=10; rank++) {
		var max = (rank>1 && rank<10)?3:6
		for(var suit=0; suit<6; suit++) {
			var x=50+40*rank;
			var y=50+40*suit;

			var r=rank;
			var s=(suit%max)+1;

			if(r>=1 && r<=10) {
				Crafty.e('Card').at(x,y)
					.face("assets/"+r+"-"+s+".jpg");
			} else {
				Crafty.e('Card').at(x,y)
					.back();
			}
		}
	}
});
