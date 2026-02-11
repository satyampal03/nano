function greet(){
  console.log(this.name);
}

const user = { name:"Amit", name :'saytam'};

greet.call(user);