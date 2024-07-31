import { BellDotIcon, ChevronDownIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

import VerticalSeperator from "./seperator/vertical-seperator";

import MobileNav from "./components/MobileNav";

const Header = () => {
  return (
    <div className="flex h-[70px] items-center justify-between gap-2 bg-white p-4 px-5 shadow-md dark:bg-primary">
      {/* LEFT SECTION */}
      <div className="flex h-full items-center gap-4">
        <MobileNav />

        <h1 className="text-base font-medium lg:text-xl">ATIF</h1>

        <VerticalSeperator className="hidden lg:block" />

        <h2 className="hidden text-secondary-foreground lg:block">
          Admin Panel
        </h2>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex h-full items-center">
        <VerticalSeperator className="hidden lg:block" />
        <BellDotIcon className="mx-2 lg:mx-8" />
        <div className="flex items-center gap-2">
          <span className="hidden text-xs font-medium lg:block">ATIF</span>
          <Avatar className="h-9 w-9">
            <AvatarFallback className="text-primary dark:bg-white">
              AT
            </AvatarFallback>
          </Avatar>
          <ChevronDownIcon className="h-5 w-3" />
        </div>
      </div>
    </div>
  );
};

export default Header;
