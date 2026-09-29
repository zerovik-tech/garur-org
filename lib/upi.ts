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

// Each app's specific intent prefix. On mobile, `tez://upi/pay?...` opens GPay directly,
// `phonepe://upi/pay?...` opens PhonePe directly, etc.
// The "Other" option uses the bare upi:// intent which lets Android/iOS show the resolver sheet.
export type UpiApp = "gpay" | "phonepe" | "paytm" | "cred" | "navi" | "other";

export function buildAppIntent(app: UpiApp): string {
  const base = buildUpiIntent();
  switch (app) {
    case "gpay":
      return base.replace(/^upi:\/\//, "tez://upi/");
    case "phonepe":
      return base.replace(/^upi:\/\//, "phonepe://upi/");
    case "paytm":
      return base.replace(/^upi:\/\//, "paytmmp://upi/");
    case "cred":
      // CRED doesn't publish a custom scheme — fall through to bare upi://.
      // Android/iOS will route to CRED if it's the user's default or via the resolver sheet.
      return base;
    case "navi":
      // Same as CRED — no published scheme. Use bare upi://.
      return base;
    case "other":
      return base;
  }
}

// Razorpay public donation page (card / netbanking / wallets).
export const RAZORPAY_DONATION_URL = "https://rzp.io/rzp/garur-org-donation";
