var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starryNight.jpg");
	//load animation for fairy here
	fairyImg = loadImage("fairyImage1.png","fairyImage2.png");

	sound = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(900, 800);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(900,30);
	star.addImage(starImg);
	star.scale = 0.27;

	Fairy = createSprite(120,500);
	Fairy.addImage(fairyImg);	
	Fairy.scale = 0.3;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
     World.add(world, starBody);


	
	Engine.run(engine);

	sound.play();

}


function draw() 
{
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(keyDown("right"))
  {
	Fairy.velocityX = 3;
  }

  if(star.y > 470 && starBody.position.x > 500 )
  {
	Matter.Body.setStatic(starBody,true); 
  }

  if(Fairy.x > 470 )
  {
	Fairy.velocityX = 0;
  }

   //write code to stop star in the hand of fairy
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) 
	{
		Matter.Body.setStatic(starBody,false); 
	}
	
}
