import type { TableData } from "../types";

const DEMO_ITEMS = [
  { id: "1", name: "French fries with cheese sauce", quantity: 1, price: 145 },
  { id: "2", name: "Summer wine 0.3", quantity: 2, price: 310 },
];

export function getTable(id: string): TableData {
  const number = parseInt(id) || 1;
  const total = DEMO_ITEMS.reduce((acc, item) => acc + item.price, 0);

  return {
    id,
    number,
    restaurant: {
      name: "My Restaurant",
      logoText: "MR",
    },
    bill: {
      items: DEMO_ITEMS,
      total,
    },
  };
}
