const tennisScore = require("./tennis");

describe("The basic set up", () => {
    it("There are two players, each with a score", () => {
        const game = new tennisScore(0, 0)
        expect(game.score).toBe("0 - 0")
    })
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
});
