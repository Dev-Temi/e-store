fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
     const container = document.getElementById('product-list');
     products.forEach(product => {
       const item = document.createElement('div');
       item.className = 'product';
       item.innerHTML = `
         <img src="${product.image}" width="100" />
         <h3>${product.title}</h3>
         <p>$${product.price}</p>
         <button onclick="addToCart(${product.id}, '${product.title}', ${product.price}, '${product.image}')">Add to Cart</button>
       `;
       container.appendChild(item);
     });
  });


  



  let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id, title, price, image) {
  const exists = cart.find(item => item.id === id);
  if (exists) {
    alert("Already in Cart!");
  } else {
    cart.push({id, title, price, image});
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert("Added to Cart!");
  }
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

window.onload = updateCartCount;

