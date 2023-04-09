import React, {useState} from "react";
import MyGoogleMap from "@/components/myGoogleMap";
import {Grid} from "@mui/material";
import {MySearchConsole} from "@/components/mySearchConsole";



export default function Home() {
    const [selectedBusStopList, setSeletedBusStopList] = useState([]);
    return (
        <>
            <Grid container spacing={2}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
            >
                <Grid item xs={3} >
                    <MySearchConsole selectedBusStopList={selectedBusStopList} />
                </Grid>
                <Grid item xs>
                    <MyGoogleMap setSeletedBusStopList={setSeletedBusStopList}/>
                </Grid>
            </Grid>
        </>
    )
}
