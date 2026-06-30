import "../../i18n/config";
import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import TipOption from "./TipOption";
import PaymentMethods, { type PaymentMethodId } from "../payment/PaymentMethods";
import ProcessingScreen from "../payment/ProcessingScreen";
import SuccessScreen from "../payment/SuccessScreen";

type Stage = "tip" | "payment" | "processing" | "done";
type TipSelection = 10 | 15 | 20 | "custom" | "none";

interface Props {
  total: number;
  tableId: string;
}

export default function TipView({ total, tableId }: Props) {
  const { t } = useTranslation();
  const [stage, setStage] = useState<Stage>("tip");
  const [selection, setSelection] = useState<TipSelection | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodId | null>(null);

  const calculate = (pct: number) => Math.round((total * pct) / 100);

  const tipAmount = (): number => {
    if (selection === "none") return 0;
    if (selection === "custom") return parseInt(customAmount) || 0;
    if (typeof selection === "number") return calculate(selection);
    return 0;
  };

  const grandTotal = total + tipAmount();
  const tipReady = selection !== null;

  const onProcessingComplete = useCallback(() => setStage("done"), []);

  if (stage === "processing") return <ProcessingScreen total={grandTotal} onComplete={onProcessingComplete} />;
  if (stage === "done") return <SuccessScreen total={grandTotal} tip={tipAmount()} tableId={tableId} />;

  // ── Payment method stage ───────────────────────────────────────────────────
  if (stage === "payment") {
    return (
      <div className="min-h-screen bg-background px-6 py-10">
        <div className="w-full max-w-sm mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <button onClick={() => setStage("tip")} className="text-gray-500 p-1 -ml-1">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M5 12l7-7M5 12l7 7" />
              </svg>
            </button>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-1">{t("payment.title")}</h1>
          <p className="text-gray-400 text-sm mb-8">
            {t("payment.total_label")}{" "}
            <span className="font-bold text-gray-900">${grandTotal}</span>
          </p>

          <PaymentMethods selected={paymentMethod} onSelect={setPaymentMethod} />

          <div className="mt-8">
            <button
              onClick={() => paymentMethod && setStage("processing")}
              disabled={!paymentMethod}
              className={`w-full py-4 rounded-2xl font-semibold text-base transition-all ${
                paymentMethod ? "bg-brand text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {paymentMethod ? t("payment.pay", { total: grandTotal }) : t("payment.select")}
            </button>

            <p className="text-center text-xs text-gray-300 mt-4 flex items-center justify-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              {t("common.secure")}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── Tip stage ──────────────────────────────────────────────────────────────
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

        <h1 className="text-2xl font-bold text-gray-900 mb-8 leading-snug">{t("tip.title")}</h1>

        <div className="flex gap-3 mb-6">
          {([10, 15, 20] as const).map((pct) => (
            <TipOption key={pct} amount={calculate(pct)} percentage={pct} selected={selection === pct} onSelect={() => setSelection(pct)} />
          ))}
        </div>

        {selection === "custom" && (
          <div className="bg-white rounded-2xl p-4 mb-4 border-2 border-brand">
            <label className="text-xs text-gray-400 mb-2 block">{t("tip.custom_label")}</label>
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
          <button onClick={() => setSelection("custom")} className={`w-full py-3 text-sm font-medium rounded-xl transition-colors text-center ${selection === "custom" ? "text-brand bg-brand-light" : "text-gray-500"}`}>
            {t("tip.custom")}
          </button>
          <button onClick={() => setSelection("none")} className={`w-full py-3 text-sm font-medium rounded-xl transition-colors text-center ${selection === "none" ? "text-brand bg-brand-light" : "text-gray-500"}`}>
            {t("tip.none")}
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mb-6">
          {t("common.terms_notice")}{" "}
          <span className="underline cursor-pointer">{t("common.terms")}</span>
        </p>

        <button
          onClick={() => tipReady && setStage("payment")}
          disabled={!tipReady}
          className={`w-full py-4 rounded-2xl font-semibold text-base transition-all ${tipReady ? "bg-brand text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
        >
          {tipReady ? t("tip.continue", { total: grandTotal }) : t("tip.select")}
        </button>
      </div>
    </div>
  );
}
