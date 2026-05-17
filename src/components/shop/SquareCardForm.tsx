"use client";
import { useEffect, useRef, useState } from "react";
import { handleCheckout } from "@/lib/actions/checkout";

interface SquareCardFormProps {
  cartItems: { id: number; qty: number }[];
  couponCode?: string;
  //Apple Pay対応のための合計金額
  totalAmount: number;
}

export const SquareCardForm = ({
  cartItems,
  couponCode,
  totalAmount,
}: SquareCardFormProps) => {
  const initializedRef = useRef(false);
  const cardRef = useRef<SquareCard | null>(null);
  const [isPaymentSucceed, setIsPaymentSucceed] = useState(false);
  const [paymentUuid, setPaymentUuid] = useState<string | null>(null);
  const [isProcessing, setIsProccessing] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [error, setError] = useState("");

  const customerRef = useRef({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    address1: "",
    address2: "",
  });

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    const waitForSquare = (): Promise<void> =>
      new Promise((resolve) => {
        if (window.Square) { resolve(); return; }
        const interval = setInterval(() => {
          if (window.Square) { clearInterval(interval); resolve(); }
        }, 100);
      });

    const initSquare = async () => {
      await waitForSquare();
      const payments = window.Square!.payments(
        process.env.NEXT_PUBLIC_SQUARE_APP_ID!,
        process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID!,
      );

      const card = await payments.card();
      await card.attach("#card-container");
      cardRef.current = card;

      try {
        const applePayRequest = payments.paymentRequest({
          countryCode: "JP",
          currencyCode: "JPY",
          total: { amount: String(totalAmount), label: "Melty Puff" },
        });
        const applePay = await payments.applePay(applePayRequest);
        await applePay.attach("#apple-pay-button");
        applePay.addEventListener("ontokenize", async (event) => {
          const token = event.detail.token;
          await handleCheckout(token, customerRef.current, cartItems, couponCode);
        });
      } catch {
        // 開発環境など Apple Pay が使えない場合はスキップ
      }
    };

    initSquare();

    return () => {
      cardRef.current?.destroy();
    };
  }, []);

  const validate = () => {
    if (
      !name ||
      !email ||
      !email.includes("@") ||
      !phone ||
      zipCode.length !== 7 ||
      !address1
    )
      return false;
    return true;
  };

  const handlePayment = async () => {
    if (!validate()) {
      setError("入力に誤りがあります");
      return;
    }
    setIsProccessing(true);
    try {
      if (!cardRef.current) return;
      const result = await cardRef.current.tokenize();
      if (result.status === "OK") {
        const res = await handleCheckout(
          result.token!,
          {
            name,
            email,
            phone,
            zipCode,
            address1,
            address2,
          },
          cartItems,
          couponCode ?? undefined,
        );
        if (res?.success) {
          if (res.success && res.uuid) {
            setPaymentUuid(res.uuid);
          }
          setIsPaymentSucceed(true);
          localStorage.removeItem("meltypuff_cart");
          window.dispatchEvent(new Event("cartUpdated"));
        }
      } else {
        console.error("tokenize error:", result.errors);
      }
    } catch (err) {
      console.error("決済処理中にエラーが出ました:", err);
      throw err;
    } finally {
      setIsProccessing(false);
    }
  };

  useEffect(() => {
    if (zipCode.length !== 7) return;
    const searchAddress = async () => {
      const res = await fetch(
        `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`,
      );
      const data = await res.json();

      if (!data.results) return;
      console.log("data:", data);
      const address =
        data.results[0].address1 +
        data.results[0].address2 +
        data.results[0].address3;
      setAddress1(address);
    };
    searchAddress();
  }, [zipCode]);

  if (isPaymentSucceed) {
    return (
      <div className="text-center py-8">
        <p className="text-black font-bold text-xl mb-2">決済が完了しました</p>
        <p className="text-black font-bold text-xl mb-2">
          注文ID:{paymentUuid}
        </p>
        <p className="text-black font-bold text-xl mb-2">
          確認メールを送信しました
        </p>
        <p className="text-gray-600">ご注文ありがとうございました。</p>
      </div>
    );
  }

  const inputClass =
    "w-full border border-gray-300 rounded px-3 py-2 text-black text-sm";

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <input
          placeholder="お名前"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            customerRef.current.name = e.target.value;
          }}
          className={inputClass}
        />
        <div className="flex gap-2">
          <input
            placeholder="メールアドレス"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              customerRef.current.email = e.target.value;
            }}
            className={inputClass}
          />
          <input
            placeholder="電話番号"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              customerRef.current.phone = e.target.value;
            }}
            className={inputClass}
          />
        </div>
        <p className="text-black text-base font-semibold pl-3">
          配送先住所の入力をしてください
        </p>
        <input
          placeholder="郵便番号（ハイフンなし）"
          value={zipCode}
          onChange={(e) => {
            setZipCode(e.target.value);
            customerRef.current.zipCode = e.target.value;
          }}
          className={inputClass}
        />
        <input
          placeholder="住所1"
          value={address1}
          onChange={(e) => {
            setAddress1(e.target.value);
            customerRef.current.address1 = e.target.value;
          }}
          className={inputClass}
        />
        <input
          placeholder="住所2（任意）"
          value={address2}
          onChange={(e) => {
            setAddress2(e.target.value);
            customerRef.current.address2 = e.target.value;
          }}
          className={inputClass}
        />
      </div>

      <hr className="border-gray-200" />

      <div
        id="card-container"
        className="-mb-4"
      />
      <div id="apple-pay-button" />
      {error !== "" && (
        <div>
          <p className="text-red-500 text-xs font-light">{error}</p>
        </div>
      )}

      <div className="w-full text-center">
        <p className="text-gray-500 text-xs">
          決済はSquareの決済サービスを通し、安全に行われます
        </p>
      </div>

      <button
        onClick={handlePayment}
        disabled={isProcessing}
        className="w-full text-white bg-[#b43353] font-bold hover:bg-[#9a2a45] rounded-full py-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isProcessing && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {isProcessing ? "処理中..." : "確定"}
      </button>
    </div>
  );
};
