const URL = "https://my-json-server.typicode.com/tkachenko-tatiana/shop-api";

// task 1
// function getProducts() {
//   fetch(
// `${URL}/products`
//   )
//     .then(response => response.json())
//     .then(response => {
//       const myTable = document.getElementById("myTable");
//       const head = `<tr>
//             <th>id</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Location</th>
//             <th>Text</th>
//     </tr>`;
//       const list = response.map(item => {
//         return `<tr>
//             <td>${item.id}</td>
//             <td>${item.name}</td>
//             <td>${item.price}</td>
//             <td>${item.location}</td>
//             <td>${item.text}</td>
//         </tr>`;
//       });
//       myTable.innerHTML = head + list.join("");
//     });
// }
// getProducts();

// // task 2
// function getProductById(id = 1) {
//   fetch(
//     `${URL}/products${id}`
//   )
//     .then(response => response.json())
//     .then(response => {
//       const myTable = document.getElementById("myTable");
//       const head = `<tr>
//                     <th>id</th>
//                     <th>Name</th>
//                     <th>Price</th>
//                     <th>Location</th>
//                     <th>Text</th>
//             </tr>`;
//       const list = response.map(item => {
//         return `<tr>
//                     <td>${item.id}</td>
//                     <td>${item.name}</td>
//                     <td>${item.price}</td>
//                     <td>${item.location}</td>
//                     <td>${item.text}</td>
//                 </tr>`;
//       });
//       myTable.innerHTML = head + list.join("");
//     });
// }

// getProductById();

// task 3
// function createProduct(product) {
//   const body = {
//     name: product.name.value,
//     price: product.price.value,
//     location: product.location.value,
//     text: product.text.value
//   };

//   const options = {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(body)
//   };

//   fetch(
//     `${URL}/products`,
//     options
//   ).then(() => createProduct());
// }

// createProduct();

// task 4
// function updateProduct(product) {
//   const body = {
//     name: product.name.value,
//     price: product.price.value,
//     location: product.location.value,
//     text: product.text.value
//   };
//   fetch(
//     `${URL}/products/${id}`,
//     {
//       method: "PUT",
//       body: JSON.stringify(body)
//     }
//   ).then(response => updateProduct());
// }

// // task 5
// function deleteProduct(id) {
//   function deleteData(id) {
//     fetch(
//       `${URL}/products${id}`,
//       { method: "delete" }
//     ).then(() => deleteProduct());
//   }
// }

// deleteProduct();

// task 6
// Вывести 5 товаров, спросить у пользователя "Показать больше?"
// Если да - показать еще 5 товаров, если нет выйти и т.д.
function getProductsList() {
  fetch(`${URL}/products?_page=1&_limit=5`)
    .then(response => response.json())
    .then(response => {
      const myTable = document.getElementById("myTable");
      const head = `<tr>
                <th>id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Location</th>
                <th>Text</th>
        </tr>`;
      const list = response.map(item => {
        return `<tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.location}</td>
                <td>${item.text}</td>
            </tr>`;
      });
      myTable.innerHTML = head + list.join("");
    });
}

function showProducts() {
  restart();
  function restart() {
    let question = prompt("More?");
    if (question == null) {
      console.log("cancel");
    } else {
      getProductsList();
    }
  }
}

showProducts();

// //task 7
// // Вывести все товары, найменование которых равно аргументу функции
// function getProductByName(name) {
//   fetch(
//     `${URL}/products`
//   )
//     .then(response => response.json())
//     .then(response => {
//       const myTable = document.getElementById("myTable");
//       const head = `<tr>
//                   <th>id</th>
//                   <th>Name</th>
//                   <th>Price</th>
//                   <th>Location</th>
//                   <th>Text</th>
//           </tr>`;
//       const list = response.map(item => {
//         if (item.name == name) {
//           return `<tr>
//                   <td>${item.id}</td>
//                   <td>${item.name}</td>
//                   <td>${item.price}</td>
//                   <td>${item.location}</td>
//                   <td>${item.text}</td>
//               </tr>`;
//         } else {
//           console.log(name);
//         }
//       });
//       myTable.innerHTML = head + list.join("");
//     });
// }

// getProductByName("Crisps");

// task 8
// Вывести все товары, цена которых больше или равна аргумента функции
// function getProductsByPrice(price) {
//   fetch(
//     `${URL}/products`
//   )
//     .then(response => response.json())
//     .then(response => {
//       const myTable = document.getElementById("myTable");
//       const head = `<tr>
//                   <th>id</th>
//                   <th>Name</th>
//                   <th>Price</th>
//                   <th>Location</th>
//                   <th>Text</th>
//           </tr>`;
//       const list = response.map(item => {
//         if (item.price >= price) {
//           return `<tr>
//                   <td>${item.id}</td>
//                   <td>${item.name}</td>
//                   <td>${item.price}</td>
//                   <td>${item.location}</td>
//                   <td>${item.text}</td>
//               </tr>`;
//         } else {
//           console.log(price);
//         }
//       });
//       myTable.innerHTML = head + list.join("");
//     });
// }

// getProductsByPrice(2);

// task 9
// Вывести все товары в порядке убывания/возрастания цены в зависимости от аргумента функции
// function sortByPrice(order) {
//   fetch(`${URL}/products?_sort=price&_order=${order}`)
//     .then(response => response.json())
//     .then(response => {
//       const myTable = document.getElementById("myTable");
//       const head = `<tr>
//                   <th>id</th>
//                   <th>Name</th>
//                   <th>Price</th>
//                   <th>Location</th>
//                   <th>Text</th>
//           </tr>`;
//       const list = response.map(item => {
//         return `<tr>
//                   <td>${item.id}</td>
//                   <td>${item.name}</td>
//                   <td>${item.price}</td>
//                   <td>${item.location}</td>
//                   <td>${item.text}</td>
//               </tr>`;
//       });
//       myTable.innerHTML = head + list.join("");
//     });
// }

// sortByPrice();
