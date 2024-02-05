class Sprite {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    draw() {
      console.log('Draw the Sprite at: ' + this.x + this.y)
    }
}

monster1 = new Sprite(100,-50);
monster1.draw();

monster2 = new Sprite(-234,56);
monster2.draw();