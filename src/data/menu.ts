export type MenuCategory = "starters" | "mains" | "drinks" | "desserts";

export interface MenuItemData {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
  category: MenuCategory;
}

export const CATEGORIES: { id: MenuCategory; label: string; emoji: string }[] = [
  { id: "starters", label: "Entradas", emoji: "🍟" },
  { id: "mains", label: "Platos", emoji: "🍽️" },
  { id: "drinks", label: "Bebidas", emoji: "🥤" },
  { id: "desserts", label: "Postres", emoji: "🍮" },
];

export const MENU_ITEMS: MenuItemData[] = [
  // Entradas
  { id: "s1", name: "Patacones con Guacamole", description: "Plátano verde frito y aplastado, con guacamole casero y pico de gallo", price: 3500, emoji: "🫓", category: "starters" },
  { id: "s2", name: "Ceviche Tico", description: "Corvina en jugo de limón, culantro, chile dulce y cebolla morada", price: 4200, emoji: "🐟", category: "starters" },
  { id: "s3", name: "Chicharrones Criollos", description: "Costillas de cerdo fritas, servidas con yuca y chimichurri", price: 4800, emoji: "🥩", category: "starters" },
  { id: "s4", name: "Elote Loco", description: "Mazorca asada con mayonesa, queso rallado, chile y limón", price: 2800, emoji: "🌽", category: "starters" },
  { id: "s5", name: "Deditos de Queso", description: "Palitos de queso empanizados con salsa rosada y salsa dulce", price: 3200, emoji: "🧀", category: "starters" },

  // Platos Fuertes
  { id: "m1", name: "Casado Completo", description: "Arroz, frijoles, ensalada, plátano maduro, picadillo y elección de proteína", price: 6500, emoji: "🍛", category: "mains" },
  { id: "m2", name: "Gallo Pinto con Huevos", description: "Gallo pinto tradicional, huevos al gusto, natilla y pan tostado", price: 4500, emoji: "🍳", category: "mains" },
  { id: "m3", name: "Chifrijo", description: "Arroz, frijoles, chicharrón, pico de gallo y chips de maíz. Clásico tico", price: 5200, emoji: "🫙", category: "mains" },
  { id: "m4", name: "Arroz con Pollo Tico", description: "Arroz con pollo al estilo costarricense, vegetales salteados y natilla", price: 6000, emoji: "🍗", category: "mains" },
  { id: "m5", name: "Hamburguesa Doble", description: "Doble carne, queso amarillo, tocino, lechuga, tomate y papas fritas", price: 7500, emoji: "🍔", category: "mains" },
  { id: "m6", name: "Hot Dog Tico", description: "Salchicha en pan suave, papas ralladas, mayonesa, mostaza y ketchup", price: 3800, emoji: "🌭", category: "mains" },
  { id: "m7", name: "Wrap de Pollo Crispy", description: "Pollo apanado, lechuga, tomate, queso y salsa ranch en tortilla de harina", price: 5500, emoji: "🌯", category: "mains" },
  { id: "m8", name: "Olla de Carne", description: "Caldo de res con yuca, ñame, papas, chayotes y elote. Plato del día", price: 5800, emoji: "🍲", category: "mains" },

  // Bebidas
  { id: "d1", name: "Fresco de Cas", description: "Fruta de cas natural licuada con agua y azúcar, bien fría", price: 1800, emoji: "🥛", category: "drinks" },
  { id: "d2", name: "Agua de Pipa", description: "Coco natural frío, directo del fruto con pajilla", price: 2200, emoji: "🥥", category: "drinks" },
  { id: "d3", name: "Batido de Fresa", description: "Fresa fresca, leche y azúcar. También disponible en mango y banano", price: 2500, emoji: "🍓", category: "drinks" },
  { id: "d4", name: "Café Chorreado", description: "Café negro pasado al estilo tico, en chorreador de madera", price: 1500, emoji: "☕", category: "drinks" },
  { id: "d5", name: "Cerveza Imperial", description: "La cerveza nacional de Costa Rica, 330ml bien helada", price: 2800, emoji: "🍺", category: "drinks" },
  { id: "d6", name: "Refresco Natural del Día", description: "Consultar al mesero — jamaica, tamarindo o guanábana", price: 1800, emoji: "🧃", category: "drinks" },
  { id: "d7", name: "Limonada con Hierbabuena", description: "Limón fresco exprimido, hierbabuena y azúcar, servida con hielo", price: 2000, emoji: "🍋", category: "drinks" },

  // Postres
  { id: "ds1", name: "Tres Leches", description: "Pastel esponjoso bañado en crema, leche condensada y leche evaporada", price: 2800, emoji: "🍰", category: "desserts" },
  { id: "ds2", name: "Arroz con Leche", description: "Cremoso, con canela y pasas. Receta de la abuela", price: 2200, emoji: "🍮", category: "desserts" },
  { id: "ds3", name: "Cajeta de Coco", description: "Dulce típico costarricense hecho con coco rallado y azúcar morena", price: 1800, emoji: "🥧", category: "desserts" },
  { id: "ds4", name: "Granizado de Tamarindo", description: "Hielo raspado con sirope de tamarindo y leche condensada", price: 2000, emoji: "🧊", category: "desserts" },
  { id: "ds5", name: "Churros con Chocolate", description: "Recién fritos, azúcar con canela y salsa de chocolate caliente", price: 2500, emoji: "🍫", category: "desserts" },
];
