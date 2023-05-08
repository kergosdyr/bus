'use client';

import { BiSearch } from 'react-icons/bi';

interface ITextFieldPlaceHolder {
  placeholder: string;
}

const SearchTextField = ({ placeholder }: ITextFieldPlaceHolder) => {
  return (
    <div className="    relative    w-full    mb-4    flex    flex-row    justify-center">
      <input
        className="
        px-2
    rounded-lg
    bg-white
    mr-2
    border-2
    border-green-400
    focus:outline-none
    focus:drop-shadow-lg
    w-full
    shadow-sm
"
        type="text"
        placeholder={placeholder}
      />
      <div
        className="
              p-2
              bg-green-500
              rounded-full
              text-white
            "
      >
        <BiSearch size={18} />
      </div>
    </div>
  );
};

export default SearchTextField;
