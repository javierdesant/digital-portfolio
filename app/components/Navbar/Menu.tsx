import React from "react";
import MenuItems from "~/components/Navbar/MenuItems";

const Menu: React.FC = () => {
  return (
    <ul className="menu menu-horizontal px-1">
      <MenuItems />
    </ul>
  );
};

export default Menu;
