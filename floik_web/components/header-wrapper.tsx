"use client"

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { AnnouncementBanner } from "@/components/announcement-banner";

export function HeaderWrapper() {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/portal/admin');

  if (isAdmin) return null;

  return (
    <>
      <Navbar />
      <AnnouncementBanner />
    </>
  );
}
