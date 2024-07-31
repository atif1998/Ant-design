import { montserrat } from "@/app/fonts";

import { cn } from "@/lib/utils";
import { AlignJustifyIcon } from "lucide-react";
import NavLinkItem from "./NavLinkItem";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import NavList from "@/contants/nav_List";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustifyIcon className="lg:hidden" />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className={cn(montserrat.className, "border-primary bg-primary")}
      >
        <div className="flex-1 px-2">
          {NavList.map((nav) => (
            <NavLinkItem key={nav.id} navItem={nav} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
