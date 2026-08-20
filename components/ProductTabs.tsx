"use client";

import { useState } from "react";

const TABS = [
  { id: "description", label: "Description" },
  { id: "additional", label: "Additional Information" },
  { id: "dimension", label: "Water Tank Dimension" },
  { id: "enquiry", label: "Send Enquiry" },
  { id: "layers", label: "Layers Bifurcation" },
  { id: "reviews", label: "Reviews (0)" },
];

export default function ProductTabs({
  activeTab,
  onTabChange,
  panels = {},
}: any) {
  const [internalTab, setInternalTab] = useState("description");

  const current = activeTab ?? internalTab;
  const setTab = onTabChange ?? setInternalTab;

  return (
    <div className="w-full">
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Product information tabs"
        className="flex flex-wrap border-b border-gray-200 gap-2"
      >
        {TABS.map((tab) => {
          const isActive = tab.id === current;
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setTab(tab.id)}
              className={[
                "shrink-0 whitespace-nowrap px-4 py-3 text-sm sm:text-[15px] font-medium border-b-2 transition-colors",
                isActive
                  ? "border-amber-500 text-slate-900 bg-white"
                  : "border-transparent text-slate-700 bg-gray-50 hover:bg-gray-100",
              ].join(" ")}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab panel */}
      <div
        role="tabpanel"
        id={`panel-${current}`}
        aria-labelledby={`tab-${current}`}
        className="pt-6"
      >
        {panels[current] ?? (
          <p className="text-sm text-slate-500">Content coming soon.</p>
        )}
      </div>
    </div>
  );
}
