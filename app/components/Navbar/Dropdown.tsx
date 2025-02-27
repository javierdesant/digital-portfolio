import React from "react";
import DropdownIcon from "~/components/Navbar/DropdownIcon";

interface DropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  route: any; // Cambiar `any` por el tipo exacto si es posible
}

const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  toggleDropdown,
  route,
}) => (
  <>
    <button
      onClick={toggleDropdown}
      className="flex w-full items-center justify-between border-b border-gray-100 py-2 pr-4 pl-3 font-medium text-gray-700 hover:bg-gray-50 md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700"
    >
      {route.path}
      <DropdownIcon className="ml-1 h-4 w-4" />
    </button>
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } absolute z-10 my-4 w-44 list-none divide-y divide-gray-100 rounded bg-white text-base shadow`}
    >
      <ul className="py-1">
        {route.children.map((subRoute: any, subIndex: number) => (
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
);

export default Dropdown;
