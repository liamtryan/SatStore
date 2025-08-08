// app/layout.tsx
import React from "react";

export const metadata = {
  title: "SatStore – SMSF",
  description: "Starter app wiring Firebase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
