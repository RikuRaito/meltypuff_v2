"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const heroVideo = {
  src: "/hero/vape.mp4",
  poster: "/hero/pineapple_20K.png",
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        window.dispatchEvent(
          new CustomEvent("heroVisibility", {
            detail: { isVisible: entry.isIntersecting },
          })
        );
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden sm:min-h-[80vh] md:min-h-screen"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo.src}
        poster="None"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-6 px-6 text-center sm:items-start sm:px-10 sm:text-left md:px-16">
        <h1 className="flex flex-col text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-tight">
          <span className="block">Melty Puffで</span>
          <span className="block">ベイプを</span>
          <span className="block">始めよう</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
          こだわり抜いたフレーバーと確かな品質。あなたのライフスタイルに合う
          ベイプがここで見つかる。
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
  );
}
