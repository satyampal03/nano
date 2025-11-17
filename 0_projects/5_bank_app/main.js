//  Users

const account1 = {
  owner: "Kamal Kumar Singh",
  movements: [
    200, -43400, 3400, 455600, 356400, -456400, 5000, 45000, 46000, 5600,
  ],
  intrestRate: 1.4,
  pin: 1111,
  type: "Premium",
  movementsDates: [
    "2022-01-25T14:18:46.235Z",

    "2024-02-05T16:33:06.386Z",
    "2024-04-10T14:43:26.374Z",
    "2024-06-25T18:49:59.371Z",
    "2024-07-26T12:01:20.894Z",
    "2025-11-01T13:15:33.035Z",
    "2025-11-30T09:48:16.867Z",
    "2025-11-25T06:04:23.907Z",
    "2025-12-25T14:18:46.235Z",
    "2025-10-30T14:18:46.235Z",
  ],

  currency: "INR",
  locale: "en-IN",
};
const account2 = {
  owner: "Nitesh Ram",
  movements: [-34200, 3400, 23400, -5600, 9400, -56400, 8000, -8800, 6000, 300],
  intrestRate: 0.3,
  pin: 2222,
  type: "Standard",
  movementsDates: [
    "2022-01-25T14:18:46.235Z",
    "2023-11-26T12:01:20.894Z",

    "2023-07-26T12:01:20.894Z",
    "2024-04-10T14:43:26.374Z",
    "2024-06-25T18:49:59.371Z",
    "2025-06-30T09:48:16.867Z",
    "2025-04-25T14:18:46.235Z",
    "2025-02-05T16:33:06.386Z",
    "2025-01-01T13:15:33.035Z",
    "2025-02-25T06:04:23.907Z",
  ],
  currency: "AED",
  locale: "ar-AE",
};
const account3 = {
  owner: "Mohit Yadav",
  movements: [
    -7200, 643400, 4400, -4435600, -5356400, 6400, -600, 9000, -6000, 3400,
  ],
  intrestRate: 0.9,
  pin: 3333,
  type: "Premium",
  movementsDates: [
    "2022-03-26T12:01:20.894Z",
    "2022-04-25T18:49:59.371Z",
    "2023-11-26T12:01:20.894Z",
    "2024-04-25T18:49:59.371Z",
    "2025-02-05T16:33:06.386Z",
    "2025-03-10T14:43:26.374Z",
    "2025-04-25T14:18:46.235Z",
    "2025-11-30T09:48:16.867Z",
    "2025-05-25T06:04:23.907Z",
    "2025-12-01T13:15:33.035Z",
  ],
  currency: "EUR",
  locale: "en-IE",
};
const account4 = {
  owner: "Rupesh Singh Rajput",
  movements: [-4400, 55600, -6400, 6400, 200, -93400, 455600],
  intrestRate: 1.3,
  pin: 4444,
  type: "Basic",
  movementsDates: [
    "2024-03-10T14:43:26.374Z",
    "2024-05-25T18:49:59.371Z",
    "2025-03-01T13:15:33.035Z",
    "2025-03-05T16:33:06.386Z",
    "2025-04-25T14:18:46.235Z",
    "2025-06-25T06:04:23.907Z",
    "2025-12-30T09:48:16.867Z",
  ],

  currency: "LRD",
  locale: "en-LR",
};

// Accounts are in now Array,

const accounts = [account1, account2, account3, account4];

// All HTML Elements Selected

const userLogin = document.querySelector(".user-name_btn");
const userPassword = document.querySelector(".user-password_btn");
const user_login_button = document.querySelector(".login_btn");

const welcomMessage = document.querySelector(".user_info");

const dateElement = document.querySelector(".date-time");

const currentBalence = document.querySelector(".availble-balance");

//  calculation components - Selection #Transection and  special Features (Operations)

// main transection holder
const transectionContainer = document.querySelector(".transection-field");

// transection Block
const withdrawal = document.querySelector(".transection-statements");

//  transection Block Data - for Deposit

const transectionType_deposit = document.querySelector(
  ".transection-type-deposit"
);
const transectionType_withdrawal = document.querySelector(
  ".transection-type-withdrals"
);

const transectionTime = document.querySelector(".transection-time");
const transectionAmunt = document.querySelector(".transection-amount");

// Money Transfer Block Selection

const transferTo_user = document.querySelector(".transfer-to-username");

const transfer_amount = document.querySelector(".transfer-amount");

const transfer_button = document.querySelector(".transfer-btn");

