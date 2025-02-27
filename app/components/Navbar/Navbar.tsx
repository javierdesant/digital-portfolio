import React from "react";
import { Dropdown, NavbarTitle, Menu, KofiButton } from "~/components/Navbar";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Dropdown />
        <NavbarTitle />
      </div>
      <div className="navbar-center hidden lg:flex">
        <Menu />
      </div>
      <div className="navbar-end">
        <KofiButton />
      </div>
    </div>
  );
};

export default Navbar;
