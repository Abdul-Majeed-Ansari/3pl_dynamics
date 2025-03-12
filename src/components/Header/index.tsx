"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const usePathName = usePathname();

  return (
    <header
      className={`header left-0 top-0 z-40 flex w-full items-center ${
        sticky
          ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-lg backdrop-blur-sm dark:bg-gray-dark"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link href="/" className={`block w-full ${sticky ? "py-5" : "py-8"}`}>
              <Image
                src="/images/logo/3PLDynamics(Dark).png"
                alt="logo"
                width={100}
                height={30}
                className="w-[50%] dark:hidden"
              />
              <Image
                src="/images/logo/3pl-logo.png"
                alt="logo"
                width={100}
                height={30}
                className="hidden w-[50%] dark:block"
              />
            </Link>
          </div>

          {/* NAVIGATION MENU */}
          <div className="flex w-full items-center justify-between px-4">
            <div>
              {/* Mobile Menu Button */}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span className={`block h-0.5 w-[30px] bg-black transition-all dark:bg-white ${navbarOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
                <span className={`block h-0.5 w-[30px] bg-black transition-all dark:bg-white ${navbarOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-[30px] bg-black transition-all dark:bg-white ${navbarOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
              </button>

              {/* Navbar Menu */}
              <nav
                id="navbarCollapse"
                className={`absolute right-0 z-30 w-[250px] rounded border border-gray-300 bg-white px-6 py-4 transition-all dark:bg-dark lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen ? "top-full opacity-100" : "top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {/* Normal Menu Item */}
                      <Link
                        href={menuItem.path}
                        className={`flex py-2 text-base lg:py-6 ${
                          usePathName === menuItem.path
                            ? "text-primary dark:text-white"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        {menuItem.title}
                      </Link>

                      {/* Dropdown (if exists) */}
                      {menuItem.dropdown && (
                        <div className="invisible absolute left-0 top-full z-50 w-[250px] rounded-md bg-white p-3 shadow-lg opacity-0 transition-all group-hover:visible group-hover:top-[110%] group-hover:opacity-100 dark:bg-gray-800">
                          {menuItem.dropdown.map((submenuItem) => (
                            <Link
                              href={submenuItem.path}
                              key={submenuItem.id}
                              className="block rounded py-2 px-3 text-sm text-dark hover:bg-gray-100 dark:text-white/70 dark:hover:bg-gray-700"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <Link href="/contact" className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block">
                Get Started
              </Link>
              <div>
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;