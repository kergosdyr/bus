//useSWR
import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

export interface BusPos {
  sectOrd: string;
  fullSectDist: string;
  sectDist: string;
  rtDist: string;
  stopFlag: string;
  sectionId: string;
  dataTm: string;
  tmX: string | null;
  tmY: string | null;
  gpsX: string;
  gpsY: string;
  posX: string;
  posY: string;
  vehId: string;
  plainNo: string;
  busType: string;
  lastStTm: string;
  nextStTm: string;
  nextStId: string;
  lastStnId: string;
  trnstnid: string;
  isrunyn: string;
  islastyn: string;
  isFullFlag: string;
  congetion: string;
}
const useBusPos = (routeId: string) => {
  const { data, error } = useSWR(
    routeId ? `/api/rest/bus/getBusPosByRouteId/${routeId}` : null,
    fetcher
  );

  console.log('useBusPos data', data);
  //change by map data to busPos
  const fetchedBusPos: BusPos[] = data?.msgBody?.itemList?.map((item: BusPos) => {
    return item;
  });

  return {
    busPosList: fetchedBusPos,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useBusPos;
