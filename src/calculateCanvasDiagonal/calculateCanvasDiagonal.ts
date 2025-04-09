export default function calculateCanvasDiagonal(
  length: string,
  width: string
): number {
  const l = Math.abs(parseFloat(length));
  const w = Math.abs(parseFloat(width));
  if (isNaN(l) || isNaN(w)) return NaN;
  return Math.sqrt(l ** 2 + w ** 2);
}
