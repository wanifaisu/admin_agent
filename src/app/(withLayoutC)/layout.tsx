"use client";
import Sidebar from "@/components/Sidebar";
import { CNavItem } from "@/constants/navItems";
import React, { useState } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}

        <Sidebar
          activeSidebarItems={CNavItem}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="relative flex mt-6 mb-6 flex-1 flex-col overflow-y-auto overflow-x-hidden bg-[#FFF] border-l-2 border-black">
          <main className="bg-[#FFF] ">{children}</main>
        </div>
      </div>
    </>
  );
}
