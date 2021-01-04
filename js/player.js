class Player
{
    constructor()
     {
        this.name = null;
        this.distance =0;
        this.index =null;
        this.rank = null;
     }

     getCount()
     {
         var PlayerCountref = database.ref('playerCount');
         PlayerCountref.on("value", function(data)
         {
            playerCount = data.val();
            
         });
     }

updateCount(count)
{
    database.ref('/').update(
        {
        playerCount:count
        }
    );

}

update()
{
    var playerIndex = "players/player"+ this.index;
    database.ref(playerIndex).set(
    {
      name:this.name,
      distance:this.distance
    }
    )
}

static getPlayerInfo()
{
    var playerInforef=database.ref('players');
    playerInforef.on('value',(data)=>
    {
      allPlayers = data.val()
    })

    
}


static updateCars(rank)
{
 database.ref('/').update(
 {
    cars_at_end:rank

 }
 )

}

getCars()
{
    var carendInfo = database.ref('cars_at_end');
    carendInfo.on('value',(data)=>
    {
        this.rank = data.val();
    })
}
}
