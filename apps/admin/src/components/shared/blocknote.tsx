import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import { useEffect } from "react";

export default function HTMLEditor(props: any) {
  const htmlValue = props.value ?? "";
  const editor = useCreateBlockNote();

  useEffect(() => {
    const initEditor = async () => {
      const blocks = await editor.tryParseHTMLToBlocks(htmlValue);
      if (blocks) {
        editor.replaceBlocks(editor.document, blocks);
      }
    };
    initEditor();
  }, [htmlValue, editor]);

  if (!editor) {
    return null;
  }

  return (
    <BlockNoteView
      editor={editor}
      onChange={() => {
        props.onChange?.(JSON.stringify(editor.document));
      }}
    />
  );
}
