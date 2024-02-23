//images and icons
import redditLogoImage from "../../../public/images/Logo_reddit.svg"
import iconHome from "../../../public/icons/icon-home.svg"
import iconHot from "../../../public/icons/icon-hot.svg"
import iconTrending from "../../../public/icons/icon-trending.svg"
import iconClose from "../../../public/icons/icon-close.svg"

import type { LinksFunction } from '@remix-run/node'

import { SidebarNavItem, links as sidebarNavItemLinks } from "../SidebarNavItem"

import styles from "./styles.css"
import { useEffect, useState } from "react"

export const links: LinksFunction = () => [
    ...sidebarNavItemLinks(),
    { rel: "stylesheet", href: styles }
]

export const Sidebar = (() => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        document.querySelector("#close-sidebar-icon")
            ?.addEventListener("click", () => setIsOpen(false));

        document.querySelector("#open-sidebar-icon")
            ?.addEventListener("click", () => setIsOpen(true));

    }, [])

    return <div id="sidebar" className={isOpen ? "open" : ""} >
        <div className="nav-top">
            <img src={redditLogoImage} alt="Reddit logo" id="logo" />
            <img src={iconClose} alt="close sidebar" id="close-sidebar-icon" />
        </div>
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
})