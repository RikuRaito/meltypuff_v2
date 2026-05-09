"use client";
import { getShippingFee } from "@/lib/actions/shippingFee";
import { useEffect, useState } from "react";

export const useShippingFee = () => {
  const [shippingFee, setShippingFee] = useState(250);

  useEffect(() => {
    const loadShippingFee = async () => {
      const res = await getShippingFee();
      setShippingFee(res.fee?.fee ?? 250);
    };
    loadShippingFee();
  });

  return { shippingFee };
};
