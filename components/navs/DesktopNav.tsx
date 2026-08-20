"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "@/types";

const CLOSE_DELAY = 150;

export function DesktopNavItem({
  item,
  depth = 0,
  isSolid,
}: {
  item: NavLink;
  depth?: number;
  isSolid: boolean;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const hasChildren = !!item.subNav?.length;
  const isActive = pathname === item.href;

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  };

  const handleEnter = () => {
    clearCloseTimer();
    setOpen(true);
  };

  return (
    <div
      className={`relative ${depth === 0 ? "group flex flex-col gap-1" : ""}`}
      onMouseEnter={handleEnter}
      onMouseLeave={scheduleClose}
      onFocus={handleEnter}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) scheduleClose();
      }}
    >
      {depth === 0 ? (
        <>
          <Link
            href={item.href}
            className={`relative flex items-center gap-1 text-base font-medium transition-colors duration-300 hover:text-accent ${
              isSolid ? "text-body" : "text-white"
            }`}
          >
            {item.label}
            {hasChildren && (
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            )}
          </Link>
          <span
            className={`h-[2px] transition-all duration-300 ${
              isSolid ? "bg-accent" : "bg-white"
            } ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
          />
        </>
      ) : (
        <Link
          href={item.href}
          className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-body hover:bg-neutral-50 hover:text-accent whitespace-nowrap ${
            isActive ? "text-accent" : ""
          }`}
        >
          {item.label}
          {hasChildren && <ChevronRight size={14} className="shrink-0" />}
        </Link>
      )}

      {hasChildren && open && (
        <div
          className={`absolute z-50 min-w-[220px] rounded-md border border-borderc bg-white py-2 shadow-lg ${
            depth === 0 ? "top-full left-0 mt-2" : "top-0 left-full ml-1"
          }`}
        >
          {item.subNav!.map((child) => (
            <DesktopNavItem
              key={child.href}
              item={child}
              depth={depth + 1}
              isSolid={isSolid}
            />
          ))}
        </div>
      )}
    </div>
  );
}
