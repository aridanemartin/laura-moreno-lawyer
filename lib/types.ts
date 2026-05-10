export type FAQ = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  title: string;
  slug?: string;
  summary: string;
};

export type PageSEO = {
  title: string;
  description: string;
  canonical: string;
  ogType?: "website" | "article";
};

export type ServicePage = {
  title: string;
  h1: string;
  intro: string[];
  seo: PageSEO;
  services: ServiceItem[];
  faqs: FAQ[];
};

export type ServiceDetail = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string[];
  faqs: FAQ[];
};

export type BreadcrumbItem = {
  name: string;
  href: string;
};
