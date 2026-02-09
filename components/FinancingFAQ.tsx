const faqs = [
  {
    question: "How does financing work?",
    answer:
      "We partner with trusted financing providers to offer flexible plans. We'll guide you through options during your consultation."
  },
  {
    question: "Is there a minimum project size?",
    answer:
      "Financing can be tailored for outdoor kitchen builds, premium grills, and larger product packages."
  },
  {
    question: "How fast is approval?",
    answer:
      "Most applications receive a response quickly after submitting basic information."
  }
];

export default function FinancingFAQ() {
  return (
    <div className="grid gap-6">
      {faqs.map((faq) => (
        <div key={faq.question} className="glass-card">
          <h3 className="heading-md text-sand">{faq.question}</h3>
          <p className="mt-3 text-sm text-steel">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
