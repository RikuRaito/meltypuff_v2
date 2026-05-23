"use client";

export const CreateNewButton = () => {
  return (
    <a
      href={`https://${process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN}.microcms.io/`}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-1.5 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
    >
      新規作成する
    </a>
  );
};
