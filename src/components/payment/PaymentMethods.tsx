export type PaymentMethodId = "apple_pay" | "google_pay" | "visa" | "mastercard" | "paypal";

// ── Icons (contained, no duplicate text) ──────────────────────────────────────

const ApplePayIcon = () => (
  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center gap-1.5 px-3">
    <svg width="14" height="17" viewBox="0 0 814 1000" fill="white">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-42.4-150.3-109.2c-56.4-79.4-100.1-206.8-100.1-328.1 0-193.3 125.4-295.5 248.5-295.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
    <span className="text-white font-semibold text-sm tracking-tight">Pay</span>
  </div>
);

const GooglePayIcon = () => (
  <div className="w-full h-full bg-white rounded-xl border border-gray-100 flex items-center justify-center gap-0.5 px-3">
    <span className="font-bold text-sm" style={{ color: "#4285F4" }}>G</span>
    <span className="font-bold text-sm" style={{ color: "#EA4335" }}>o</span>
    <span className="font-bold text-sm" style={{ color: "#FBBC05" }}>o</span>
    <span className="font-bold text-sm" style={{ color: "#4285F4" }}>g</span>
    <span className="font-bold text-sm" style={{ color: "#34A853" }}>le</span>
  </div>
);

const VisaIcon = () => (
  <div className="w-full h-full bg-white rounded-xl border border-gray-100 flex items-center justify-center">
    <span
      className="font-black text-xl tracking-tight"
      style={{ color: "#1434CB", fontStyle: "italic", letterSpacing: "-1px" }}
    >
      VISA
    </span>
  </div>
);

const MastercardIcon = () => (
  <div className="w-full h-full bg-white rounded-xl border border-gray-100 flex items-center justify-center">
    <div className="relative w-9 h-6">
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-red-500" />
      <div className="absolute right-0 top-0 w-6 h-6 rounded-full bg-amber-400 opacity-90" />
    </div>
  </div>
);

const PayPalIcon = () => (
  <div className="w-full h-full bg-white rounded-xl border border-gray-100 flex items-center justify-center gap-0">
    <span className="font-bold text-sm" style={{ color: "#003087" }}>Pay</span>
    <span className="font-bold text-sm" style={{ color: "#009cde" }}>Pal</span>
  </div>
);

// ── Method list ───────────────────────────────────────────────────────────────

const METHODS: { id: PaymentMethodId; label: string; icon: React.ReactNode }[] = [
  { id: "apple_pay",  label: "Apple Pay",   icon: <ApplePayIcon /> },
  { id: "google_pay", label: "Google Pay",  icon: <GooglePayIcon /> },
  { id: "visa",       label: "Visa",        icon: <VisaIcon /> },
  { id: "mastercard", label: "Mastercard",  icon: <MastercardIcon /> },
  { id: "paypal",     label: "PayPal",      icon: <PayPalIcon /> },
];

// ── Component ─────────────────────────────────────────────────────────────────

interface Props {
  selected: PaymentMethodId | null;
  onSelect: (id: PaymentMethodId) => void;
}

export default function PaymentMethods({ selected, onSelect }: Props) {
  return (
    <div className="space-y-3">
      {METHODS.map((method) => {
        const isSelected = selected === method.id;
        return (
          <button
            key={method.id}
            onClick={() => onSelect(method.id)}
            className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 bg-white transition-all ${
              isSelected ? "border-brand shadow-sm" : "border-gray-100"
            }`}
          >
            {/* Icon container — fixed size, overflow hidden */}
            <div className="w-16 h-10 flex-shrink-0 overflow-hidden rounded-xl">
              {method.icon}
            </div>

            <span className="text-sm font-semibold text-gray-900 flex-1 text-left">
              {method.label}
            </span>

            {/* Radio circle */}
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
              isSelected ? "border-brand bg-brand" : "border-gray-300"
            }`}>
              {isSelected && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <polyline points="1.5,5 4,7.5 8.5,2.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
