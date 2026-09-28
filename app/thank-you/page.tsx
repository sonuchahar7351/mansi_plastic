import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <section className="section-padding bg-white min-h-[60vh] flex items-center">
      <div className="container-page text-center max-w-xl mx-auto">
        <CheckCircle2 size={48} className="text-accent mx-auto mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Thank You!
        </h1>
        <p className="mt-4 text-sm text-body/80">
          Your enquiry has been received. Our team will get back to you shortly.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
