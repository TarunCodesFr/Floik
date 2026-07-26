"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { SkeletonProvider } from "auto-skeleton-react-and-native";
import { AuthProvider } from "@/context/auth-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <SkeletonProvider theme="dark" animation="wave" baseColor="#1a1a1a" highlightColor="#333333">
          {children}
        </SkeletonProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
