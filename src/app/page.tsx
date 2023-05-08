"use client";
import { NextPage } from "next";
import { useWallet } from "@solana/wallet-adapter-react";
import { Box, Center, Spacer, Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Connected from "@/components/Connected";
import Disconnected from "@/components/Disconncted";

const Home: NextPage = () => {
  const { connected } = useWallet();
  return (
    <div>
      <Box
        w="full"
        h="calc(100vh)"
        bgImage={"url(/assets/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          {/* Navbar */}
          <Navbar />
          <Spacer />

          <Center>{connected ? <Connected /> : <Disconnected />}</Center>

          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/_buildspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with @_buildspace
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
