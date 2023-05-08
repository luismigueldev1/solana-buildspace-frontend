import { Inter } from "next/font/google";
import { Providers } from "../components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buildoors",
  description: "Development by @luismigueldev in @buildspace course ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
