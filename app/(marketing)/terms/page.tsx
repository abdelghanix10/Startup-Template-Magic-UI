export default function TermsPage() {
  return (
    <div className="container max-w-4xl py-24">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: February 1, 2026</p>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using our service, you agree to be bound by these
            Terms of Service. If you disagree with any part of the terms, you
            may not access the service.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the
            materials on our website for personal, non-commercial transitory
            viewing only.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p>
            The materials on our website are provided on an 'as is' basis. We
            make no warranties, expressed or implied, and hereby disclaim and
            negate all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </p>
        </section>
      </div>
    </div>
  );
}
