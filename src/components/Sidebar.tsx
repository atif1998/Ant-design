"use client";

import { LogOutIcon } from "lucide-react";
import Image from "next/image";

import NavList from "@/contants/nav_List";
import NavLinkItem from "./NavLinkItem";
import ThemeButton from "./ThemeButton";

const Sidebar = () => {
  return (
    <div className="hidden h-screen w-[235px] flex-col bg-primary lg:flex">
      <div className="flex h-[70px] items-center gap-2 px-5 text-white">
        <div className="bg-icon-background flex h-9 w-9 items-center justify-center rounded-full">
          <Image
            src="/dashboard/building.svg"
            alt="admin icon"
            width={20}
            height={20}
          />
        </div>
        <h1 className="text-[14px] font-semibold">Admin Panel</h1>
      </div>
      <div className="flex h-full flex-1  flex-col">
        <div className="border-line-break flex-1 border-t pt-6">
          {NavList.map((nav) => (
            <NavLinkItem key={nav.id} navItem={nav} />
          ))}
        </div>
        <div className="ml-8 flex items-center justify-start">
          {" "}
          <ThemeButton />
        </div>

        <div className="mb-5 ">
          <div className="hover:bg-hover flex cursor-pointer items-center gap-4 border-l border-l-primary px-6 py-5 hover:border-l-white">
            <LogOutIcon className="h-3 w-3 text-white" />
            <p className="text-xs font-medium text-white">Logout Button</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
