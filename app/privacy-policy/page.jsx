import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-base-100">
      <Navbar />
      
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 z-10 relative">
          <div className="text-center mb-12">
             <div className="badge badge-secondary mb-4 p-3 tracking-widest uppercase font-bold shadow-lg shadow-secondary/20">Policies</div>
             <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Privacy Policy</h1>
             <p className="text-base-content/60">Last updated: June 8, 2023</p>
          </div>

          <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-base-content/10 shadow-2xl space-y-8 text-base-content/80 leading-relaxed text-lg">
            
            <p>
              At <strong>CodeRoomLk</strong>, we are committed to protecting the privacy and security of our students' personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit or enroll in our courses website. By using our website, you consent to the practices described in this policy.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Information We Collect</h2>
              <p>When you visit our website, we may collect certain information about you, including:</p>
               <ul className="list-disc pl-6 space-y-2 text-base-content/70">
                <li>Personal identification information (such as your name, email address, WhatsApp number, and educational background) provided voluntarily by you during the registration process.</li>
                <li>Payment and billing information necessary to process your course fee, which are securely handled by trusted third-party payment processors. We do not store credit card details directly.</li>
                <li>Browsing information, such as your IP address, browser type, and device information, collected automatically using cookies and similar technologies (e.g., Google Analytics, Microsoft Clarity).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Use of Information</h2>
              <p>We may use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/70">
                <li>To process and fulfill your enrollments, and provide access to the learning portal or WhatsApp group.</li>
                <li>To communicate with you regarding your courses, provide mentorship support, and respond to inquiries or requests.</li>
                <li>To personalize your learning experience and present relevant project recommendations and promotions.</li>
                <li>To improve our website, curriculum, and mentorship based on your feedback and browsing patterns.</li>
                <li>To detect and prevent fraud, unauthorized sharing of course materials, and abuse of our platform.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Information Sharing</h2>
              <p>
                We respect your privacy and do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/70">
                <li><strong>Trusted service providers:</strong> We may share your information with third-party service providers who assist us in operating our website, processing payments, and analyzing traffic. These providers are contractually obligated to handle your data securely and confidentially.</li>
                <li><strong>Legal requirements:</strong> We may disclose your information if required to do so by law or in response to valid legal requests or orders.</li>
              </ul>
            </section>

             <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Data Security</h2>
              <p>
                We implement industry-standard security measures, including robust database rules in Firebase, to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and gather information about your preferences and interactions with our website. You have the option to disable cookies through your browser settings, but this may limit certain features and functionality of our platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Changes to the Privacy Policy</h2>
              <p>
                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with a revised "last updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we collect, use, and protect your information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact us using the information provided below.
              </p>
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
