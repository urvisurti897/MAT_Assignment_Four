export default function calculatePaintCost(paintRequired: number, costPerLiter: number): number {
  if (paintRequired < 0) {
    throw new Error('Paint required cannot be negative');
  }
  if (costPerLiter < 0) {
    throw new Error('Cost per liter cannot be negative');
  }
  return paintRequired * costPerLiter;
}
