import { CheckCircle2 } from "lucide-react";

const MATERIAL_COMPOSITION = [
  {
    title: "The first layer",
    text: "of our 3 Layer Water Tank comprises virgin food-grade material, ensuring polluted-free water, safe for drinking.",
  },
  {
    title: "The second layer",
    text: "offers insulation to the tank, decreasing the water heating level.",
  },
  {
    title: "The outermost layer",
    text: "UV stabilized, reducing the damaging effects of the sun's rays.",
  },
];

const FEATURES = [
  {
    title: "Saves Energy:",
    text: "Insulation layers lower the temperature of the water, keeping a 20-degree differential. Because of the insulation, cooling requires less energy.",
  },
  {
    title: "Stronger:",
    text: "We have extra ribs in our tanks for extra strength. So when the tank is full, it decreases bulging and the risk of the tank exploding under pressure.",
  },
  {
    title: "Extra Secure:",
    text: "Our tank's lid design comprises screws rather than hinges, guaranteeing an airtight seal. The security rings included secures the item against theft and unauthorized usage.",
  },
];

export default function ProductInfo({
  title = "Mansi Plastic – 3 Layers Water Tank",
  priceLabel = "Per Liter",
  category = "Mansi Plastic Water Tanks",
  categoryHref = "#",
  contactHref = "#contact",
}) {
  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#16305e]">{title}</h1>
      <p className="mt-1 text-sm font-medium text-amber-600">{priceLabel}</p>

      <h2 className="mt-5 text-lg sm:text-xl font-bold text-[#16305e]">
        3 Layers Water Tank | 10 Years Warranty | ISO 9001 Certified |
        Anti-Bacterial
      </h2>

      <h3 className="mt-5 text-base sm:text-lg font-bold text-[#16305e]">
        Material Composition of Tanks
      </h3>
      <ul className="mt-2 space-y-2">
        {MATERIAL_COMPOSITION.map((item) => (
          <li
            key={item.title}
            className="flex gap-2 text-sm sm:text-[15px] text-slate-700"
          >
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-sky-600"
              aria-hidden="true"
            />
            <span>
              <span className="font-semibold text-slate-900">{item.title}</span>{" "}
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      <h3 className="mt-6 text-base sm:text-lg font-bold text-[#16305e]">
        Features of 3 Layer Water Tank 1000 Litre Price
      </h3>
      <ul className="mt-2 space-y-2">
        {FEATURES.map((item) => (
          <li
            key={item.title}
            className="flex gap-2 text-sm sm:text-[15px] text-slate-700"
          >
            <CheckCircle2
              className="mt-0.5 h-4 w-4 shrink-0 text-sky-600"
              aria-hidden="true"
            />
            <span>
              <span className="font-semibold text-slate-900">{item.title}</span>{" "}
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm sm:text-[15px] text-slate-700">
        Shop the best Quality{" "}
        <span className="font-semibold text-slate-900">3 Layer Water Tank</span>{" "}
        from Mansi Plastic Water Tanks. Our Water Tanks come in 1000 Liter, 750
        Liter, and 500 Liter range.
      </p>

      <p className="mt-2 text-sm sm:text-[15px] text-slate-700">
        Check below for all details or{" "}
        <a
          href={contactHref}
          className="font-semibold text-sky-700 hover:underline"
        >
          Contact us
        </a>
      </p>

      <p className="mt-6 text-xs sm:text-sm text-slate-500">
        Category:{" "}
        <a href={categoryHref} className="text-sky-700 hover:underline">
          {category}
        </a>
      </p>
    </div>
  );
}
