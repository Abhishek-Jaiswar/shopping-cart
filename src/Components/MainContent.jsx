import React from 'react'
import { CartState } from './Context/Context'
import SingleProducts from './SingleProducts';

const MainContent = () => {

  const {state: { products }} = CartState()
  console.log(products);

  return (
    <div className=' grid grid-cols-4 gap-5'>
      {products.map((product) => {
        return (
          <SingleProducts product={product} key={product.id} />
        )
      })}
    </div>
  )
}

export default MainContent