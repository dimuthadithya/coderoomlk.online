import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Courses from "@/components/Courses";

export const metadata = {
  title: "All Courses - CodeRoom.Online",
  description: "Browse our comprehensive list of web development courses.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <div className="py-12 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-black mb-4 text-center">Explore Our <span className="gradient-text">Curriculum</span></h1>
            <p className="text-center text-xl opacity-70 max-w-2xl mx-auto mb-12">
                From zero to hero. Choose the path that fits your career goals.
            </p>
        </div>
        <Courses /> 
        {/* We reuse the component but we might want to make it show 'all' if it was filtering */}
      </div>
      <Footer />
    </main>
  );
}
