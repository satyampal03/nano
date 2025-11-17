
// constructor Function 

//  const Person = function(firstName, Lname){
//     this.firstName = firstName;
//     this.Lname = Lname;
//  }

//  const x = new Person('shiv', 'Kumar');
//  const y = new Person('raman', 'singh');

//  console.log(x,y);

// //  console.log((y,z) instanceof Person); // Z is not define
//  console.log((y,x) instanceof Person); // 

// Constructor function
//  const Person = function(name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// }

// Add method to prototype
// Person.prototype.calculateAge = function() {
//   console.log(2025 - this.birthYear);
// };

// // Create objects
// const ram = new Person('Ram', 2000);
// const shyam = new Person('Shyam', 2004);
// const raman = new Person('Shyam', 2007);

// console.log(Person.prototype);
// ram.calculateAge(); 
// shyam.calculateAge(); 
// raman.calculateAge(); 

// console.log(ram.__proto__);
// console.log(shyam.__proto__ === Person.prototype); // true => this is the prototype of shyam object


// console.log(Person.prototype.isPrototypeOf(ram)); // True
// console.log(Person.prototype.isPrototypeOf(shyam)); // True
// console.log(Person.prototype.isPrototypeOf(ram)); // True
// console.log(Person.prototype.isPrototypeOf(Person)); // person 

// ProtoType Linked Objects 

//  const Person = function(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }

// Create objects
// const ram = new Person('Ram', 2000);
// const shyam = new Person('Shyam', 2004);
// const raman = new Person('Shyam', 2007);

// Person.prototype.category = 'PET Animal ';
// console.log(ram.category, shyam.category);

// console.log(ram.hasOwnProperty('firstName')); // true => becoz its has access -> already a prototype
// console.log(ram.hasOwnProperty('category')); // false




//Prototypal Inheritance on Built-In Objects

/*
 const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}
const ram = new Person('Ram', 2000);
const shyam = new Person('Shyam', 2004);
const raman = new Person('Shyam', 2007);

Person.prototype.category = 'PET Animal ';
console.log(ram.category, shyam.category);

console.log(ram.hasOwnProperty('firstName')); // true => becoz its has access -> already a prototype
console.log(ram.hasOwnProperty('category')); // false

// object.prototype (top of prototype chain);

console.log(ram.__proto__); // pet Animal
console.log(ram.__proto__.proto__); // undefined

// strange construnctor property

console.log(Person.prototype);
console.log(Person.prototype.constructor);


// prototypes of the array

const arr = [6,4,5, 6,4,5,6,2];

console.log(arr.__proto__); //Object(0) []
console.log(arr.__proto__=== Array.prototype); //true

console.log(arr.__proto__.__proto__); //Object(0) []

Array.prototype.unique = function(){
    return [...new Set(this)];
}

console.log(arr.unique());

*/

// 1 use a constructor fucntion to implement a car, car has a make and a speen property , cur speed of car is in the km

/*
const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
    //kilometers per hour
}
Car.prototype.accelerate = function(){
    this.speed+= 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
}
Car.prototype.brake = function(){
    this.speed-= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
}
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercdes', 140);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

*/

// 1) class expression 
// const PersonCl = class{};

// 2) class declaration 

