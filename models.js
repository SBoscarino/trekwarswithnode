const characters = [
  {name: 'Jean Luc Picard', type: 'st'},
  {name: 'Spock', type: 'st'},
  {name: 'Luke Skywalker', type: 'sw'},
];


function starW(){
let output = [];

  for(let i = 0; i < characters.length; i++){
    if (characters[i].type === 'sw'){
      output.push(characters[i]);
    }
  }
  return output;
}

function starT(){
  let output2 = [];

  for(let i = 0; i < characters.length; i++){
    if(characters[i].type === 'st'){
      output2.push(characters[i]);
    }
  }
  return output2;
}


module.exports = {
  characters: characters,
  starT: starT,
  starW : starW
};
