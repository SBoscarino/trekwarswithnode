const characters = require('./models');
console.log("test");

test('filtering for star wars', function(){
  const result = characters.starW();
  expect(result[0].name).toBe('Luke Skywalker');
  expect(result.length).toBe(1);
});
test('filtering for star trek', function(){
  const result = characters.starT();
  expect(result[0].name).toBe('Jean Luc Picard');
  expect(result.length).toBe(2);
});
