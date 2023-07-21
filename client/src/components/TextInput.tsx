import { useState } from "react";

interface Props {
  placeholder: string;
}

const TextInput = ({ placeholder }: Props) => {
  const [inputText, setInputText] = useState("");
  return (
    <div className="w-4/5 mx-auto mt-4">
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        required
      />
    </div>
  );
};

export default TextInput;
