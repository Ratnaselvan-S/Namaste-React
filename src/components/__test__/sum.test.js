import { sum } from "../sum";

test("sum funtion is tested", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
