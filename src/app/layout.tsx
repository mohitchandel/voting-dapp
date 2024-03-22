"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { sepolia, polygonMumbai } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const inter = Inter({ subsets: ["latin"] });

const config = getDefaultConfig({
  appName: "Voting App",
  projectId: "YOUR_PROJECT_ID",
  chains: [sepolia],
  ssr: true,
});
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <Header />
              {children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
