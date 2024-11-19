import "../globals.css";
import NavbarTerms from "../components/navbarTerms";
import Footer from "../components/footer";

export default function PolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <NavbarTerms />
        {children}
        <Footer />
      </>

  );
}
