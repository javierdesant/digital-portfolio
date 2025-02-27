import React from "react";
import type { RouteConfigEntry } from "@react-router/dev/routes";
import { cfl } from "~/utils/stringUtils";
import routes from "~/routes";
import { NavLink } from "react-router";

interface MenuItemsProps {
  hrefPrefix?: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({ hrefPrefix = "" }) => {
  const renderMenuItems = (routes: RouteConfigEntry[], hrefPrefix?: string) => {
    return routes.map((route) => {
      if (route.path && route.children && route.children.length > 0) {
        return (
          <li key={route.id}>
            <details>
              <summary>{cfl(route.path)}</summary>
              <ul className="p-2">
                {renderMenuItems(
                  route.children,
                  hrefPrefix && hrefPrefix.length > 0
                    ? `${hrefPrefix}/${route.path}`
                    : route.path,
                )}
              </ul>
            </details>
          </li>
        );
      } else {
        return (
          route.path && (
            <li>
              <NavLink key={route.id} to={`${hrefPrefix}/${route.path}`}>
                {cfl(route.path)}
              </NavLink>
            </li>
          )
        );
      }
    });
  };

  return <>{renderMenuItems(routes, hrefPrefix)}</>;
};

export default MenuItems;
