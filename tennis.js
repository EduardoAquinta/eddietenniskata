class tennisScore {
    constructor(player1Score, player2Score){
        this.player1Score = player1Score;
        this.player2Score = player2Score;
    }
  
    point(player){
        if(player === "player1Win"){ 
            this.player1Score += 15
        };
        if(player === "player2Win"){
            this.player2Score +=15
        }
        if(this.player1Score === 45 ){
            this.player1Score -= 5;
        }
        if(this.player2Score === 45){
            this.player2Score -= 5;
        }
    } 
    
    get score(){
        return`${this.player1Score} - ${this.player2Score}`
   }
}

module.exports = tennisScore;