import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import BentoGrid from "@/components/BentoGrid";
import Instructor from "@/components/Instructor";
import IndividualClasses from "@/components/IndividualClasses";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TechMarquee />
      <BentoGrid />
      
      {/* Mid-page Promo Banner */}
      <div className="py-8 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-secondary/10 to-primary/10 border border-primary/20 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
             <div>
                <div className="badge badge-primary mb-2">New</div>
                <h3 className="text-2xl font-bold mb-2">Full Stack Batch 03 Registrations Open!</h3>
                <p className="opacity-70">Don't miss the chance to master the MERN stack with live mentorship.</p>
             </div>
             <a href="/courses" className="btn btn-primary rounded-full px-8 shadow-lg z-10 shrink-0">
                Register Now <FaArrowRight />
             </a>
        </div>
      </div>

      <Instructor />
      <IndividualClasses />
      <Testimonials />
      
      <Footer />
      <FloatingCTA />
    </main>
  );
}

