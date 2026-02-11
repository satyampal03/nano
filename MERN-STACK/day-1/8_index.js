const user = [{name:"Amit", age:21},
              {name:"Satyam", age:22},
              {name:"Shiv", age:21},
];

const {name, age} = user;

user.map((x,_,arr)=>{
    console.log(x.name)
    console.log(x.age)
});