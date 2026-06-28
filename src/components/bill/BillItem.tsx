import type { OrderItem } from "../../types";

export default function BillItem({ item }: { item: OrderItem }) {
  return (
    <div className="flex justify-between items-start py-2 gap-4">
      <span className="text-gray-700 text-sm flex-1">
        {item.quantity}x {item.name}
      </span>
      <span className="text-gray-900 text-sm font-medium whitespace-nowrap">
        ${item.price}
      </span>
    </div>
  );
}
