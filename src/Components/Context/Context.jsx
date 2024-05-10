import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducers";


export const CartContext = createContext()

// faker.seed(99)

const Context = ({ children }) => {
  const products = [...Array(40)].map(() => ({
    id: faker.number.int(),
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    category: faker.commerce.department(),
    rating: faker.number.int({ min: 1, max: 5 }),
    reviews: faker.number.int({ min: 0, max: 1000 }),
    // inStock: faker.random.arrayElement([0, 3, 5, 6, 7])
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  });

  return <CartContext.Provider value={{state, dispatch}}>{children}</CartContext.Provider>;
};

export const CartState = () => {
  return useContext(CartContext)
}

export default Context;
