const tennisScore = require("./tennis");

describe("Tests to ensure tennisScore returns the correct score", () => {
    it("Returns a number", () => {
        let score = 1;
        expect(typeof(tennisScore(score))).toBe("number")
    })
})