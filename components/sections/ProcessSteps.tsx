type Step = { title: string; description: string };

type Props = {
  heading?: string;
  steps: Step[];
};

export default function ProcessSteps({
  heading = "Cómo trabajamos",
  steps,
}: Props) {
  return (
    <section className="py-16 px-4 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-navy text-center mb-10">
          {heading}
        </h2>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <li key={i} className="flex flex-col">
              <span className="text-4xl font-heading font-bold text-accent mb-3">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold text-navy mb-2">{step.title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
