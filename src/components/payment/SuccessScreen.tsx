interface Props {
  total: number;
  tip: number;
  tableId: string;
}

export default function SuccessScreen({ total, tip, tableId }: Props) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        {/* Animated checkmark */}
        <div className="relative w-28 h-28 mx-auto mb-8">
          <svg className="animate-scale-in w-full h-full" viewBox="0 0 112 112">
            <circle cx="56" cy="56" r="52" fill="#dcfce7" />
          </svg>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 112 112">
            <polyline
              points="32,58 48,74 80,38"
              fill="none"
              stroke="#16a34a"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-check"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-1 animate-fade-up">
          Payment complete!
        </h2>

        <div className="animate-fade-up-2">
          <p className="text-gray-400 text-sm mb-1">Total paid</p>
          <p className="text-5xl font-bold text-gray-900 mb-2">${total}</p>
          {tip > 0 && (
            <p className="text-gray-400 text-xs mb-2">Includes ${tip} tip — thank you! 🙏</p>
          )}
          <p className="text-gray-400 text-sm mb-10">Thank you for your visit 🙌</p>
        </div>

        <div className="space-y-3 animate-fade-up-3">
          <a
            href={`/feedback/${tableId}`}
            className="block bg-brand text-white py-4 rounded-2xl font-semibold text-base"
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
    </div>
  );
}
