Crafty.c('Card', {
	init: function() {
		this.requires('2D, Canvas, Draggable, Image');
		this.image('assets/back.png');
		this.attr({
			w: 130,
			h: 182
		})
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
