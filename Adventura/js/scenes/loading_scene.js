export default class LoadingScene extends Phaser.Scene{
    constructor(){
        super({
            key: 'LoadingScene'
        });
    }

    preload(){
        
        this.load.on('complete', () =>{
            
            this.scene.start('MainScene')
        })
        
    }
   

    create(){

    }

    upload(){

    }
}