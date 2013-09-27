Crafty.c('Gridded', {
	init: function() {
		this.requires('2D, Tween, DOM')
			.css('border', '1px solid black')
			.css('border-radius', '8px');
		this.attr(Game.map_grid.card);
		this.origin(this.w/2 + 1, this.h/2 + 1);
	},

	at: function(x,y) {
		if (x === undefined && y === undefined) {
			return {
				x: this.x/Game.map_grid.tile.w,
				y: this.y/Game.map_grid.tile.h
			}
		} else {
			this.attr({
				x: x*Game.map_grid.tile.w, 
				y: y*Game.map_grid.tile.h, 
				z: y*Game.map_grid.tile.h
			});
			this.snap();
			return this;
		}
		return this; // shouldn't get here
	},

	snap: function() {
		var xstep = Game.map_grid.tile.w;
		var ystep = Game.map_grid.tile.h;
		var xdest = Math.round(this.x / xstep)*xstep;
		var ydest = Math.round(this.y / ystep)*ystep;
		if (xdest<0)
			xdest=0;
		if (xdest>=(Game.map_grid.w)*xstep)
			xdest=(Game.map_grid.w-1)*xstep;
		if (ydest<0)
			ydest=(Game.map_grid.min_row)*ystep;
		if (ydest>=(Game.map_grid.max_row)*ystep)
			ydest=(Game.map_grid.max_row-1)*ystep;

		this.tween({x:xdest,y:ydest,z:ydest},5);
		return this;
	}
});

Crafty.c('Card', {
	init: function() {
		this.requires('Gridded, Draggable, Mouse, Image');

		this.rankVal = 0;
		this.backImage = 'assets/back.png';
		this.image(this.backImage);
		this.faceUp = false;

		this.bind('MouseUp', function(e) {
			if (e.mouseButton == Crafty.mouseButtons.RIGHT) {
				this.turnOver();
			} else if (e.mouseButton == Crafty.mouseButtons.MIDDLE) {
				this.turnAround();
			}
		});
		this.bind('StartDrag', this.zOnTop);
		this.bind('StopDrag', this.snap);
	},

	rank: function(num) {
		if(num === undefined) {
			return this.rankVal;
		} else {
			this.rankVal = num;
			return this
		}
	},

	face: function(img) {
		if (img) {
			this.faceImage = img;
			this.image(this.faceImage);
		} else if (this.faceImage) {
			this.image(this.faceImage);
		}
		this.faceUp = true;
		return this;
	},

	back: function(img) {
		if (img) {
			this.backImage = img;
			this.image(this.backImage);
		} else {
			this.image(this.backImage);
		}
		this.faceUp = false;
		return this;
	},

	turnOver: function() {
		if (this.faceUp) {
			this.back();
		} else {
			this.face();
			this.turnAround();
		}
	},

	turnAround: function() {
		this.rotation += 180;
	},

	zOnTop: function() {
		this.z = 9001;
	}
});
