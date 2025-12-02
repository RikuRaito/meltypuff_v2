/**
 * Product型 - schema.prismaのProduct_NonとProduct_Nicモデルに対応
 * データベースから取得した商品情報の全フィールドを含む
 */
export type Product = {
  id: number;
  name: string;
  recommend: number;
  displayName: string;
  imagePath: string;
  price: number;
  stock: number;
};

/**
 * CartItem型 - カートに保存される商品情報
 * localStorageに保存する際に使用
 */
export type CartItem = {
  id: number;
  qty: number;
  type: "nic" | "non";
  price: number;
  imagePath: string;
  displayName: string;
};
