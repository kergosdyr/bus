import '../globals.css';
import { Inter } from 'next/font/google';
import BusStationSpecModal from '@/app/(site)/components/Modals/BusStationSpecModal';
import React from 'react';
import ToasterContext from '@/app/(site)/context/ToasterContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Justin app',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BusStationSpecModal />
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}