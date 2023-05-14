'use client';

import useNearByBusStation from '@/app/hooks/useNearByBusStation';
import SearchTextField from '@/app/(site)/components/SearchTextField';
import BusStationCard from '@/app/(site)/components/BusStationCard';
import { useNowCenterStore } from '@/app/hooks/useNowCenterStore';

const BusStationSearchConsole = () => {
  const { nowCenter } = useNowCenterStore();
  const { busStations } = useNearByBusStation(nowCenter);

  return (
    <div
      className="
        inset-y-0
        overflow-y-auto
        border-r
        border-gray-200
        pb-20
        lg:left-20
        lg:block
        lg:w-80
        lg:pb-0"
    >
      <div className={'flex h-screen flex-col justify-start overflow-y-scroll'}>
        <SearchTextField placeholder={'검색어를 입력해주세요'} />
        {!busStations?.length ? (
          <BusStationCard key={'noResult'} busStation={null} />
        ) : (
          busStations?.map((busStation, idx) => {
            return <BusStationCard key={idx.toString()} busStation={busStation} />;
          })
        )}
      </div>
    </div>
  );
};
export default BusStationSearchConsole;
