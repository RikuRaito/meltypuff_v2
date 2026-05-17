export const CouponType = {
  PERCENT_OFF: "PERCENT_OFF",
  AMOUNT_OFF: "AMOUNT_OFF",
} as const;

export type CouponType = (typeof CouponType)[keyof typeof CouponType];
