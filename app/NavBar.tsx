"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
   const links = [
      { label: "Dashboard", href: "/" },
      { label: "Issues", href: "/issues" },
   ];

   const pathName = usePathname();

   return (
      <nav className="flex items-center space-x-6 border-b mb-5 px-5 h-14">
         <Link href="/">
            <AiFillBug />
         </Link>
         <ul className="flex space-x-6">
            {links.map((link) => (
               <li key={link.href}>
                  <Link
                     className={classNames({
                        "text-zinc-900": link.href === pathName,
                        "text-zinc-500": link.href !== pathName,
                        "transition-colors hover:text-zinc-800": true
                     })}
                     href={link.href}>
                     {link.label}
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default NavBar;