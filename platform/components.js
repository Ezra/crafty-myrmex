Crafty.c('PlayerCharacter', {
	init: function() {
		this.requires('Actor, Twoway, Gravity, Collision, Color')
			.twoway(4)
			.gravity('Platform')
			.stopOnSolids()
			.color('Sienna');
	},

	stopOnSolids: function() {
		this.onHit('Solid', this.stopMovement);
		return this;
	},

	stopMovement: function() {
		this._speed = 0;
		if (this._movement) {
			this.x -= this._movement.x;
			this.y -= this._movement.y;
		}
	}
});

Crafty.c('Floor', {
	init: function() {
		this.requires('Actor, Color, Solid, Platform')
			.color('DimGray');
	}
});

Crafty.c('Wall', {
	init: function() {
		this.requires('Actor, Color, Solid')
			.color('DimGray');
	}
});

Crafty.c('Actor', {
	init: function() {
		this.requires('2D, Canvas, Grid');
	},
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
