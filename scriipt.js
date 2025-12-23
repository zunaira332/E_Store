const form = document.getElementById('productForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  
  const res = await fetch('http://localhost:5000/api/products/add', {
    method: 'POST',
    body: formData
  });
  
  const data = await res.json();
  document.getElementById('msg').innerText = data.message;
  form.reset();
});
