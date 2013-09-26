Game = {
	start: function() {
		Crafty.init( Game.width(), Game.height());
		Crafty.background('SeaGreen');
		Crafty.scene('Game');
	},

	// Grid & size
	map_grid: {
		w: 8,
		h: 42,
		min_row: -10,
		max_row: 32,// h+min_row
		tile: {
			w: 128,
			h: 18
		},
		card: {
			w: 118,
			h: 168
		}
	},
	width: function() {
		return this.map_grid.w * this.map_grid.tile.w;
	},
	height: function() {
		return this.map_grid.h * this.map_grid.tile.h;
	}
}
