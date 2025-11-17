

const checkDogs = function(dogsJulia, dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice();

    dogsJuliaCorrected.splice(0, 1);

    dogsJuliaCorrected.splice(-2);


    const dogs = dogsJuliaCorrected.concat(dogsKate);

   dogs.forEach(function(dog, i){
        if(dog>=3){
            console.log(`Dog No - ${i+1} is an Adult, and dog is ${dog} yrs Old`)
        }else{
            console.log(`Dog No - ${i+1} is an Adult, and dog is ${dog} yrs Old, puppy hai🤡`)
        }
   })



}
checkDogs([3,5,2,12,7], [4,1,15,8,3]);
checkDogs([44,645,2,2,12,7], [1,1,1,1]);