"use client";
import { useEffect, useRef } from "react";
import { handleCheckout } from "@/lib/actions/checkout";

interface SquareCardFormProps {
  amount: number;
}

export const SquareCardForm = ({ amount }: SquareCardFormProps) => {
  const initializedRef = useRef(false);
  const cardRef = useRef<SquareCard | null>(null);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const initSquare = async () => {
      if (!window.Square) return;
      const payments = window.Square.payments(
        process.env.NEXT_PUBLIC_SQUARE_APP_ID!,
        process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID!,
      );

      const card = await payments.card();
      await card.attach("#card-container");
      cardRef.current = card;
    };

    initSquare();

    return () => {
      cardRef.current?.destroy();
    };
  }, []);

  console.log("amount: ", amount, typeof amount);

  const handlePayment = async () => {
    if (!cardRef.current) return;
    const result = await cardRef.current.tokenize();
    if (result.status === "OK") {
      console.log("token:", result.token);
      handleCheckout(result.token!, amount);
    } else {
      console.error("tokenize error:", result.errors);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        id="card-container"
        className="-mb-4"
      />
      <div className="w-full text-center mb-4">
        <p className="text-black font-light mb-4">
          カード情報を入力してください
        </p>
        <p className="text-black font-light mb-3">
          決済はSquareの決済サービスを通し、
          <br />
          安全に行われます
        </p>
      </div>

      <button
        onClick={handlePayment}
        className="text-white sm:text-xl border bg-[#b43353] font-bold hover:bg-[#9a2a45] rounded-full text-lg px-6 py-2 transition-colors"
      >
        確定
      </button>
    </div>
  );
};
