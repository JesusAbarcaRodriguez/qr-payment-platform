import { useState } from "react";
import TipOption from "./TipOption";

type TipSelection = 10 | 15 | 20 | "custom" | "none";

interface Props {
  total: number;
  tableId: string;
}

export default function TipView({ total, tableId }: Props) {
  const [selection, setSelection] = useState<TipSelection | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paid, setPaid] = useState(false);

  const calculate = (pct: number) => Math.round((total * pct) / 100);

  const tipAmount = (): number => {
    if (selection === "none") return 0;
    if (selection === "custom") return parseInt(customAmount) || 0;
    if (typeof selection === "number") return calculate(selection);
    return 0;
  };

  const grandTotal = total + tipAmount();
  const ready = selection !== null;

  if (paid) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-sm text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment complete!</h2>
          <p className="text-gray-400 text-sm mb-1">Total paid</p>
          <p className="text-4xl font-bold text-gray-900 mb-2">${grandTotal}</p>
          {selection !== "none" && (
            <p className="text-gray-400 text-xs mb-8">Includes ${tipAmount()} tip</p>
          )}
          {selection === "none" && <div className="mb-8" />}
          <p className="text-gray-400 text-sm mb-8">Thank you for your visit 🙌</p>
          <a
            href={`/feedback/${tableId}`}
            className="block bg-brand text-white py-4 rounded-2xl font-semibold text-base mb-3"
          >
            Leave feedback
          </a>
          <a
            href={`/table/${tableId}`}
            className="block text-center text-sm text-gray-400 py-2"
          >
            Skip
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="w-full max-w-sm mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <a href={`/bill/${tableId}`} className="text-gray-500 p-1 -ml-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
          </a>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-8 leading-snug">
          How much would you like to tip?
        </h1>

        <div className="flex gap-3 mb-6">
          {([10, 15, 20] as const).map((pct) => (
            <TipOption
              key={pct}
              amount={calculate(pct)}
              percentage={pct}
              selected={selection === pct}
              onSelect={() => setSelection(pct)}
            />
          ))}
        </div>

        {selection === "custom" && (
          <div className="bg-white rounded-2xl p-4 mb-4 border-2 border-brand">
            <label className="text-xs text-gray-400 mb-2 block">Custom amount</label>
            <div className="flex items-center gap-1">
              <span className="text-gray-400 font-medium">$</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="0"
                autoFocus
                className="flex-1 text-xl font-bold text-gray-900 outline-none bg-transparent"
              />
            </div>
          </div>
        )}

        <div className="space-y-1 mb-8">
          <button
            onClick={() => setSelection("custom")}
            className={`w-full py-3 text-sm font-medium rounded-xl transition-colors text-center ${
              selection === "custom" ? "text-brand bg-brand-light" : "text-gray-500"
            }`}
          >
            Custom amount
          </button>
          <button
            onClick={() => setSelection("none")}
            className={`w-full py-3 text-sm font-medium rounded-xl transition-colors text-center ${
              selection === "none" ? "text-brand bg-brand-light" : "text-gray-500"
            }`}
          >
            No tip
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mb-6">
          By continuing, you accept the{" "}
          <span className="underline cursor-pointer">Terms of Service</span>
        </p>

        <button
          onClick={() => ready && setPaid(true)}
          disabled={!ready}
          className={`w-full py-4 rounded-2xl font-semibold text-base transition-all ${
            ready ? "bg-brand text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          {ready ? `Pay $${grandTotal}` : "Select an option"}
        </button>
      </div>
    </div>
  );
}
