"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
    const currPath = usePathname();
    console.log;
    return (
        <Link
            href={href}
            className={
                currPath === href
                    ? `${classes.link} ${classes.active}`
                    : classes.link
            }
        >
            {children}
        </Link>
    );
}
