import React from "react";
import HamburgerIcon from "~/components/Navbar/icons/HamburgerIcon";
import MenuItems from "~/components/Navbar/MenuItems";

const Dropdown: React.FC = () => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <HamburgerIcon className="h-5 w-5" />
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <MenuItems />
      </ul>
    </div>
  );
};

export default Dropdown;
