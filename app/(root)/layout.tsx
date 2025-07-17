import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { APP_NAME } from "@/lib/constants";
import { APP_DESCRIPTION } from "@/lib/constants";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";
import { CartProvider } from "@/lib/context/cart-context";

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: `${APP_DESCRIPTION}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <div className="flex h-screen flex-col">
        <Header />

        <main className="flex-1 wrapper">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  );
}
