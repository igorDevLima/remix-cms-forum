import { NavLink } from '@remix-run/react'
import type { LinksFunction } from "@remix-run/node";

import styles from "./styles.css";
import { SvgEdit } from '../SvgEdit';

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styles },
];

type Props = {
    iconUrl: string,
    label: string,
    to: string
}

export const SidebarNavItem = (({ iconUrl, label, to }: Props) => {
    return <li>
        <NavLink to={to}
            className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}>
            <div id="border-left-hover" />
            <div className="nav-content">
                <SvgEdit svgUrl={iconUrl} className="nav-icon" />
                {label}
            </div>
        </NavLink>
    </li>;
});