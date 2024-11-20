const products = [
    {
      id: 1,
      name: 'Smartphone',
      description: 'Latest model with high-end specs.',
      price: 15000,
      image: 'https://www.livemint.com/lm-img/img/2023/10/13/1600x900/smartphones_1697191534268_1697191552490.jpg',
    },
    {
      id: 2,
      name: 'Laptop',
      description: 'Powerful laptop for all your needs.',
      price: 45000,
      image: 'https://rukminim2.flixcart.com/image/850/1000/l367dzk0/computer/f/e/y/hp-15s-notebook-hp-original-imagecpfeajbzuee.jpeg?q=90&crop=false',
    },
    {
        id:3,
        name: 'grocery',
        description: 'grocery',
        price: 120,
        image:'https://img.etimg.com/thumb/width-420,height-315,imgsize-107797,resizemode-75,msid-65331358/small-biz/startups/newsbuzz/flipkart-has-a-264-million-plan-for-grocery-store-supermart/grocery.jpg',
    }

  ];
  
  const cart = [];
  

  const productsContainer = document.getElementById('products');
  if (productsContainer) {
    products.forEach(product => {
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price} INR</p>
          <a href="product.html?id=${product.id}">View Details</a>
        </div>
      `;
      productsContainer.innerHTML += productCard;
    });
  }
  
  const productDetails = window.location.search;
  if (productDetails.includes('?id=')) {
    const id = new URLSearchParams(productDetails).get('id');
    const product = products.find(p => p.id == id);
  
    if (product) {
      document.getElementById('product-image').src = product.image;
      document.getElementById('product-name').innerText = product.name;
      document.getElementById('product-description').innerText = product.description;
      document.getElementById('product-price').innerText = product.price;
    }
  }

  function addToCart() {
    const productId = new URLSearchParams(window.location.search).get('id');
    const product = products.find(p => p.id == productId);
    cart.push(product);
    alert('Product added to cart');
  }
  
  const cartItemsContainer = document.getElementById('cart-items');
  if (cartItemsContainer) {
    cart.forEach(item => {
      const cartItem = `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <h3>${item.name}</h3>
            <p>${item.price} INR</p>
          </div>
        </div>
      `;
      cartItemsContainer.innerHTML += cartItem;
    });
  }
  
  function checkout() {
    alert('Checkout functionality not implemented yet.');
  }