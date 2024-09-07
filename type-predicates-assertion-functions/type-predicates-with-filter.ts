import { expect, it } from "vitest";
import { Equal, Expect } from "../helper/type-utils";

export const values = ["a", "b", undefined, "c", undefined];

// const filteredValues = values.filter((value) => Boolean(value));

// solution 1

// const filteredValues = values.filter((value) => Boolean(value)) as string[];
// --> 表示我們比typescript還知道型別為何，以上範例我們知道filter後只會是字串陣列

// The Type Predicate Solution

const predicate = (value: string | undefined): value is string => {
  return Boolean(value);
};

const filteredValues = values.filter(predicate);

it("Should filter out the undefined values", () => {
  expect(filteredValues).toEqual(["a", "b", "c"]);
});

it('Should be of type "string[]"', () => {
  type test1 = Expect<Equal<typeof filteredValues, string[]>>;
});
