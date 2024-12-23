import FAQCategory from "@/components/faqs/FAQCategory";
import FAQItem from "@/components/faqs/FAQItem";

const FAQs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions (FAQs) for a Dental Booking Platform</h1>

      <div className="space-y-8">
        <FAQCategory title="1. General Questions" className="bg-blue-50/50">
          <FAQItem
            value="what-is-platform"
            question="What is this platform for?"
            answer="Our platform helps you easily find, compare and book dental appointments at trusted dental practices across the UK."
          />
          <FAQItem
            value="is-it-free"
            question="Is it free to use this platform?"
            answer="Yes, browsing and booking dental appointments on our platform is completely free for patients."
          />
          <FAQItem
            value="how-to-book"
            question="How do I book an appointment?"
            answer="Simply search for a dental practice using our filters, select your preferred appointment slot, and confirm your booking online."
          />
          <FAQItem
            value="book-for-others"
            question="Can I book an appointment for someone else?"
            answer="Yes, you can book appointments for family members or friends. Just ensure you enter their details during the booking process."
          />
          <FAQItem
            value="clinic-reliability"
            question="How do I know if a dental clinic is reliable?"
            answer="All clinics listed are verified and meet UK regulatory standards, including CQC (Care Quality Commission) approval."
          />
        </FAQCategory>

        <FAQCategory title="2. Appointments" className="bg-purple-50/50">
          <FAQItem
            value="earliest-appointment"
            question="How can I find the earliest available appointment?"
            answer="Use the 'Earliest Availability' filter to see clinics with the soonest open slots."
          />
          <FAQItem
            value="reschedule"
            question="Can I reschedule or cancel an appointment?"
            answer="Yes, rescheduling or cancelling can be done directly through your account dashboard, subject to the clinic's cancellation policy."
          />
          <FAQItem
            value="reminders"
            question="Will I receive appointment reminders?"
            answer="Yes, we offer SMS and email reminders before your scheduled appointment."
          />
          <FAQItem
            value="emergency"
            question="Do clinics offer emergency appointments?"
            answer="Many clinics listed provide emergency services. Use the 'Emergency Appointments' filter to find them."
          />
        </FAQCategory>

        <FAQCategory title="3. Payments & Insurance" className="bg-green-50/50">
          <FAQItem
            value="upfront-payment"
            question="Do I need to pay upfront when booking an appointment?"
            answer="Payment policies vary by practice. Some require upfront payment, whilst others accept payment after treatment."
          />
          <FAQItem
            value="payment-methods"
            question="What payment methods are accepted?"
            answer="Most practices accept credit/debit cards, bank transfers and sometimes payment plans."
          />
          <FAQItem
            value="insurance"
            question="Can I use my dental insurance?"
            answer="Yes, you can filter practices based on insurance providers they accept."
          />
          <FAQItem
            value="payment-plans"
            question="Are payment plans available for expensive treatments?"
            answer="Many practices offer interest-free finance options or payment plans."
          />
        </FAQCategory>

        <FAQCategory title="4. Treatments" className="bg-yellow-50/50">
          <FAQItem
            value="treatment-types"
            question="What types of dental treatments are available?"
            answer="Treatments include routine check-ups, cosmetic dentistry, orthodontics, implants, and more."
          />
          <FAQItem
            value="cosmetic"
            question="Can I book cosmetic dental procedures through this platform?"
            answer="Yes, treatments like teeth whitening, veneers, and smile makeovers are available."
          />
          <FAQItem
            value="find-treatment"
            question="How do I know if a clinic offers the treatment I need?"
            answer="Use our 'Treatment Type' filter or check the clinic's profile page."
          />
        </FAQCategory>

        <FAQCategory title="5. Reviews & Ratings" className="bg-pink-50/50">
          <FAQItem
            value="genuine-reviews"
            question="Are the reviews on your platform genuine?"
            answer="Yes, all reviews are from verified patients who have booked and attended appointments."
          />
          <FAQItem
            value="leave-review"
            question="Can I leave a review after my appointment?"
            answer="Absolutely! We encourage patients to share their experiences to help others make informed choices."
          />
          <FAQItem
            value="ratings-calculation"
            question="How are ratings calculated?"
            answer="Ratings are based on an average score from verified patient reviews."
          />
        </FAQCategory>

        <FAQCategory title="6. Privacy, GDPR & Security" className="bg-indigo-50/50">
          <FAQItem
            value="data-safety"
            question="Is my personal information safe on this platform?"
            answer="Yes, we use advanced encryption to protect your personal and payment details."
          />
          <FAQItem
            value="third-parties"
            question="Will my information be shared with third parties?"
            answer="No, your information will only be shared with the dental clinic you book with, as required to confirm your appointment."
          />
          <FAQItem
            value="gdpr"
            question="How does this platform comply with GDPR regulations?"
            answer="We are fully GDPR compliant. Your data is processed lawfully, transparently, and for the specific purpose of booking and managing dental appointments. You can request access, corrections, or deletion of your personal data at any time by contacting info@alldentz.com."
          />
        </FAQCategory>

        <FAQCategory title="7. Technical Support" className="bg-cyan-50/50">
          <FAQItem
            value="booking-trouble"
            question="I'm having trouble booking an appointment. What should I do?"
            answer="Contact our support team via email or live chat, and we'll assist you immediately."
          />
          <FAQItem
            value="password-reset"
            question="I forgot my password. How do I reset it?"
            answer="Click on the 'Forgot Password' link on the login page to reset your password."
          />
          <FAQItem
            value="mobile-usage"
            question="Can I use the platform on my mobile device?"
            answer="Yes, our platform is fully mobile-friendly, and we also offer an app for iOS and Android."
          />
        </FAQCategory>

        <FAQCategory title="8. For Dental Clinics" className="bg-orange-50/50">
          <FAQItem
            value="join-platform"
            question="How can my dental practice join this platform?"
            answer="Click on 'List Your Practice' on our homepage and fill out the registration form."
          />
          <FAQItem
            value="clinic-fees"
            question="Is there a fee for clinics to join?"
            answer="Pricing plans vary based on the level of service and visibility. Contact our sales team for details."
          />
          <FAQItem
            value="manage-bookings"
            question="How do I manage my clinic's bookings?"
            answer="Log into your clinic dashboard to manage appointments, update schedules, and respond to patients."
          />
        </FAQCategory>

        <FAQCategory title="9. Promotions & Offers" className="bg-rose-50/50">
          <FAQItem
            value="discounts"
            question="Are there discounts or special offers available?"
            answer="Yes, many clinics offer seasonal discounts or promotions for new patients."
          />
          <FAQItem
            value="find-discounts"
            question="How do I find clinics offering discounts?"
            answer="Use the 'Promotions & Offers' filter when searching for clinics."
          />
        </FAQCategory>

        <FAQCategory title="10. Contact Us" className="bg-slate-50/50">
          <div className="space-y-4">
            <p>You can reach us via:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Live Chat: Available on our website</li>
              <li>Email: info@alldentz.com</li>
              <li>Phone: +44 (0)123 456 789</li>
            </ul>
          </div>
        </FAQCategory>
      </div>
    </div>
  );
};

export default FAQs;