import { AiOutlineCloudUpload } from "react-icons/ai";

interface Props {
  setSelectedFile: (file: File | null) => void;
  selectedFile: File | null;
}

const FileInput = ({ setSelectedFile, selectedFile }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="flex items-center justify-center w-full mt-8 md:mt-9 lg:mt-8">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-4/5 h-1/5 border-2 border-gray-300 border-dashed rounded-3xl cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <AiOutlineCloudUpload className="w-12 h-12 text-violet-500 hover:text-violet-600 dark:text-gray-400" />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            MP3 (MAX. 10MB)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          value={selectedFile?.name || ""}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default FileInput;
