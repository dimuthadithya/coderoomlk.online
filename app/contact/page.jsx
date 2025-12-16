import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us - CodeRoom.Online",
  description: "Get in touch with our team for questions, support, or custom training.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <div className="bg-base-100 min-h-screen">
         <Contact />
      </div>
      <Footer />
    </main>
  );
}
