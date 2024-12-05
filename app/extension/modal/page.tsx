'use client'
 
import dynamic from 'next/dynamic';

const OpenModal = dynamic(() => import('../components/OpenModalModal'), {
  ssr: false,
});
export default function Page({}: {
}) {
    return <OpenModal />;
}
