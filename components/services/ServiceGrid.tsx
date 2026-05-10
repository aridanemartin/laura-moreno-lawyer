import type { ServiceItem } from "@/lib/types";
import ServiceCard from "./ServiceCard";

type Props = {
  services: ServiceItem[];
  heading?: string;
};

export default function ServiceGrid({ services, heading }: Props) {
  return (
    <section className="py-16 px-4 bg-ivory">
      <div className="max-w-6xl mx-auto">
        {heading && (
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-navy text-center mb-10">
            {heading}
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
