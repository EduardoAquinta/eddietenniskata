# Tennis Kata made up by me

In this kata we want to return the results of each point. 
There are two player, 1 and 2, and each time the score a point we increment the score based on where we are in the game. 
Ergo:
1st point is 15
2nd point is 30 
3rd point is 40 4th point is game. 

However, if the game is tied at 40 then we go into 'deuce'. 

The first player to win a point gets 'advantage', and if that player wins the next point they win the game. 
However, if the other player wins the point it's back to 'deuce'. 

Once the game is won we then look to see if the player has won 6 games in the set. If the other player has 4 or less games, the player wins. However, you must win the set by two clear games so if it is 6-5 the player with six needs to win the next game. If they do not, and it is 6 all, the players are in a tie-break.

This is a special game, where a player must win by 2 clear points at 6 or more. 

The player to reach 3 sets first wins, so in other words it is a best of 5 sets scenario. 