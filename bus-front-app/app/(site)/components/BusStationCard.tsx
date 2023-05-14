'use client';

import { useCallback } from 'react';
import useBusStationModalStore from '@/app/hooks/useBusStationModalStore';
import { IBusStation } from '@/app/hooks/useNearByBusStation';
import BusRouteButtonWrapper from '@/app/(site)/components/Buttons/BusRouteButtonWrapper';

interface ICardProps {
  key: string;
  busStation: IBusStation | null;
}
const BusStationCard = ({ busStation }: ICardProps) => {
  const busStationModal = useBusStationModalStore();

  const stationNm = busStation?.stationNm ?? '검색 결과가 없습니다.';
  const arsId = busStation?.arsId ?? '검색어를 입력해주세요';

  const onCardClick = useCallback(() => {
    busStationModal.title = stationNm;
    busStationModal.busStation = busStation;
    busStationModal.onOpen();
  }, [busStationModal.isOpen, busStation?.arsId]);

  return (
    <div
      className="
        mx-2
        mb-4
        cursor-pointer
        rounded-lg
        bg-white
        p-4
        text-center
        drop-shadow-lg
        hover:drop-shadow-xl
        md:p-6
    "
      onClick={onCardClick}
    >
      <h2 className={'font-bold'}> {stationNm}</h2>
      <p className={'text-gray-300'}>{arsId}</p>
      <div className={'mt-2 flex flex-col items-center justify-center gap-2'}>
        <BusRouteButtonWrapper arsId={arsId} />
      </div>
    </div>
  );
};

export default BusStationCard;
