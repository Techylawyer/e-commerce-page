import { useState } from 'react'

const productImages = [
  '/images/image-product-1.jpg',
  '/images/image-product-2.jpg',
  '/images/image-product-3.jpg',
  '/images/image-product-4.jpg',
]

function Product() {
  const [currentImage, setCurrentImage] = useState(0)

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    )
  }

  const nextImage = () =>  {
    setCurrentImage(prev => prev === productImages.length -1 ? 0 : prev + 1)
  }


  return (
    <section className="product relative w-full max-w-md mx-auto">
      <img
        src={productImages[currentImage]}
        alt={`product image ${currentImage + 1}`}
        className="w-screen md:w-full md:h-full md:rounded-lg"
      />

      <button className="absolute top-1/2 left-4 -translate-y-1/2 bg-(--white) rounded-full p-2 shadow md:hidden">
        <img
          src="images/icon-previous.svg"
          alt="previous"
          className="block w-2.5 h-2.5"
          onClick={previousImage}
        />
      </button>

      <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-(--white) rounded-full p-2 shadow md:hidden">
        <img
          src="images/icon-next.svg"
          alt="next"
          className="block w-2.5 h-2.5"
          onClick={nextImage}
        />
      </button>
    </section>
  )
}


export default Product
