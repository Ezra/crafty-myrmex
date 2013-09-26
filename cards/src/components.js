Crafty.c('Card', {
	init: function() {
		this.backImage = 'assets/back.png';
		this.requires('2D, Canvas, Draggable, Image')
			.image(this.backImage);
	},

	front: function(img) {
		if (img) {
			this.frontImage = img;
			this.image(this.frontImage);
		} else if (this.frontImage) {
			this.image(this.frontImage);
		}
	},

	back: function(img) {
		if (img) {
			this.backImage = img;
			this.image(this.frontImage);
		} else {
			this.image(this.backImage);
		}
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
