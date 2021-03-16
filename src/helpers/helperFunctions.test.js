import { multiply, makeLowerCase } from "./helperFunctions";

test("Testing function multiply", () => {
  expect(multiply(1, 2)).toBe(2);
  expect(multiply(10, 5)).toBe(50);
});

test("Testing function makeLowerCase", () => {
  expect(makeLowerCase("Kucing")).toBe("kucing");
});
