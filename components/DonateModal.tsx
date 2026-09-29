"use client";

import { useEffect, useRef, useState } from "react";
import { buildAppIntent, type UpiApp } from "@/lib/upi";

type AppDef = { id: UpiApp; label: string; icon: string };

const UPI_APPS: AppDef[] = [
  { id: "gpay", label: "Google Pay", icon: "/icons/gpay.svg" },
  { id: "phonepe", label: "PhonePe", icon: "/icons/phonepe.svg" },
  { id: "paytm", label: "Paytm", icon: "/icons/paytm.svg" },
  { id: "other", label: "Other UPI App", icon: "/icons/other.svg" },
];

// Last-resort UPI icon — inline SVG so we don't need a file for it.
function GenericUpiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
      <text x="32" y="30" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="14" fill="#001478">UPI</text>
      <path d="M16 44c4-6 12-6 16 0M16 50c6-8 26-8 32 0" stroke="#f08c28" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function DonateModal() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll while modal is open + close on Escape
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function openModal() {
    setError(null);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setTimeout(() => triggerRef.current?.focus(), 0);
  }

  function launchUpi(app: UpiApp) {
    const url = buildAppIntent(app);
    setError(null);
    const isDesktop = !/Mobi|Android|iPhone|iPad|iPod/i.test(
      typeof navigator !== "undefined" ? navigator.userAgent : ""
    );
    if (isDesktop) {
      setError(
        "UPI apps only work on mobile. Please scan the QR code with any UPI app, or open this site on your phone."
      );
      return;
    }
    window.location.href = url;
  }

  return (
    <>
      <button
        ref={triggerRef}
        onClick={openModal}
        className="btn-primary text-lg"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Tap to Donate via UPI
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="donate-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />

          <div
            ref={dialogRef}
            className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2
                  id="donate-modal-title"
                  className="heading-display text-2xl font-bold text-brand-navy"
                >
                  Choose how to pay
                </h2>
                <p className="text-sm text-neutral-500 mt-1">
                  Payee: <span className="font-semibold text-neutral-700">Garur Civil Society</span>
                </p>
              </div>
              <button
                onClick={closeModal}
                aria-label="Close"
                className="rounded-full w-9 h-9 flex items-center justify-center text-neutral-500 hover:bg-neutral-100"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 mb-3">
              Pay with UPI
            </p>
            <div className="grid grid-cols-3 gap-3">
              {UPI_APPS.map((app) => (
                <button
                  key={app.id}
                  onClick={() => launchUpi(app.id)}
                  className="group flex flex-col items-center gap-2 p-3 rounded-2xl border border-neutral-200 hover:border-brand-orange hover:bg-orange-50/40 transition"
                >
                  {app.id === "other" ? (
                    <GenericUpiIcon className="w-12 h-12" />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={app.icon} alt={app.label} className="w-12 h-12" />
                  )}
                  <span className="text-xs font-medium text-neutral-700 text-center leading-tight">
                    {app.label}
                  </span>
                </button>
              ))}
            </div>

            {error && (
              <p className="mt-4 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <p className="mt-5 text-[11px] text-neutral-400 text-center">
              You will be redirected to the payment app. Please verify the payee name
              <span className="font-semibold text-neutral-600"> Garur Civil Society </span>
              before approving.
            </p>
          </div>
        </div>
      )}
    </>
  );
}