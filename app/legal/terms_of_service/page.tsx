import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | Melty Puff",
  description: "Melty Puffの利用規約です。",
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
      <h1 className="mb-8 text-3xl font-bold text-black md:text-4xl">
        利用規約
      </h1>
      <div className="space-y-8 text-sm leading-relaxed text-gray-800 md:text-base">
        <section>
          <p className="mb-4 text-xs text-gray-600">最終更新日: 2025年1月1日</p>
          <p className="mb-6">
            本規約は、Melty
            Puff（以下「当社」といいます）が提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。ご利用の前に必ずお読みください。
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            第1条（適用）
          </h2>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              本規約は、当社が提供する本サービスの利用に関する当社と利用者との間の権利義務関係を定めることを目的とし、利用者と当社との間の本サービスの利用に関わる一切の関係に適用されます。
            </li>
            <li>
              当社が本サービス上で掲載する本規約以外のルール、ガイドライン等（以下「個別規定」といいます）は、本規約の一部を構成するものとします。
            </li>
            <li>
              本規約の内容と、前項の個別規定の内容が矛盾する場合には、個別規定が優先して適用されるものとします。
            </li>
          </ol>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            第2条（利用登録）
          </h2>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              本サービスにおいては、登録希望者が本規約に同意の上、当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。
            </li>
            <li>
              当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>利用登録の申請に際して虚偽の事項を届け出た場合</li>
                <li>本規約に違反したことがある者からの申請である場合</li>
                <li>その他、当社が利用登録を相当でないと判断した場合</li>
              </ul>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            第3条（商品の購入）
          </h2>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              本サービスにおいて商品の注文を行う場合、利用者は、当社が指定する方法により、必要な情報を正確に提供するものとします。
            </li>
            <li>
              商品の注文は、利用者が当社の指定する方法により注文を完了し、当社が注文内容を確認した時点で契約が成立するものとします。
            </li>
            <li>
              当社は、利用者が提供した情報に基づいて発送を行います。利用者が提供した情報に誤りがあった場合、当社は一切の責任を負いません。
            </li>
          </ol>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            第4条（代金の支払い）
          </h2>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              商品の代金は、当社が指定する支払方法により、利用者が支払うものとします。
            </li>
            <li>
              利用者が代金の支払を遅滞した場合、利用者は年14.6％の割合による遅延損害金を当社に支払うものとします。
            </li>
          </ol>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            第5条（禁止事項）
          </h2>
          <p className="mb-2">
            利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。
          </p>
          <ol className="ml-6 list-decimal space-y-2">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>
              本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為
            </li>
            <li>
              当社、ほかの利用者、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
            </li>
            <li>本サービスによって得られた情報を商業的に利用する行為</li>
            <li>当社のサービスの運営を妨害するおそれのある行為</li>
            <li>不正アクセス、ハッキング、その他当社が不正と判断する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ol>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            第6条（本サービスの提供の停止等）
          </h2>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              当社は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>
                  本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
                </li>
                <li>
                  地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
                </li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ul>
            </li>
            <li>
              当社は、本サービスの提供の停止または中断により、利用者または第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
            </li>
          </ol>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            第7条（保証の否認および免責）
          </h2>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
            </li>
            <li>
              当社は、本サービスに起因して利用者に生じたあらゆる損害について一切の責任を負いません。ただし、本サービスに関する当社と利用者との間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
            </li>
            <li>
              前項ただし書に定める場合であっても、当社は、当社の過失（重過失を除きます。）による債務不履行または不法行為により利用者に生じた損害のうち特別な事情から生じた損害（当社または利用者が損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、当社の過失（重過失を除きます。）による債務不履行または不法行為により利用者に生じた損害の賠償は、利用者から当該損害が発生した月に受領した利用料の額を上限とします。
            </li>
            <li>
              当社は、本サービスに関して、利用者と他の利用者または第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
            </li>
          </ol>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            第8条（サービス内容の変更等）
          </h2>
          <p>
            当社は、利用者に通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによって利用者に生じた損害について一切の責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            第9条（利用規約の変更）
          </h2>
          <ol className="ml-6 list-decimal space-y-2">
            <li>
              当社は以下の場合には、利用者の個別の同意を待たず、本規約を変更することができるものとします。
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>本規約の変更が利用者の一般の利益に適合するとき。</li>
                <li>
                  本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。
                </li>
              </ul>
            </li>
            <li>
              当社は本規約を変更した場合には、変更後の本規約の内容および効力発生時期を当社ウェブサイト上での掲示その他の適切な方法により通知し、かつ当社のウェブサイト上での掲示を効力発生の時点とするものとします。
            </li>
          </ol>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            第10条（個人情報の取扱い）
          </h2>
          <p>
            当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            第11条（通知または連絡）
          </h2>
          <p>
            利用者と当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、利用者から、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時に利用者へ到達したものとみなします。
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            第12条（権利義務の譲渡の禁止）
          </h2>
          <p>
            利用者は、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-black md:text-2xl">
            第13条（準拠法・裁判管轄）
          </h2>
          <ol className="ml-6 list-decimal space-y-2">
            <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
            <li>
              本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
            </li>
          </ol>
        </section>

        <section className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">以上</p>
        </section>
      </div>
    </div>
  );
}
