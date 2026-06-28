export interface Restaurant {
  name: string;
  logoText: string;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface TableData {
  id: string;
  number: number;
  restaurant: Restaurant;
  bill: {
    items: OrderItem[];
    total: number;
  };
}
