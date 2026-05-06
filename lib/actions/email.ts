"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendConfirmationEmail = async (to: string, paymentId: string) => {
  await resend.emails.send({
    from: "noreply@meltypuff.com",
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

export const sendContactConfirmation = async (
  to: string,
  name: string,
  message: string,
) => {
  await resend.emails.send({
    from: "noreply@meltypuff.com",
    to: to,
    subject: "【Melty Puff】お問い合わせを受け付けました",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="color: #b43353; font-size: 24px; margin: 0;">Melty Puff</h1>
        </div>

        <h2 style="color: #111; font-size: 20px; margin-bottom: 8px;">お問い合わせありがとうございます</h2>
        <p style="color: #444; line-height: 1.7;">
          ${name} 様<br />
          この度はMelty Puffへお問い合わせいただきありがとうございます。<br />
          内容を確認のうえ、担当者よりご連絡いたします。
        </p>

        <div style="background-color: #f9f9f9; border-radius: 8px; padding: 16px; margin: 24px 0;">
          <p style="margin: 0 0 8px; color: #888; font-size: 13px;">お問い合わせ内容</p>
          <p style="margin: 0; color: #111; font-size: 15px; white-space: pre-wrap;">${message}</p>
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
    from: "noreply@meltypuff.com",
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

export const notifyContactToAdmin = async (
  id: string,
  uuid: string,
  name: string,
  email: string,
  message: string,
) => {
  await resend.emails.send({
    from: "noreply@meltypuff.com",
    to: "vape59336@gmail.com",
    subject: "【Melty Puff】新しいお問い合わせが届きました",
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #ffffff;">
        <h2 style="color: #b43353; font-size: 20px; margin-bottom: 16px;">新しいお問い合わせが届きました</h2>

        <div style="background-color: #f9f9f9; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <p style="margin: 0 0 8px; color: #888; font-size: 13px;">お問い合わせID</p>
          <p style="margin: 0; color: #111; font-size: 15px; font-weight: bold;">${id}</p>
         <p style="margin: 0; color: #111; font-size: 15px; font-weight: bold;">uuid:${uuid}</p>

        </div>

        <div style="background-color: #f9f9f9; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <p style="margin: 0 0 8px; color: #888; font-size: 13px;">お名前</p>
          <p style="margin: 0; color: #111; font-size: 15px; font-weight: bold;">${name}</p>
        </div>

        <div style="background-color: #f9f9f9; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <p style="margin: 0 0 8px; color: #888; font-size: 13px;">メールアドレス</p>
          <p style="margin: 0; color: #111; font-size: 15px; font-weight: bold;">${email}</p>
        </div>

        <div style="background-color: #f9f9f9; border-radius: 8px; padding: 16px;">
          <p style="margin: 0 0 8px; color: #888; font-size: 13px;">お問い合わせ内容</p>
          <p style="margin: 0; color: #111; font-size: 15px; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  });
};
