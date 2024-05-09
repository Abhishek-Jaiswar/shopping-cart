import React, { createContext, useReducer } from "react";
const CartContext = createContext();
import { faker} from "@faker-js/faker";

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.number.int(),
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    category: faker.commerce.department(),
    rating: faker.number.int({ min: 1, max: 5 }),
    reviews: faker.number.int({ min: 0, max: 1000 }),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }));

  
  useReducer()


  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default Context;
