class Form
{
    constructor()
    {   this.title = createElement('h2');
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting =createElement('h3');
       this.reset = createButton('Reset');
    }

    display()
    {
     
       this.title.html("Car Racing Game");
       this.title.position(displayWidth/2+175,displayHeight/2-300);

      
       this.input.position(displayWidth/2+175,displayHeight/2-75);

       this.button.position(displayWidth/2+250,displayHeight/2);

       this.reset.position(1366/2+900,displayHeight/2-250)
       
       
      
       this.button.mousePressed(
            ()=>
           {
               this.input.hide();
               this.button.hide();
               
            player.name = this.input.value();
               
               playerCount +=1;
               player.index = playerCount;
               player.update();
               player.updateCount(playerCount);
            
              
               this.greeting.html("Hello " + player.name);
               this.greeting.position(displayWidth/2+200,displayHeight/2);
           }
       );
       
       this.reset.mousePressed(

          ()=>
          {
           game.update(0);
           player.updateCount(0);

          }

       )
    }

    hide()
     {
         //this.title.hide();
         this.input.hide();
         this.button.hide();
         this.greeting.hide();
     }
}
