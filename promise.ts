function cobaAsync(teks: string, callback: (teks: string) => void): void {
  setTimeout(() => {
    callback(`Halo, saya dari ${teks}`);
  }, 0);
}

console.log("Hello World");

let promise = new Promise<string>(function (resolve, reject) {
  cobaAsync("Productzilla", function (teks: string) {
    resolve(teks);
  });
});

promise.then(function (teks: string) {
  console.log(teks);
});

console.log("I love Typescript");
