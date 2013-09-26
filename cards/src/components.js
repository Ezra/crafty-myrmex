Crafty.c('Card', {
	init: function() {
		this.rankVal = 0;
		this.backImage = 'assets/back.png';
		this.requires('2D, DOM, Draggable, Image, Tween')
			.image(this.backImage)
			.css('border', '1px solid black')
			.css('border-radius', '8px');

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
		return this;
	},

	back: function(img) {
		if (img) {
			this.backImage = img;
			this.image(this.faceImage);
		} else {
			this.image(this.backImage);
		}
		return this;
	},

	at: function(x,y) {
		 if (x === undefined && y === undefined) {
			return { x: this.x, y: this.y}
		} else {
			this.attr({ x: x, y: y, z: y});
			this.snap();
			return this;
		}
	},

	updateZ: function() {
		this.z=this.y;
	},

	zOnTop: function() {
		this.z = 9001;
	},

	snap: function() {
		var xstep = Game.map_grid.tile.width;
		var ystep = Game.map_grid.tile.height;
		var xdest = Math.round(this.x / xstep)*xstep;
		var ydest = Math.round(this.y / ystep)*ystep;
		this.tween({x:xdest,y:ydest,z:ydest},5);
	}
});
