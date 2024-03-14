import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Player from "@/components/Player";
import React from "react";
import SideBar from "@/components/SideBar/SideBar";
const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify clone",
  description: "Listen to your favorite songs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            {/* {children} */}
            <div
              className={`h-[100vh]   flex gap-2 p-2`}
            >
              <SideBar userSongs={userSongs} />

              <div className="h-full w-full   flex-1 rounded-lg overflow-auto   ">
                {children}
              </div>
            </div>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
