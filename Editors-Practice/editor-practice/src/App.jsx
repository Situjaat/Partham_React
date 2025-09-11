
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyEditor = () => {
  const editorRef = useRef(null);

  const handleSubmit = () => {
    if (editorRef.current) {
      console.log("Editor Content:", editorRef.current.getContent());
      alert("Content Saved! Check console.");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">TinyMCE Text Editor</h2>

      <Editor
        apiKey="no-api-key" // Optional (TinyMCE free version ke liye no-api-key use kar sakte ho)
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Start typing here...</p>"
        init={{
          height: 400,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic underline | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help | image",
        }}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Save Content
      </button>
    </div>
  );
};

export default TinyEditor;

