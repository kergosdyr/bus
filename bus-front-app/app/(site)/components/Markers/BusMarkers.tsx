'use client';

import GoogleMarker from '@/app/(site)/components/Markers/GoogleMarker';
import { useBusRouteStore } from '@/app/hooks/useBusRouteStore';
import useBusPos, { BusPos } from '@/app/hooks/useBusPos';

const BusMarkers = () => {
  const { busRoute } = useBusRouteStore();
  const { busPosList } = useBusPos(busRoute.busRouteId);

  return (
    <>
      {busPosList?.map((busPos: BusPos) => {
        return (
          <GoogleMarker
            id={busPos.vehId}
            coordinates={{
              lat: Number.parseFloat(busPos.gpsY),
              lng: Number.parseFloat(busPos.gpsX),
            }}
            iconUrl={'/images/bus.png'}
          />
        );
      })}
    </>
  );
};

export default BusMarkers;
