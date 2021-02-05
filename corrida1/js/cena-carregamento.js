export default class CenaCarregamento extends Phaser.Scene{
    constructor(){
        super({
            key: 'CenaCarregamento'
        })
    }

    preload(){
        const larguraJogo = this.sys.canvas.width
        const alturaJogo = this.sys.canvas.height
        this.load.on('complete', () => {
            this.scene.start('CenaJogo');
        })
        
        // this.load.image('asfalto-central', 'img/road_asphalt22.png')
        // this.load.image('asfalto-esquerda', 'img/road_asphalt21.png')
        // this.load.image('asfalto-direita', 'img/road_asphalt23.png')
        const sky = this.load.image('sky', 'img/sky.jpg')
        console.log(sky)
        
    }

    create(){

    }

    update(){

    }
}