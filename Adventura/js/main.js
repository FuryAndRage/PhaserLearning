import MainScene from './scenes/main_scene.js'
import LoadingScene from './scenes/loading_scene.js'

const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    parent: 'adventura',
    physics:{
        default: 'arcade',
        arcade:{
            gravity: {
                y: 100
            },
            debug: false
        }
    },
    scene:[
        MainScene,
        LoadingScene,
    ]
}

const game = new Phaser.Game(config)