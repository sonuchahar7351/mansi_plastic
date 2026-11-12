"use client";

import { useState } from "react";

const TABS = [
  { id: "description", label: "Description" },
  { id: "features", label: "Key Features" },
  { id: "colours", label: "Colours" },
  { id: "layers", label: "Layers Bifurcation" },
  { id: "additional", label: "Additional Information" },
  { id: "dimension", label: "Water Tank Dimension" },
  { id: "enquiry", label: "Send Enquiry" },
];

export default function ProductTabs({
  activeTab,
  onTabChange,
  panels = {},
}: any) {
  const [internalTab, setInternalTab] = useState("description");

  const current = activeTab ?? internalTab;
  const setTab = onTabChange ?? setInternalTab;

  // Only show tabs that actually have content
  const visibleTabs = TABS.filter((t) => panels[t.id]);

  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Product information tabs"
        className="flex flex-wrap border-b border-gray-200 gap-2"
      >
        {visibleTabs.map((tab) => {
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
