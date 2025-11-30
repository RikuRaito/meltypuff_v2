import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Melty Puff",
  description: "Melty Puffの特定商取引法に基づく表記です。",
};

export default function TokushouPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
      <h1 className="mb-8 text-3xl font-bold text-black md:text-4xl">
        特定商取引法に基づく表記
      </h1>
      <div className="space-y-8 text-sm leading-relaxed text-gray-800 md:text-base">
        <section>
          <p className="mb-4 text-xs text-gray-600">最終更新日: 2025年1月1日</p>
          <p className="mb-6">
            特定商取引法に基づき、以下の通り表記いたします。
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            事業者名
          </h2>
          <p>Melty Puff</p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            代表者
          </h2>
          <p>斉藤吏功</p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            所在地
          </h2>
          <p>
            〒921-0941
            <br />
            石川県金沢市旭町3-14-11
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            お問い合わせ先
          </h2>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">メールアドレス:</span>{" "}
              meltypuff@meltypuff.com
            </p>
            <p>
              <span className="font-semibold">電話番号:</span> 080-3747-0649
            </p>
            <p className="text-xs text-gray-600">
              ※お問い合わせの受付時間: 平日 10:00〜18:00（土日祝日を除く）
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            販売価格
          </h2>
          <p>
            商品の販売価格は、各商品ページに表示された価格とします。価格はすべて税込表示です。なお、価格は予告なく変更する場合があります。
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            商品代金以外の必要料金
          </h2>
          <div className="space-y-2">
            <p>以下の費用が別途必要となる場合があります。</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                送料: 商品により異なります（詳細は各商品ページをご確認ください）
              </li>
            </ul>
            <p className="mt-2 text-xs text-gray-600">
              ※ニコチンベイプは送料無料です。
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            お支払い方法
          </h2>
          <ul className="ml-6 list-disc space-y-1">
            <li>
              クレジットカード決済（VISA、Mastercard、JCB、American
              Express、Diners Club）
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            お支払い時期
          </h2>
          <ul className="ml-6 list-disc space-y-1">
            <li>クレジットカード決済: ご注文確定時</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            商品の引き渡し時期
          </h2>
          <p>
            ご注文確定後、3〜7営業日以内に発送いたします。ただし、在庫状況や配送先地域により、お届けまでにお時間をいただく場合がございます。詳細は各商品ページをご確認ください。
          </p>
          <p className="mt-2 text-xs text-gray-600">
            ※天候不良や交通事情、その他やむを得ない事情により、配送が遅延する場合がございます。
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            返品・交換について
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-lg">返品・交換の可否</h3>
              <p>
                商品の性質上、以下の場合を除き、返品・交換はお受けできません。
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>商品が破損・汚損していた場合</li>
                <li>注文と異なる商品が届いた場合</li>
                <li>商品が未到着の場合</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-lg">返品・交換の期限</h3>
              <p>商品到着後7日以内にご連絡ください。</p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-lg">返品・交換の送料</h3>
              <p>
                当社の不備による返品・交換の場合、送料は当社が負担いたします。お客様都合による返品・交換の場合、送料はお客様のご負担となります。
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-lg">返金方法</h3>
              <p>
                返品商品到着確認後、7営業日以内にご指定の口座へ返金いたします。返金手数料は当社が負担いたします。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            動作環境
          </h2>
          <p>本サービスをご利用いただくには、以下の環境が必要です。</p>
          <div className="mt-2 rounded-lg bg-gray-50 p-4">
            <p className="mb-2 font-semibold">推奨ブラウザ:</p>
            <ul className="ml-6 list-disc space-y-1 text-sm">
              <li>Google Chrome（最新版）</li>
              <li>Mozilla Firefox（最新版）</li>
              <li>Safari（最新版）</li>
              <li>Microsoft Edge（最新版）</li>
            </ul>
            <p className="mt-4 mb-2 font-semibold">推奨OS:</p>
            <ul className="ml-6 list-disc space-y-1 text-sm">
              <li>Windows 10以上</li>
              <li>macOS 10.15以上</li>
              <li>iOS 13以上</li>
              <li>Android 8.0以上</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            サービス提供の停止
          </h2>
          <p>
            当社は、以下の場合には、事前に通知することなく、本サービスの提供を停止または中断することができるものとします。
          </p>
          <ul className="ml-6 mt-2 list-disc space-y-1">
            <li>
              本サービスに係るコンピュータシステムの保守点検または更新を行う場合
            </li>
            <li>
              地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
            </li>
            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>その他、当社が本サービスの提供が困難と判断した場合</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            個人情報の取り扱い
          </h2>
          <p>
            お客様の個人情報は、
            <a
              href="/legal/privacy_policy"
              className="text-[#b43353] hover:underline"
            >
              プライバシーポリシー
            </a>
            に従って適切に取り扱います。
          </p>
        </section>

        <section className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">以上</p>
        </section>
      </div>
    </div>
  );
}
