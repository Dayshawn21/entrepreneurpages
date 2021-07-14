import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();

  const isHome = router.pathname === "/";

  const goBack = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <>
      <nav className="nav flex flex-wrap items-center justify-between px-4 bg-gray-600 text-white ">
        <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          <Link href={`/`}>
            <a>
              <span className="font-semibold text-xl tracking-tight">
                Entrepreneur Pages
              </span>
            </a>
          </Link>
        </div>
        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          for="menu-btn"
        >
          <span className="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
          <li className="border-t md:border-none">
            <Link href={`/categories`}>
              <a className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker ">
                Categories
              </a>
            </Link>
          </li>

          <li className="border-t md:border-none">
            <a
              href={`/business`}
              className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              Businesses
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
