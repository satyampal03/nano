



// 3️⃣ Why var causes “3 3 3”
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 100);
// }




for (var i = 0; i < 3; i++) {
  (function(j) {        // 👈 new function (new box)
    setTimeout(() => console.log(j), 100);
  })(i);                // 👈 pass i value into that box
}