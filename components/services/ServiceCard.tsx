import Link from "next/link";
import type { ServiceItem } from "@/lib/types";

type Props = ServiceItem;

export default function ServiceCard({ title, summary, slug }: Props) {
  return (
    <div className="border border-ivory-dark rounded-lg p-6 bg-white hover:shadow-md transition-shadow flex flex-col">
      <h3 className="font-semibold text-navy mb-3 leading-snug">{title}</h3>
      <p className="text-sm text-charcoal/70 leading-relaxed flex-1">{summary}</p>
      {slug && (
        <Link
          href={slug}
          className="mt-4 text-sm text-accent font-medium hover:underline"
        >
          Más información →
        </Link>
      )}
    </div>
  );
}
