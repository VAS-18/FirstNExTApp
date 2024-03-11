"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";

import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 rounded-none mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"#"}>
          <MenuItem setActive={setActive} active={active} item="LEMAO?">
            <div className=" flex flex-col ">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            </div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
