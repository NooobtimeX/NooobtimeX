"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import MenuItem from "@/interface/menuItem";
import { Icon } from "@iconify/react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavigationHeaderMobileProps {
  menuItems: MenuItem[];
}

export default function NavigationHeaderMobile({
  menuItems,
}: NavigationHeaderMobileProps) {
  return (
    <div className="relative w-full">
      {/* Mobile Brand Button (Left) */}
      <div className="fixed bottom-4 left-4 z-50 flex justify-center">
        <Link href={"/"}>
          <div className="flex items-center gap-2 px-4 py-2 bg-black border-2 border-white shadow-[4px_4px_0px_0px_white] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_white] transition-all cursor-pointer">
            <Image
              src="/favicon.ico"
              alt="NooobtimeX"
              className="rounded-full border border-white"
              width={24}
              height={24}
              quality={100}
            />
            <span className="font-[Bangers] uppercase text-xl text-white tracking-wide">
              NooobtimeX
            </span>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Trigger (Right) */}
      <Drawer>
        <DrawerTrigger asChild>
          <div className="fixed bottom-4 right-4 z-50">
            <Button className="h-auto px-4 py-2 rounded-none bg-primary text-white border-2 border-white shadow-[4px_4px_0px_0px_white] hover:bg-primary/90 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_white] transition-all font-[Bangers] text-xl tracking-wider">
              MENU <RxHamburgerMenu className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </DrawerTrigger>
        <DrawerContent className="bg-black border-t-4 border-white">
          <DrawerHeader>
            <DrawerTitle className="text-center font-[Bangers] text-4xl uppercase text-white tracking-wide mt-4">
              Select Section
            </DrawerTitle>
            <div className="w-full h-2 bg-[radial-gradient(circle,white_1px,transparent_1.5px)] bg-[length:8px_8px] opacity-20 my-2"></div>
          </DrawerHeader>

          <div className="flex flex-col space-y-3 p-4">
            {menuItems.map((item) => (
              <DrawerClose asChild key={item.href}>
                <Link
                  href={item.href as Route}
                  className="group flex items-center justify-between p-4 border-2 border-white/20 hover:border-primary hover:bg-primary/10 transition-colors"
                  title={item.icon.description}
                >
                  <div className="flex items-center gap-4">
                    {item.icon && (
                      <Icon
                        icon={item.icon.icon}
                        className="w-6 h-6 text-primary group-hover:scale-110 transition-transform"
                      />
                    )}
                    <span className="font-[Bangers] text-2xl uppercase tracking-wide text-white">
                      {item.title}
                    </span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 font-[Bangers] text-primary transition-opacity">
                    GO!
                  </div>
                </Link>
              </DrawerClose>
            ))}
          </div>
          <DrawerFooter className="pt-2 pb-8">
            <DrawerClose asChild>
              <Button className="w-full rounded-none font-[Bangers] text-xl uppercase bg-white text-black hover:bg-zinc-200">
                Close Panel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
