const SPECS = [
  { label: "Color", value: "Blue" },
  { label: "Brand:", value: "Agarwal Water Tank" },
  { label: "Storage Capacity:", value: "300-5000 L" },
  { label: "Usage:", value: "Water Storage" },
  { label: "Material:", value: "LLDPE Virgin Plastic" },
  { label: "Application", value: "Residential, Commercial, Manufacturing" },
];

export default function AdditionalInfo() {
  return (
    <section aria-labelledby="additional-info-heading" className="w-full">
      <h2
        id="additional-info-heading"
        className="text-xl sm:text-2xl font-bold text-[#16305e] mb-4"
      >
        Additional information
      </h2>

      <div className="overflow-hidden rounded-md border border-gray-200">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">
            Additional product specifications
          </caption>
          <tbody>
            {SPECS.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <th
                  scope="row"
                  className="w-1/3 sm:w-1/4 border-t border-gray-200 px-4 py-3 text-left align-top font-semibold text-slate-700"
                >
                  {row.label}
                </th>
                <td className="border-t border-gray-200 px-4 py-3 align-top italic text-slate-500">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
