export type Payment = {
  id: number;
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  address1: string;
  address2: string;
  price: number;
  coupon: string;
  status: string;
  createdAt: Date;
  item: PaymentItem[];
};

export type PaymentItem = {
  id: string;
  displayName: string;
  quantity: number;
};
