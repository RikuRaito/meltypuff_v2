export type CartItem = {
  id: number;
  qty: number;
  type: "nic" | "non";
  price: number;
  imagePath: string;
  displayName: string;
};
