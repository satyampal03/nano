function myfunc(x){

    let givenValue = '';

    if(x % 2 === 0){
        givenValue = 'this is a even value';
        console.log(`this is the even value ${x}`);
    }else{
        givenValue = 'this is a odd value';

        console.log(`this is the Odd value ${x}`);

    }

    return givenValue;
}

console.log(myfunc(67)); // od - 1-time