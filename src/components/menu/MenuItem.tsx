import type { MenuItemData } from "../../data/menu";

export default function MenuItem({ item }: { item: MenuItemData }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm">
      <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0 text-3xl">
        {item.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 text-sm leading-tight">{item.name}</p>
        <p className="text-gray-400 text-xs mt-0.5 leading-snug line-clamp-2">{item.description}</p>
      </div>
      <p className="text-brand font-bold text-sm whitespace-nowrap flex-shrink-0">${item.price}</p>
    </div>
  );
}
