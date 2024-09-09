"use client"
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function NavBar() {
    const pathname = usePathname();
    return (
        <NavigationMenu className="hidden md:flex">
        
        <NavigationMenuList className="flex-1 min-w-[20rem]">
          <NavigationMenuItem className="p-3 hover:italic">
            <Link href="/about" className={`font-body ${pathname === "/about" ? 'font-bold' : 'font-light'}`}>ABOUT</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="p-3 hover:italic">
            <Link href="/" className={`font-body ${pathname === '/' ? 'font-bold' : 'font-light'}`}>PROJECTS</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="p-3 hover:italic">
            <Link href="/contact" className={`font-body ${pathname === '/contact' ? 'font-bold' : 'font-light'}`}>CONTACT</Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="flex-1">
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

        <NavigationMenuList className="flex-1 min-w-[20rem]">
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
      </NavigationMenu>
    );
  }