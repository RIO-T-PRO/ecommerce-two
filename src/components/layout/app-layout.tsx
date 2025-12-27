"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import { ArrowLeft, Home } from "lucide-react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const AUTH_PAGES = [
    "/auth/forgot-password",
    "/auth/reset-password",
    "/auth/login",
    "/auth/sign-up",
  ];

  const pathname = usePathname();

  const isAuthPage = AUTH_PAGES.includes(pathname) || pathname === "/not-found";

  if (isAuthPage) {
    return (
      <div className="min-h-screen bg-background-dark">
        <div className="text-center pt-6">
          <Link
            href="/"
            className="text-text-blue ml-8 hover:underline text-sm font-medium flex gap-2 hover:gap-3 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back Home
          </Link>
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-dark">
      <Header />
      <main className="min-h-[calc(100vh-140px)]">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
