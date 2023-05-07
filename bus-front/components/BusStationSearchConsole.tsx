import React, { useCallback, useState } from 'react';
import { IBusStop } from '@/components/MyGoogleMap';
import BusStationCard from '@/components/BusStationCard';
import SearchTextField from '@/components/SearchTextField';
import useBusStationModal from '@/hooks/useBusStationModal';
import useSWR from "swr";

interface MySearchConsoleProps {
  selectedBusStopList: IBusStop[];
}

export const BusStationSearchConsole = (props: MySearchConsoleProps) => {
  const selectedBusStopList = props.selectedBusStopList;


  return (
    <>
      <div>
        <SearchTextField placeholder={'검색어를 입력해주세요'} />
        {selectedBusStopList.length === 0 ? (
          <BusStationCard
            key={'noResult'}
            title={'검색 결과가 없습니다.'}
            arsId={'검색어를 입력해주세요.'}
          />
        ) : (
          selectedBusStopList.map((busStop, idx) => {
            return (
              <BusStationCard
                key={idx.toString()}
                title={busStop.stationNm}
                arsId={busStop.arsId}
              />
            );
          })
        )}
      </div>
    </>
  );
};
