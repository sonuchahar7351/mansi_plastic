"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NavLink } from "@/types";

export function MobileNavItem({
  item,
  depth = 0,
  onNavigate,
}: {
  item: NavLink;
  depth?: number;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = !!item.subNav?.length;

  return (
    <div className={depth > 0 ? "pl-4 border-l border-borderc" : ""}>
      <div className="flex items-center justify-between border-b border-borderc last:border-b-0">
        <Link
          href={item.href}
          onClick={onNavigate}
          className="flex-1 py-3 text-sm font-medium text-body"
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            type="button"
            aria-label={
              expanded ? `Collapse ${item.label}` : `Expand ${item.label}`
            }
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
            className="p-3 text-body"
          >
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      {hasChildren && expanded && (
        <div className="flex flex-col">
          {item.subNav!.map((child) => (
            <MobileNavItem
              key={child.href}
              item={child}
              depth={depth + 1}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
