import React, {useState} from "react";
import MyGoogleMap from "@/components/MyGoogleMap";
import {BusStationSearchConsole} from "@/components/BusStationSearchConsole";
import GridWrapper from "@/components/GridWrapper";
import tw from "tailwind-styled-components";

const GridColConsole = tw.div`col-span-1 pl-4 pt-4 overflow-y-auto h-screen`;
const GridColMap = tw.div`col-span-2`;

export default function Home() {
    const [selectedBusStopList, setSeletedBusStopList] = useState([]);
    return (
        <>
            <GridWrapper>
                <GridColConsole>
                    <BusStationSearchConsole selectedBusStopList={selectedBusStopList}/>
                </GridColConsole>
                <GridColMap>
                    <MyGoogleMap setSeletedBusStopList={setSeletedBusStopList}/>
                </GridColMap>
            </GridWrapper>
        </>
    )
}
