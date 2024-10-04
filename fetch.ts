// interface ToDo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// async function FetchToDo(): Promise<void> {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP Error! status: ${response.status}`);
//     }
//     const data: ToDo = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("There was a problem with the fetch operation", error);
//   }
// }

// FetchToDo();

interface product {
  id: number;
  title: string;
  category: string;
  price: number;
}

async function fetchStore() {
  try {
    const response = await fetch("https://fakestoreapi.com/products/1");
    if (!response.ok) {
      throw new Error(`HTTP Error! status${response.status}`);
    }
  } catch (error) {}
}
