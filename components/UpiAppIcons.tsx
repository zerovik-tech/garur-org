// Inline SVG icons for UPI apps + Razorpay. Self-contained, no external URLs, no CDN.
// Brand colors are taken from each app's published palette.
import type { UpiApp } from "@/lib/upi";

type IconProps = { className?: string };
type IconComponent = React.FC<IconProps>;

function SvgWrap({ children, className }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const GpayIcon: IconComponent = ({ className }) => (
  <SvgWrap className={className}>
    <rect width="64" height="64" rx="14" fill="#ffffff" />
    <path
      d="M32 14.5v8.6M32 49.5v-8.6M14.5 32h8.6M49.5 32h-8.6M20.7 20.7l6.1 6.1M43.3 43.3l-6.1-6.1M20.7 43.3l6.1-6.1M43.3 20.7l-6.1 6.1"
      stroke="#5f6368"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    <text
      x="32"
      y="38"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontWeight="700"
      fontSize="11"
      fill="#1a73e8"
    >
      Pay
    </text>
  </SvgWrap>
);

export const PhonePeIcon: IconComponent = ({ className }) => (
  <SvgWrap className={className}>
    <rect width="64" height="64" rx="14" fill="#5f259f" />
    <path
      d="M18 44V22c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v13l8-13c.4-.7 1.1-1 1.9-1h4.7c1.5 0 2.5 1.6 1.7 2.9L34 35l10.3 9.1c.8.7.4 2-.7 2h-5.4c-.8 0-1.5-.4-2-1l-7.2-8v6c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2z"
      fill="#ffffff"
    />
  </SvgWrap>
);

export const PaytmIcon: IconComponent = ({ className }) => (
  <SvgWrap className={className}>
    <rect width="64" height="64" rx="14" fill="#00baf2" />
    <path
      d="M14 26h8v18c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V26h6c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2H14c-1.1 0-2 .9-2 2v1c0 1.1.9 2 2 2z"
      fill="#ffffff"
    />
    <path
      d="M38 26c-1.1 0-2 .9-2 2v13c0 4.4 3.6 8 8 8h2c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-1c-1.7 0-3-1.3-3-3V30c0-2.2 1.8-4 4-4h1c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2h-2c-3.9 0-7 1.6-7 5z"
      fill="#ffffff"
    />
  </SvgWrap>
);

export const CredIcon: IconComponent = ({ className }) => (
  <SvgWrap className={className}>
    <rect width="64" height="64" rx="14" fill="#000000" />
    <text
      x="32"
      y="42"
      textAnchor="middle"
      fontFamily="Arial Black, Arial, sans-serif"
      fontWeight="900"
      fontSize="22"
      letterSpacing="-1"
      fill="#ffffff"
    >
      cred
    </text>
    <circle cx="51" cy="13" r="3.5" fill="#f2a03d" />
  </SvgWrap>
);

export const NaviIcon: IconComponent = ({ className }) => (
  <SvgWrap className={className}>
    <rect width="64" height="64" rx="14" fill="#0a2540" />
    <circle cx="32" cy="32" r="16" fill="none" stroke="#22d3ee" strokeWidth="3" />
    <path
      d="M22 36l4-8 4 4 4-10 4 14"
      stroke="#22d3ee"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="42" cy="20" r="2.5" fill="#22d3ee" />
  </SvgWrap>
);

export const GenericUpiIcon: IconComponent = ({ className }) => (
  <SvgWrap className={className}>
    <rect width="64" height="64" rx="14" fill="#ffffff" stroke="#e5e7eb" strokeWidth="1" />
    <text
      x="32"
      y="30"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontWeight="800"
      fontSize="14"
      fill="#001478"
    >
      UPI
    </text>
    <path
      d="M16 44c4-6 12-6 16 0M16 50c6-8 26-8 32 0"
      stroke="#f08c28"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
  </SvgWrap>
);

export const RazorpayIcon: IconComponent = ({ className }) => (
  <SvgWrap className={className}>
    <rect width="64" height="64" rx="14" fill="#3395ff" />
    <path
      d="M22 20l6 26M36 18l8 22c1 3-2 4-4 2L28 28"
      stroke="#ffffff"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </SvgWrap>
);

export const APP_ICONS: Record<UpiApp, IconComponent> = {
  gpay: GpayIcon,
  phonepe: PhonePeIcon,
  paytm: PaytmIcon,
  cred: CredIcon,
  navi: NaviIcon,
  other: GenericUpiIcon,
};