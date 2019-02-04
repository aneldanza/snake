const Snake = require('./snake.js');
const Apple = require('./apple.js');

class Board {
    constructor(dim) {
        this.dim = dim;
        this.snake = new Snake(this);
        this.apple = new Apple(this);
    }

    build() {
        var rows = Array(dim);
        var board = rows.map(function(row) {
            row = Array[dim];
        });
        this.grid = board;
    }

    isOver() {
        if (this.snake.hitWall()) {
            alert("You hit a wall");
            this.gameOver();
        }
    }
}

module.exports = Board;