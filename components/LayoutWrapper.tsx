"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { HistoryDrawer } from "./HistoryDrawer";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenHistory={() => setHistoryOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />

      <HistoryDrawer isOpen={historyOpen} onClose={() => setHistoryOpen(false)} />
    </div>
  );
}
