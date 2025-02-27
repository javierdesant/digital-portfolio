import React, { useState } from "react";
import routes from "~/routes";
import { capitalizeFirstLetter } from "~/utils";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const toggleDropdown = (key: number) => {
    setOpenDropdown((prev) => (prev === key ? null : key)); // Cierra si ya está abierto
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <nav className="border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="/" className="flex">
            <span className="self-center text-lg font-semibold whitespace-nowrap">
              javierdesant
            </span>
          </a>
          <div className="ml-3 inline-flex items-center justify-center rounded-lg md:hidden">
            {/* Botón para colapsar menú */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`hidden w-full md:block md:w-auto ${isMobileMenuOpen ? "block" : "hidden"}`}
            id="mobile-menu"
          >
            <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              {routes.map((route, index) => (
                <li key={index} className="relative">
                  {route.children?.length ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex w-full items-center justify-between border-b border-gray-100 py-2 pr-4 pl-3 font-medium text-gray-700 hover:bg-gray-50 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                      >
                        {capitalizeFirstLetter(route.path || "home")}
                        <svg
                          className="ml-1 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      {/* Dropdown */}
                      <div
                        className={`${
                          openDropdown === index ? "block" : "hidden"
                        } absolute z-10 my-4 w-44 list-none divide-y divide-gray-100 rounded bg-white text-base shadow`}
                      >
                        <ul className="py-1">
                          {route.children.map((subRoute, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={
                                  subRoute.path
                                    ? `/${route.path}/${subRoute.path}`
                                    : `/${route.path}`
                                }
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {subRoute.path ?? "SubRoot"}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <a
                      href={route.path || "/"}
                      className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
                    >
                      {capitalizeFirstLetter(route.path || "home")}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