/*


class PersonCl {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // method will be added to .prototype property
     calcAge(){
        console.log(2037 - this.birthYear);
     }

    greet = function(){
    console.log(`Hey ${this.firstName}`);
    }

    get age(){
      return 2037 - this.birthYear;
    }
     // set a property that already exist

    set fullName(name) {
  if (name.includes(' ')) {
    this._fullName = name;
  } else {
    alert('The given name is not a full name.');
  }
}

get fullName(){
    return this._fullName;
}

}


const ram = new PersonCl ('Ram',  2007);
console.log(ram);

ram.calcAge();

console.log(ram.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`);
// };

ram.greet()

// console.log(ram.age());

ram.fullName();




// getter and setter 

const account = {
    owner: 'ram',
    movments: [400,200,400,500],

    get latest(){
        return this.movments.slice(-1).pop();
    },
    set latest(mov){
        this.movments.push(mov);
    }
}

console.log(account.latest);

console.log(account.movments);



// static Method
//  from method is attached to the Array constructor. We cannot use the from method on an Array instance
//  build in array . from method 

//arr.from()

// from method is really atteched with array constructor,


class PersonCl2 {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // static method 

    static hey(){
    console.log('hey this is me');
    console.log(this);
}

}

const user = new PersonCl2('Rajesh', 2000);

console.log(user);


PersonCl2.hey = function(){
    console.log('hey this is me');
    console.log(this);
}

PersonCl2.hey();



// prototype // create New Object
const PersonProto = {
    calcAge(){
        console.log(2037- this.birthYear);
    },

    init(fname, birthYear){
        this.FirstName = fname;
        this.birthYear = birthYear;
    }
}


const steven = Object.create(PersonProto);

console.log(steven);

steven.name = 'Satyam';
steven.birthYear = '2005';
steven.calcAge();

const newUser = Object.create(PersonProto);

newUser.init('sumit', 2006);
newUser.calcAge();

console.log(newUser);




class CarCl{
    constructor(make, speed){
    this.make = make;
    this.speed = speed;
    //kilometers per hour
}
accelerate (){
    this.speed+= 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
}
brake (){
    this.speed-= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
}

get speedUS (){
    return this.speed/1.6;
}

set speedUS(speed){
    this.speed = speed*1.6;
}
}
const car = new CarCl('Ford', 120);
console.log(car.speedUS); // Expected output: 7

car.accelerate();
car.accelerate();
car.brake();
car.speedUS = 50;
car.accelerate();




 const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
 }

 Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
 };

 const Student = function(firstName, birthYear, course){
        // Call the Person constructor function
        Person.call(this, firstName, birthYear);
        this.course = course;

 }

 Student.prototype.introduce = function(){
    console.log(`My Name is ${this.firstName} and I Study ${this.course}`);
 } 

// Linking ProtoTypes
Student.prototype = Object.create(Person.prototype);

 const mike = new Student('Rohit', 2003, 'Science');

//  mike.introduce();

 mike.calcAge();

 console.log(mike);
 console.log(mike instanceof Student);
 console.log(mike instanceof Person);
 console.log(mike instanceof Object);
 
console.dir(Student.prototype.constructor);




class CarCl{
    constructor(make, speed){
    this.make = make;
    this.speed = speed;
    //kilometers per hour
}
accelerate (){
    this.speed+= 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
}
brake (){
    this.speed-= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
}

// get speedUS (){
//     return this.speed/1.6;
// }

// set speedUS(speed){
//     this.speed = speed*1.6;
// }

}

function EV(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

// Link the Property 
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
};


const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);

console.log(tesla);



// Using of ES6 Classes instead of the 




class PersonCl {
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // method will be added to .prototype property
     calcAge(){
        console.log(2037 - this.birthYear);
     }

    greet = function(){
    console.log(`Hey ${this.firstName}`);
    }

    get age(){
      return 2037 - this.birthYear;
    }
     // set a property that already exist

    set fullName(name) {
  if (name.includes(' ')) {
    this._fullName = name;
  } else {
    alert('The given name is not a full name.');
  }
}

get fullName(){
    return this._fullName;
}

introduce = function(){
    console.log(`My Name is ${this.firstName} and I Study ${this.course}`);
 } 

}


// static hey(){
//     console.log('hey welcome here! again');
// }



class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course){
        // Always needs to happen first!
        super(fullName, birthYear);
        // this.course = course; // super constructor autometically implement
    }
}

const martha = new StudentCl('Shyam Kumar', 1972, 'Computer Science');
console.log(martha); // the actual output is comming form the getting and the setting method


console.log(martha.introduce());



const PersonProto = {
    calcAge (){
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
};

StudentProto.introduce = function(){
    console.log(`My Name is ${this.firstName} and I Study ${this.course}`);
} 

const jay = Object.create(StudentProto);

jay.init('jay', 2010, 'Computer Science');

jay.introduce();
jay.calcAge();



// Public Field 
// private fields 
// Public Methods
// Private Methods
// Static Version of these 4
// fields meand add the property using this constructor

class Account {
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks For Opeening Account Mr.${owner}`);
    }

    deposite(val){
        this.movements.push(val);
    }
    withdraw(val){
        this.deposite(-val);
    }

    //Approval Loan

    approveLoan(val){
        return true;
    }

    // request Loan 

    requestLoan(val){
        if(this.approveLoan(val)){
            this.deposite(val);
            console.log(`Loan Appreoved ${val}`);
        }
    }
}


const acc1 = new Account ('Shivam', 'EUR', 1111);

console.log(acc1);


acc1.deposite(250);
acc1.withdraw(39);

console.log(acc1);
console.log(acc1.pin);

console.log(acc1.approveLoan(200));

*/


// Public Field 
// private fields 
// Public Methods
// Private Methods
// Static Version of these 4
// fields meand add the property using this constructor

class Account {

        locale = navigator.language;
        bank = 'BanKIST';
        #movements = []; // hash MOvements
        #pin; 

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        this.movements = [];
        this.bank ='BankIST';

        // this.locale = navigator.language;

        console.log(`Thanks For Opeening Account Mr.${owner}`);
    }

    // These are the Public Fields here (API)

    getMovements(){
        return this.#movements;
            return this

    }
    deposite(val){
        this.#movements.push(val);
            return this

    }
    withdraw(val){
        this.deposite(-val);
            return this

    }

    //Approval Loan

    #approveLoan(val){

        // this is the fake method here only returning the true or nothing else
        return true;
            return this

    }

    // request Loan 

    requestLoan(val){
        if(this.#approveLoan(val)){
            this.deposite(val);
            console.log(`Loan Appreoved ${val}`);
            return this
        }
    }

    // static test(){
    //     console.log('');
    // }
}


const acc1 = new Account ('Shivam', 'EUR', 1111);
// acc1.deposite(400);
// acc1.withdraw(100);

// call alll the methods at once
const movements = acc1
.deposite(400)
.withdraw(39)
.requestLoan(40000)
.withdraw(3900)

.withdraw(39)
.requestLoan(40000)
.withdraw(3900)
.getMovements();

console.log(movements);

acc1.movements = [];

console.log(acc1);
console.log(acc1.movements);

//console.log(acc1.#movement); // will give an error because of this is a private key that we are using here

// for protecting the data we use the private fields 

 