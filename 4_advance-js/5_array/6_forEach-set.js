const countries = new Set(['Canada', 'Egypt', 'Brazil', 'India',  'Australia']);


// Map For Each Function 


countries.forEach(function (value, key , /* Map */){ // ther are both 1st and the 2nd are the same those are values parameters 
    console.log(`${value} value   -${key} `); //  if want also the map list ya set list then we have to write the 3rd argument at the 3rd position
    
})

