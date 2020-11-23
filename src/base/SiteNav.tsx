import React from "react";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

import { Site } from "tabler-react";

const navBarItems = [
  {
    value: "Dashboard",
    to: "/",
    icon: "home",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Clientes",
    to: "/customers",
    icon: "users",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Transações",
    to: "/transactions",
    icon: "shuffle",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Fatos Geradores",
    to: "/transactiontypes",
    icon: "gift",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Resgates",
    to: "/recoveries",
    icon: "corner-left-down",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Tipos de Resgate",
    to: "/recoverytypes",
    icon: "compass",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Produtos",
    to: "/products",
    icon: "shopping-bag",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Categorias de Produtos",
    to: "/productcategories",
    icon: "list",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Configurações",
    to: "/settings",
    icon: "settings",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Níveis",
    to: "/levels",
    icon: "target",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Gerador de Página",
    to: "/pagegenerator",
    icon: "clipboard",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Notificações",
    to: "/notifications",
    icon: "mail",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Relatórios",
    to: "/reports",
    icon: "file",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
];

const SiteNav = () => {
  return (
    <Site.Nav
      logoURL="/img/logo.svg"
      isSide={true}
      side="left"
      itemsObjects={navBarItems}
    />
  );
};

export default SiteNav;