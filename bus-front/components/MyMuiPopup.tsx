import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {Box, StyledEngineProvider, Typography} from "@mui/material";


const ModalButton = styled(Button)`
  && {
    background-color: #2196f3;
    color: white;

    &:hover {
      background-color: #1976d2;
    }
  }
`;
const StyledBox = styled(Box)`
  && {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background-color: white;
    border: 2px solid #000;
    padding: 4px;
    box-shadow: 24px 24px 48px 0 rgba(0, 0, 0, 0.3);
  }
`

const MuiPopup = ({isOpen, setIsPopupOpen, modalInfo}: {
  isOpen: boolean,
  setIsPopupOpen: Function,
  modalInfo : {
    modalTitle: string,
    modalSubTitle: string
  }
}) => {


  const closeButtonOnClickHandler = () => {
    setIsPopupOpen(false);
  }


  return (
      <StyledEngineProvider injectFirst>
        <Modal open={isOpen}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
        >
          <StyledBox>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalInfo.modalTitle || 'Title'}
            </Typography>
            <Typography id="modal-modal-description" sx={{mt: 2}}>
              {modalInfo.modalSubTitle || 'SubTitle'}
            </Typography>
            <ModalButton variant="contained" onClick={closeButtonOnClickHandler}>
              Close
            </ModalButton>
          </StyledBox>
        </Modal>
      </StyledEngineProvider>
  );
};

export default MuiPopup;
