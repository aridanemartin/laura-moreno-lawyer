"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/types";
import { buildFAQSchema } from "@/lib/schema";
import JsonLd from "@/components/seo/JsonLd";

type Props = {
  faqs: FAQ[];
  heading?: string;
};

export default function FAQAccordion({
  faqs,
  heading = "Preguntas frecuentes",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-ivory">
      <JsonLd data={buildFAQSchema(faqs)} />
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-navy text-center mb-10">
          {heading}
        </h2>
        <dl className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-ivory-dark rounded-lg bg-white overflow-hidden"
            >
              <dt>
                <button
                  type="button"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-ivory/60 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-medium text-navy text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex-shrink-0 text-accent text-lg transition-transform ${openIndex === i ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                hidden={openIndex !== i}
                className="px-6 pb-5"
              >
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
