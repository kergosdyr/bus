import React, {useState} from "react";
import {IBusStop} from "@/components/MyGoogleMap";
import BusStationCard from "@/components/BusStationCard";
import SearchTextField from "@/components/SearchTextField";

interface MySearchConsoleProps {
    selectedBusStopList: IBusStop[];
}

export const BusStationSearchConsole = (props: MySearchConsoleProps) => {

    const selectedBusStopList = props.selectedBusStopList;
    const [isModalPopupOpen, setModalPopupOpen] = useState(false);
    const [toModal, setToModal] = useState({modalTitle: "", modalSubTitle: ""});
    const cardOnClick = ({modalTitle, modalSubTitle}: {
        modalTitle: string,
        modalSubTitle: string
    }) => {
        setToModal({
            modalTitle: modalTitle,
            modalSubTitle: modalSubTitle
        })
        setModalPopupOpen(!isModalPopupOpen);
    }

    return (
        <>
            <div>
                <SearchTextField placeholder={"검색어를 입력해주세요"}/>
                {
                    selectedBusStopList.length === 0 ?
                        <BusStationCard
                            key={"noResult"}
                            title={"검색 결과가 없습니다."}
                            description={"검색어를 입력해주세요."}
                            onClick={() => cardOnClick({
                                modalTitle: "검색 결과가 없습니다.",
                                modalSubTitle: "검색어를 입력해주세요."
                            })}/>

                        :
                        selectedBusStopList.map((busStop, idx) => {
                            return (

                                <BusStationCard
                                    key={idx.toString()}
                                    title={busStop.stationNm}
                                    description={busStop.stationId}
                                    onClick={() => cardOnClick({
                                        modalTitle: busStop.stationNm,
                                        modalSubTitle: busStop.stationId
                                    })}/>
                            );
                        })
                }

            </div>
        </>
    );

};