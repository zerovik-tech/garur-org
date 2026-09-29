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
  sign:
    "MEUCIASTyzrx4IX6vWYQXbGReO4s9npTPP8EaHf10s5yMlUxAiEAlIYK9AqlIFPL7bgSUTReLPOKV8z0irxd/zDSAfolxC0=",
} as const;

export type UpiApp = "gpay" | "phonepe" | "paytm" | "other";

// Build the base UPI intent with ONLY spaces percent-encoded as %20.
// Spec note: the Garur QR uses raw @, raw /, and raw = in the sign.
// URLSearchParams would over-encode these, so we assemble manually.
export function buildUpiIntent(extra: Partial<Record<keyof typeof UPI_PARAMS, string>> = {}): string {
  const merged = { ...UPI_PARAMS, ...extra };
  const parts = Object.entries(merged).map(
    ([k, v]) => `${k}=${String(v).replace(/ /g, "%20")}`
  );
  return `upi://pay?${parts.join("&")}`;
}

// Build the custom-scheme deep link for each UPI app.
// GPay uses gpay://upi/pay?..., PhonePe uses phonepe://pay?...,
// Paytm uses paytmmp://pay?..., and "other" falls back to the bare upi:// intent.
const SCHEMES: Record<UpiApp, (intent: string) => string> = {
  gpay: (i) => i.replace(/^upi:\/\//, "gpay://upi/"),
  phonepe: (i) => i.replace(/^upi:\/\//, "phonepe://"),
  paytm: (i) => i.replace(/^upi:\/\//, "paytmmp://"),
  other: (i) => i,
};

export function buildAppIntent(app: UpiApp): string {
  return SCHEMES[app](buildUpiIntent());
}