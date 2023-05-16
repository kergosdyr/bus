import React from 'react';
import MyGoogleMap from '@/app/(site)/components/MyGoogleMap';
import BusStationSearchConsole from '@/app/(site)/components/BusStationSearchConsole';
import BusStationSpecModal from '@/app/(site)/components/Modals/BusStationSpecModal';

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center">
        <BusStationSearchConsole />
        <MyGoogleMap />
      </div>
    </>
  );
}
