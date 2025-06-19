// src/app/providers.tsx
"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
    </ThemeProvider>
  );
}
