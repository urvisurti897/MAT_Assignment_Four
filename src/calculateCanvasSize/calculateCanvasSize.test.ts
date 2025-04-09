import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");
    expect(result).toEqual(1000);
  });

  test("should throw an error if length is negative", () => {
    expect(() => calculateCanvasSize("-10", "100")).toThrow("Length should be positive");
  });

  test("should throw an error if width is negative", () => {
    expect(() => calculateCanvasSize("10", "-100")).toThrow("Width should be positive");
  });


  test("should throw an error if length is zero", () => {
    expect(() => calculateCanvasSize("0", "100")).toThrow("Length should not be zero");
  });

  test("should throw an error if width is zero", () => {
    expect(() => calculateCanvasSize("10", "0")).toThrow("Width should not be zero");
  });

  test.todo("should throw an error if length is non-numeric");

  test.todo("should throw an error if width is non-numeric");
});