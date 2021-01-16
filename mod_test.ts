import { assertEquals } from "./test_deps.ts";
import isObject from "./mod.ts";

Deno.test("returns true for objects", () => {
  assertEquals(isObject({}), true);
  assertEquals(isObject([]), true);
});

Deno.test("returns false for null", () => {
  assertEquals(isObject(null), false);
});

Deno.test("returns false for undefined", () => {
  assertEquals(isObject(undefined), false);
});

Deno.test("returns false for booleans", () => {
  assertEquals(isObject(true), false);
  assertEquals(isObject(false), false);
});

Deno.test("returns false for primitives", () => {
  assertEquals(isObject(10), false);
  assertEquals(isObject("bar"), false);
});

Deno.test("returns false for function", () => {
  assertEquals(
    isObject(function () {}),
    false,
  );
});
