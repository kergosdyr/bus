'use client';

import useNearByBusStation from '@/app/hooks/useNearByBusStationStore';
import SearchTextField from "@/app/(site)/components/SearchTextField";
import BusStationCard from "@/app/(site)/components/BusStationCard";


const BusStationSearchConsole = () => {
  const {busStations} = useNearByBusStation();
  return (
    <>
      <div className={"flex flex-col justify-start overflow-hidden"}>
        <SearchTextField placeholder={'검색어를 입력해주세요'} />
        {!busStations?.length ? (
          <BusStationCard
            key={'noResult'}
            busStation={null}
          />
        ) : (
          busStations?.map((busStation, idx) => {
            return (
              <BusStationCard
                key={idx.toString()}
                busStation={busStation}
              />
            );
          })
        )}
      </div>
    </>
  );
};
export default BusStationSearchConsole;