Game = {
	start: function() {
		Crafty.init( Game.width(), Game.height());
		Crafty.background('SeaGreen');
		Crafty.scene('Game');
	},

	// Grid & size
	map_grid: {
		width: 8,
		height: 36,
		tile: {
			width: 128,
			height: 18
		}
	},
	width: function() {
		return this.map_grid.width * this.map_grid.tile.width;
	},
	height: function() {
		return this.map_grid.height * this.map_grid.tile.height;
	}
}
