import React from 'react';
import styled from 'styled-components';

const TextFieldWrapper = styled.div`
  position: relative;
`;

const TextFieldInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #48bb78;
  }
`;

const SearchIcon = styled.svg`
  fill: none;
  stroke: currentColor;
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
`;

interface ITextFieldPlaceHolder {
  placeholder: string;
}

const SearchTextField = ({ placeholder }: ITextFieldPlaceHolder) => {
  return (
    <TextFieldWrapper>
      <TextFieldInput type="text" placeholder={placeholder} />
      <SearchIcon viewBox="0 0 24 24">
        <path d="M21 21L15.5 15.5M15.5 15.5C17.9853 12.6411 17.9853 8.35886 15.5 5.5C13.0147 2.64114 8.98528 2.64115 6.5 5.5C4.01472 8.35887 4.01472 12.6411 6.5 15.5C8.98528 18.3589 13.0147 18.3589 15.5 15.5Z"></path>
      </SearchIcon>
    </TextFieldWrapper>
  );
};

export default SearchTextField;
