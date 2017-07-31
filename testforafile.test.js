const afile = require('./afile.js');

test('can get numbers over 9', function(){
  const result = afile.overN(9);
  expect(result.length).toBe(2);
});

test('can get numbers 8 or below', function(){
  const finale = afile.underM(8);
  expect(finale.length).toBe(5);
});
