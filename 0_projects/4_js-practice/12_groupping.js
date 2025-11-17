
const arr = [32,-54,64,-5,645,-645,65,450,-445]


const groupedMovements = Object.groupBy(arr, movement => {
  if (movement > 0) return 'deposits';
  else return 'withdrawals';
});
console.log(groupedMovements);



