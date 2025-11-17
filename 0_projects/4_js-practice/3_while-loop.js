let count = 0;
let data = 7;

while(data>=0){
    if(data <= 5){
        data --;
        count++;
        continue;
    }
    console.log( 'data - '+data);

    data--;
}

console.log('count'+count);