// Request Loan Block Selection
const request_amount = document.querySelector(".request-amount");

const requestLoan_button = document.querySelector(".request-loan-btn");


// Close Account Block  Selection

const confirm_username = document.querySelector(".confirm-username");

const confirm_pin = document.querySelector(".confirm-pin");

const closeAccount_button = document.querySelector(".close-account-btn");

//     <!-- Account status -->

const amountIn = document.querySelector(".amount-in");

const amountOut = document.querySelector(".amount-out");

const intrestAmount = document.querySelector(".intrest-amount");

const filterData = document.querySelector(".filter-icon");

const account_session = document.querySelector(".session-left");

// UI APP  Elemets

const contentApp = document.querySelectorAll(".hide-content");

// #1 Calculate the Total balance and then display the total balance

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  currentBalence.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

// calcDisplayBalance(account1.movements);

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);

  console.log("this is days that has passed => ", daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed === 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2,0);
  // const month = `${date.getMonth()+1}`.padStart(2,0); // because this is 0 based so we do +1
  // const year = date.getFullYear();

  //  return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};
// #2 manpipulation starts from here

const displayMovements = function (acc, sort = false) {
  transectionContainer.innerHTML = "";

  const combinedMovsDates = acc.movements.map((mov, i) => ({
    movement :mov,
    movementDate: acc.movementsDates.at(i),
  }));

  if (sort) combinedMovsDates.sort((a, b) => a.movement - b.movement);

  combinedMovsDates.forEach(function (obj, i) {
    const { movement, movementDate } = obj;

    const transectionType = movement > 0 ? "deposit" : "withdrals";

    const date = new Date(movementDate);

    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(movement, acc.locale, acc.currency);

    console.log(acc.locale);

    const html = `
            <div class="transection-statements">
                <div class="transection-statement-history">
                    <div class="transection-type-${transectionType}">
                        ${i + 1} ${transectionType}
                    </div>
                </div>
                <div class="transection-time">
                ${displayDate}
                </div>

                <div class="transection-amount">
                    ${formattedMov}
                </div>
            </div>
            `;

    transectionContainer.insertAdjacentHTML("afterbegin", html);
  });
};

// displayMovements(account1.movements);

// #3 Status Bar Calculation

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  amountIn.textContent = formatCur(incomes, acc.locale, acc.currency);

//   console.log(`===========>>>>>>> ${incomes} ${acc.locale} ${acc.currency}`);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  amountOut.textContent = formatCur(out, acc.locale, acc.currency);

//   console.log("acc.intrestRate =>" + acc.intrestRate);

  const intrest = acc.movements
    .filter((mov) => mov > 0)
    .map((diposit) => (diposit * acc.intrestRate) / 100)
    .filter((int, i, arr) => {
      //   console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  intrestAmount.textContent = formatCur(intrest, acc.locale, acc.currency);
};

// ---------------------------##---------------------------------

// X=> Getting the UserName
// ✅ Create usernames from owner names
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUserNames(accounts);

// Login functionality

const undateUI = function (acc) {
  //  Display Movements

  displayMovements(acc);

  // Display Balance
  calcDisplayBalance(acc);

  calcDisplaySummary(acc);
};




const startLogOutTimer = function(){

   const tick =  () => {

       const min = Math.trunc(time / 60);
       const sec = String(time % 60).padStart(2, '0');

    // in each time pprint the remaining time to the UI
        account_session.textContent = `${min}:${sec}`;

    // When time reaches zero, stop timer and log out user

    if(time === 0){
        clearInterval(timer);
        welcomMessage.textContent = `Please Login First`
 contentApp.forEach((listElem) => (listElem.style.opacity = 0));

    }

        // decreaosing the time function here
        time--;


    }
    // set tiem to 5 min 
    let time = 600;


    tick();
    // call the timmer at every second

    const timer = setInterval(tick, 1000);
    
    return timer;
    
}

let currentAccount, timer;

// Fake always logged in

// currentAccount = account1;
// undateUI(currentAccount);

// contentApp.forEach((listElem) => (listElem.style.opacity = 100));

// ending here fake lgged in accont

// Eperimenting  Api



welcomMessage.textContent = `Please Login First`

user_login_button.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");

  const loginVal = userLogin.value.toLowerCase().trim();

  const passwordVal = Number(userPassword.value);

  // Find account by username
  currentAccount = accounts.find((acc) => acc.username === loginVal);

  if (currentAccount && currentAccount.pin === passwordVal) {
    welcomMessage.textContent = `Welcome Back! ${
      currentAccount.owner.split(" ")[0]
    }`;

    // Show hidden sections
    contentApp.forEach((listElem) => (listElem.style.opacity = 100));

    // Create Date after user logged in

    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric", // numeric/ long/ 2-digit
      year: "numeric",
      // weekday : 'long', // sort / narrow
    };

    // const locale = navigator.language;
    // console.log(locale);

    dateElement.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    //     const now = new Date();
    // const date = `${now.getDate()}`.padStart(2,0);
    // const month = `${now.getMonth()+1}`.padStart(2,0); // because this is 0 based so we do +1
    // const year = now.getFullYear();

    // const hour = `${now.getHours()}`.padStart(2,0);
    // const minute = `${now.getMinutes()}`.padStart(2,0);
    // // const second = now.getSeconds();

    // dateElement.textContent = `As of ${date}/${month}/${year}, ${hour}:${minute}`;

    userLogin.value = userPassword.value = "";



    // let start a 
    if(timer) clearInterval(timer);

    // startLogOutTimer  here 
    timer = startLogOutTimer();


    // update the UI After the login session

    undateUI(currentAccount);



    console.log("current account deatails => " + currentAccount.username);
  } else {
    console.log("❌ Invalid login credentials");
  }
});

