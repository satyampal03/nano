// Find Largest Number

function myfunc(x,y,z,w){
    if(x > y && x > z && x > w ){
        console.log('x is greater  ');
    }   else if(y > x && y > z && y > w ){
        console.log('y is greater  ');
    }   else if(z > y && z > x && z > w ){
        console.log('z is greater ');
    }   else if(w > y && w > z && w > x ){
        console.log('w is greater ');
    }    else{
        console.log('maybe there is some same valses  ');
    }    
}

myfunc(-10,-2980,-30,-482);