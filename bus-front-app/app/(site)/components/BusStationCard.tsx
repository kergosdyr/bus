'use client';

import { useCallback } from 'react';
import useSWR from 'swr';
import useBusStationModal from '@/app/hooks/useBusStationModal';
import { IBusStation } from '@/app/hooks/useNearByBusStationStore';
import fetcher from '@/libs/fetcher';

interface ICardProps {
  key: string;
  busStation: IBusStation | null;
}
const BusStationCard = ({ busStation }: ICardProps) => {
  const busStationModal = useBusStationModal();

  const stationNm = busStation?.stationNm ?? '검색 결과가 없습니다.';
  const arsId = busStation?.arsId ?? '검색어를 입력해주세요';

  const onCardClick = useCallback(() => {
    busStationModal.title = stationNm;
    busStationModal.busStation = busStation;
    busStationModal.onOpen();
  }, [busStationModal.isOpen, busStation?.arsId]);

  const { data } = useSWR(
    `/api/rest/stationinfo/getRouteByStation/${encodeURIComponent(arsId)}`,
    fetcher
  );

  return (
    <div
      className="
        bg-white
        rounded-lg
        drop-shadow-lg
        hover:drop-shadow-xl
        text-center
        overflow-hidden
        cursor-pointer
        p-4
        md:p-6
        mb-4
        mx-2
    "
      onClick={onCardClick}
    >
      <h2 className={'font-bold'}> {stationNm}</h2>
      <p className={'text-gray-300'}>{arsId}</p>
      <div className={'mt-2 flex flex-col gap-2 justify-center items-center'}>
        {data?.msgBody?.itemList?.map((route: any) => (
          <button
            key={route.busRouteId}
            className={
              'border-2 border-sky-500 bg-white text-sky-500 hover:bg-sky-500 hover:text-white font-bold py-2 px-4 rounded-full'
            }
          >
            {route.busRouteNm}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BusStationCard;
