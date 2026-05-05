"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendConfirmationEmail = async (to: string, paymentId: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: to,
    subject: "【Melty Puff】ご注文ありがとうございます",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="color: #b43353; font-size: 24px; margin: 0;">Melty Puff</h1>
        </div>

        <h2 style="color: #111; font-size: 20px; margin-bottom: 8px;">ご注文ありがとうございます</h2>
        <p style="color: #444; line-height: 1.7;">
          この度はMelty Puffをご利用いただきありがとうございます。<br />
          ご注文を受け付けました。商品の発送準備が整い次第、発送のご連絡をいたします。
        </p>

        <div style="background-color: #f9f9f9; border-radius: 8px; padding: 16px; margin: 24px 0;">
          <p style="margin: 0; color: #888; font-size: 13px;">注文ID</p>
          <p style="margin: 4px 0 0; color: #111; font-size: 15px; font-weight: bold;">${paymentId}</p>
        </div>

        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />

        <p style="color: #aaa; font-size: 12px; text-align: center;">
          このメールはシステムから自動送信されています。返信はできません。
        </p>
      </div>
    `,
  });
};

export const notifyOrderToAdmin = async (
  paymentId: string,
  amount: number,
  customerName: string,
) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "vape59336@gmail.com",
    subject: "【Melty Puff】新しい注文が入りました",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #ffffff;">
        <h2 style="color: #b43353; font-size: 20px; margin-bottom: 16px;">新しい注文が入りました</h2>

        <div style="background-color: #f9f9f9; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <p style="margin: 0 0 8px; color: #888; font-size: 13px;">注文ID</p>
          <p style="margin: 0; color: #111; font-size: 15px; font-weight: bold;">${paymentId}</p>
        </div>

        <div style="background-color: #f9f9f9; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <p style="margin: 0 0 8px; color: #888; font-size: 13px;">注文者名</p>
          <p style="margin: 0; color: #111; font-size: 15px; font-weight: bold;">${customerName}</p>
        </div>

        <div style="background-color: #f9f9f9; border-radius: 8px; padding: 16px;">
          <p style="margin: 0 0 8px; color: #888; font-size: 13px;">合計金額</p>
          <p style="margin: 0; color: #111; font-size: 15px; font-weight: bold;">¥${amount.toLocaleString()}</p>
        </div>
      </div>
    `,
  });
};
