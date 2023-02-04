var tempo = 100;
numerodeflexas = 10;
cont = 1000;
function preload() {
    cidade = loadImage("./assets/cidade_1.PNG");
    arqueiroimg = loadImage("./assets/arqueiro.png");
    flexaimg = loadImage("./assets/arrow.png");
    aliensimg = loadImage("./assets/aliens.png")
    muroimg = loadImage("./assets/muro.jpg")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = createSprite(windowWidth / 2, windowHeight / 2);
    bg.addImage(cidade);
    edges = createEdgeSprites()    

    arqueiro = createSprite(windowWidth / 2 + 30, windowHeight / 2 + 250);
    arqueiro.addImage(arqueiroimg);
    arqueiro.scale = 0.04;
    arqueiro.rotation = +180;
    muro = createSprite(windowWidth/4-70,windowHeight+50)
    muro.addImage(muroimg)
    //Copias do Muro
    muro = createSprite(windowWidth/2,windowHeight+50)
    muro.addImage(muroimg)
    //Copias do Muro
    muro = createSprite(windowWidth-300,windowHeight+50)
    muro.addImage(muroimg)

    frameRate(30);
    tempo = 3000;
}

function draw() {
    background(0);
    arqueiro.collide(edges)
    //exibir pontuação
    frameRate(30);
    tempo = tempo - 1;
    tempo2 = round(tempo / 30);
    drawSprites();
    if (keyDown("RIGHT_ARROW")) {
        arqueiro.x = arqueiro.x + 14;
    }
    if (keyDown("LEFT_ARROW")) {
        arqueiro.x = arqueiro.x - 14;
    }

    if (keyWentDown("space")) {
        flexa = createSprite(arqueiro.x, arqueiro.y);

        flexa.velocityY = -15;
        flexa.addImage(flexaimg);
        flexa.scale = 0.06;
        flexa.rotation = -90;
    }

    if (frameCount%60===0){
        alien = createSprite(500,50)
        alien.addImage(aliensimg)
        alien.velocityY = 10
        alien.scale = 0.27
        alien.x = Math.round(random(50,windowWidth-50))
    }

    text("Tempo restante: " + tempo2, windowWidth - 500, 100);
}
