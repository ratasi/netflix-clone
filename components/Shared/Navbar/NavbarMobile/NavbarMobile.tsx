import { BellRing, Menu, Search } from "lucide-react";
import Link from "next/link";

import { itemsNavbar } from "@/data/itemsNavbar";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/Shared/Logo";
import { NavbarMobileProps } from "./NavbarMobile.types";
import { SelectorProfile } from "@/components/Shared/SelectorProfile";

export function NavbarMobile(props: NavbarMobileProps) {
  const { users } = props;

  return (
    <div className="p-4 flex justify-between">
      <Logo />

      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="bg-black">
          <div className="flex flex-col gap-4">
            {itemsNavbar.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="hover:textt-gray-300 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="border-[1px] border-white/70 my-5" />
          <div className="flex justify-between gap-6 mt-4">
            <Search className="cursor-pointer" />
            <BellRing className="cursor-pointer" />
            <SelectorProfile users={users} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
