'use client';

import { BiSearch } from 'react-icons/bi';

interface ITextFieldPlaceHolder {
  placeholder: string;
}

const SearchTextField = ({ placeholder }: ITextFieldPlaceHolder) => {
  return (
    <div className="relative mb-4 mt-2 flex w-full flex-row justify-center px-2">
      <input
        className="
            mr-2
            w-full
            rounded-lg
            border-2
            border-green-400
            bg-white
            px-2
            shadow-sm
            focus:outline-none
            focus:drop-shadow-lg
            "
        type="text"
        placeholder={placeholder}
      />
      <div
        className="
              rounded-full
              bg-green-500
              p-2
              text-white
              hover:drop-shadow-lg
            "
      >
        <BiSearch size={18} />
      </div>
    </div>
  );
};

export default SearchTextField;
