export const sample = <T>(arr: T[], count = 0): T[] => {
  if (count <= 0 || arr.length === 0) return [];
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, arr.length));
};
