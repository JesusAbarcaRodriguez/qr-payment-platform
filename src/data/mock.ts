import type { TableData } from "../types";

const DEMO_ITEMS = [
  { id: "1", name: "Casado con pollo", quantity: 1, price: 6500 },
  { id: "2", name: "Chifrijo", quantity: 2, price: 10400 },
  { id: "3", name: "Fresco de cas", quantity: 2, price: 3600 },
  { id: "4", name: "Patacones con guacamole", quantity: 1, price: 3500 },
];

export function getTable(id: string): TableData {
  const number = parseInt(id) || 1;
  const total = DEMO_ITEMS.reduce((acc, item) => acc + item.price, 0);

  return {
    id,
    number,
    restaurant: {
      name: "Soda La Tica",
      logoText: "SLT",
    },
    bill: {
      items: DEMO_ITEMS,
      total,
    },
  };
}
