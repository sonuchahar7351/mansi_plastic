"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { usePathname } from "next/navigation";
import { useEnquiryModal } from "@/context/EnquiryForm";
import Image from "next/image";
import { DesktopNavItem } from "./navs/DesktopNav";
import { MobileNavItem } from "./navs/MobileNav";

export default function Header({ isVisible = true }: { isVisible?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  const { openModal } = useEnquiryModal();

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const pathname = usePathname();

  const isSolid = scrolled || mobileOpen || isVisible;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <Link href="/" className={``}>
          <div className="hidden sm:block">
            <Image
              src="/images/mansi-logo.png"
              alt=""
              width={160}
              height={100}
              unoptimized={true}
              quality={100}
            />
          </div>
          <div className="block sm:hidden">
            <Image
              src="/images/mansi-logo.png"
              alt=""
              width={150}
              height={100}
              unoptimized={true}
              quality={100}
            />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <DesktopNavItem key={link.href} item={link} isSolid={isSolid} />
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-secondary"
            onClick={() => openModal()}
          >
            Enquire Now
          </button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
            isSolid ? "text-primary" : "text-white"
          }`}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-borderc">
          <div className="container-page flex flex-col py-2">
            {navLinks.map((link) => (
              <MobileNavItem
                key={link.href}
                item={link}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
            <button
              onClick={() => {
                openModal();
                setMobileOpen(false);
              }}
              className="mt-3 mb-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-secondary"
            >
              Enquire Now
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
