class tennisScore {
    constructor(player1Score, player2Score, player1ScoreString = "0", player2ScoreString = "0"){
        this.player1Score = player1Score;
        this.player2Score = player2Score;
        this.player1ScoreString = player1ScoreString;
        this.player2ScoreString = player2ScoreString;
    }
  
    point(player){
        if(player === "player1Win"){ 
            this.player1Score += 15
            this.player1ScoreString = this.player1Score.toString();
            this.player2ScoreString = this.player2Score.toString();
        };
        if(player === "player2Win"){
            this.player2Score +=15
            this.player2ScoreString = this.player2Score.toString();
            this.player1ScoreString = this.player1Score.toString();
        }
        if(this.player1Score === 45 ){
            this.player1Score -= 5;
            this.player1ScoreString = this.player1Score.toString();
        }
        if(this.player2Score === 45){
            this.player2Score -= 5;
            this.player2ScoreString = this.player2Score.toString();
        }
        if(this.player1Score === 55){
            this.player1ScoreString = this.player1Score.toString().replace("55", "ADV")
        }
        if(this.player2Score === 55){
            this.player2ScoreString = this.player2Score.toString().replace("55", "ADV")
        }
    } 
    
    get score(){
        return `${this.player1ScoreString} - ${this.player2ScoreString}`
   }
}

module.exports = tennisScore;