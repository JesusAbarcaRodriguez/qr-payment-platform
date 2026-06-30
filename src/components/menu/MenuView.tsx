import "../../i18n/config";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import MenuItem from "./MenuItem";
import { CATEGORIES, MENU_ITEMS, type MenuCategory } from "../../data/menu";

export default function MenuView({ tableId }: { tableId: string }) {
  const { t } = useTranslation();
  const [active, setActive] = useState<MenuCategory>("starters");

  const filtered = MENU_ITEMS.filter((item) => item.category === active);

  return (
    <div className="min-h-screen bg-background pb-10">
      <div className="px-6 pt-10 pb-4">
        <div className="flex items-center gap-3 mb-6">
          <a href={`/table/${tableId}`} className="text-gray-500 p-1 -ml-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
          </a>
          <h1 className="text-2xl font-bold text-gray-900">{t("menu.title")}</h1>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
          {CATEGORIES.map((cat) => (
            <button key={cat.id} onClick={() => setActive(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                active === cat.id ? "bg-brand text-white shadow-sm" : "bg-white text-gray-500 shadow-sm"
              }`}>
              <span>{cat.emoji}</span>
              <span>{t(`menu.${cat.id}`)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 space-y-3">
        {filtered.map((item) => <MenuItem key={item.id} item={item} />)}
      </div>
    </div>
  );
}
