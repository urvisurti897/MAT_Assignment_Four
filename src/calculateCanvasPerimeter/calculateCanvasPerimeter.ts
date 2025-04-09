export default function calculateCanvasPerimeter(
  length: string,
  width: string
) {
  let parsedLength = parseFloat(length);
  let parsedWidth = parseFloat(width);

  if (isNaN(parsedLength) || isNaN(parsedWidth)) {
    return NaN;
  }

  if (parsedLength < 0) {
    parsedLength = Math.abs(parsedLength);
  }

  if (parsedWidth < 0) {
    parsedWidth = Math.abs(parsedWidth);
  }

  return 2 * (parsedLength + parsedWidth);
}
