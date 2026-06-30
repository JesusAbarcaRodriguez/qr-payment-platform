import "../../i18n/config";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  tableId: string;
}

export default function FeedbackView({ tableId }: Props) {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const active = hovered || rating;
  const labels = t("feedback.ratings", { returnObjects: true }) as Record<string, string>;

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-sm text-center">
          <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("feedback.done_title")}</h2>
          <p className="text-gray-400 text-sm mb-10">{t("feedback.done_sub")}</p>
          <a href={`/table/${tableId}`} className="block bg-brand text-white py-4 rounded-2xl font-semibold text-base">
            {t("feedback.done_back")}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="w-full max-w-sm mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <a href={`/table/${tableId}`} className="text-gray-500 p-1 -ml-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
          </a>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">{t("feedback.title")}</h1>
        <p className="text-gray-400 text-sm mb-8">{t("feedback.subtitle", { id: tableId })}</p>

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <p className="text-sm font-medium text-gray-700 mb-4 text-center">{t("feedback.rate_label")}</p>
          <div className="flex justify-center gap-3 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)} onMouseLeave={() => setHovered(0)}
                className="transition-transform active:scale-90">
                <svg width="40" height="40" viewBox="0 0 24 24"
                  fill={star <= active ? "#6c5ce7" : "none"}
                  stroke={star <= active ? "#6c5ce7" : "#d1d5db"}
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-all duration-100">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </button>
            ))}
          </div>
          {active > 0 && (
            <p className="text-center text-sm font-medium text-brand">{labels[String(active)]}</p>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5 mb-8">
          <label className="text-xs text-gray-400 mb-2 block font-medium uppercase tracking-wide">
            {t("feedback.comment_label")}
          </label>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)}
            placeholder={t("feedback.placeholder")} rows={4}
            className="w-full text-sm text-gray-900 outline-none resize-none bg-transparent placeholder-gray-300 leading-relaxed" />
        </div>

        <button onClick={() => rating > 0 && setSubmitted(true)} disabled={rating === 0}
          className={`w-full py-4 rounded-2xl font-semibold text-base transition-all ${rating > 0 ? "bg-brand text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}>
          {rating > 0 ? t("feedback.submit") : t("feedback.select_first")}
        </button>
      </div>
    </div>
  );
}
