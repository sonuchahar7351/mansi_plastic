"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "919246548874"; // Replace with your WhatsApp number
  const message = "Hello! I would like to know more.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 left-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#1ebe5d]"
    >
      <MessageCircle size={30} strokeWidth={2.5} />

      {/* <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-red-500" /> */}
    </a>
  );
}
