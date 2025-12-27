"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "./header";
import Footer from "./footer";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const AUTH_PAGES = [
    "/auth/forgot-password",
    "/auth/reset-password",
    "/auth/login",
    "/auth/sign-up",
  ];

  const pathname = usePathname();

  if (AUTH_PAGES.includes(pathname) || pathname === "/not-found") {
    return (
      <div className="pt-10">
        {children}
        <div className="text-lg font-semibold text-foreground text-center">
          <Link href="/">Go Back Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
