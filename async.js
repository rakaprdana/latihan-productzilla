const fecthData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data berhasil1");
    }, 1000);
  });
};
fecthData()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

const fetchDataAsyncAwait = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("data: ", data);
  } catch (error) {
    console.log(error);
  }
};

fetchDataAsyncAwait();

const fecthDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data berhasil");
    }, 100);
  });
};

fecthDataPromise()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

const fetchDataAsync = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/2"
    );
    const data = await response.json();
    console.log("data: ", data);
  } catch (error) {
    console.log(error);
  }
};

fetchDataAsync();
