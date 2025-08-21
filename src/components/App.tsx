import Header from './header'
import Product from './product'
import Description from './description'
import Pricing from './pricing'
import Cart from './cart'
import { useState } from 'react'


function App() {
  const [quantity, setQuantity] = useState(0)
  const [cartItems, setCartItems] = useState(0)

  const handleAddToCart = () => {
    if (quantity > 0) {
      setCartItems((prev) => prev + quantity)
      setQuantity(0)
    }
  }

  return (
    <main className="max-w-md md:max-w-4xl mx-auto w-full relative">
      <Header cartItems={cartItems} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />

      <hr className="hidden md:block text-(--light-grayish-blue) mb-12 -mt-5" />

      <section className="container md:flex md:flex-row md:gap-20 md:p-4">
        <div className="md:w-2/5 w-full">
          <Product />
        </div>
        <div className="md:w-3/5 w-full">
          <Description />
          <Pricing
            quantity={quantity}
            setQuantity={setQuantity}
            handleAddToCart={handleAddToCart}
          />
        </div>
      </section>
    </main>
  )
}

export default App
