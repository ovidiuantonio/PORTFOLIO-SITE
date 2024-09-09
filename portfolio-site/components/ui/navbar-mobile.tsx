"use client"
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { useState } from "react";


export default function NavBarMobile() {
    const pathname = usePathname();
    const [sheetOpen, setSheetOpen] = useState(false);
    return (
        <NavigationMenu className="md:hidden flex-row justify-between">

        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/"> 
            <Image
              src="/images/logo-icon-black-padding.png"
              width={100}
              height={100}
              alt="logo"
              className="w-36"
              priority
              unoptimized={true}
            />
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger><FontAwesomeIcon icon={faBars} className="px-12" /></SheetTrigger>
          <SheetContent side={"bottom"} className="min-h-[100vh] bg-white flex-col text-xl">
            <NavigationMenuList className="flex-col grow h-[80vh] text-xl flex-1 min-w-[10rem]">
              <NavigationMenuItem className="p-3 hover:italic">
                  <Link href="/about" className={`font-body ${pathname === "/about" ? 'font-bold' : 'font-light'}`} onClick={() => setSheetOpen(false)}>ABOUT</Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-3 hover:italic">
                  <Link href="/" className={`font-body ${pathname === '/' ? 'font-bold' : 'font-light'}`} onClick={() => setSheetOpen(false)}>PROJECTS</Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="p-3 hover:italic">
                  <Link href="/contact" className={`font-body ${pathname === '/contact' ? 'font-bold' : 'font-light'}`} onClick={() => setSheetOpen(false)}>CONTACT</Link>
                </NavigationMenuItem>
              </NavigationMenuList>
        

            <NavigationMenuList className="flex-1 min-w-[10rem]">
              <NavigationMenuItem className="p-3">
                <Link href="https://www.behance.net/soulremesher" target="_blank"><FontAwesomeIcon icon={faBehance} className="text-xl"/></Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="p-3">
                <Link href="https://www.instagram.com/soulremesher/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="text-xl"/></Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="p-3">
                <Link href="https://www.youtube.com/@SoulRemesher" target="_blank"><FontAwesomeIcon icon={faYoutube} className="text-xl"/></Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </SheetContent>
        </Sheet>
        </NavigationMenuList>

      </NavigationMenu>
    );
  }