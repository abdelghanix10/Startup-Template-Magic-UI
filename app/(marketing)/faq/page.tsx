const faqs = [
  {
    question: "What is this service?",
    answer:
      "This is a startup template designed to help you build your SaaS faster with modern technologies like Next.js, Tailwind CSS, and Magic UI.",
  },
  {
    question: "How do I get started?",
    answer:
      "You can get started by cloning the repository and following the installation instructions in the README.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial for all our premium plans.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time from your account settings.",
  },
  {
    question: "What technologies are used?",
    answer:
      "We use Next.js, TypeScript, Tailwind CSS, Framer Motion, and Magic UI components.",
  },
];

export default function FAQPage() {
  return (
    <div className="container max-w-4xl py-24">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-6">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
