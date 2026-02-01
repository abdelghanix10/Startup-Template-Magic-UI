export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl py-24">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: February 1, 2026</p>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us when you create an
            account, make a purchase, or communicate with us.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. How We Use Information
          </h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, and to communicate with you.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
          <p>
            We take reasonable measures to help protect information about you
            from loss, theft, misuse and unauthorized access, disclosure,
            alteration and destruction.
          </p>
        </section>
      </div>
    </div>
  );
}
