const tennisScore = require("./tennis");

describe("The basic set up", () => {
    it("There are two players, each with a score", () => {
        const game = new tennisScore(0, 0)
        expect(game.score).toBe("0 - 0")
    })
});
describe("The basic early game", () => {
    it("adds 15 to player1,  who won the point", () => {
        const game = new tennisScore(0, 0);
        game.point("player1Win")
        expect(game.score).toBe("15 - 0");
    })
    it("adds 15 to player2, who won the point", () => {
        const game = new tennisScore(0, 0)
        game.point("player2Win");
        expect(game.score).toBe("0 - 15")
    })
    it("adds 15 to player1, who won the point at 15-15", () => {
        const game = new tennisScore(15, 15)
        game.point("player1Win");
        expect(game.score).toBe("30 - 15")
    })
    it("adds 15 to player2, who won the point at 15-15", () => {
        const game = new tennisScore(15, 15)
        game.point("player2Win");
        expect(game.score).toBe("15 - 30")
    })
    it("adds 15 to player 1 when the score is 15-0, makes 30-0", () => {
        const game = new tennisScore(15, 0)
        game.point("player1Win");
        expect(game.score).toBe("30 - 0");
    })
    it("adds 15 to player 2 when the score is 0 - 15, makes 0 - 30", () => {
        const game = new tennisScore(0, 15);
        game.point("player2Win");
        expect(game.score).toBe("0 - 30")
    })
});
describe("The game over 30 points", () => {
    it("adds 10 when player1 score is 30, makes 40-0", () => {
        const game = new tennisScore(30, 0);
        game.point("player1Win");
        expect(game.score).toBe("40 - 0")
    })
    it("adds 10 when player2 score is 30, makes 0 - 40", () => {
        const game = new tennisScore(0, 30);
        game.point("player2Win");
        expect(game.score).toBe("0 - 40")
    })
    it("adds 10 when player1 score is 30, makes 40-15", () => {
        const game = new tennisScore(30, 15);
        game.point("player1Win");
        expect(game.score).toBe("40 - 15")
    })
    it("adds 10 when player2 score is 30, makes 15-40", () => {
        const game = new tennisScore(15, 30);
        game.point("player2Win");
        expect(game.score).toBe("15 - 40")
    })
    it("adds 10 when player1 score is 30, makes 40-30", () => {
        const game = new tennisScore(30, 30);
        game.point("player1Win");
        expect(game.score).toBe("40 - 30")
    })
    it("adds 10 when player2 score is 30, makes 30-40", () => {
        const game = new tennisScore(30, 30);
        game.point("player2Win");
        expect(game.score).toBe("30 - 40")
    })
});
describe("The game once Deuce gets involved", () => {
    it("player1 gets advantage if they score at 40 - 40", () => {
        const game = new tennisScore(40, 40);
        game.deuce()
        game.point("player1Win");
        expect(game.score).toBe("ADV - 40")
    })
    it("player2 gets advantage if they score at 40 - 40", () => {
        const game = new tennisScore(40, 40);
        game.deuce()
        game.point("player2Win");
        expect(game.score).toBe("40 - ADV")
    })
    it("player1 gets deuce if they score at 40 - ADV", () => {
        const game = new tennisScore(40, "ADV");
        game.deuce()
        game.point("player1Win");
        expect(game.score).toBe("40 - 40")
    })
    it("player2 gets deuce if they score at ADV - 40", () => {
        const game = new tennisScore("ADV", 40);
        game.deuce();
        game.point("player2Win");
        expect(game.score).toBe("40 - 40")
    })
});
describe("Winning the game", () => {
    it("player1 wins the game if the score at 40 - 0", () => {
        const game = new tennisScore(40, 0);
        game.point("player1Win");
        expect(game.score).toBe("Player1 wins the game")
    })
    it("player2 wins the game if the score at 0 - 40", () => {
        const game = new tennisScore(0, 40);
        game.point("player2Win");
        expect(game.score).toBe("Player2 wins the game")
    })
    it("player1 wins the game if the score at 40 - 15", () => {
        const game = new tennisScore(40, 15);
        game.point("player1Win");
        expect(game.score).toBe("Player1 wins the game")
    })
    it("player2 wins the game if the score at 15 - 40", () => {
        const game = new tennisScore(15, 40);
        game.point("player2Win");
        expect(game.score).toBe("Player2 wins the game")
    })
    it("player1 wins the game if the score at 40 - 30", () => {
        const game = new tennisScore(40, 30);
        game.point("player1Win");
        expect(game.score).toBe("Player1 wins the game")
    })
    it("player2 wins the game if the score at 30 - 40", () => {
        const game = new tennisScore(30, 40);
        game.point("player2Win");
        expect(game.score).toBe("Player2 wins the game")
    })
});
describe("Winning the game at deuce", () => {
    it("player1 wins the game if the score at ADV - 40", () => {
        const game = new tennisScore("ADV", 40);
        game.deuce()
        game.point("player1Win");
        expect(game.score).toBe("Player1 wins the game")
    })
    it("player2 wins the game if the score at 40 - ADV", () => {
        const game = new tennisScore(40, "ADV");
        game.deuce()
        game.point("player2Win");
        expect(game.score).toBe("Player2 wins the game")
    })
});
