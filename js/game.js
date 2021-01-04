class Game
{
    constructor()
    {

    }

    getState()
    {
        var gameStateref=database.ref('gameState');
        gameStateref.on("value",function (data){
            gameState= data.val();
        });
        
    }

    update(state)
    {
        database.ref('/').update(
            {
            gameState:state
            }
        );

    }
    play()
  {
  
   
    form.hide();
   
    Player.getPlayerInfo();
    player.getCars();
    if(allPlayers !== undefined)
    {
      background(groundImg);
      image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
     var index =0;
     var x=200;
     var y;
     for (var plr in allPlayers)
     {
       index=index+1;
       x +=200;
       y = displayHeight/1.2-allPlayers[plr].distance;
       cars[index-1].x=x;
       cars[index-1].y=y;
       if(index===player.index)
       {
         cars[index-1].shapeColor ="red";
         camera.position.x=displayWidth/2;
         camera.position.y=cars[index-1].y;
         fill("orange");
         ellipse(x,y,70,70);
       }

     }     
  }

if(keyDown(UP_ARROW) && player.index!==null)
{
  console.log(player.distance);
    player.distance =player.distance + 40;
    player.update();
}
if(player.distance > 3560)
{
  gameState = 2;
  player.rank +=1;
  Player.updateCars(player.rank);
}
drawSprites();
  }
  async start()
        {
      if(gameState===0)
      {
        player= new Player();
        var PlayerCountref = await database.ref('playerCount').once("value");
        if(PlayerCountref.exists())
        {
           playerCount = PlayerCountref.val();
           player.getCount();
           
        }
        form = new Form();
        form.display();


      }

      car1 = createSprite(100,200);
      car1.addImage(car1Img);

      car2 = createSprite(300,200);
      car2.addImage(car2Img);

      car3 = createSprite(500,200);
      car3.addImage(car3Img);

      car4 = createSprite(700,200);
      car4.addImage(car4Img);

      cars = [car1,car2,car3,car4];
      
      
        }
    
        end()
        {
         console.log("GameOver");
         console.log(player.rank);
        }
        /*
        leaderBoard()
        {
          for (var i in allPlayers)
          {
          text(allPlayers[i].name+" : "+ player.rank,width/2,displayPosition);
          }
        }*/
        
}