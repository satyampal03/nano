const data = [
 { id: 1, name: "first" },
 { id: 2, name: "second" }
];


const result = data.reduce((acc, item,index, arr) => {
  acc[item.name] = item;
  

  console.log('===============>',acc[1],index,arr);
  return acc;
}, {});

console.log(result);
