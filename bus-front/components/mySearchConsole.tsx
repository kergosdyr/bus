//import mui input
import {Grid, Input, StyledEngineProvider, TextField} from "@mui/material";
import React from "react";
import styled from "styled-components";

const MyTextField = styled(TextField)`
  background-color: #fff;
  border-radius: 5px;
  &:hover {
    background-color: #f0f0f0;
  }
  &:focus {
    background-color: #fff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`
export const MySearchConsole = () => {

    return (
        <>
            <StyledEngineProvider injectFirst>
                <Grid>
                    <MyTextField/>
                </Grid>
            </StyledEngineProvider>
        </>
    )

};