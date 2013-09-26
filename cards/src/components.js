Crafty.c('Card', {
	init: function() {
		this.requires('2D, Canvas, Draggable, Image')
			.image('assets/back.png');
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
