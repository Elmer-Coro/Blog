import React, { useRef } from "react";
import { FaCopy } from "react-icons/fa";

const CodeEditor = ({ code, lenguage }) => {
  const codeRef = useRef(null);

  const handleCopyCode = () => {
    const codeText = codeRef.current.innerText;
    navigator.clipboard.writeText(codeText);
    alert("Código copiado al portapapeles");
  };

  return (
    <div className='bg-gray-200 p-4 rounded-md'>
      <header className='mb-4 text-base font-semibold flex items-center justify-between'>
        <div>{lenguage}</div>
        <div className='flex items-center'>
          <button
            className='flex items-center gap-2  px-4 py-2 '
            onClick={handleCopyCode}>
            <FaCopy />
            Copy code
          </button>
        </div>
      </header>

      <div className='grid grid-cols-1  gap-4 w-full'>
        <pre className='bg-white p-4 overflow-auto rounded-md'>{code}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;
