var juego = new Phaser.Game(960, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

//var juego = new Phaser.Game(800,600,Phaser.CANVAS,'gameDiv')
//14 CATORCE de noviembre


var plataforma;
var jugador;
var obstaculos;
var decor;
var cursores;
var enemigo;
var maiz;

let jugadorStats = {
  velocidad:30,
  puntaje:0,
  vida:10,
  tienellave:2,
}



function preload(){


  juego.load.image ("fondo"," /el mio/ imagenes/Pampa/fondo.png");
  juego.load.image("plat4x1-1","imagenes/Pampa/plataforma_4x1.png");
  juego.load.image("plat1x1-1","imagenes/Pampa/plataforma_1x1.png");
  juego.load.image("plat6x1-1","imagenes/Pampa/plataforma_6x1.png");
  juego.load.image("plat8x1-1","imagenes/Pampa/plataforma_8x1.png");

  juego.load.spritesheet("fuego","imagenes/Pampa/fuego.png",34,52);

  juego.load.image("decor","imagenes/pampa/decor.png");

  juego.load.spritesheet("jugador","imagenes/Pampa/icono_jugador_h.png",33,49);

  juego.load.image("puerta","imagenes/Pampa/puerta.png")

  juego.load.spritesheet("maiz","imagenes/Pampa/pickup.png",33,38)

  juego.load.spritesheet("enemigo","imagenes/Pampa/enemigo.png",63,33)

}

function create() {

    cursores = juego.input.keyboard.createCursorKeys();

  juego.physics.startSystem(Phaser.Physics.ARCADE);
  this.physics.arcade.gravity.y=1200;

  juego.add.image (0, 0, "fondo");

  jugador = this.add.sprite(0,450,"jugador");


//le doy gravedad a las plataformas

  plataforma = juego.add.group()
  plataforma.enableBody = true;

  plataforma.create(0, 558, "plat4x1-1");
  plataforma.create(250, 450, "plat1x1-1");
  plataforma.create(330, 350, "plat1x1-1");
  plataforma.create(0, 250, "plat6x1-1");
  plataforma.create(320, 120, "plat8x1-1");
  plataforma.create(790, 80, "plat4x1-1");
  plataforma.create(620,500, "plat8x1-1")
  plataforma.create(720, 310, "plat1x1-1");
  plataforma.create(678, 310, "plat1x1-1");
  plataforma.create(636, 310, "plat1x1-1");

//fijo las plataformas

  for(let i=0; i<plataforma.length; i++){

    plataforma.children[i].body.moves = false;
    plataforma.children [i].body.immovable = true;

  }

//le doy gravedad a los obstaculos

  obstaculos = juego.add.group()
  obstaculos.enableBody = true;

  obstaculos.create(172,545,"fuego");
  obstaculos.create(202,545,"fuego");
  obstaculos.create(232,545,"fuego");
  obstaculos.create(262,545, "fuego");
  obstaculos.create(292,545, "fuego");
  obstaculos.create(322,545, "fuego");
  obstaculos.create(352,545, "fuego");
  obstaculos.create(382,545, "fuego");
  obstaculos.create(412,545, "fuego");
  obstaculos.create(442,545, "fuego");
  obstaculos.create(472,545, "fuego");
  obstaculos.create(502,545, "fuego");
  obstaculos.create(532,545, "fuego");
  obstaculos.create(562,545, "fuego");
  obstaculos.create(592,545, "fuego");
  obstaculos.create(622,545, "fuego");
  obstaculos.create(652,545, "fuego");
  obstaculos.create(682,545, "fuego");
  obstaculos.create(712,545, "fuego");
  obstaculos.create(742,545, "fuego");
  obstaculos.create(772,545, "fuego");
  obstaculos.create(802,545, "fuego");
  obstaculos.create(832,545, "fuego");
  obstaculos.create(862,545, "fuego");
  obstaculos.create(892,545, "fuego");
  obstaculos.create(922,545, "fuego");
  obstaculos.create(640,260, "fuego");
  obstaculos.create(670,260, "fuego");
  obstaculos.create(700,260, "fuego");
  obstaculos.create(730,260, "fuego");

//fijo los obstaculos

  for(let i=0; i<obstaculos.length; i++){

  obstaculos.children[i].body.moves = false;
  obstaculos.children [i].body.immovable = true;

  //y los animo

  obstaculos.children[i].animations.add ("rotar", [0,1,2], 6, true);
  obstaculos.children[i].animations.play("rotar");
}

//agrego los objetos animados

maices = juego.add.group()
maices.enableBody = true;

maices.create(800, 40, "maiz");
maices.create (350, 80, "maiz");
maices.create (720, 100, "maiz");
maices.create(450, 20, "maiz");
maices.create(5, 210, "maiz");
maices.create(45, 210, "maiz");
maices.create(85, 210, "maiz");
maices.create(125, 210, "maiz");
maices.create(165, 210, "maiz");
maices.create(335, 310, "maiz");
maices.create(253, 410, "maiz");
maices.create(620, 460, "maiz");
maices.create(660, 460, "maiz");
maices.create(700, 460, "maiz");
maices.create(740, 460, "maiz");
maices.create(780, 460, "maiz");



//fijo los maices
for(let i=0; i<maices.length; i++){

maices.children[i].body.moves = false;
maices.children [i].body.immovable = true;

//y los animo
maices.children[i].animations.add ("rotar", [0,1,2], 6, true);
maices.children[i].animations.play("rotar");

}

//agrego los sprites
  decor= juego.add.sprite(0, 180, "decor");
  enemigo = this.add.sprite(485, 80, "enemigo");
  puerta = this.add.sprite(875,432,"puerta");



//le doy fisica a todo
    juego.physics.arcade.enable(jugador);
    juego.physics.arcade.enable(decor)
    juego.physics.arcade.enable(enemigo);

      jugador.enableBody = true;


// fjo los objetos
  decor.body.moves = false;
  enemigo.body.moves = true;
  jugador.body.moves = true;


//no permito que el jugador salga del frame

  jugador.body.collideWorldBounds = true;

//animo todo

jugador.animations.add("cara", [0,1,2,3,4,5], 6, true);
enemigo.animations.add ("qsy", [0,1,2], 6, true);

//
// barraDeEspacio = juego.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
//
// barraDeEspacio.onUp.add(revivirCubo, this);
//
//   cursorSuperior = juego.input.keyboard.addKey(Phaser.Keyboard.UP);

}

function update() {

//activo las aimaciones

enemigo.animations.play("qsy");
jugador.animations.play("cara");


//hago colisionar al jugador con los objetos
juego.physics.arcade.collide(jugador,plataforma);

//hago colisionar al enemigo con su plataforma
juego.physics.arcade.collide(enemigo,plataforma);

//hago morir al jugador con los obstaculos (ver función abajo)
juego.physics.arcade.overlap(jugador, obstaculos, daño, null, this);

//hago revvir a jugador
//juego.physics.arcade.overlap(jugador, obstaculos, revivir_jugador);

//hago ccoliionar al jugador con los maices paraa que los pueda agarrar
juego.physics.arcade.overlap(jugador, maices, jugador_maiz);

//hago colisionar al jugador con enemigo (ver función abajo)
juego.physics.arcade.overlap(jugador,enemigo, daño, null, this);


// le doy funcion a las teclas
if(cursores.up.isDown){
  jugador.y -= 9;
}
if(cursores.down.isDown){
  jugador.y +=8;
}
if(cursores.left.isDown){
  jugador.anchor.set(0.5, 0.5);
  jugador.x -=3;
  // jugador.animations.play("cara");

} if(cursores.right.isDown){
  jugador.anchor.set(0.5, 0.5);
  jugador.x +=3;
  // jugador.animations.play("cara");
}
//alteramps su pivot
jugador.anchor.set(0.5, 0.5);
//
// Le damos una velocidad al jugador
//jugador.body.velocity.x =10;
//
//le doy velocidad en eje x
 //jugador.body.velocity.y =2
//
//Cambiamos su escala para "girarlo"
jugador.scale.x = 1;
}

function jugador_maiz(jugador, maices)
{ maices.kill()

  //puntaje
  jugadorStats.puntaje +=1;
  console.log('puntaje: ' + jugadorStats.puntaje);
}

function daño()
{
  //alert("YOU DIED!");
  jugador.position.set(20,500);

  //vida
  jugadorStats.vida -=1;
  console.log('vida:' + (jugadorStats.vida -=1));

if(jugadorStats.vida ==0){
  location.reload();
}
}


