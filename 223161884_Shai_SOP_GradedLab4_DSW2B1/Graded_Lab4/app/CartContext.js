import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [menu, setMenu] = useState([
    {
      id: 1,
      img: 'https://www.dinneratthezoo.com/wp-content/uploads/2020/12/grilled-chicken-salad-4.jpg',
      name: 'Grilled Chicken Salad',
      description: 'A healthy and refreshing salad featuring grilled chicken breast, mixed greens, cherry tomatoes, cucumbers, and a light vinaigrette dressing.',
      price: 'R120',
  },
  {
      id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHPm433mUvvBm-q2EgQYWde7FukaJkTyxwQ&s',
      name: 'Fish and Chips',
      description: 'Crispy battered fish served with golden fries and a side of tartar sauce. A classic and satisfying meal.',
      price: 'R140',
  },
  {
      id: 3,
      img: 'https://loveandgoodstuff.com/wp-content/uploads/2020/08/classic-ground-beef-tacos-1200x1200.jpg',
      name: 'Beef Tacos',
      description: 'Soft tortillas filled with seasoned ground beef, lettuce, cheese, and salsa. Served with a side of guacamole.',
      price: 'R130',
  },
  {
      id: 4,
      img: 'https://www.budgetbytes.com/wp-content/uploads/2022/03/Easy-Vegetable-Stir-Fry-V1.jpg',
      name: 'Vegetarian Stir-Fry',
      description: 'A mix of colorful vegetables stir-fried with a savory sauce and served over steamed rice. A light and flavorful option.',
      price: 'R110',
  },
  {
      id: 5,
      img: 'https://www.southernliving.com/thmb/sQ3jAjFAP-SPt_upe-Im4rxMKrQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/oven-baked-baby-back-ribs-beauty-332_preview-34579f7f15ed4548ae3bb5b2048aab60.jpg', 
      name: 'BBQ Ribs',
      description: 'Tender pork ribs coated in a smoky BBQ sauce and slow-cooked to perfection. Served with coleslaw and cornbread.',
      price: 'R200',
  },
  {
      id: 6,
      img: 'https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg', 
      name: 'Chocolate Lava Cake',
      description: 'A decadent dessert with a rich, molten chocolate center, served warm with a scoop of vanilla ice cream.',
      price: 'R90',
  }
  ]);

const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('R', '')) * item.quantity, 0).toFixed(2);
  };

  const clearCart = () => {
    setCart([]);
  };


  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
       
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }
  
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId, quantity) => {
    setCart((prevCart) => {
      return prevCart.map(cartItem =>
        cartItem.id === itemId
          ? { ...cartItem, quantity }
          : cartItem
      );
    });
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, menu, getTotalPrice, clearCart, addToCart, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);