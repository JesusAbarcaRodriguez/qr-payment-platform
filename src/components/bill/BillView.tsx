import BillItem from "./BillItem";
import type { TableData } from "../../types";

export default function BillView({ table }: { table: TableData }) {
  const { bill, number, id } = table;

  return (
    <div className="min-h-screen bg-background px-6 py-10">
      <div className="w-full max-w-sm mx-auto">
        <div className="flex items-center gap-3 mb-7">
          <a href={`/table/${id}`} className="text-gray-500 p-1 -ml-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
          </a>
          <h1 className="text-2xl font-bold text-gray-900">Table N°{number}</h1>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-5 mb-4">
          <div className="flex justify-between items-end mb-4 pb-4 border-b border-gray-100">
            <div>
              <p className="text-xs text-gray-400 mb-0.5">Table N°{number}</p>
              <p className="font-semibold text-gray-900">Bill total</p>
            </div>
            <span className="text-2xl font-bold text-gray-900">${bill.total}</span>
          </div>

          <div className="space-y-0.5">
            {bill.items.map((item) => (
              <BillItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mb-2">
          By continuing, you accept the{" "}
          <span className="underline cursor-pointer">Terms of Service</span>
        </p>
        <p className="text-center text-xs text-gray-400 mb-8">
          To split the bill, please ask the waiter
        </p>

        <a
          href={`/tip/${id}`}
          className="block w-full bg-brand text-white text-center py-4 rounded-2xl font-semibold text-base"
        >
          Pay the bill
        </a>
      </div>
    </div>
  );
}
