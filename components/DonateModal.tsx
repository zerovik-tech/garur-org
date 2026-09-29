"use client";

import { useEffect, useRef, useState } from "react";
import { APP_ICONS, RazorpayIcon } from "./UpiAppIcons";
import { buildAppIntent, RAZORPAY_DONATION_URL, type UpiApp } from "@/lib/upi";

type AppDef = { id: UpiApp; label: string };

const UPI_APPS: AppDef[] = [
  { id: "gpay", label: "Google Pay" },
  { id: "phonepe", label: "PhonePe" },
  { id: "paytm", label: "Paytm" },
  { id: "cred", label: "CRED" },
  { id: "navi", label: "Navi" },
  { id: "other", label: "Other UPI App" },
];

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
    // Restore focus to the trigger button for keyboard users
    setTimeout(() => triggerRef.current?.focus(), 0);
  }

  // Try the app-specific intent. If the OS doesn't have a handler
  // (desktop, or app not installed), fall back to the bare upi:// link
  // (which on mobile shows the system app picker; on desktop does nothing).
  function launchUpi(app: UpiApp) {
    const url = buildAppIntent(app);
    setError(null);
    // Detect desktop — bare upi:// won't work there, so show a hint.
    const isDesktop = !/Mobi|Android|iPhone|iPad|iPod/i.test(
      typeof navigator !== "undefined" ? navigator.userAgent : ""
    );
    if (isDesktop) {
      setError(
        "UPI apps only work on mobile. On desktop, please use the QR code on the left, or pay via Card / Net Banking below."
      );
      return;
    }
    // Use location.href so the OS handles the intent natively.
    // Anchor target="_blank" doesn't work for custom schemes; window.location
    // is the canonical way to dispatch a mobile intent.
    window.location.href = url;
  }

  function launchRazorpay() {
    window.open(RAZORPAY_DONATION_URL, "_blank", "noopener,noreferrer");
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
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Dialog */}
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
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* UPI apps grid */}
            <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 mb-3">
              Pay with UPI
            </p>
            <div className="grid grid-cols-3 gap-3">
              {UPI_APPS.map((app) => {
                const Icon = APP_ICONS[app.id];
                return (
                  <button
                    key={app.id}
                    onClick={() => launchUpi(app.id)}
                    className="group flex flex-col items-center gap-2 p-3 rounded-2xl border border-neutral-200 hover:border-brand-orange hover:bg-orange-50/40 transition"
                  >
                    <Icon className="w-12 h-12" />
                    <span className="text-xs font-medium text-neutral-700 text-center leading-tight">
                      {app.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {error && (
              <p className="mt-4 text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-neutral-200" />
              <span className="text-xs uppercase tracking-wider text-neutral-400">or</span>
              <div className="flex-1 h-px bg-neutral-200" />
            </div>

            {/* Razorpay (other modes) */}
            <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 mb-3">
              Other payment modes
            </p>
            <button
              onClick={launchRazorpay}
              className="w-full flex items-center gap-4 p-4 rounded-2xl border border-neutral-200 hover:border-[#3395ff] hover:bg-blue-50/40 transition text-left"
            >
              <RazorpayIcon className="w-12 h-12 shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-neutral-800">Razorpay</div>
                <div className="text-xs text-neutral-500">
                  Card · Net Banking · Wallets · Pay Later
                </div>
              </div>
              <svg
                className="w-5 h-5 text-neutral-400 shrink-0"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 4l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

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