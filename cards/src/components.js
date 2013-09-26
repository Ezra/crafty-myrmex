Crafty.c('Card', {
	init: function() {
		this.backImage = 'assets/back.png';
		this.requires('2D, Canvas, Draggable, Image')
			.image(this.backImage);
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
			this.attr({ x: x, y: y});
			return this;
		}
	}
});
