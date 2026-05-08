import { Menu, X } from "lucide-react";
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

    const [open, setOpen] = useState(true)

    return (
        <nav className="flex justify-between items-center relative py-3 px-5">
            <span className="flex gap-3 items-center">
                {
                    open
                        ?
                        <Menu onClick={() => setOpen(!open)} className="md:hidden" />
                        :
                        <X onClick={() => setOpen(!open)} className="md:hidden" />
                }
                <h3 className="text-lg">My Navbar</h3>
            </span>

            <ul className={`absolute left-5 top-full w-[200px] ${open && 'hidden'} md:flex md:w-auto md:static md:border-none bg-white border border-gray-200 rounded-md`}>
                {
                    navLinks.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
            <button className="btn">Sign In</button>
        </nav>
        // <nav className="flex justify-between items-center relative py-3 px-5">
        //     <span className="flex gap-3">
        //         <Menu onClick={() => setOpen(!open)} className="md:hidden" />
        //         <h3 className="text-lg">My Navbar</h3>
        //     </span>

        //     {open &&
        //         <ul className='gap-4 absolute left-5 top-full md:static md:border-none hidden md:  bg-white  border border-gray-200 p-2 rounded-md'>
        //             {
        //                 navLinks.map(route => <Link key={route.id} route={route}></Link>)
        //             }
        //         </ul>
        //     }
        //     <button className="btn">Sign In</button>
        // </nav>
    );
};

export default NavBar;