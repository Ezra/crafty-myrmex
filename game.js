Crafty.c('Dude', {
	init: function() {
		this.requires('2D, Canvas, Grid, Twoway, Gravity, Color')
			.twoway(4)
			.color('rgb(255,0,255)');
	}
});

Crafty.c('Grid', {
	init: function() {
		this.attr({
			w: Game.map_grid.tile.width,
			h: Game.map_grid.tile.height
		})
	},
	at: function(x,y) {
		 if (x === undefined && y === undefined) {
			return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
		} else {
			this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
			return this;
		}
	}
});

Game = {

	// Grid & size
	map_grid: {
		width: 24,
		height: 16,
		tile: {
			width: 16,
			height: 16
		}
	},
	width: function() {
		return this.map_grid.width * this.map_grid.tile.width;
	},
	height: function() {
		return this.map_grid.height * this.map_grid.tile.width;
	},

	start: function() {
		Crafty.init( Game.width(), Game.height());
		Crafty.background('rgb(255,200,200)');
		Crafty.e('Dude').at(5,5);
	}
}
