const user = {
  userName : 'Satyam',
  lastName : 'Pal',
  age : 20,
  message : function() {
    console.log(`Hey! This is ${this.userName} ${this.lastName}`);
  }
}


user.message();

// bracket and dot notation 


let nameKey = 'Name';
console.log(Jonas['user' + nameKey]);
console.log(Jonas['last' + nameKey]); // this expression will not work with the . notation it means that if we wnat 
// to concanate the external value Using DOT Notation that will not work.


// but in the square bracket it will work properly
