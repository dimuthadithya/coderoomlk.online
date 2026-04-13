import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Terms and Conditions',
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-base-100">
      <Navbar />
      
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 z-10 relative">
          <div className="text-center mb-12">
             <div className="badge badge-accent mb-4 p-3 tracking-widest uppercase font-bold shadow-lg shadow-accent/20">Policies</div>
             <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Terms and Conditions</h1>
             <p className="text-base-content/60">Last updated: June 8, 2023</p>
          </div>

          <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-base-content/10 shadow-2xl space-y-8 text-base-content/80 leading-relaxed text-lg">
            
            <p>
              Welcome to <strong>CodeRoomLk</strong>. These Terms and Conditions govern your use of our website and the purchase and use of mentorship programs, courses, and materials from our platform. By accessing and using our website, you agree to comply with these terms. Please read them carefully before proceeding with any enrollments or transactions.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">1. Use of the Website</h2>
              <ul className="list-none space-y-3">
                <li><strong>a.</strong> You must be at least 16 years old to use our website or enroll in courses.</li>
                <li><strong>b.</strong> You are responsible for maintaining the confidentiality of your account information, including your username, access links, and passwords.</li>
                <li><strong>c.</strong> You agree to provide accurate and current information during the registration and checkout process.</li>
                <li><strong>d.</strong> You may not use our website or course materials for any unlawful or unauthorized purposes, including unauthorized distribution or plagiarism of the course contents.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">2. Course Information and Pricing</h2>
              <ul className="list-none space-y-3">
                <li><strong>a.</strong> We strive to provide accurate course descriptions, curriculum outlines, and pricing information. However, we do not guarantee the absolute accuracy or completeness of such information. Minor changes to curricula might occur to keep up with industry standards.</li>
                <li><strong>b.</strong> Prices are subject to change without notice. Any promotions, limits, or SLIATE student discounts are valid for a specified time and may be subject to additional verification.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">3. Orders and Payments</h2>
              <ul className="list-none space-y-3">
                <li><strong>a.</strong> By submitting a registration form on our website, you are requesting enrollment in the selected batch.</li>
                <li><strong>b.</strong> We reserve the right to refuse or cancel any registration for any reason, including but not limited to batch capacity limits, errors in pricing, or eligibility issues.</li>
                <li><strong>c.</strong> You agree to provide valid payment receipts and authorize the agreed monthly or full-course fees to maintain access to the mentorship.</li>
                <li><strong>d.</strong> We use trusted third-party payment processors to handle payment information via platforms like PayHere securely. We do not store or have access to your full payment details.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">4. Delivery of Service</h2>
              <ul className="list-none space-y-3">
                <li><strong>a.</strong> We will make reasonable efforts to ensure timely delivery of live sessions, recorded materials, and 1-on-1 mentorship.</li>
                <li><strong>b.</strong> Schedules and delivery timelines provided are estimates and may vary based on holidays, technical constraints, or instructor availability. In such scenarios, substitute schedules will be provided.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">5. Returns and Refunds</h2>
               <ul className="list-none space-y-3">
                <li><strong>a.</strong> Our <strong>Refund Policy</strong> governs the process and conditions for canceling enrollments and seeking refunds. Please refer to the Refund Policy provided on our website for more detailed information.</li>
              </ul>
            </section>

             <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">6. Intellectual Property</h2>
              <ul className="list-none space-y-3">
                <li><strong>a.</strong> All content and materials on our website, including but not limited to text, images, logos, graphics, and course videos, are protected by intellectual property rights and are the property of CodeRoomLk or its instructors.</li>
                <li><strong>b.</strong> You may not use, reproduce, distribute, illegally share, or modify any content or premium learning materials from our platform without our prior written consent.</li>
              </ul>
            </section>

             <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">7. Limitation of Liability</h2>
              <ul className="list-none space-y-3">
                <li><strong>a.</strong> In no event shall CodeRoomLk, its directors, instructors, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or your application of the taught materials in personal/professional projects.</li>
                <li><strong>b.</strong> We make no warranties or representations, express or implied, regarding subsequent employment or financial success following the completion of our courses.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">8. Amendments and Termination</h2>
              <p>
                We reserve the right to modify, update, or terminate these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically for any changes. Continued use of CodeRoomLk confirms your acceptance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Contact Us</h2>
              <ul className="list-none space-y-2 mt-4 font-medium text-base-content">
                <li>Email: <a href="mailto:contactcoderoomlk@gmail.com" className="text-primary hover:underline">contactcoderoomlk@gmail.com</a></li>
                <li>Phone: <a href="tel:+94785854468" className="text-primary hover:underline">+94 78 585 4468</a></li>
              </ul>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
