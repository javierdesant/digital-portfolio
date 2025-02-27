import React, { useState } from "react";
import routes from "~/routes";
import NavbarBranding from "~/components/Navbar/NavbarBranding";
import MobileMenuToggle from "~/components/Navbar/MobileMenuToggle";
import Menu from "~/components/Navbar/Menu";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const toggleDropdown = (key: number) =>
    setOpenDropdown((prev) => (prev === key ? null : key));

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <nav className="border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <NavbarBranding />
          <MobileMenuToggle
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
          <div
            className={`hidden w-full md:block md:w-auto ${isMobileMenuOpen ? "block" : "hidden"}`}
            id="mobile-menu"
          >
            <Menu
              routes={routes}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
