const a: number = 10;
const b: number = -20;
const c: number = 5;

if ((a > 0 && b > 0) || c > 0) {
  console.log("a,b,c adalah positif");
} else {
  console.log("salah satunya adalah negatif");
}
if (a > 0 || b > 0 || c > 0) {
  console.log("Salah satunya adalah positif");
} else {
  console.log("a, b, c bukan positif");
}

const nilai: number = 10;
const hasil = (nilai && nilai % 2 === 0 && "genap") || "ganjil";
console.log(hasil);

// for (let i = 1; i < 10; i++) {
//   let str = "helo";
//   for (let j = 1; j < i; j++) {
//     console.log(str);
//   }
// }
// for (let i = 1; i <= 10; i++) {
//   let str = "";
//   for (let j = 10; j >= i; j--) {
//     str += "*";
//   }
//   console.log(str);
// }
// for (let i = 10; i >= 1; i--) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

const dataArr = [
  { id: 1, name: "krisna" },
  { id: 2, name: "hamzah" },
];

const result = dataArr.map(function (data) {
  return data.name.toUpperCase();
});
console.log(result);

const filterData = dataArr.filter(function (newData) {
  return newData.toUpperCase().includes("K");
});

console.log(filterData);
