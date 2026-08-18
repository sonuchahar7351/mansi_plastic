import Image from "next/image";
import Stats from "./Stats";

export default function CompanyInformation() {
  return (
    <section className="bg-white">
      {/* Company Story */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Since 1982
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Mansi Plastic
            </h2>

            <div className="mt-6 space-y-4 text-base leading-7 text-gray-600">
              <p>
                Mansi Plastic has been manufacturing quality water storage tanks
                since 1982. Over the years, we have built our reputation by
                focusing on durability, quality, innovation, and reliable
                performance.
              </p>

              <p>
                Our products are manufactured using quality raw materials and
                modern manufacturing processes to provide long-lasting and
                hygienic water storage solutions for residential, commercial,
                agricultural, and industrial applications.
              </p>

              <p>
                We manufacture water tanks in double-layer, triple-layer, and
                four-layer constructions, available in a wide range of
                capacities to meet different customer requirements.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-gray-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900">Our Journey</h3>

            <div className="mt-8 space-y-7">
              {[
                {
                  year: "1982",
                  title: "Company Founded",
                  text: "Mansi Plastic began its journey with a vision to provide dependable plastic products.",
                },
                {
                  year: "2000+",
                  title: "Expanding Product Range",
                  text: "Expanded manufacturing capabilities and introduced multiple water storage solutions.",
                },
                {
                  year: "2010+",
                  title: "Growing Market Presence",
                  text: "Expanded our customer base across residential, commercial and industrial markets.",
                },
                {
                  year: "Today",
                  title: "Building the Future",
                  text: "Continuing to improve manufacturing, product quality and customer experience.",
                },
              ].map((item) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex h-10 min-w-20 items-center justify-center rounded-lg bg-primary px-3 text-sm font-bold text-white">
                    {item.year}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              What We Do
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Reliable Water Storage Solutions
            </h2>

            <p className="mt-4 text-gray-600">
              We design and manufacture durable plastic water storage tanks for
              a wide range of applications and requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Manufacturing",
                text: "Modern manufacturing processes designed to deliver consistent quality and reliable performance.",
              },
              {
                title: "Product Quality",
                text: "Carefully selected raw materials and quality checks help ensure durable and dependable products.",
              },
              {
                title: "Product Range",
                text: "Multiple tank designs, capacities and layer constructions for different requirements.",
              },
              {
                title: "Customer Support",
                text: "We work closely with customers to understand their requirements and provide suitable solutions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manufacturing */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl bg-gray-100">
            <div className="flex min-h-[320px] items-center justify-center p-8 text-center">
              <div>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
                  🏭
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Modern Manufacturing
                </h3>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-600">
                  Replace this area with an image of your manufacturing
                  facility, production line or factory.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Manufacturing Excellence
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Built for Strength and Long-Term Performance
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Our manufacturing approach focuses on producing water storage
              tanks that deliver strength, durability and consistent
              performance. From raw material selection to the finished product,
              quality remains an important part of our manufacturing process.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                "Quality Raw Materials",
                "Modern Production Methods",
                "Consistent Wall Thickness",
                "Quality Inspection",
                "UV Stabilized Materials",
                "Durable Construction",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm text-white">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-8 text-white">
              <span className="text-sm font-semibold uppercase tracking-wider">
                Our Mission
              </span>

              <h3 className="mt-3 text-2xl font-bold">
                Deliver Quality Water Storage Solutions
              </h3>

              <p className="mt-4 leading-7 text-blue-50">
                Our mission is to manufacture reliable, durable and affordable
                water storage products while maintaining consistent quality and
                delivering value to our customers.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-8 text-white">
              <span className="text-sm font-semibold uppercase tracking-wider">
                Our Vision
              </span>

              <h3 className="mt-3 text-2xl font-bold">
                Building Trust for Generations
              </h3>

              <p className="mt-4 leading-7 text-blue-50">
                Our vision is to become a trusted water storage solutions
                manufacturer by continuously improving our products, technology,
                manufacturing capabilities and customer service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CEO / Leadership */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
          <div className="mx-auto w-full max-w-[280px]">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src="/images/ceo-placeholder.jpg"
                alt="Rajesh Sharma - Founder and CEO"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Leadership
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Meet Our Leadership
            </h2>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Mr. Thakur Giridhari Singh
            </h3>

            <p className="mt-1 font-medium text-primary">Founder & CEO</p>

            <p className="mt-5 max-w-3xl leading-7 text-gray-600">
              With decades of experience in the plastic manufacturing industry,
              Mr. Thakur Giridhari Singh has helped guide Mansi Plastic towards
              becoming a trusted manufacturer of water storage solutions. His
              focus remains on product quality, customer satisfaction,
              continuous improvement and sustainable growth.
            </p>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Reach
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Serving Customers Across Multiple Markets
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Our products are suitable for customers across residential,
            commercial, agricultural and industrial sectors.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Residential", "Commercial", "Agricultural", "Industrial"].map(
              (area) => (
                <div
                  key={area}
                  className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
                >
                  <h3 className="font-semibold text-gray-900">{area}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Reliable water storage solutions for {area.toLowerCase()}{" "}
                    requirements.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
