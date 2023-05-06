import useBusStationModal from '@/hooks/useBusStationModal';
import Modal from '@/components/Modals/Modal';
import useSWR from 'swr';
import { useEffect } from 'react';

export const BusStationSpecModal = () => {
  const busStationModal = useBusStationModal();

  const fetcher = (arsId: string) =>{
    console.log('arsId', arsId);
    return fetch(`/api/rest/stationinfo/getRouteByStation/${encodeURIComponent(arsId || '')}`).then(
      (res) => res.json()
    );
  }

  const { data, mutate } = useSWR(busStationModal.arsId ?? '', fetcher);
  let descLength = data?.msgBody?.itemList?.length ?? 0;
    console.log('descLength', data);

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
