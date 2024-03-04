import type { LinksFunction } from "@remix-run/node";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import style from "./app.css"

import iconSearch from "../public/icons/icon-search.svg"
import iconBurger from "../public/icons/icon-burger.svg"

import { SvgEdit } from "./components/SvgEdit";
import { Sidebar, links as sidebarLinks } from "./components/Sidebar"


export const links: LinksFunction = () => [
  ...sidebarLinks(),
  { rel: "stylesheet", href: style }
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="container">
          <Sidebar />
          <main>
            <header id="main-header">
              <img src={iconBurger} alt="open sidebar" id="open-sidebar-icon" />
              <div className="search-input-container">
                <SvgEdit svgUrl={iconSearch} className="search-icon" />
                <input type="search" placeholder="Search a post or community" name="search" id="input-search" />
              </div>
            </header>
            <div id="main-content">
              <Outlet />
            </div>
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
