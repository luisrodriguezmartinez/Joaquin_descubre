/**
 * Created by Luis Rodriguez - luiswr@hotmail.com on 21/06/14.
 */

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'Primer Juego', {preload: preload, create: create, render: render, update: update});


var misplash;
var mititulo;
var miscajas;
var micaja1;
var micaja2;
var micaja3;
var mileon;
var mipato;
var mimono;
var mielefante;
var autoincrementar = 1;

var audioelefante;
var audioleon ;
var audiomono;
var audiopato;
var audiofondo;

function preload() {
    game.load.image('fondo', 'assets/sprites/bg.png');
    game.load.image('splash', 'assets/sprites/splash.png');
    game.load.image('titulo', 'assets/sprites/titulo.png');
    game.load.image('caja', 'assets/sprites/cajas.png');
    game.load.image('caja1', 'assets/sprites/caja1.png');
    game.load.image('caja2', 'assets/sprites/caja2.png');
    game.load.image('caja3', 'assets/sprites/caja3.png');
    game.load.image('pato', 'assets/sprites/pato.png');
    game.load.image('elefante', 'assets/sprites/elefante.png');
    game.load.image('pato', 'assets/sprites/pato.png');

    game.load.image('leon', 'assets/sprites/leon.png');
    game.load.image('mono', 'assets/sprites/mono.png');
    game.load.audio('plam', ['assets/sound/64119_atari66_beeps.mp3', 'assets/sound/64119__atari66__beeps.ogg']);
    game.load.audio('aelefante', ['assets/sound/elefante.mp3', 'assets/sound/elefante.ogg']);
    game.load.audio('aleon', ['assets/sound/leon.mp3', 'assets/sound/leon.ogg']);
    game.load.audio('amono', ['assets/sound/mono.mp3', 'assets/sound/mono.ogg']);
    game.load.audio('apato', ['assets/sound/pato.mp3', 'assets/sound/pato.ogg']);
    game.load.audio('afondo', ['assets/sound/fondo.mp3', 'assets/sound/fondo.ogg']);
    game.stage.backgroundColor = '#fff';
}


function create() {

    this.game.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    misplash = game.add.sprite(game.world.centerX,game.world.centerY - 210, 'splash');
    mititulo = game.add.sprite(game.world.centerX,game.world.centerY - 100, 'titulo');

    mititulo.anchor.set(0.5, 0);
    misplash.anchor.set(0.5, 0);

    mititulo.scale.setTo(0.7, 0.7);
    misplash.scale.setTo(0.7, 0.7);

    //despues de 4 segundos desaparecemos el splash Screen
    game.time.events.add(Phaser.Timer.SECOND * 4, fadePicture, this);

    miplam = game.add.audio('plam', 1, true);
    audioelefante = game.add.audio('aelefante', 1, true);
    audioleon = game.add.audio('aleon', 1, true);
    audiomono = game.add.audio('amono', 1, true);
    audiopato = game.add.audio('apato', 1, true);
    audiofondo = game.add.audio('afondo',1,true);

    audiofondo.play('',0,1,true);


}

//pasado 4 segundos agregamos el splash screen con un efecto alpha
function fadePicture() {
    game.add.tween(misplash).to( { alpha: 0 }, 1500, Phaser.Easing.Linear.None, true, tiempo2());
    game.add.tween(mititulo).to( { alpha: 0 }, 1500, Phaser.Easing.Linear.None, true);
}

// luego de que desaparece el splash screen, esperamos 2 segundos para agregar la nueva pantalla
function tiempo2(){
    game.time.events.add(Phaser.Timer.SECOND * 2, agregarFondo);
}

//pasado 2 segundos agregamos el nuevo fondo
function agregarFondo(){
    for (var i = 0; i < 200; i++)
    {
        game.add.sprite(game.world.randomX, game.world.randomY, 'fondo');
    }
    agregarCajas();
}

//agregamos las cajas que se tocaran
function agregarCajas(){

    miscajas = game.add.sprite(game.world.centerX,game.world.centerY - 200,  'caja');
    micaja1 = game.add.sprite(game.world.centerX - 156, game.world.centerY - 87,  'caja1');
    micaja2 = game.add.sprite(game.world.centerX -1,game.world.centerY -87,  'caja2');
    micaja3 = game.add.sprite(game.world.centerX + 156,game.world.centerY - 87,  'caja3');

    miscajas.anchor.set(0.5, 0);
    micaja1.anchor.set(0.5, 0);
    micaja2.anchor.set(0.5, 0);
    micaja3.anchor.set(0.5, 0);

    miscajas.scale.setTo(0.6, 0.6);
    micaja1.scale.setTo(0.6, 0.6);
    micaja2.scale.setTo(0.6, 0.6);
    micaja3.scale.setTo(0.6, 0.6);


    micaja1.inputEnabled = true;
    micaja2.inputEnabled = true;
    micaja3.inputEnabled = true;


    micaja1.events.onInputDown.add(moverCaja1, this);
    micaja2.events.onInputDown.add(moverCaja2, this);
    micaja3.events.onInputDown.add(moverCaja3, this);


}




