import { useState } from 'react'

const productImages = [
  '/images/image-product-1.jpg',
  '/images/image-product-2.jpg',
  '/images/image-product-3.jpg',
  '/images/image-product-4.jpg',
]

function Product() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    )
  }

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <>
      <section className="product relative w-full max-w-md mx-auto">
        <img
          src={productImages[currentImage]}
          alt={`product image ${currentImage + 1}`}
          className="w-screen md:w-full md:h-full md:rounded-lg"
          onClick={() => setIsLightboxOpen(true)}
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

        {/* desktop thumbnails */}

        <div className="hidden md:flex gap-4 mt-4 justify-center">
          {productImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`product-thumbnail border-2 rounded-lg overflow-hidden cursor-pointer ${
                currentImage === index
                  ? 'border-(--orange) selected'
                  : 'border-transparent'
              }`}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} className="w-20" />
            </button>
          ))}
        </div>
      </section>

      {isLightboxOpen && (
        <div className="fixed inset-0 bg-(--lightbox-black) flex items-center justify-center z-50" onClick={() => setIsLightboxOpen(false)}>
          <div className="relative max-w-xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            
            <button
              className="absolute -top-10 right-0 text-(--white) text-3xl"
              onClick={() => setIsLightboxOpen(false)}
            >
              &times;
            </button>

            <img
              src={productImages[currentImage]}
              alt={`Lightbox image ${currentImage + 1}`}
              className="w-full h-auto rounded-lg"
            />

            <button
              onClick={previousImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-(--white) rounded-full p-3 shadow"
            >
              <img src="/images/icon-previous.svg" alt="previous" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-(--white) rounded-full p-3 shadow"
            >
              <img src="/images/icon-next.svg" alt="next" />
            </button>

            <div className="flex gap-4 mt-6 justify-center">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    currentImage === index
                      ? 'border-(--orange) selected'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-20"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Product
