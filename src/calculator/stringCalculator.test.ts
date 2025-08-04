// src/calculator/stringCalculator.test.ts

import { add } from './stringCalculator';

describe('String Calculator', () => {
  test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns number for single number string', () => {
    expect(add("1")).toBe(1);
  });

  test('returns sum for two numbers', () => {
    expect(add("1,5")).toBe(6);
  });

  test('handles unknown amount of numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
  });

  test('handles new lines as delimiter', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('handles custom delimiter ";"', () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test('handles custom delimiter "|"', () => {
    expect(add("//|\n4|5|6")).toBe(15);
  });

  test('throws exception for single negative number', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });

  test('throws exception listing all negative numbers', () => {
    expect(() => add("1,-2,-5,4")).toThrow("negative numbers not allowed: -2,-5");
  });
});
