import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="fullScreen" id="custom-scrollbar">
        <Header />
        <main className="siteContent">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
