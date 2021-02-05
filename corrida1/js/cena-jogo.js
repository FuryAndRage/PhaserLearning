export default class CenaJogo extends Phaser.Scene{
    constructor(){
        super({
            key: 'CenaJogo'
        })
    }

    preload(){
        this.larguraJogo = this.sys.canvas.width
        this.alturaJogo = this.sys.canvas.height
        this.load.image('asfalto-central', 'img/road_asphalt22.png')
        this.load.image('asfalto-esquerda', 'img/road_asphalt21.png')
        this.load.image('asfalto-direita', 'img/road_asphalt23.png')
        this.load.image('grama', 'img/land_grass04.png')
        this.load.image('player', 'img/car_blue_5.png')
        this.load.image('sky', 'img/sky.png')
        
    }

    create(){
        
        // const sky = this.add.image(0,0, 'sky')
        // sky.setOrigin(0,0)
        
        const pista = this.physics.add.staticGroup()


        for(let asfalto = 0; this.alturaJogo >= asfalto; asfalto += 128){
            pista.create(0,this.alturaJogo - asfalto, 'grama').setOrigin(0,0)
            pista.create(400,this.alturaJogo - asfalto, 'grama').setOrigin(0,0)
            pista.create(18,this.alturaJogo - asfalto, 'asfalto-esquerda').setOrigin(0,0)
            pista.create(146,this.alturaJogo - asfalto, 'asfalto-central').setOrigin(0,0)
            pista.create(274,this.alturaJogo - asfalto, 'asfalto-direita').setOrigin(0,0)
            
        }

        this.teclas = this.input.keyboard.createCursorKeys()
        this.jogador = this.physics.add.image(90, this.alturaJogo - 65,'player')
        // this.jogador.setCollideWorldBounds(true)
        this.jogador.setMass(2000)
    }

    update(){
        // console.log(this.jogador.body.acceleration.y)
        // console.log(this.jogador.body.speed)
       
        if(this.teclas.down.isDown){
            this.jogador.body.acceleration.y +=0.3
            
            if (this.jogador.body.acceleration.y >= 3)
            {
                this.jogador.body.acceleration.y = 3
                
            }
            if(this.jogador.body.speed > 0 && this.teclas.up.isDown){
                this.jogador.body.acceleration.y -= 10
                
            }
            
        }

        else if(this.teclas.up.isDown){
            
            this.jogador.body.acceleration.y -=0.3
            if (this.jogador.body.acceleration.y <= -3)
            {
                this.jogador.body.acceleration.y = -3
                // console.log(this.jogador.body.acceleration.y )
                
            }

            if(this.jogador.body.speed >0 && this.teclas.down.isDown ){
                this.jogador.body.acceleration.y += 10
                console.log('freiando')
               
            }
        }
        else{
            this.jogador.body.acceleration.y = 0
        }
    }
}