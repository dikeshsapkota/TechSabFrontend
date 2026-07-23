import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SiteLayout({ children, overlayHeader = false }) {
  return (
    <>
      <Navbar />
      <main className={`min-h-screen bg-slate-50 ${overlayHeader ? "" : "pt-16"}`}>{children}</main>
      <Footer />
    </>
  );
}
