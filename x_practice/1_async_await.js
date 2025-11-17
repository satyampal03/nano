// await async

/*
// A function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Data fetched successfully!");
    }, 2000);
  });
}


// Using async/await
async function getData() {
  console.log("⏳ Fetching data...");
  const result = await fetchData(); // waits until Promise resolves
  console.log(result);
  console.log("🎉 Task complete!");
}


getData().then(res => {
     setTimeout(() => {
      console.log("⏳ again-fetching-data");
    }, 2000);
});
*/

// A function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Data fetched successfully!");
    }, 2000);
  });
}


// Using async/await
async function getData() {
  console.log("⏳ Fetching data...");
  const result = fetchData(); // will not wait for that, because we don't used here await => so it will return us the empty field
  console.log(result);
  console.log("🎉 Task complete!");
}


getData().then(res => {
     setTimeout(() => {
      console.log("⏳ again-fetching-data");
    }, 2000);
});
