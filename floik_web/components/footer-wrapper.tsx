"use client"

import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";

export function FooterWrapper() {
  const pathname = usePathname();
  const isPortal = pathname?.startsWith('/portal');

  return <Footer />;
}
