import React from "react";
import BurgerIcon from "~/components/Navbar/BurgerIcon";

interface MobileMenuToggleProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
}) => (
  <div className="ml-3 inline-flex items-center justify-center rounded-lg md:hidden">
    <button
      type="button"
      onClick={toggleMobileMenu}
      className="text-gray-400 hover:text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
      aria-expanded={isMobileMenuOpen}
    >
      <span className="sr-only">Abrir menú principal</span>
      <BurgerIcon className="h-6 w-6" />
    </button>
  </div>
);

export default MobileMenuToggle;
