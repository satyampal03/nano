const currencies = new Map([
    ['USD', 'United State Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound Steling']
])


// Map For Each Function 


currencies.forEach(function (value, key, arr){
    console.log(`${value} value   -${key} key=> ${arr} `);
})

