const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
    polygonimg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(450,380,900,20);
    stand = new Ground(390,300,250,10);
    stand2 = new Ground(720,250,290,10);
    
    box1 = new BoxClass(330,235,30,40);
    box2 = new BoxClass(360,235,30,40);
    box3 = new BoxClass(390,235,30,40);
    box4 = new BoxClass(420,235,30,40);
    box5 = new BoxClass(450,235,30,40);
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    background("blue")
    Engine.update(engine);
    ground.display();
    stand.display();
    stand2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    imageMode(CENTER)
    image(polygonimg,polygon.position.x,polygon.position.y,40,40);
    slingshot.display();
}
    function mouseDragged(){
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    }
    
    
    function mouseReleased(){
        slingshot.fly();
    }
    function keyPressed() {
    
    if (keyCode === 32) {
        slingshot.attach (this.polygon)

    }}
