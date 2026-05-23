"use client";
import { useEffect, useRef } from "react";
import { EditorView, minimalSetup } from "codemirror";
import { markdown } from "@codemirror/lang-markdown";

interface Props {
  content: string;
  onChange: (value: string) => void;
}

export const ContentInput = ({ content, onChange }: Props) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const view = new EditorView({
      doc: content,
      extensions: [
        minimalSetup,
        markdown(),
        EditorView.theme({
          "&": {
            height: "calc(100vh - 250px)",
            minHight: "calc(100vh - 250px)",
            borderRadius: "4px",
            overflow: "hidden",
            border: "1px solid #d1d5db",
          },
          ".cm-scroller": { overflow: "auto" },
          ".cm-content": { color: "black" },
          ".cm-line": { color: "black" },
        }),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            onChange(update.state.doc.toString());
          }
        }),
      ],
      parent: editorRef.current,
    });

    viewRef.current = view;
    return () => view.destroy();
  }, []);

  return (
    <div
      ref={editorRef}
      className="min-h-0 w-full flex-1"
    />
  );
};
