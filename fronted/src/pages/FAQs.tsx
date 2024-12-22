import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions (FAQs) for a Dental Booking Platform</h1>

      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">1. General Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="what-is-platform">
              <AccordionTrigger>What is this platform for?</AccordionTrigger>
              <AccordionContent>
                Our platform helps you easily find, compare, and book dental appointments at trusted clinics across the UK.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="is-it-free">
              <AccordionTrigger>Is it free to use this platform?</AccordionTrigger>
              <AccordionContent>
                Yes, browsing and booking dental appointments on our platform is completely free for patients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="how-to-book">
              <AccordionTrigger>How do I book an appointment?</AccordionTrigger>
              <AccordionContent>
                Simply search for a dental practice using our filters, select your preferred appointment slot, and confirm your booking online.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="book-for-others">
              <AccordionTrigger>Can I book an appointment for someone else?</AccordionTrigger>
              <AccordionContent>
                Yes, you can book appointments for family members or friends. Just ensure you enter their details during the booking process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="clinic-reliability">
              <AccordionTrigger>How do I know if a dental clinic is reliable?</AccordionTrigger>
              <AccordionContent>
                All clinics listed are verified and meet UK regulatory standards, including CQC (Care Quality Commission) approval.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">2. Appointments</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="earliest-appointment">
              <AccordionTrigger>How can I find the earliest available appointment?</AccordionTrigger>
              <AccordionContent>
                Use the "Earliest Availability" filter to see clinics with the soonest open slots.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reschedule">
              <AccordionTrigger>Can I reschedule or cancel an appointment?</AccordionTrigger>
              <AccordionContent>
                Yes, rescheduling or cancelling can be done directly through your account dashboard, subject to the clinic's cancellation policy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="reminders">
              <AccordionTrigger>Will I receive appointment reminders?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer SMS and email reminders before your scheduled appointment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="emergency">
              <AccordionTrigger>Do clinics offer emergency appointments?</AccordionTrigger>
              <AccordionContent>
                Many clinics listed provide emergency services. Use the "Emergency Appointments" filter to find them.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">3. Payments & Insurance</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="upfront-payment">
              <AccordionTrigger>Do I need to pay upfront when booking an appointment?</AccordionTrigger>
              <AccordionContent>
                Payment policies vary by clinic. Some require upfront payment, while others accept payment after treatment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="payment-methods">
              <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
              <AccordionContent>
                Most clinics accept credit/debit cards, bank transfers, and sometimes payment plans.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="insurance">
              <AccordionTrigger>Can I use my dental insurance?</AccordionTrigger>
              <AccordionContent>
                Yes, you can filter clinics based on insurance providers they accept.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="payment-plans">
              <AccordionTrigger>Are payment plans available for expensive treatments?</AccordionTrigger>
              <AccordionContent>
                Many clinics offer interest-free finance options or payment plans.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">4. Treatments</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="treatment-types">
              <AccordionTrigger>What types of dental treatments are available?</AccordionTrigger>
              <AccordionContent>
                Treatments include routine check-ups, cosmetic dentistry, orthodontics, implants, and more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cosmetic">
              <AccordionTrigger>Can I book cosmetic dental procedures through this platform?</AccordionTrigger>
              <AccordionContent>
                Yes, treatments like teeth whitening, veneers, and smile makeovers are available.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="find-treatment">
              <AccordionTrigger>How do I know if a clinic offers the treatment I need?</AccordionTrigger>
              <AccordionContent>
                Use our "Treatment Type" filter or check the clinic's profile page.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">5. Reviews & Ratings</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="genuine-reviews">
              <AccordionTrigger>Are the reviews on your platform genuine?</AccordionTrigger>
              <AccordionContent>
                Yes, all reviews are from verified patients who have booked and attended appointments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="leave-review">
              <AccordionTrigger>Can I leave a review after my appointment?</AccordionTrigger>
              <AccordionContent>
                Absolutely! We encourage patients to share their experiences to help others make informed choices.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ratings-calculation">
              <AccordionTrigger>How are ratings calculated?</AccordionTrigger>
              <AccordionContent>
                Ratings are based on an average score from verified patient reviews.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">6. Privacy, GDPR & Security</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="data-safety">
              <AccordionTrigger>Is my personal information safe on this platform?</AccordionTrigger>
              <AccordionContent>
                Yes, we use advanced encryption to protect your personal and payment details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="third-parties">
              <AccordionTrigger>Will my information be shared with third parties?</AccordionTrigger>
              <AccordionContent>
                No, your information will only be shared with the dental clinic you book with, as required to confirm your appointment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="gdpr">
              <AccordionTrigger>How does this platform comply with GDPR regulations?</AccordionTrigger>
              <AccordionContent>
                We are fully GDPR compliant. Your data is processed lawfully, transparently, and for the specific purpose of booking and managing dental appointments. You can request access, corrections, or deletion of your personal data at any time by contacting info@alldentz.com.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">7. Technical Support</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="booking-trouble">
              <AccordionTrigger>I'm having trouble booking an appointment. What should I do?</AccordionTrigger>
              <AccordionContent>
                Contact our support team via email or live chat, and we'll assist you immediately.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="password-reset">
              <AccordionTrigger>I forgot my password. How do I reset it?</AccordionTrigger>
              <AccordionContent>
                Click on the "Forgot Password" link on the login page to reset your password.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="mobile-usage">
              <AccordionTrigger>Can I use the platform on my mobile device?</AccordionTrigger>
              <AccordionContent>
                Yes, our platform is fully mobile-friendly, and we also offer an app for iOS and Android.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">8. For Dental Clinics</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="join-platform">
              <AccordionTrigger>How can my dental practice join this platform?</AccordionTrigger>
              <AccordionContent>
                Click on "List Your Practice" on our homepage and fill out the registration form.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="clinic-fees">
              <AccordionTrigger>Is there a fee for clinics to join?</AccordionTrigger>
              <AccordionContent>
                Pricing plans vary based on the level of service and visibility. Contact our sales team for details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="manage-bookings">
              <AccordionTrigger>How do I manage my clinic's bookings?</AccordionTrigger>
              <AccordionContent>
                Log into your clinic dashboard to manage appointments, update schedules, and respond to patients.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">9. Promotions & Offers</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="discounts">
              <AccordionTrigger>Are there discounts or special offers available?</AccordionTrigger>
              <AccordionContent>
                Yes, many clinics offer seasonal discounts or promotions for new patients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="find-discounts">
              <AccordionTrigger>How do I find clinics offering discounts?</AccordionTrigger>
              <AccordionContent>
                Use the "Promotions & Offers" filter when searching for clinics.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <div className="space-y-4">
            <p>You can reach us via:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: info@alldentz.com</li>
              <li>Phone: +44 (0)123 456 789</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FAQs;