import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SiteLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-16">{children}</main>
      <Footer />
    </>
  );
}
