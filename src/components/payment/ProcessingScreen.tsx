import "../../i18n/config";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  total: number;
  onComplete: () => void;
}

export default function ProcessingScreen({ total, onComplete }: Props) {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const steps = t("processing.steps", { returnObjects: true }) as string[];

  useEffect(() => {
    const ticks = 3000 / 30;
    let current = 0;
    const interval = setInterval(() => {
      current++;
      const pct = Math.min(Math.round((current / ticks) * 100), 100);
      setProgress(pct);
      setStepIndex(Math.min(Math.floor((pct / 100) * steps.length), steps.length - 1));
      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(onComplete, 400);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete, steps.length]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <div className="relative w-28 h-28 mx-auto mb-8">
          <svg className="animate-spin w-full h-full" viewBox="0 0 112 112" style={{ animationDuration: "1.2s" }}>
            <circle cx="56" cy="56" r="50" fill="none" stroke="#edeaff" strokeWidth="6" />
            <circle cx="56" cy="56" r="50" fill="none" stroke="#6c5ce7" strokeWidth="6"
              strokeDasharray="220 94" strokeLinecap="round" transform="rotate(-90 56 56)" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center shadow-lg">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                <line x1="1" y1="10" x2="23" y2="10" />
              </svg>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-1">{t("processing.title")}</h2>
        <p className="text-3xl font-bold text-brand mb-6">${total}</p>
        <p className="text-sm text-gray-400 mb-6 h-5 transition-all duration-300">{steps[stepIndex]}</p>

        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
          <div className="bg-brand h-full rounded-full transition-all duration-75" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-xs text-gray-300 mt-2">{progress}%</p>
      </div>
    </div>
  );
}
