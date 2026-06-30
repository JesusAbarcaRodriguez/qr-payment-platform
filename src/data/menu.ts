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
  { id: "starters", label: "Starters", emoji: "🥗" },
  { id: "mains", label: "Mains", emoji: "🍽️" },
  { id: "drinks", label: "Drinks", emoji: "🍹" },
  { id: "desserts", label: "Desserts", emoji: "🍰" },
];

export const MENU_ITEMS: MenuItemData[] = [
  // Starters
  { id: "s1", name: "Caesar Salad", description: "Romaine, parmesan, croutons & Caesar dressing", price: 85, emoji: "🥗", category: "starters" },
  { id: "s2", name: "Garlic Bread", description: "Toasted sourdough with herb butter", price: 45, emoji: "🍞", category: "starters" },
  { id: "s3", name: "French Onion Soup", description: "Classic style with gruyère crust", price: 95, emoji: "🍲", category: "starters" },
  { id: "s4", name: "Bruschetta", description: "Tomato, basil & olive oil on toasted bread", price: 75, emoji: "🍅", category: "starters" },

  // Mains
  { id: "m1", name: "Classic Burger", description: "Beef patty, cheddar, pickles & house sauce", price: 175, emoji: "🍔", category: "mains" },
  { id: "m2", name: "Spaghetti Carbonara", description: "Egg, pancetta, parmesan & black pepper", price: 155, emoji: "🍝", category: "mains" },
  { id: "m3", name: "Grilled Ribeye 300g", description: "Served with fries and chimichurri", price: 295, emoji: "🥩", category: "mains" },
  { id: "m4", name: "Chicken Parmesan", description: "Breaded chicken, tomato sauce & mozzarella", price: 165, emoji: "🍗", category: "mains" },
  { id: "m5", name: "Salmon Fillet", description: "Pan-seared with lemon butter and asparagus", price: 215, emoji: "🐟", category: "mains" },
  { id: "m6", name: "Veggie Pasta", description: "Penne with roasted vegetables and pesto", price: 135, emoji: "🌿", category: "mains" },

  // Drinks
  { id: "d1", name: "Red Wine 0.3", description: "House selection, medium-bodied", price: 155, emoji: "🍷", category: "drinks" },
  { id: "d2", name: "Mojito", description: "Rum, fresh lime, mint & soda", price: 95, emoji: "🍸", category: "drinks" },
  { id: "d3", name: "Fresh Lemonade", description: "Homemade with mint", price: 55, emoji: "🍋", category: "drinks" },
  { id: "d4", name: "Craft Beer", description: "Local IPA 0.5L", price: 85, emoji: "🍺", category: "drinks" },
  { id: "d5", name: "Espresso", description: "Double shot, freshly ground", price: 45, emoji: "☕", category: "drinks" },
  { id: "d6", name: "Fresh Orange Juice", description: "Squeezed to order", price: 65, emoji: "🍊", category: "drinks" },

  // Desserts
  { id: "ds1", name: "New York Cheesecake", description: "With berry compote", price: 85, emoji: "🍰", category: "desserts" },
  { id: "ds2", name: "Chocolate Lava Cake", description: "Warm, served with vanilla ice cream", price: 95, emoji: "🍫", category: "desserts" },
  { id: "ds3", name: "Ice Cream", description: "3 scoops — vanilla, chocolate or strawberry", price: 65, emoji: "🍨", category: "desserts" },
  { id: "ds4", name: "Tiramisu", description: "Classic Italian, dusted with cocoa", price: 90, emoji: "🍮", category: "desserts" },
];
