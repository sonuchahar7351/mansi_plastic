import { MapPin, Phone, FileText, MessageCircle } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white section-padding">
      {/* Hero */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Get In Touch
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Have a question about our water tanks, dealership opportunities,
            pricing, or bulk orders? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-5 py-12 sm:px-8 lg:px-16 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {/* Office Address */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>

            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Office Address
            </h2>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              H. No. 10-1-670/1/B, A.C. Guards,
              <br />
              Near Rock Memorial High School,
              <br />
              Khairatabad, Hyderabad – 500004
            </p>
          </div>

          {/* Manufacturing Unit */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>

            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Manufacturing Unit
            </h2>

            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              Plot No. 130 &amp; 131, IDA, Katedan,
              <br />
              Rajendranagar Circle,
              <br />
              Ranga Reddy District, Telangana – 500077
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>

            <h2 className="mb-3 text-xl font-semibold text-gray-900">Phone</h2>

            <a
              href="tel:9246548874"
              className="text-lg font-semibold text-gray-800 transition hover:text-primary"
            >
              9246548874
            </a>

            <p className="mt-2 text-sm text-gray-500">
              Call us for product enquiries and business opportunities.
            </p>
          </div>

          {/* GSTIN */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>

            <h2 className="mb-3 text-xl font-semibold text-gray-900">GSTIN</h2>

            <p className="text-lg font-semibold tracking-wide text-gray-800">
              36AQWPS0952K1Z1
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Our registered GST identification number.
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="px-5 pb-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gray-900 px-6 py-12 text-center sm:px-10 lg:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
            <MessageCircle className="h-7 w-7 text-white" />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
            Looking for the Right Water Storage Solution?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            For product enquiries, dealership opportunities, pricing, or bulk
            orders, contact our team today. We’ll be happy to assist you.
          </p>

          <a
            href="tel:9246548874"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
          >
            <Phone className="h-4 w-4" />
            Call Us Today
          </a>
        </div>
      </section>
    </main>
  );
}
