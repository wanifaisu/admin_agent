"use client";

import "@/css/satoshi.css";
import "@/css/style.css";
import StoreProvider from "@/types/providers/StoreProvider";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-[#FFF]">
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <StoreProvider>
            <AntdRegistry>{children}</AntdRegistry>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
