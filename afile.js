
let number = 7;

const things = [ 4,5,6,7,8,11,13];

function overN(n){
  let array = [];
  for (let i = 0; i < things.length; i++){
    if (things[i] > n) {
      array.push(things[i]);
    }
  }
  return array;
}

function underM(m){
  let belowM = [];
  for (let i = 0; i < things.length; i++){
    if(things[i] <= m) {
      belowM.push(things[i]);
    }
  }
  return belowM;
}


module.exports = {
  overN: overN,
  underM: underM
};
