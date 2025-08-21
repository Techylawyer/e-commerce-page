interface CartProps {
  cartItems: number,
  setCartItems: React.Dispatch<React.SetStateAction<number>>
}

function Cart({ cartItems, setCartItems }: CartProps) {
  return (
    <section
      className="absolute right-1.5 top-20 rounded-lg h-50 bg-(--white) shadow-md p-4 w-90 hide" id="cart"
    >
      <h2 className="font-bold">Cart</h2>
      <hr className="text-(--light-grayish-blue) border" />
      {cartItems > 0 ? (
        <div>
          <div className="flex mt-4 gap-4 items-center">
            <img
              src="images/image-product-1-thumbnail.jpg"
              alt="image preview"
              className="w-10 h-10  rounded-md"
            />
            <p>Fall Limited Edition Sneakers</p>
            <p className="total-price">
              $125.00 x {cartItems}{' '}
              <span className="font-bold">${125 * cartItems}.00</span>
            </p>
          </div>
          <button
            className="clear-btn block"
            onClick={() => setCartItems(0)}
            aria-label="Clear cart"
          >
            <img src="images/icon-delete.svg" alt="delete" />
          </button>
          <button className="block">Checkout</button>
        </div>
      ) : (
        <div className="flex justify-center items-center font-bold text-(--dark-grayish-blue)">
          Your cart is empty
        </div>
      )}
    </section>
  )
}

export default Cart
