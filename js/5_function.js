

function x(){
    console.log('satyam');
}


x();

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

calcAge1(23);

const cutPieces = function (fruite){
    return fruite*4;
}

function fruitProcessor(apples, oranges) {
    const applePieces  = cutPieces(apples);
    const orangePieces  = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2,5));