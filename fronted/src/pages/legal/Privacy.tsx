const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg">
        <p className="text-muted-foreground mb-6">Last updated: March 2024</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to AlldentZ. At AlldentZ, we are deeply committed to safeguarding your privacy and 
            ensuring that your personal information is protected. This Privacy Policy explains in detail 
            how we collect, use, disclose, and safeguard your information when you visit our dental website, 
            use our services, or interact with us in any way.
          </p>
          <p>
            We adhere to all applicable data protection regulations, including the General Data Protection 
            Regulation (GDPR) and other relevant privacy laws.
          </p>
          <p>
            By accessing or using our website, you consent to the practices described in this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
          <p>We may collect and process the following types of data:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal Information: Full name, email address, phone number, home or business address, and identification numbers.</li>
            <li>Health Information: Dental history, treatment details, medical history, insurance details, and clinical photographs.</li>
            <li>Account Information: Login credentials, preferences, and account activity.</li>
            <li>Technical Information: IP address, browser type, operating system, device type, geolocation data, and website usage patterns.</li>
            <li>Communication Data: Emails, messages, or feedback you send to us.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide dental care and related services.</li>
            <li>To schedule and manage appointments.</li>
            <li>To maintain accurate patient records.</li>
            <li>To process payments and manage billing.</li>
            <li>To improve the functionality and performance of our website.</li>
            <li>To send administrative communications, updates, and notifications.</li>
            <li>To comply with legal, regulatory, or contractual obligations.</li>
            <li>To ensure the security of our systems and prevent fraud.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Legal Basis for Data Processing</h2>
          <p>We process your data based on the following legal grounds:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your explicit consent.</li>
            <li>Performance of a contract.</li>
            <li>Compliance with legal obligations.</li>
            <li>Legitimate interests pursued by AlldentZ.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Sharing and Disclosure</h2>
          <p>
            We do not sell or rent your personal data. However, we may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Dental professionals for the purpose of providing dental services.</li>
            <li>Third-party service providers who support our operations.</li>
            <li>Legal and regulatory authorities when required by law.</li>
            <li>Insurance providers for claims processing.</li>
          </ul>
          <p>All third parties are bound by confidentiality agreements and data protection standards.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your data</li>
            <li>Correct inaccuracies in your data</li>
            <li>Request data deletion</li>
            <li>Restrict data processing</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
            <li>Withdraw consent</li>
          </ul>
          <p>To exercise these rights, contact us at info@alldentz.com</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;