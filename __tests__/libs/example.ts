import { square } from "@/libs/example";

describe("square", () => {
  it("計算結果が正しいこと", () => {
    const expected = 4;
    expect(square(2)).toStrictEqual(expected);
  });
});
