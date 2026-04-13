import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Refund Policy',
};

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-base-100">
      <Navbar />
      
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 z-10 relative">
          <div className="text-center mb-12">
             <div className="badge badge-primary mb-4 p-3 tracking-widest uppercase font-bold shadow-lg shadow-primary/20">Policies</div>
             <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Refund Policy</h1>
             <p className="text-base-content/60">Last updated: June 8, 2023</p>
          </div>

          <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-base-content/10 shadow-2xl space-y-8 text-base-content/80 leading-relaxed text-lg">
            
            <p>
              Thank you for enrolling at <strong>CodeRoomLk</strong>. We value your satisfaction and strive to provide you with the best online learning experience possible. If, for any reason, you are not completely satisfied with your purchase, we are here to help.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Returns & Cancellations</h2>
              <p>
                We accept cancellation of course enrollments within <strong>7 days</strong> from the date of purchase or before the course officially begins, whichever comes first. To be eligible for a return, you must not have completed more than 10% of the course content or downloaded the proprietary materials.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Refunds</h2>
              <p>
                Once we receive your cancellation request and verify your eligibility, we will notify you of the status of your refund. If your refund is approved, we will initiate a refund to your original method of payment. Please note that the refund amount may exclude any payment gateway or processing charges incurred during the initial purchase.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Exchanges & Course Transfers</h2>
              <p>
                If you would like to transfer your enrollment to a different batch or a different course of equal value, please contact our support team within <strong>7 days</strong> of purchase. We will provide you with further instructions on how to proceed with the exchange.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Non-Refundable Items</h2>
              <p>Certain items or services are non-returnable and non-refundable. These include:</p>
              <ul className="list-disc pl-6 space-y-2 text-base-content/70">
                <li>Downloadable software products, source codes, or digital assets</li>
                <li>Completed mentorship hours or 1-on-1 sessions</li>
                <li>Assessments or certifications already issued</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Processing Time</h2>
              <p>
                Refunds will be processed within <strong>5-10 business days</strong> after we approve your request. Please note that it may take additional time for the refund to appear in your account, depending on your payment provider and bank processing times.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-base-content">Contact Us</h2>
              <p>
                If you have any questions or concerns regarding our refund policy, please contact our customer support team. We are here to assist you and ensure your learning experience with us is enjoyable and hassle-free.
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
