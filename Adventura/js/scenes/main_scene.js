export default class MainScene extends Phaser.Scene{
    constructor(){
        super({
            key: 'MainScene'
        });
    }

    preload(){
        this.larguraJogo = this.sys.canvas.width
        this.alturaJogo = this.sys.canvas.height
        this.load.image('grass', 'img/Grass.png')
        this.load.image('sky', 'img/sky.png')
    }

    create(){
        
        this.add.image(0,0, 'sky').setOrigin(0,0)

        const floor = this.physics.add.staticGroup()

        for(let pixels = 0; pixels<=this.larguraJogo; pixels+=16){
            floor.create(this.larguraJogo - pixels,this.alturaJogo - 16, 'grass').setOrigin(0,0).refreshBody()
        }
        
    }

    upload(){
        
    }

}