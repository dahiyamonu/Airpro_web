"use client";
import { useState } from "react";
import MainMenu from "./components/main-menu";
import MenuTitle from "./components/menu-title";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid md:grid-cols-[250px_1fr] h-screen">
      {/* Sidebar - visible on md+ */}
      <MainMenu className="hidden md:flex" />

      {/* Mobile top bar */}
      <div className="md:hidden sticky top-0 left-0 z-20 flex items-center justify-between bg-background border-b border-border p-4">
        <MenuTitle />
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile slide-out menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-40 md:hidden">
          <div className="absolute top-0 left-0 w-64 h-full bg-background shadow-lg p-4">
            <MainMenu className="flex flex-col" />
            <Button
              variant="outline"
              className="mt-4 w-full"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4 text-lg font-semibold">
          Welcome to Airpro — Elevating Businesses, Simplifying Solutions.
        </h1>
        {children}
      </div>
    </div>
  );
}
