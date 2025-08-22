import React from "react";
import MenuItem from "./menu-item";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ThemeToggle } from "./Themetoggle";

export default function MainMenu({ className }: { className?: string }) {
  return (
    <div className={cn("bg-muted overflow-auto p-4 flex flex-col", className)}>
      <div className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <Image src="/logo.png" alt="Logo" width={100} height={100} className="text-center" />
      </div>
      <div className="py-4 grow">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/Packages">Package</MenuItem>
        <MenuItem href="/dashboard/Products">Products</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </div>
      <div className="flex gap-2 items-center">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            FA
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
