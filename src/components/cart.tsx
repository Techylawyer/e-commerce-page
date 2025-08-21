interface CartProps {
  cartItems: number
  setCartItems: React.Dispatch<React.SetStateAction<number>>
}

function Cart({ cartItems, setCartItems }: CartProps) {
  return (
    <div>
      <section
        className="absolute mx-auto left-2 sm:left-0 top-20 sm:top-17 w-90 sm:w-full md:w-100 md:left-140 20 rounded-lg h-60 bg-(--white) shadow-md z-1 hide"
        id="cart"
      >
        <h2 className="font-bold p-4">Cart</h2>
        <hr className="text-(--light-grayish-blue) border" />
        {cartItems > 0 ? (
          <div className="px-4 pt-2">
            <div className="flex mt-4 gap-4 items-center">
              <img
                src="images/image-product-1-thumbnail.jpg"
                alt="image preview"
                className="w-15 h-15  rounded-md"
              />
              <div className="cart-text flex flex-col gap-1">
                <p>Fall Limited Edition Sneakers</p>
                <p className="total-price">
                  $125.00 x {cartItems}
                  <span className="font-bold"> ${125 * cartItems}.00</span>
                </p>
              </div>
              <button
                className="clear-btn block cursor-pointer ml-auto"
                onClick={() => setCartItems(0)}
                aria-label="Clear cart"
              >
                <img src="images/icon-delete.svg" alt="delete" />
              </button>
            </div>
            <button className="block bg-(--orange) w-full font-bold text-(--very-dark-blue) p-4 mt-4 rounded-lg cursor-pointer hover:bg-(--pale-orange)">
              Checkout
            </button>
          </div>
        ) : (
          <div className="flex h-40 justify-center items-center font-bold text-(--dark-grayish-blue)">
            Your cart is empty.
          </div>
        )}
      </section>
    </div>
  )
}

export default Cart
