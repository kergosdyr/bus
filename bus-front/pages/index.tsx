import React, {useState} from "react";
import MyGoogleMap from "@/components/MyGoogleMap";
import {Grid} from "@mui/material";
import {MySearchConsole} from "@/components/MySearchConsole";



export default function Home() {
    const [selectedBusStopList, setSeletedBusStopList] = useState([]);
    return (
        <>
            <Grid container spacing={2}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
            >
                <Grid item xs={3} sx={{overflowY: "scroll", maxHeight: "100vh" }}>
                    <MySearchConsole selectedBusStopList={selectedBusStopList} />
                </Grid>
                <Grid item xs>
                    <MyGoogleMap setSeletedBusStopList={setSeletedBusStopList}/>
                </Grid>
            </Grid>
        </>
    )
}
