import ActionCard from "./ActionCard";
import type { TableData } from "../../types";

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const PayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const FeedbackIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6c5ce7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

export default function TableLanding({ table }: { table: TableData }) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm border border-gray-100">
            <span className="text-2xl font-bold text-gray-500 tracking-wide">
              {table.restaurant.logoText}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            {table.restaurant.name}
          </h1>
          <p className="text-gray-400 text-sm mt-1.5">Table N°{table.number}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm px-5 mb-8">
          <ActionCard
            icon={<MenuIcon />}
            title="View the menu"
            subtitle="Tap to see the menu"
            href="#menu"
          />
          <ActionCard
            icon={<PayIcon />}
            title="Pay your bill"
            subtitle="Check and pay effortlessly"
            href={`/bill/${table.id}`}
          />
          <ActionCard
            icon={<FeedbackIcon />}
            title="Leave feedback"
            subtitle="Let us know how was your experience"
            href={`/feedback/${table.id}`}
          />
        </div>

        <p className="text-center text-xs text-gray-300">
          Made with ❤️ by QR Payment Platform
        </p>
      </div>
    </div>
  );
}
