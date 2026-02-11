function outer(){
  let count = 0;

  return function(){
    count++;
    console.log(count);
  }
}

const fn = outer();
fn(); // 1
fn(); // 2
