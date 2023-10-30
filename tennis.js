class tennisScore {
    constructor(player1Score, player2Score){
        this.player1Score = player1Score;
        this.player2Score = player2Score;
    }
  
    point(player){
        if(player === "player1Win"){ 
            this.player1Score += 15 
            console.log(player)
        };
        if(player === "player2Win"){
            this.player2Score +=15
            console.log(player)
        }
    } 

    get score(){
        return`${this.player1Score} - ${this.player2Score}`
   }
}

module.exports = tennisScore;