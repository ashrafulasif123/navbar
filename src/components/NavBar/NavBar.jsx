import { Menu } from "lucide-react";
import Link from "./Link";
import { useState } from "react";

const NavBar = () => {
    const navLinks = [
        {
            id: 1,
            name: "Home",
            path: "/",
        },
        {
            id: 2,
            name: "About",
            path: "/about",
        },
        {
            id: 3,
            name: "Services",
            path: "/services",
        },
        {
            id: 4,
            name: "Portfolio",
            path: "/portfolio",
        },
        {
            id: 5,
            name: "Contact",
            path: "/contact",
        },
    ];

    return (
        <nav className="flex justify-between">
            <span className="flex">
                <Menu className="block sm:hidden" />
                <h3>My Navbar</h3>
            </span>
            <ul className="flex gap-4 justify-center">
                {
                    navLinks.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
            <button>Sign In</button>
        </nav>
    );
};

export default NavBar;