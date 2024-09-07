import { expect, it } from "vitest";
import { Equal, Expect } from "../helper/type-utils";

interface User {
  id: string;
  name: string;
}

interface AdminUser extends User {
  role: "admin";
  organisations: string[];
}

interface NormalUser extends User {
  role: "normal";
}

function IsAdmin(user: NormalUser | AdminUser): asserts user is AdminUser {
  if (user.role !== "admin") throw new Error("user is not admin");
}

it("Should throw an error when it encounters a normal user", () => {
  const user: NormalUser = {
    id: "user_1",
    name: "Miles",
    role: "normal",
  };

  expect(() => IsAdmin(user)).toThrow();
});

it("Should assert that the type is an admin user after it has been validated", () => {
  const example = (user: NormalUser | AdminUser) => {
    IsAdmin(user);
    type tests = [Expect<Equal<typeof user, AdminUser>>];
  };
});
