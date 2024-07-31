"use client";

import { INavListItem } from "@/contants/nav_List";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  navItem: INavListItem;
};

const NavLinkItem = ({ navItem: { href, icon, name, subLinks } }: Props) => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  if (href) {
    return (
      <Link
        href={href}
        className="hover:bg-hover flex h-14 cursor-pointer items-center gap-4 border-l border-l-primary px-6 text-white hover:border-l-white"
      >
        <span className="flex items-center">
          <Image src={icon} alt="home icon" height={14} width={14} />
        </span>
        <span className="text-xs font-medium">{name}</span>
      </Link>
    );
  }

  return (
    <>
      <div
        onClick={() => {
          setIsDropdown(!isDropdown);
        }}
        className={cn(
          "hover:bg-hover flex h-14 cursor-pointer items-center gap-4 border-l-primary px-6 text-white hover:border-l-white md:border-l",
        )}
      >
        <span className="flex items-center">
          <Image src={icon} alt="home icon" height={14} width={14} />
        </span>
        <span className="text-xs font-medium">{name}</span>
      </div>

      <div className={subLinks ? "px-2" : ""}>
        {isDropdown &&
          subLinks?.map((nav) => <NavLinkItem key={nav.href} navItem={nav} />)}
      </div>
    </>
  );
};

export default NavLinkItem;
