fetch("/api/products")
.then(res => res.json())
.then(data => {
  const div = document.getElementById("products");
  data.forEach(p => {
    div.innerHTML += `
      <div>
        <img src="/uploads/${p.image}" width="200">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <b>${p.price}</b>
        <button onclick='addToCart({
          productId:"${p._id}",
          title:"${p.title}",
          price:${p.price}
        })'>Add to Cart</button>
      </div>
    `;
  });
});

function addToCart(product){
  fetch("/api/cart/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userEmail: localStorage.getItem("email"),
      product
    })
  }).then(() => alert("Added to cart"));
}

function checkout(){
  fetch("/api/payment/pay", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: 500 })
  }).then(() => alert("Payment successful (test)"));
}
