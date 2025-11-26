"use client";
import Image from "next/image";
import Header from "@/app/components/layouts/header/Header";
import { useState } from "react";
import Link from "next/link";

const heroContents = {
  video: {
    src: "/hero/vape.mp4",
    poster: "/hero/pineapple_20K.png",
    alt: "Vape イメージ映像",
  },
  images: [
    {
      src: "/hero/image.png",
      alt: "トップページのキービジュアル",
    },
    {
      src: "/hero/pineapple_20K.png",
      alt: "パイナップルイメージ",
    },
  ],
} as const;

export default function Page() {
  const [activeTab, setActiveTab] = useState("nonNicotine");
  const tabButtonClass = (tab: string) =>
    `w-full rounded-xl border-2 border-transparent hover:bg-[#b43353] hover:text-white px-5 py-3 text-base font-semibold transition-colors duration-200 sm:w-auto ${
      activeTab === tab
        ? "border-neutral-900 text-neutral-900 shadow-xl rounded-xl"
        : "text-neutral-500 hover:text-neutral-900"
    }`;

  return (
    <main className="relative flex min-h-screen flex-col bg-white text-white">
      <section
        data-hero
        className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden sm:min-h-[80vh] md:min-h-screen"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroContents.video.src}
          poster={"None"}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 z-20 px-6">
          <Header />
        </div>
        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-6 px-6 text-center sm:items-start sm:px-10 sm:text-left md:px-16">
          <h1 className="flex flex-col text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-tight">
            <span className="block">Melty Puffで</span>
            <span className="block">ベイプを</span>
            <span className="block">始めよう</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            こだわり抜いたフレーバーと確かな品質。あなたのライフスタイルに合う
            ベイプを、今すぐ見つけてください。
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              className="rounded-3xl border border-white/40 px-8 py-3 text-lg font-semibold text-white/90 transition-colors duration-200 hover:border-white hover:text-white sm:text-xl"
              href="/shop/shop-non"
            >
              ショップを見る
            </Link>
          </div>
        </div>
      </section>
      <section className="relative z-10 mx-auto my-12 w-[92%] max-w-5xl rounded-2xl border-4 border-gray200 shadow-xl sm:p-10">
        <div className="flex flex-col gap-3 border-b-2 border-gray-100 pb-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
          <button
            className={tabButtonClass("nonNicotine")}
            onClick={() => setActiveTab("nonNicotine")}
          >
            ノンニコチンベイプ
          </button>
          <button
            className={tabButtonClass("nicotine")}
            onClick={() => setActiveTab("nicotine")}
          >
            ニコチンベイプ
          </button>
        </div>
        <div className="mt-8">
          {activeTab == "nonNicotine" && (
            <div>
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <Image
                  src={heroContents.images[0].src}
                  alt="Lost Mary Image"
                  className="w-full max-w-sm rounded-xl object-cover md:w-1/2"
                  width={480}
                  height={320}
                />
                <div className="flex flex-1 flex-col gap-3 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-[#b43353]">
                    ノンニコチン
                  </h3>
                  <p className="text-base text-gray-600">
                    アメリカのLOST MARYから日本向けに新登場
                  </p>
                  <p className="text-base text-gray-600">
                    ニコチンを含んでいないので初心者におすすめ
                  </p>
                  <Link
                    className="mt-4 self-center rounded-xl shadow-xl px-6 py-3 text-black transition-colors duration-200 hover:bg-[#b43353] hover:text-white md:self-start"
                    href="shop-non"
                  >
                    商品を見てみる
                  </Link>
                </div>
              </div>
            </div>
          )}
          {activeTab == "nicotine" && (
            <div>
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <Image
                  src={heroContents.images[1].src}
                  className="w-full max-w-sm rounded-xl object-cover md:w-1/2"
                  alt="image_nicotine"
                  width={480}
                  height={320}
                />
                <div className="flex flex-1 flex-col gap-3 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-[#b43353]">
                    ニコチンベイプ
                  </h3>
                  <p className="text-base text-gray-600">
                    Nastyはリッチでクセになるフレーバー
                  </p>
                  <p className="text-base text-gray-600">
                    ニコチンを含んだ世界中で人気のドバイ発のベイプブランドです
                  </p>
                  <Link
                    className="mt-4 self-center rounded-xl shadow-xl px-6 py-3 text-black transition-colors duration-200 hover:bg-[#b43353] hover:text-white md:self-start"
                    href="/shop/shop-nic"
                  >
                    商品を見てみる
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
