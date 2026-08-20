const FEATURES = [
  {
    left: "Unbreakable",
    right: "Tested",
    colorL: "text-sky-700",
    colorR: "text-emerald-600",
  },
  {
    left: "Threaded Lid [Ring Design]",
    right: "More Secure",
    colorL: "text-emerald-600",
    colorR: "text-orange-600",
  },
  {
    left: "Durable- Super Strong",
    right: "Technological Breakthrough",
    colorL: "text-orange-600",
    colorR: "text-sky-700",
  },
  {
    left: "Revolution Design",
    right: "Design By Industry Expert",
    colorL: "text-sky-700",
    colorR: "text-violet-600",
  },
  {
    left: "10 Years Guarantee",
    right: "Free Replacement",
    colorL: "text-orange-600",
    colorR: "text-sky-700",
  },
  {
    left: "High Density-Poly Hygiene",
    right: "Highest Quality",
    colorL: "text-orange-600",
    colorR: "text-violet-600",
  },
  {
    left: "Available Size",
    right: "300, 500, 750, 1000, 1500, 2000, 3000, 5000, Liters",
    colorL: "text-sky-700",
    colorR: "text-slate-700",
  },
  {
    left: "Range Quality",
    right: "Double, Triple, Four & Five Layers",
    colorL: "text-orange-600",
    colorR: "text-sky-700",
  },
  {
    left: "Available Colors",
    right: "Blue, White, Black & Yellow",
    colorL: "text-sky-700",
    colorR: "text-orange-600",
  },
];

export default function FeaturesTable() {
  return (
    <section aria-labelledby="description-heading" className="w-full">
      <h2
        id="description-heading"
        className="text-xl sm:text-2xl font-bold text-slate-900 mb-2"
      >
        Description
      </h2>
      <h3 className="text-base sm:text-lg font-bold text-[#16305e] leading-snug mb-4">
        Mansi Plastic Water Tanks – South India&apos;s Largest Water Tanks
        Selling Brand Best 3 Layer Water Tanks Key Features:
      </h3>

      <div className="overflow-hidden rounded-md border border-gray-200">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">
            Key features of Mansi Plastic 3 layer water tanks
          </caption>
          <thead>
            <tr className="bg-gray-50">
              <th
                colSpan={2}
                scope="col"
                className="border-b border-gray-200 px-4 py-3 text-left text-xs sm:text-sm font-bold tracking-wide text-slate-800"
              >
                FEATURES NO OTHER TANK CAN MATCH
              </th>
            </tr>
          </thead>
          <tbody>
            {FEATURES.map((row, i) => (
              <tr
                key={row.left}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
              >
                <td
                  className={`w-1/2 border-t border-gray-200 px-4 py-3 align-top font-semibold ${row.colorL}`}
                >
                  {row.left}
                </td>
                <td
                  className={`w-1/2 border-t border-gray-200 px-4 py-3 align-top font-semibold ${row.colorR}`}
                >
                  {row.right}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm sm:text-base text-slate-600">
        Now Available in{" "}
        <span className="font-semibold text-slate-800">
          Telangana | Andhra Pradesh | Karnataka | Maharashtra
        </span>{" "}
        Get in touch with us for more queries:{" "}
        <a
          href="https://www.mansipowertank.com"
          className="text-sky-700 font-semibold hover:underline"
        >
          www.mansipowertank.com
        </a>{" "}
        Toll Free No.{" "}
        <a
          href="tel:1800890471"
          className="text-slate-800 font-semibold hover:underline"
        >
          1800 890 471
        </a>
      </p>
    </section>
  );
}
