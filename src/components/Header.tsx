import { ShoppingBasketIcon, MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header>
      <nav className="flex overflow-hidden">
        <div className="flex flex-1 relative p-5">
          <h4 className="text-[#121212] text-xl" data-aos="fade-down">
            Eats &Sweets Bakery
            {/* <span className="shadow bg-white py-3 pl-4 pr-8 rounded-l-full">Eats &</span> <span className="-ml-8 text-white py-3 pl-2 pr-8 bg-[#9c634f] shadow rounded-tr-full">Sweets Bakery</span> */}
          </h4>
          <div className="header__logo-overlay"></div>
        </div>

        <ul
          className="hidden p-5 xl:flex justify-end items-center gap-16 flex-grow list-none uppercase menu__li "
          data-aos="fade-down"
        >
          <li>
            <a href="#menu">Products</a>
          </li>
          <li>
            <a href="#food">Prices</a>
          </li>
          <li>
            <a href="#services">Contact Us</a>
          </li>
          <li>
            <a
              href="#about-us"
              className="shadow-md rounded-full  py-3 px-8 border border-[#121212]"
            >
              Login
            </a>
          </li>
        </ul>
        <ul
          className="p-5 flex xl:hidden  justify-end items-center gap-16 flex-grow list-none uppercase menu__li "
          data-aos="fade-down"
        >
          <MenuIcon className="w-8 h-8 text-[#121212] cursor-pointer" />
        </ul>

        <div className="hidden xl:block list-none p-5" data-aos="fade-down">
          <ShoppingBasketIcon className="w-8 h-8 text-[#121212]" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
