function Header({ cartItems }: { cartItems: number }) {
  const handleShowCart = () => {
    const cart = document.querySelector('#cart')
    if (cart) {
      cart.classList.toggle('hide')
    }
  }

  return (
    <header className="bg-(--white) text-(--very-dark-blue) p-4 flex justify-between items-center">
      <button className="menu-btn block md:hidden" popoverTarget="menu">
        <img src="images/icon-menu.svg" alt="menu" className="cursor-pointer" />
        <span className="sr-only">Open menu</span>
      </button>

      <img src="images/logo.svg" alt="sneakers logo" />

      <nav
        popover=""
        id="menu"
        className="absolute left-0 top-0 h-full w-2/3 shadow-lg p-6 md:static md:shadow-none md:bg-transparent md:block"
      >
        <button
          className="close-btn mb-6 md:hidden"
          popoverTarget="menu"
          popoverTargetAction="hide"
        >
          <span aria-hidden="true">
            <img
              src="images/icon-close.svg"
              alt="close"
              className="cursor-pointer"
            />
          </span>
          <span className="sr-only">Close menu</span>
        </button>

        <ul className="font-bold flex flex-col gap-5 pt-10 md:flex-row md:pt-0 md:gap-8 md:text-(--dark-grayish-blue) md:font-normal">
          <li>
            <a href="">Collections</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center">
        <button onClick={handleShowCart}>
          {cartItems > 0 ? (
            <div className="bg-(--orange) w-4 h-4 text-(--white) text-xs rounded-full absolute">
              {cartItems}
            </div>
          ) : (
            ''
          )}
          <img
            src="images/icon-cart.svg"
            alt="Cart Icon"
            className="w-6 h-6 cursor-pointer"
          />
        </button>
        <img
          src="images/image-avatar.png"
          alt="Avatar"
          className="w-8 h-8 rounded-full ml-4 cursor-pointer hover:border-(--orange) hover:border-2"
        />
      </div>
    </header>
  )
}

export default Header
