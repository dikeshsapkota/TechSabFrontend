import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageShell({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-16">{children}</main>
      <Footer />
    </>
  );
}
