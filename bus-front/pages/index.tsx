import React from "react";
import MyGoogleMap from "@/components/myGoogleMap";
import {Grid} from "@mui/material";
import {MySearchConsole} from "@/components/mySearchConsole";

export default function Home() {
    return (
        <>
            <Grid container spacing={2}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
            >
                <Grid item xs={3}>
                    <MySearchConsole/>
                </Grid>
                <Grid item xs>
                    <MyGoogleMap/>
                </Grid>
            </Grid>
        </>
    )
}
