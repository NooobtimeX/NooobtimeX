import NavigationFooter from "@/components/navigation/NavigationFooter";
import NavigationHeader from "@/components/navigation/NavigationHeader";
import React from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen relative flex flex-col">
      <NavigationHeader />
      <div className="flex-1">{children}</div>
      <NavigationFooter />
    </main>
  );
}
