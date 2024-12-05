'use client'
 
import dynamic from 'next/dynamic';

const ExtensionRegistration = dynamic(() => import('./components/ExtensionRegistration'), {
  ssr: false,
});

export default function Page({}: {
}) {
    return <ExtensionRegistration />;
}