function moverCaja1() {
    game.add.tween(micaja1).to( { alpha: 0 }, 1500, Phaser.Easing.Linear.None, true);
    var animal = autoincrementar++;

    switch(animal) {
        case 1:
            mipato = game.add.sprite(game.world.centerX - 156, game.world.centerY - 87,  'pato');
            mipato.alpha = 0;

            game.add.tween(mipato).to( { alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
            mipato.anchor.set(0.5, 0);
            mipato.scale.setTo(0.6, 0.6);
            console.log(autoincrementar);
            audiopato.play('', 0, 1, false);
            break;
        case 2:
            mielefante = game.add.sprite(game.world.centerX - 156, game.world.centerY - 87,  'elefante');
            mielefante.alpha = 0;

            game.add.tween(mielefante).to( { alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
            mielefante.anchor.set(0.5, 0);
            mielefante.scale.setTo(0.6, 0.6);
            console.log(autoincrementar);
            audioelefante.play('', 0, 1, false);
            break;
        case 3:
            mileon = game.add.sprite(game.world.centerX - 156, game.world.centerY - 87,  'leon');
            mileon.alpha = 0;


            game.add.tween(mileon).to( { alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
            mileon.anchor.set(0.5, 0);
            mileon.scale.setTo(0.6, 0.6);
            console.log(autoincrementar);
            audioleon.play('', 0, 1, false);
            break;
        case 4:
            mimono = game.add.sprite(game.world.centerX - 156, game.world.centerY - 87,  'mono');
            mimono.alpha = 0;

            game.add.tween(mimono).to( { alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
            mimono.anchor.set(0.5, 0);
            mimono.scale.setTo(0.6, 0.6);

            autoincrementar = 1;
            console.log(autoincrementar);
            audiomono.play('', 0, 1, false);
            break;



        default:
    }


}
function moverCaja2() {
    game.add.tween(micaja2).to( { alpha: 0 }, 1500, Phaser.Easing.Linear.None, true);
    var animal = autoincrementar++;

    switch(animal) {
        case 1:
            mipato = game.add.sprite(game.world.centerX - 1, game.world.centerY - 87,  'pato');
            mipato.alpha = 0;

            game.add.tween(mipato).to( { alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
            mipato.anchor.set(0.5, 0);
            mipato.scale.setTo(0.6, 0.6);
            console.log(autoincrementar);
            audiopato.play('', 0, 1, false);
            break;
        case 2:
            mielefante = game.add.sprite(game.world.centerX - 1, game.world.centerY - 87,  'elefante');
            mielefante.alpha = 0;

            game.add.tween(mielefante).to( { alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
            mielefante.anchor.set(0.5, 0);
            mielefante.scale.setTo(0.6, 0.6);
            console.log(autoincrementar);
            audioelefante.play('', 0, 1, false);
            break;
        case 3:
            mileon = game.add.sprite(game.world.centerX - 1, game.world.centerY - 87,  'leon');
            mileon.alpha = 0;


            game.add.tween(mileon).to( { alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
            mileon.anchor.set(0.5, 0);
            mileon.scale.setTo(0.6, 0.6);
            console.log(autoincrementar);
            audioleon.play('', 0, 1, false);
            break;
        case 4:
            mimono = game.add.sprite(game.world.centerX - 1, game.world.centerY - 87,  'mono');
            mimono.alpha = 0;

            game.add.tween(mimono).to( { alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
            mimono.anchor.set(0.5, 0);
            mimono.scale.setTo(0.6, 0.6);

            autoincrementar = 1;
            console.log(autoincrementar);
            audiomono.play('', 0, 1, false);
            break;
        default:
    }
}
function moverCaja3() {
    game.add.tween(micaja3).to( { alpha: 0 }, 1500, Phaser.Easing.Linear.None, true);
    var animal = autoincrementar++;

    switch(animal) {
        case 1:
            mipato = game.add.sprite(game.world.centerX + 156, game.world.centerY - 87,  'pato');
            mipato.alpha = 0;

            game.add.tween(mipato).to( { alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
            mipato.anchor.set(0.5, 0);
            mipato.scale.setTo(0.6, 0.6);
            console.log(autoincrementar);
            audiopato.play('', 0, 1, false);
            break;
        case 2:
            mielefante = game.add.sprite(game.world.centerX + 156, game.world.centerY - 87,  'elefante');
            mielefante.alpha = 0;

            game.add.tween(mielefante).to( { alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
            mielefante.anchor.set(0.5, 0);
            mielefante.scale.setTo(0.6, 0.6);
            console.log(autoincrementar);
            audioelefante.play('', 0, 1, false);
            break;
        case 3:
            mileon = game.add.sprite(game.world.centerX + 156, game.world.centerY - 87,  'leon');
            mileon.alpha = 0;


            game.add.tween(mileon).to( { alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
            mileon.anchor.set(0.5, 0);
            mileon.scale.setTo(0.6, 0.6);
            console.log(autoincrementar);
            audioleon.play('', 0, 1, false);
            break;
        case 4:
            mimono = game.add.sprite(game.world.centerX + 156, game.world.centerY - 87,  'mono');
            mimono.alpha = 0;

            game.add.tween(mimono).to( { alpha: 1 }, 300, Phaser.Easing.Linear.None, true);
            mimono.anchor.set(0.5, 0);
            mimono.scale.setTo(0.6, 0.6);

            autoincrementar = 1;
            console.log(autoincrementar);
            audiomono.play('', 0, 1, false);
            break;

        default:
    }

}

function render() {

}



function update() {

}








