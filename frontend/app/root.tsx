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

//images and icons
import redditLogoImage from "../public/images/Logo_reddit.svg"
import iconHome from "../public/icons/icon-home.svg"
import iconHot from "../public/icons/icon-hot.svg"
import iconTrending from "../public/icons/icon-trending.svg"

import { SidebarNavItem, links as SidebarNavItemLinks } from "./components/SidebarNavItem";


export const links: LinksFunction = () => [
  ...SidebarNavItemLinks(),
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
          <div id="sidebar">
            <img src={redditLogoImage} alt="Reddit logo" />
            <div className="sidebar-nav">
              <nav>
                <h2>feeds</h2>
                <SidebarNavItem iconUrl={iconHome} label="Home" to="/" />
                <SidebarNavItem iconUrl={iconHot} label="Hot" to="/" />
                <SidebarNavItem iconUrl={iconTrending} label="Recent" to="/" />
              </nav>
              <nav>
                <h2>My communities</h2>
                <SidebarNavItem iconUrl={iconHome} label="Home" to="/" />
                <SidebarNavItem iconUrl={iconHot} label="Hot" to="/" />
                <SidebarNavItem iconUrl={iconTrending} label="Recent" to="/" />
              </nav>
            </div>
          </div>
          <main>
            <header className="main-header"></header>
            <div className="main-content">
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
