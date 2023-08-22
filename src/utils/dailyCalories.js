export const dailyCalories = data => {
  const { height, age, currentWeight, disaredWeight } = data;
  return (
    10 * currentWeight +
    6.25 * height -
    5 * age -
    161 -
    10 * (currentWeight - disaredWeight)
  );
};
