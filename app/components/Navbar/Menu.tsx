import React from "react";
import Dropdown from "./Dropdown";
import { capitalizeFirstLetter } from "~/utils";

interface MenuProps {
  routes: any[]; // Cambiar `any` para el tipo de `routes[]`.
  openDropdown: number | null;
  toggleDropdown: (key: number) => void;
}

const Menu: React.FC<MenuProps> = ({
  routes,
  openDropdown,
  toggleDropdown,
}) => (
  <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
    {routes.map((route, index) => (
      <li key={index} className="relative">
        {route.children?.length ? (
          <Dropdown
            isOpen={openDropdown === index}
            toggleDropdown={() => toggleDropdown(index)}
            route={route}
          />
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
);

export default Menu;
