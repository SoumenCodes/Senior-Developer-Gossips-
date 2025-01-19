"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, User, Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserButton } from "@clerk/nextjs";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Forums", href: "/forums" },
  { name: "Your Chats", href: "/chats" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Senior Developer Gossips
          </Link>
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} pathname={pathname} />
            ))}
            <ThemeToggle />
            <UserButton />
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <MobileNav pathname={pathname} setIsOpen={setIsOpen} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ name, href, pathname }) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-3 py-2 transition-colors hover:text-foreground/80 ${
        isActive ? "text-foreground" : "text-foreground/60"
      }`}
    >
      {name}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 w-full bg-primary"
          layoutId="navbar-underline"
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        />
      )}
    </Link>
  );
}

function MobileNav({ pathname, setIsOpen }) {
  return (
    <div className="flex flex-col space-y-3 text-foreground">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold"
          onClick={() => setIsOpen(false)}
        >
          MyApp
        </Link>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close Menu</span>
          </Button>
        </SheetTrigger>
      </div>
      <Separator />
      {navItems.map((item) => (
        <MobileNavItem
          key={item.href}
          setIsOpen={setIsOpen}
          pathname={pathname}
          {...item}
        />
      ))}
      <div className="flex items-center justify-between px-2 py-1">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <span className="text-lg">Your Profile</span>
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
}

function MobileNavItem({ name, href, pathname, setIsOpen }) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className={`block px-2 py-1 text-lg ${
        isActive ? "font-semibold text-foreground" : "text-foreground/60"
      }`}
    >
      {name}
    </Link>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 px-0">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
