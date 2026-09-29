import BrandExplorer from "@/components/BrandExplorer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { compnanydata } from "@/lib/company";
import { CatalogData } from "@/types/company";

const data = compnanydata as CatalogData;

export default function Page({ params }: { params: { brand: string } }) {
  const brandId = params.brand;
  const { company, material, reference_table: ref } = data;

  return (
    <>
      <Header isVisible={true} />
      <div className="mx-auto max-w-6xl section-padding px-5">
        <section className="py-10 sm:py-16">
          <h1 className="font-display max-w-3xl text-5xl leading-none font-extrabold tracking-tighter sm:text-7xl text-primary">
            Water storage, built to last.
          </h1>
          <p className="mt-5 max-w-xl text-slate-600 ">
            Four brands from {company}, all made from {material}, for homes,
            offices and commercial spaces.
          </p>
        </section>

        <BrandExplorer brandId={brandId} />

        <section className="pt-16">
          <h2 className="font-display mb-4 text-3xl font-extrabold">
            {ref.title}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[560px] text-left">
              <thead>
                <tr>
                  {ref.columns.map((c) => (
                    <th key={c} className="border-b border-slate-200 px-4 py-3">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ref.rows.map((row) => (
                  <tr
                    key={row[0]}
                    className={`border-b border-slate-200 last:border-0 ${row[0].toLowerCase().includes(brandId) ? "bg-red-400" : ""}`}
                  >
                    {row.map((cell, i) =>
                      i === 0 ? (
                        <th key={i} scope="row" className="px-4 py-3">
                          {cell}
                        </th>
                      ) : (
                        <td key={i} className="px-4 py-3">
                          {cell || "–"}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
