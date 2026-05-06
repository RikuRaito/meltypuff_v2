import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getContacts } from "@/lib/api/contacts";

export default async function AdminContact() {
  const session = await auth();
  if (!session) {
    redirect("/admin/login");
  }

  const contacts = await getContacts();

  return (
    <div className="min-h-screen bg-gray-50 pt-15 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">お問い合わせ確認ページ</h1>
        {contacts.length === 0 ? (
          <div className="rounded-lg bg-white p-8 text-center shadow">
            <p className="text-gray-500">お問い合わせはありません</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {contacts.map((contact) => (
              <div key={contact.id} className="rounded-lg bg-white p-6 shadow">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">ID: {contact.id}</p>
                    <p className="font-bold text-gray-900 text-lg">{contact.name}</p>
                    <p className="text-sm text-gray-500">{contact.email}</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="font-medium text-gray-700 mb-2">お問い合わせ内容</p>
                  <p className="text-sm text-gray-600 whitespace-pre-wrap">{contact.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
