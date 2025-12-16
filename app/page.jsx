import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import BentoGrid from "@/components/BentoGrid";
import Instructor from "@/components/Instructor";
import IndividualClasses from "@/components/IndividualClasses";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TechMarquee />
      <BentoGrid />
      <Instructor />
      <IndividualClasses />
      <Testimonials />
      
      {/* Simple CTA Section for Home Page */}
      <div className="py-24 bg-base-200 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
                Ready to Start Your <span className="gradient-text">Journey?</span>
            </h2>
            <p className="text-xl opacity-70 mb-8 max-w-2xl mx-auto">
                Join our next batch and transform your career. 
                Don't wait for the perfect moment, take the moment and make it perfect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/courses" className="btn btn-primary btn-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                    View All Courses <FaArrowRight />
                </a>
                <a href="/contact" className="btn btn-outline btn-lg">
                    Contact Admissions
                </a>
            </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
