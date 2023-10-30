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
});
