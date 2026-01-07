import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen antialiased bg-white text-slate-900 dark:bg-slate-950">
        <Header />
        <main className="pt-0 sm:pt-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
