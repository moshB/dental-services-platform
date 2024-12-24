const Cookie = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose prose-lg">
        <p className="text-muted-foreground mb-6">Last updated: March 2024</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Our website uses cookies to enhance user experience, analyze site traffic, and deliver 
            targeted advertisements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Essential Cookies: Necessary for core website functionality.</li>
            <li>Performance Cookies: Analyze user behavior for performance improvements.</li>
            <li>Functional Cookies: Remember preferences and settings.</li>
            <li>Marketing Cookies: Deliver personalized advertising.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How to Manage Cookies</h2>
          <p>
            You can manage cookies through your browser settings. Note that disabling cookies may 
            affect website performance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
          <p>
            We use third-party tools, such as Google Analytics, to gather anonymized website 
            traffic insights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookie Retention Period</h2>
          <p>Cookies are stored for varying periods, depending on their purpose.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy periodically. Please review it regularly.
          </p>
          <p className="mt-4">
            For questions, contact us at info@alldentz.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Cookie;