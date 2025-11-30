"use server";
import { prisma } from "../prisma";

type ContactInput = {
  email: string;
  content: string;
};

// データベースから取得したお問い合わせの型
type Contact = {
  id: number;
  email: string;
  content: string;
};

// フォーム送信結果の型
type SubmitResult = {
  success: boolean;
  message?: string;
  error?: string;
};

//お問い合わせ内容の保存（FormDataから）
export const submitContact = async (
  formData: FormData
): Promise<SubmitResult> => {
  try {
    const email = formData.get("email") as string;
    const content = formData.get("message") as string;

    if (!email || !content) {
      return {
        success: false,
        error: "メールアドレスとお問い合わせ内容は必須です。",
      };
    }

    await prisma.contact.create({
      data: {
        email: email,
        content: content,
      },
    });

    return {
      success: true,
      message: "お問い合わせを受け付けました。担当者よりご連絡いたします。",
    };
  } catch (error) {
    console.error("お問い合わせ内容保存中にエラーが発生しました。", error);
    return {
      success: false,
      error: "送信に失敗しました。しばらく時間をおいて再度お試しください。",
    };
  }
};

//お問い合わせ内容の保存（ContactInputから）
export const saveContact = async (contact: ContactInput): Promise<Contact> => {
  try {
    const savedContact = await prisma.contact.create({
      data: {
        email: contact.email,
        content: contact.content,
      },
    });
    return savedContact;
  } catch (error) {
    console.error("お問い合わせ内容保存中にエラーが発生しました。", error);
    throw error;
  }
};

//お問い合わせ内容の全件取得
export const getContacts = async (): Promise<Contact[]> => {
  try {
    const contacts: Contact[] = await prisma.contact.findMany({
      orderBy: {
        id: "asc",
      },
    });
    return contacts;
  } catch (error) {
    console.log("お問い合わせ内容の取得中にエラーが発生しました", error);
    throw error;
  }
};
