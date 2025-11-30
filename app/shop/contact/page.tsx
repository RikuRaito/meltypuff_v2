"use client";

import { useState } from "react";
import { submitContact } from "@/lib/api/contacts";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  title: string;
  items: FAQItem[];
};

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    title: "商品に関するご質問",
    items: [
      {
        question: "ベイプの使い方を教えてください",
        answer:
          "吸引口についているキャップを外していただきましたら、すぐに吸引可能でございます。",
      },
      {
        question: "初心者におすすめの製品はどれですか？",
        answer:
          "普段たばこを吸われない方にはノンニコチンベイプをおすすめしております． 一方普段から加熱式たばこを使用されている方は吸い心地の満足度の高いニコチンベイプをおすすめしております",
      },
      {
        question: "フレーバーの種類はどれくらいありますか？",
        answer:
          "現在Melty Puffではノンニコチンベイプは6種、ニコチンベイプは5種の販売をしております。",
      },
    ],
  },
  {
    title: "ご購入・発送に関するご質問",
    items: [
      {
        question: "注文後どれくらいで届きますか",
        answer:
          "ノンニコチンベイブは国内からの発送となりますので1～2日でお届け先にご到着いたします。 また、ニコチンペイプは海外の連携倉庫からの発送となりますのでご注文から1週間後にお届け先にご到着いたします。",
      },
      {
        question: "送料はいくらですか",
        answer:
          "ノンニコチンベイブはご注文ごとに250円、ニコチンペイブは送料無料でご案内させていただいております。",
      },
    ],
  },
  {
    title: "トラブル・使用方法に関するご質問",
    items: [
      {
        question: "ベイプが動かない時の対処法は？",
        answer:
          "お問い合わせフォームからご相談ください。修理方法やご返金について個別に担当者からメールを送させていただきます。",
      },
      {
        question: "リキッドの詰め替え方を教えてください",
        answer:
          "当社で販売している製品は、現在すべて使い捨てタイプとなっております。ご使用後はお客様ご自身で、適切な方法で廃棄していただきますようお願い申し上げます。",
      },
    ],
  },
  {
    title: "法律・規制に関するご質問",
    items: [
      {
        question: "購入には年齢制限がありますか？",
        answer:
          "ご購入の際にはお客様が20歳以上か年齢確認をさせていただきます。",
      },
      {
        question:
          "ニコチンベイプが税関で没収されてしまった場合はどうすればいいですか？",
        answer:
          "ご購入いただいたベイプが没収されることの内容、当社ではお客様のリキッドのご注文を適切に管理しております。どうぞ安心してご利用ください。",
      },
    ],
  },
];

export default function Contact() {
  // ジャンルIDとFAQインデックスの組み合わせで管理
  // 例: "0-1" = ジャンル0のFAQ 1番目
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(openFAQ === key ? null : key);
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 md:px-8">
      <h1 className="mt-15 mb-7 text-2xl font-bold text-black md:text-3xl text-center">
        お問い合わせ
      </h1>
      <h2 className="text-[#b43353] text-center text-2xl font-bold pb-5">
        よくある質問
      </h2>
      <div className="space-y-8">
        {FAQ_CATEGORIES.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h3 className="text-[#b43353] font-bold text-2xl">
              {category.title}
            </h3>
            {category.items.map((faq, faqIndex) => {
              const faqKey = `${categoryIndex}-${faqIndex}`;
              const isOpen = openFAQ === faqKey;
              return (
                <div
                  key={faqIndex}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-black text-0.6xl">
                      {faq.question}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      color="black"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
        <div>
          <h3 className="text-[#b43353] text-2xl font-bold">お問い合わせ</h3>
          {/* お問い合わせフォーム */}
          <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <p className="mb-4 text-base text-gray-700">
              ご質問やご相談がありましたら、以下のフォームよりお気軽にお問い合わせください。
            </p>
            <form
              className="flex flex-col gap-4"
              action={async (formData: FormData) => {
                const result = await submitContact(formData);
                if (result.success) {
                  alert(result.message);
                  // フォームをリセット
                  const form = document.querySelector(
                    "form"
                  ) as HTMLFormElement;
                  form?.reset();
                } else {
                  alert(result.error);
                }
              }}
            >
              <label className="flex flex-col gap-2 text-black">
                お名前
                <input
                  type="text"
                  name="name"
                  className="rounded border px-3 py-2 text-black"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-black">
                メールアドレス
                <input
                  type="email"
                  name="email"
                  className="rounded border px-3 py-2 text-black"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-black">
                お問い合わせ内容
                <textarea
                  name="message"
                  rows={5}
                  className="rounded border px-3 py-2 text-black"
                  required
                />
              </label>
              <button
                type="submit"
                className="mt-2 self-end rounded bg-[#b43353] px-5 py-2 font-semibold text-white hover:bg-[#a22d49] transition-colors"
              >
                送信
              </button>
            </form>
            <p className="mt-4 text-xs text-black">
              ※送信後、内容を確認し担当者よりご連絡いたします。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
