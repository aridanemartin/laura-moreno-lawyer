type Props = {
  heading?: string;
  intro?: string;
  items: string[];
};

export default function DocumentChecklist({ heading, intro, items }: Props) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {heading && (
          <h2 className="font-heading text-2xl font-semibold text-navy mb-4">
            {heading}
          </h2>
        )}
        {intro && (
          <p className="text-charcoal/70 mb-6 leading-relaxed">{intro}</p>
        )}
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border-2 border-accent" aria-hidden="true" />
              <span className="text-sm text-charcoal/80 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
