"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import WalletContextProvider from "./WalletContextProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <WalletContextProvider>{children}</WalletContextProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
