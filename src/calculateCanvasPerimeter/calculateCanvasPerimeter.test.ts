import calculateCanvasSize from "./calculateCanvasPerimeter";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(220);
  });

  test.todo("returns 0 when both length and width are 0");
  test.todo("handles negative values correctly");
  test.todo("returns NaN for non-numeric strings");
  test.todo("handles floating-point numbers correctly");
  test.todo("handles large numbers correctly");
  test.todo("handles mixed valid and invalid inputs");
});
