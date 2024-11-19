import "../globals.css";
import NavbarTerms from "../components/navbarTerms";

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarTerms />
      {children}
    </>
    
  );
}
