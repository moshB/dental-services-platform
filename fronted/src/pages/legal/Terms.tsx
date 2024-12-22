const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <div className="prose prose-lg">
        <p className="text-muted-foreground mb-6">Last updated: March 2024</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using AlldentZ, you agree to comply with these Terms and Conditions. 
            If you do not agree, please refrain from using our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Services Provided</h2>
          <p>
            AlldentZ provides dental management tools, appointment scheduling, secure patient records, 
            and other dental practice support services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
          <p>Users must:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate and up-to-date information.</li>
            <li>Maintain the confidentiality of their account credentials.</li>
            <li>Use the platform in compliance with applicable laws and regulations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Prohibited Activities</h2>
          <p>Users must not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Attempt unauthorized access to other users' data.</li>
            <li>Distribute harmful software or malicious content.</li>
            <li>Misuse, manipulate, or reverse-engineer the platform.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
          <p>
            All trademarks, logos, text, images, and software on the platform are the intellectual 
            property of AlldentZ. Unauthorized reproduction or distribution is strictly prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Disclaimers and Liability</h2>
          <p>
            While we strive to provide accurate and reliable services, AlldentZ cannot guarantee 
            uninterrupted or error-free operation. We are not liable for damages arising from misuse 
            or system failures.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Termination of Service</h2>
          <p>
            We reserve the right to suspend or terminate user accounts in cases of breach of these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
          <p>These Terms are governed by the laws of England and Wales.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p>For questions regarding these Terms, contact us at info@alldentz.com.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;