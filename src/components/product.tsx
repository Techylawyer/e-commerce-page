function Product() {
  return (
    <section className="product relative w-full max-w-md mx-auto">
      <img
        src="images/image-product-1.jpg"
        alt="product image"
        className="w-screen md:w-full md:h-full md:rounded-lg"
      />

      <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-(--white) rounded-full p-2 shadow md:hidden">
        <img
          src="images/icon-previous.svg"
          alt="previous"
          className="block w-2.5 h-2.5"
        />
      </button>

      <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-(--white) rounded-full p-2 shadow md:hidden">
        <img
          src="images/icon-next.svg"
          alt="next"
          className="block w-2.5 h-2.5"
        />
      </button>
    </section>
  )
}
export default Product
