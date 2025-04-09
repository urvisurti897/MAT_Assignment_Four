export default function calculateTotalCost(paintCost: number, laborCost: number): number {
  if (paintCost < 0) {
    throw new Error('Paint cost cannot be negative');
  }
  if (laborCost < 0) {
    throw new Error('Labor cost cannot be negative');
  }
  return paintCost + laborCost;
}
