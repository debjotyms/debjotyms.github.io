"use client";

import {Button} from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {MenuIcon, Sun, Moon} from "lucide-react";
import {cn} from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  function handleToggleTheme() {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <header className="flex items-center py-4 px-4 md:container w-full">
      <div className="w-full justify-start items-center">
        <Link href="/" className="flex items-center">
          <h3 className="text-lg font-semibold tracking-tight">debjotyms</h3>
        </Link>
      </div>
      <NavigationMenu className="w-full items-center justify-center hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">Certifications</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle())}>
              <Link href="/cv">CV</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle())}>
              <Link href="/">Experience</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="w-full justify-end items-center hidden md:flex">
        <Button variant="outline" onClick={handleToggleTheme}>
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>
      <Sheet>
        <div className="w-full md:hidden flex items-center gap-2 justify-end">
          <Button variant="outline" onClick={handleToggleTheme}>
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
        </div>

        <SheetContent>
          <SheetTrigger asChild>
            <Link className="flex items-center gap-2" href="/">
              <h3 className="text-lg font-semibold tracking-tight">debjotyms</h3>
            </Link>
          </SheetTrigger>
          <ul className="flex flex-col gap-3 mt-4">
            <li>
              <SheetTrigger asChild>
                <Link href="/">Certifications</Link>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <Link href="/">Projects</Link>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <Link href="/cv">CV</Link>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <Link href="/">Experience</Link>
              </SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>
                <Link href="/">Contact</Link>
              </SheetTrigger>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
