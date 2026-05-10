type Signal = { title: string; description: string };

type Props = {
  heading?: string;
  signals: Signal[];
};

export default function TrustSignals({ heading, signals }: Props) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {heading && (
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-navy text-center mb-10">
            {heading}
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {signals.map((signal, i) => (
            <div
              key={i}
              className="border border-ivory-dark rounded-lg p-6 bg-ivory"
            >
              <h3 className="font-semibold text-navy mb-3">{signal.title}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
