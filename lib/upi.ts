// UPI payment constants — shared between DonateModal, page button, and any QR generator.
// The base UPI intent decoded from the official Garur Civil Society QR.
export const UPI_PARAMS = {
  pa: "QR919319805337-6623@unionbankofindia",
  pn: "GARUR CIVIL SOCIETY",
  cu: "INR",
  tr: "FINACLE_QRCODE",
  mc: "0000",
  mode: "02",
  purpose: "00",
} as const;

export function buildUpiIntent(extra: Partial<Record<keyof typeof UPI_PARAMS, string>> = {}): string {
  const merged = { ...UPI_PARAMS, ...extra };
  const qs = new URLSearchParams(merged as Record<string, string>).toString();
  return `upi://pay?${qs}`;
}

// Apps that have a working custom URI scheme on Android.
// PhonePe publishes a stable phonepe://upi/pay scheme that reliably opens the app.
// GPay's tez:// and Paytm's paytmmp:// schemes are unreliable in modern Android
// (often silently fail or get blocked), so we use the bare upi:// intent which
// routes through the system UPI resolver sheet — works reliably.
export type UpiApp = "gpay" | "phonepe" | "paytm" | "other";

export function buildAppIntent(app: UpiApp): string {
  const base = buildUpiIntent();
  switch (app) {
    case "phonepe":
      return base.replace(/^upi:\/\//, "phonepe://upi/");
    case "gpay":
    case "paytm":
    case "other":
      return base;
  }
}
