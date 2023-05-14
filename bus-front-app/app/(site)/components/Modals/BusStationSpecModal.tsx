'use client';

import useSWR from 'swr';
import fetcher from '@/libs/fetcher';
import useBusStationModalStore from '@/app/hooks/useBusStationModalStore';
import Modal from '@/app/(site)/components/Modals/Modal';

const BusStationSpecModal = () => {
  const busStationModal = useBusStationModalStore();

  const arsId = busStationModal?.busStation?.arsId;
  const { data } = useSWR(
    arsId ? `/api/rest/stationinfo/getRouteByStation/${encodeURIComponent(arsId)}` : null,
    fetcher
  );
  let descLength = data?.msgBody?.itemList?.length ?? 0;

  return (
    <Modal
      isOpen={busStationModal.isOpen}
      actionLabel={'OK'}
      onSubmit={busStationModal.onClose}
      onClose={busStationModal.onClose}
      title={busStationModal.title}
      body={
        <div className="flex flex-col gap-4">
          <p>{`${descLength} 개의 노선이 현재 운행중입니다.`}</p>
        </div>
      }
    />
  );
};

export default BusStationSpecModal;
