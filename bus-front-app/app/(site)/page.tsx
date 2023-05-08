import React from 'react';
import { BusStationSearchConsole } from '@/app/(site)/components/BusStationSearchConsole';
import MyGoogleMap from '@/app/(site)/components/MyGoogleMap';
import { BusStationSpecModal } from '@/app/(site)/components/Modals/BusStationSpecModal';

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <BusStationSearchConsole />
        <MyGoogleMap />
        <BusStationSpecModal />
      </div>
    </>
  );
}
