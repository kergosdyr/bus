'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import Button from '../Buttons/Button';
import tw from 'tailwind-styled-components';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const ModalBackgroundWrapper = tw.div`
          justify-center
          items-center
          flex
          overflow-x-hidden
          overflow-y-auto
          fixed
          inset-0
          z-50
          outline-none
          focus:outline-none
          bg-neutral-800/70
`;
const ModalContentWrapper = tw.div`
          relative
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto
          h-full
          lg:h-auto
          md:h-auto
`;

const ModalCloseButton = tw.button`
                    p-1
                    border-0
                    hover:opacity-70
                    transition
                    absolute
                    left-9
`;
const ModalWrapper = tw.div`
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0
              rounded-lg
              shadow-lg
              relative
              flex
              flex-col
              w-full
              bg-white
              outline-none
              focus:outline-none
`;
const ModalHeaderWrapper = tw.div`
                flex
                items-center
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
`;
const ModalTitleWrapper = tw.div`
  text-lg
   font-semibold
`;
const ModalBodyWrapper = tw.div`
  relative
   p-6
    flex-auto
    text-center
`;
const ModalSecondButtonWrapper = tw.div`
                    flex
                    flex-row
                    items-center
                    gap-4
                    w-full
`;
const ModalLastWrapper = tw.div`
  flex
   flex-col
    gap-2
     p-6
`;

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <ModalBackgroundWrapper>
        <ModalContentWrapper>
          {/*content*/}
          <div
            className={`
            translate
            duration-300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}
          >
            <ModalWrapper>
              {/*header*/}
              <ModalHeaderWrapper>
                <ModalCloseButton onClick={handleClose}>
                  <IoMdClose size={18} />
                </ModalCloseButton>
                <ModalTitleWrapper>{title}</ModalTitleWrapper>
              </ModalHeaderWrapper>
              {/*body*/}
              <ModalBodyWrapper>{body}</ModalBodyWrapper>
              {/*footer*/}
              <ModalLastWrapper>
                <ModalSecondButtonWrapper>
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                      outline
                    />
                  )}
                  <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
                </ModalSecondButtonWrapper>
                {footer}
              </ModalLastWrapper>
            </ModalWrapper>
          </div>
        </ModalContentWrapper>
      </ModalBackgroundWrapper>
    </>
  );
};

export default Modal;