// Transfer Features

transfer_button.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(transfer_amount.value);
  const recieverAccount = accounts.find(
    (acc) => acc.username === transferTo_user.value
  );

  transferTo_user.value = transfer_amount.value = "";

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recieverAccount &&
    recieverAccount.username !== currentAccount.username
  ) {
    //  Doing the Transfer Amounts one user to another one
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);

    // Add Transfer Dates
    currentAccount.movementsDates.push(new Date().toISOString());
    recieverAccount.movementsDates.push(new Date().toISOString());

    //  Update Ui

    undateUI(currentAccount);

    // reset the timer
    clearInterval(timer);
    timer = startLogOutTimer();

    //  Clear Input Fields After once clicked
  } else {
    console.log("Transfer To a valid Person");
  }
});

// Get the Loan

requestLoan_button.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(request_amount.value); // we don't need to convert the str to num it itself (math.floor) itself convert to the number

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {

    setTimeout(function(){

   
    // Add Movements
    currentAccount.movements.push(amount);

    // Add Transfer Dates
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update the UI

    undateUI(currentAccount);



        // reset the timer
    clearInterval(timer);
    timer = startLogOutTimer();

    },2500) }

  request_amount.value = "";
});



// Account Delete

closeAccount_button.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    confirm_username.value === currentAccount.username &&
    Number(confirm_pin.value) === currentAccount.pin
  ) {
    // Credentials are correct
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);

    accounts.splice(index, 1);

    contentApp.forEach((listElem) => (listElem.style.opacity = 0));
  }

  confirm_username.value = confirm_pin.value = "";
});

let sorted = false;

filterData.addEventListener("click", function (e) {
  e.preventDefault();

  //BUG'🐞
  // displayMovements(currentAccount.movements, !sorted);

  // Fix the BUG
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// console.log('movements'+ movements);

//   # X  return eurToUsd*mov;
// -----------------------------#

// let  eurToUsd  = code turned off this content;

// const movementsToUsd = account1.movements.map(mov => eurToUsd*mov);

// console.log(movementsToUsd);
// console.log(eurToUsd);

// const movementsUSDfor = [ ];

// for(const element of array) {
//     movementsUSDfor.push(eurToUsd*element);
// }

// console.log(movementsUSDfor);

// -----------------------------#

// # Creating the movementDescription=>

// Withdrawals and diposite statements

// const movementDescription = movements.map(function(mov, i, arr){
//     if(mov > 0 ){
//        return (`Movements${i+1} : You Deposite`);
//     }else{
//         return (`Movements${i+1} : You Withdrawal`);
//     }
// })

// const movementDescription = account1.movements.map((mov, i) => {

//     `Movements${i+1} : You ${mov > 0} ? Deposite : Withdraw  ${Math.abs(mov)}`

// })

// console.log(movementDescription);

// # filter out the diposits and (filter the any property)

// # Find only the deposites
const deposits = account1.movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);

//  Diposits For  using the for of loop
const depositsFor = [];
for (const mov of account1.movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}

console.log(depositsFor);

//  Get only the withdrals using the filter methods

const withdral = account1.movements.filter(
  (mov) => mov < 0
  // if(mov < 0 ){
  //     return mov;
  // }
);

console.log(withdral);

// # Using the Redude high Order Function to get the sum of of all arr data

// const balance = 0; // we have to reduce our code
// for(const num of account1.movements){
//     balance += num;
// } //

// const balance = account1.movements.reduce(function (acc,curValue, i, arr){
//     retun = curValue+acc;
// }, 0);

// in th reduce method also have the same parameters but one more in initially add in the reduce method called the => Accumlator, and we define it's initial value in outer body of function,

// const balance = account1.movements.reduce(acc,curValue, i, arr =>
//     curValue+acc
// , 0);

// console.log(balance);

//
const eurToUsd = 1.1;

const totalDepositUSD = account1.movements
  .filter((mov) => mov < 0)
  .map((mov, i, arr) => {
    return eurToUsd * mov;
  })
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositUSD);

