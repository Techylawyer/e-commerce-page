function Preview() {
  return (
    <section className="preview hidden md:flex mt-5 gap-3">
      <img
        src="images/image-product-1-thumbnail.jpg"
        alt="product thumbnail"
        className="w-[70px] h-[70px] rounded-md cursor-pointer selected"
      />
      <img
        src="images/image-product-2-thumbnail.jpg"
        alt="product thumbnail"
        className="w-[70px] h-[70px] rounded-md cursor-pointer"
      />
      <img
        src="images/image-product-3-thumbnail.jpg"
        alt="product thumbnail"
        className="w-[70px] h-[70px] rounded-md cursor-pointer"
      />
      <img
        src="images/image-product-4-thumbnail.jpg"
        alt="product thumbnail"
        className="w-[70px] h-[70px] rounded-md cursor-pointer"
      />
    </section>
  )
}

export default Preview