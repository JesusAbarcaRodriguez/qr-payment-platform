interface Props {
  amount: number;
  percentage: number;
  selected: boolean;
  onSelect: () => void;
}

export default function TipOption({ amount, percentage, selected, onSelect }: Props) {
  return (
    <button
      onClick={onSelect}
      className={`flex-1 py-4 rounded-2xl border-2 transition-all ${
        selected ? "border-brand bg-brand-light" : "border-gray-200 bg-white"
      }`}
    >
      <p className={`text-base font-bold leading-tight ${selected ? "text-brand" : "text-gray-900"}`}>
        ${amount}
      </p>
      <p className={`text-xs mt-1 ${selected ? "text-brand" : "text-gray-400"}`}>
        {percentage}%
      </p>
    </button>
  );
}
