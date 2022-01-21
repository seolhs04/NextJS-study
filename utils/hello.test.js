import { sum } from "./hello";

test("값이 제대로 나오는지 확인", () => {
  expect(sum(1, 2)).toBe(3);
});
