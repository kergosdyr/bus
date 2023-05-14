import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

export interface BusRoute {
  busRouteId: string;
  busRouteNm: string;
}

//useSWR
const useBusRoutes = (arsId: string) => {
  const { data, error } = useSWR(
    arsId ? `/api/rest/stationinfo/getRouteByStation/${encodeURIComponent(arsId)}` : null,
    fetcher
  );

  const fetchedBusRoutes: BusRoute[] = data?.msgBody?.itemList?.map((route: any) => {
    return {
      busRouteId: route.busRouteId,
      busRouteNm: route.busRouteNm,
    };
  });

  return {
    busRoutes: fetchedBusRoutes,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useBusRoutes;
