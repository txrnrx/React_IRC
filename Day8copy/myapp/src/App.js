import React, { useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Chocolate Chip Cookies', price: 10, imageSrc: 'path/to/chocolate_chip_image.jpg' },
    { id: 2, name: 'Oatmeal Raisin Cookies', price: 12, imageSrc: 'path/to/oatmeal_raisin_image.jpg' },
    { id: 3, name: 'Double Chocolate Cookies', price: 15, imageSrc: 'path/to/double_chocolate_image.jpg' },
  ]);

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (productId) => {
    if (!favorites.includes(productId)) {
      setFavorites([...favorites, productId]);
    }
  };

  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter((id) => id !== productId);
    setFavorites(updatedFavorites);
  };

  const buyProduct = (productId) => {
    // Add your logic for handling the purchase here
    console.log(`Buying product with ID ${productId}`);
  };

  return (
    <div>
      <h1>Cookie Shop</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-container">
            <img src={product.imageSrc} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToFavorites(product.id)}>
                Add to Favorites
              </button>
              <button onClick={() => removeFromFavorites(product.id)}>
                Remove from Favorites
              </button>
              <button onClick={() => buyProduct(product.id)}>Buy</button>
              {favorites.includes(product.id) && (
                <span style={{ color: 'red' }}> ★</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
