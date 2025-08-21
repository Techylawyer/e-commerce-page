 interface PricingProps {
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  handleAddToCart?: () => void
}

function Pricing({ quantity, setQuantity, handleAddToCart }: PricingProps) {
  return (
    <>
      <section className="flex justify-between items-center p-4 md:block">
        <div className="flex justify-between gap-5 md:justify-start">
          <p className="text-3xl font-bold">$125.00</p>
          <p className="bg-(--very-dark-blue) text-(--white) text-sm px-2 pt-2 rounded-sm">
            50%
          </p>
        </div>
        <p className="text-(--dark-grayish-blue) font-bold line-through md:my-2">
          $250.00
        </p>
      </section>

      <section className="btn-div flex flex-col mx-5 font-bold md:flex-row gap-4 mb-20">
        <div className="w-full flex justify-between items-center py-3 px-5 m-auto bg-(--light-grayish-blue) border border-(--light-grayish-blue) rounded-md mb-4 md:w-1/3">
          <button
            onClick={() => setQuantity((prev) => prev - 1)}
            disabled={quantity === 0}
          >
            <img
              src="images/icon-minus.svg"
              alt="remove item"
              className="cursor-pointer"
            />
          </button>

          <p>{quantity}</p>

          <button onClick={() => setQuantity((prev) => prev + 1)}>
            <img
              src="images/icon-plus.svg"
              alt="add item"
              className="cursor-pointer"
            />
          </button>
        </div>
        <button
          className="w-full flex justify-center items-center gap-5 p-3 m-auto bg-(--orange) text-(--very-dark-blue) border-(--orange) rounded-md mb-4 md:w-2/3 shadow-2xl shadow-orange-500 md:shadow-none hover:opacity-75 cursor-pointer"
          onClick={handleAddToCart}
        >
          <img src="images/icon-cart.svg" alt="Cart Icon" />
          Add to cart
        </button>
      </section>
    </>
  )
}

export default Pricing
