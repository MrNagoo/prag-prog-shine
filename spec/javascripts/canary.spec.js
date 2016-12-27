var td = require("testdouble");

describe("JavaScript testing", function(){
  it("words as expected", function(){
    var mockFunction = td.function();

    td.when(mockFunction(42)).thenReturn("Function Called!");
      expect(mockFunction(42)).toBe("Function Called!");
  });
});
