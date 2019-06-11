let Gameboard = function (id, width, height) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = width;
    this.canvas.height = height;
    this.score = 0;
    this.eggs = [];

    this.init = function () {
        //set cac chi so player va egg
        //set thong so mac dinh
        this.player =
            new Player(this, this.canvas.width / 2, this.canvas.height - 50, 10, 10, 30);
    }

    this.draw = function () {
        this.player.draw();
        //ve ra man hinh choi
        //ve ra player va egg tren man hinh
    }

    this.checkCrash = function () {
        //check tat ca nhung va cham trong gameboard
    }
    this.gameOver = function () {
        //Ket thuc game
    }
    this.crash = function (obj1, obj2) {
        //check xem 2 object co va cham voi nhau hay ko
        //return true hoac false
    }
    this.createEgg = function () {
        let num = Math.random()* 1000;
        if(num < 5) {
            let egg = new Egg(this, 100, 100, 5, 2, 10);
            this.eggs.push(egg);;
        }

        for (let i= 0;i<this.eggs.length;i++){
            this.eggs[i].move();
            this.eggs[i].draw();
        }

    }
}

function main() {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    // game.player.x += 10;
    game.draw();
    game.createEgg();
    requestAnimationFrame(main);
}
