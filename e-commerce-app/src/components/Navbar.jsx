import shoppingCart from '../images/shopping-cart.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <div className="text-white text-lg font-bold ">BelanjainDong.</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className="text-gray-300 hover:text-white">
              <img src={shoppingCart} alt="cart" className="w-8 invert" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
