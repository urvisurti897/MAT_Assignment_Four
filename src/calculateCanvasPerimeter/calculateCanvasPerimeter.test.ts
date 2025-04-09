import calculateCanvasSize from "./calculateCanvasPerimeter";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(220);
  });

  test("returns 0 when both length and width are 0", () => {
    const result = calculateCanvasSize("0", "0");
    expect(result).toEqual(0);
  });

  test("handles negative values correctly", () => {
    const result = calculateCanvasSize("-10", "20");
    expect(result).toEqual(60); // Negative values are treated as positive
  });

  test("returns NaN for non-numeric strings", () => {
    const result = calculateCanvasSize("abc", "def");
    expect(result).toBeNaN();
  });

  test("handles floating-point numbers correctly", () => {
    const result = calculateCanvasSize("10.5", "20.5");
    expect(result).toEqual(62); // parseFloat handles decimal part correctly
  });

  test("handles large numbers correctly", () => {
    const result = calculateCanvasSize("1000000", "2000000");
    expect(result).toEqual(6000000);
  });

  test("handles mixed valid and invalid inputs", () => {
    const result = calculateCanvasSize("10", "abc");
    expect(result).toBeNaN();
  });
});
