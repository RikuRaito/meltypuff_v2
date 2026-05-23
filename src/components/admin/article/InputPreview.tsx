import ReactMarkdown from "react-markdown";

interface Props {
  content: string;
}

export const InputPreview = ({ content }: Props) => {
  return (
    <div className="prose rounded max-w-none p-4 border border-gray-300 h-full text-black overflow-auto">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};
