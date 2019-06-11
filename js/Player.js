let Player = function (gameboard, x, y, speed, hp, size) {
    this.gameboard = gameboard;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.hp = hp;
    this.size = size;
    this.color = "red";
    this.isAlive = true;

    this.draw = function () {
        //ve player
        gameboard.ctx.beginPath();
        gameboard.ctx.fillRect(this.x, this.y, this.size, this.size)
        gameboard.ctx.fillStyle = this.color;
        gameboard.ctx.fill();
    }
    this.move = function (evt) {
        //di chuyen player

        switch (evt.keyCode) {
            case 37:
                this.x -= this.speed;
                break;
            case 39:
                this.x += this.speed;
                break;
        }
    }
    this.decreaseHp = function () {
        //giam hp
        //khi hp = 0 thi gameover
    }

}
