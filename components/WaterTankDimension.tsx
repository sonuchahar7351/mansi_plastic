const COLUMNS = [
  "S.No",
  "Capacity (Liters)",
  "Diameter (Inches)",
  "Height (Inches)",
  "Manhole Dia (Inch)",
];

const ROWS = [
  [1, 300, 29, 31.5, 16],
  [2, 500, 34, 37, 16],
  [3, 750, 39, 43.5, 16],
  [4, 1000, 42, 48, 16],
  [5, 1500, 49, 54.5, 16],
  [6, 2000, 53, 60, 16],
  [7, 3000, 58, 73.5, 16],
  [8, 5000, 74, 83.5, 16],
];

export default function WaterTankDimension() {
  return (
    <section aria-labelledby="dimension-heading" className="w-full">
      <h2
        id="dimension-heading"
        className="text-xl sm:text-2xl font-bold text-[#16305e] mb-2"
      >
        Water Tank Dimension
      </h2>
      <p className="text-sm text-slate-500 mb-4">
        Checking from phone? Please rotate to see full table.
      </p>

      <div className="overflow-x-auto rounded-md border border-gray-200">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <caption className="sr-only">
            Water tank capacity and dimensions
          </caption>
          <thead>
            <tr className="bg-sky-100">
              {COLUMNS.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-slate-700 whitespace-nowrap"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr
                key={row[0]}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                {row.map((cell, j) => (
                  <td
                    key={COLUMNS[j]}
                    className="border-t border-gray-200 px-4 py-3 text-slate-500"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
