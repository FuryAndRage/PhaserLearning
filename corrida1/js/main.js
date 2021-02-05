import CenaCarregamento from "./cena-carregamento.js"

import CenaJogo from "./cena-jogo.js"

const config = {
    type: Phaser.AUTO,
    width: 420,
    height: 768,
    parent: 'race-game',
    physics:{
        default: 'arcade',
        arcade:{
            gravity:{
                y:0
            }
        },
        debug: false
    },
    scene:[
        CenaJogo,
        CenaCarregamento,
        
    ]
}

const game = new Phaser.Game(config)


