import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import tw from 'tailwind-styled-components';
import { BiSearch } from 'react-icons/bi';

const TextFieldWrapper = tw.div`
    relative
    w-full
    mb-4
    flex
    flex-row
    justify-center
`;

const TextFieldInput = tw.input`
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
`;

interface ITextFieldPlaceHolder {
  placeholder: string;
}

const SearchTextField = ({ placeholder }: ITextFieldPlaceHolder) => {
  return (
    <TextFieldWrapper>
      <TextFieldInput type="text" placeholder={placeholder} />
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
    </TextFieldWrapper>
  );
};

export default SearchTextField;
