//import mui input
import {Container, Grid, Input, StyledEngineProvider, TextField} from "@mui/material";
import React from "react";
import styled from "styled-components";
import {Stack} from "@mui/system";
import MyMuiCard from "@/components/myMuiCard";

const StyledStack = styled(Stack)`
  margin-left: 16px;
  align-items: stretch;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: 100vh;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
`;

const MyTextField = styled(TextField)`
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    background-color: #fff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`
export const MySearchConsole = (props) => {

    const selectedBusStopList = props.selectedBusStopList;

    return (
        <>
            <StyledEngineProvider injectFirst>
                <StyledStack>
                    <MyTextField/>
                    {
                        selectedBusStopList.length === 0 ?

                                <MyMuiCard
                                    title={"검색 결과가 없습니다."}
                                    subtitle={"검색어를 입력해주세요."}
                                    children={"없음"}
                                />

                        :
                        selectedBusStopList.map((busStop, idx) => {
                            return (
                                <MyMuiCard
                                    key={idx}
                                    title={busStop.stationNm}
                                    subtitle={busStop.stationId}
                                    children={busStop.arsId}
                                />
                            )
                        })
                    }

                </StyledStack>
            </StyledEngineProvider>
        </>
    )

};