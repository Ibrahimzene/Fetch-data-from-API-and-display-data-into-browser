const response = await fetch("https://fakestoreapi.com/products");
const products = await response.json();

document.getElementById("cards").innerHTML = `
    ${products
      .map((product) => {
        return `
    <div class="card">
  <h2 class="title-card">${product.title}</h2>
  <img src="${product.image}" alt="image" class="img-card"/>
  <p>${product.description}</p>
  <p class="category">${product.category}</p>
  <p class="price">${product.price}</p>
  </div>`;
      })
      .join("")}`;
