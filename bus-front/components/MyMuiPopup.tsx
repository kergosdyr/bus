import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {Box, StyledEngineProvider, Typography} from "@mui/material";
import getStationBusBasicInfo from "@/pages/api/getStationBusBasicInfo";
import BusBasicInfo from "@/components/BusBasicInfo";



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
    modalSubTitle: string,
    modalContent : string,

  }
}) => {


  const closeButtonOnClickHandler = () => {
    setIsPopupOpen(false);
  }

  const [busBasicInfoList, setBusBasicInfoList] = useState([]);


    const GvBusBasicInfoList = React.createContext(busBasicInfoList);



  useEffect(() => {

      //why? 왜 무한호출이 되는가 아래 로직을 제거 하면
      if(busBasicInfoList.length >0){
          return;
      }

    console.log("useEffect ing......"+JSON.stringify(modalInfo));
      getStationBusBasicInfo(modalInfo.modalContent)
          .then((busBasicInfoResult) => {
              const busBasicInfos = busBasicInfoResult.msgBody.itemList;

              setBusBasicInfoList(busBasicInfos);
              console.log("busBasicInfoResult result......"+JSON.stringify(busBasicInfos));
          });
    return () => {console.log("useEffect return......");}
  });



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

            <BusBasicInfo busBasicList={busBasicInfoList}/>
           {/* <GvBusBasicInfoList.Provider busBasicInfoList=busBasicInfoList>
                <BusBasicInfo/>
            </GvBusBasicInfoList.Provider>*/}

        </Modal>
      </StyledEngineProvider>
  );
};

export default MuiPopup;
