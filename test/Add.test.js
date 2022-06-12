const Add = require("../src/Add");

describe("Add", () => {
  // Test-Case-01
  test("1. returns sum of an Empty string as 0", () => {
    expect(Add("")).toBe(0);
  });
  // Test-Case-02
  test("2. returns sum of an integer present in a string", () => {
    expect(Add("1")).toBe(1);
  });
  // Test-Case-03
  test("3. returns sum of two integers present in a string", () => {
    expect(Add("1,2")).toBe(3);
  });
  // Test-Case-04
  test("4. returns sum of n integers present in a string", () => {
    expect(Add("1,2,3,4")).toBe(10);
  });

  // Test-Case-05
  test("5. returns sum of integers present in a string seperated by new lines", () => {
    expect(Add("1\n3,4")).toBe(8);
  });

  // Test-Case-06
  test("6. returns sum of integers present in a string having ; as delimiter", () => {
    expect(Add("//;\n1;2")).toBe(3);
  });

  // Test-Case-07
  test("7. returns sum of integers present in a string having custom delimiter", () => {
    expect(Add("//*\n1*2")).toBe(3);
  });

  // Test-Case-08
  test("8. returns sum of integers present in a string having custom delimiter of length >1", () => {
    expect(Add("//[***]\n1***2")).toBe(3);
  });

  // Test-Case-09
  test("9. returns sum of integers present in a string having multiple custom delimiters of length >1", () => {
    expect(Add("//[***][xyz]\n1***2xyz3")).toBe(6);
  });

  // Test-Case-10
  test("10 returns sum of integers present in a string", () => {
    expect(Add("-1,2")).toBe("negatives not allowed: -1");
  });

  // Test-Case-11
  test("11 returns sum of integers present in a string", () => {
    expect(Add("-1,2,-4,-5")).toBe("negatives not allowed: -1,-4,-5");
  });

  // Test-Case-12
  test("12. ignore numbers > 1000", () => {
    expect(Add("//[***][xyz]\n1***2xyz1001")).toBe(3);
  });
});
