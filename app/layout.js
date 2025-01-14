import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ayoub_store",
  description: "Store, Morocco, Rabat, Ayoub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "var(--font-geist-sans), sans-serif",
          backgroundColor: "#f9fafb",
          color: "#333",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 2rem",
            backgroundColor: "#111827",
            color: "#fff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Ayoub Store</div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              style={{
                backgroundColor: "#374151",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Products
            </button>
            <button
              style={{
                backgroundColor: "#374151",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              About
            </button>
            <button
              style={{
                backgroundColor: "#374151",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Contact
            </button>
          </div>
        </nav>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}