// # find the any sepecial element by some data;
// console.lo(accounts);

// const account = accounts.find(acc =>
//     acc.owner=== 'Kamal Kumar Singh');

//     console.log(account1);

console.log(account1.movements);

const lastWithdrawal = account1.movements.findLast((mov) => mov < 0);

console.log(lastWithdrawal);

const latestLargeMovementIndex = account1.movements.findLastIndex(
  (mov) => mov > 200000
);

console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${
    account1.movements.length - latestLargeMovementIndex - 1
  } movements ago.`
);

const anyDeposit = account1.movements.some((mov) => mov > 0);

console.log("check condition also => " + anyDeposit);

const allMovements = accounts.map((acc) => acc.movements);

console.log(allMovements);

const allValues = allMovements.flat();

console.log(allValues);

//  All Diposite Amount

const total = allValues.reduce((acc, mov) => acc + mov, 0);

console.log(total);

//Practice Rough

// Ascending Order

// const arr = [10,-20,30,-3];

// arr.sort((a,b) =>{

//  if(a > b){
//         return 1;
//     }
//     if(a < b){
//         return -1;
//     }
// } );

// console.log('ascending Order',arr);

// Descending Order
// const arr1 = [10,-20,30,-3];

// arr1.sort((a,b) =>{

//  if(a < b){
//         return 1;
//     }
//     if(a > b){
//         return -1;
//     }
// } );
// console.log('ascending Order',arr1);

// New way to get the discending order of the array

// const newarr = [32,-43,5,-34,63,-664,4];

// newarr.sort((a,b) =>{
//     return a-b;
// })

// console.log(newarr);

// console.log(movements.account1);

// const groupedMovements = Object.groupBy(movements, movement => {
//   if (movement > 0) return 'deposits';
//   else return 'withdrawals';
// });
// console.log(groupedMovements);

// const accountActivity = Object.groupBy(accounts, account => {
//     const  movementCounts = account.movements.length;

//     if(movementCounts >=  8)return 'Very Active ';
//     if(movementCounts >=  4)return 'Active ';
//     if(movementCounts >=  1)return 'Moderate';
//     return 'Inactive';
// })

// console.log(accountActivity);

// Grouping By the Account Type

// const groupedAccounts = Object.groupBy(accounts, account => account.type);
// console.log(groupedAccounts);

// const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);

// console.log(groupedAccounts);

// currentBalence.addEventListener('click',  function(e){
//     const movementUi = Array.from(document.querySelectorAll('.transection-amount'), el => Number(el.textContent.replace('€', '')));

//     console.log(movementUi);
// })

//  Reminder Operator

currentBalence.addEventListener("click", function () {
  const rows = [...document.querySelectorAll(".transection-statements")];

  rows.forEach((row, i) => {
    if (i % 2 === 0) {
      row.style.backgroundColor = "lightBlue";
    }
    if (i % 3 === 0) {
      row.style.backgroundColor = "lightYellow";
    }
  });
});

// Create A Date there are the 4 waye to create a Dates in js?

// const now = new Date();

// console.log(now);

// console.log(new Date('Aug 02 2020 18:05:30'));

// Operations with date

// const future = new Date(2037, 7, 3,15, 23 );

// console.log(+future); // + operator will give the NUMBERIC Value

// const calcDaysPassed = Math.abs((date1, date2) =>
//      (date2 - date1)/ (1000* 60*60*24));

// let x = calcDaysPassed(new Date(2037, 7, 3),new Date(2037, 8, 3) );

// console.log(x);

console.log(new Date("2025-10-30T14:18:46.235Z"));

const num = 450454.9;

console.log("Us : ", Intl.NumberFormat("en-IN").format(num));
