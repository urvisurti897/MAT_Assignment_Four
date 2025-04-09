export default function calculateCanvasSize(
  length: string,
  width: string
) {

  const lengthNum = parseInt(length);
  const widthNum = parseInt(width);

  if (lengthNum < 0){
    throw new Error("Length should be positive");
  }

  if (widthNum < 0){
    throw new Error("Width should be positive");
  }

  if (lengthNum == 0){
    throw new Error("Length should not be zero");
  }

  if (widthNum == 0){
    throw new Error("Width should not be zero");
  }

  if (isNaN(lengthNum)) {
    throw new Error("Length should not be non-numeric");
  }
  if (isNaN(widthNum)) {
    throw new Error("Width should not be non-numeric");
  }

  return (lengthNum) * (widthNum);
}