"use client";

import { useEffect, useState } from "react";

interface MenuItem {
  label: string;
  href: string;
}

export const Header = () => {
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Update the active path based on the current URL
      setActivePath(window.location.pathname);
    }
  }, []);

  const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Services", href: "/Service" },
    { label: "Contact", href: "/ContactUs" },
    
  ];

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-30">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur ">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`nav-item sm:px-4 sm:py-2 xs:px-3 xs:py-2 rounded-full xs:text-sm sm:text-sm ${
              activePath === item.href
                ? "bg-white text-gray-900" // Active item styles
                : "text-white hover:bg-white/70 hover:text-gray-900" // Default styles
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};