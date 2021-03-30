import dynamic from 'next/dynamic';
import React from 'react';
interface IProp { }
export const LoadEditor = () => dynamic(() => import("components/edit/CKE2"), { ssr: false, loading: () => <div style={{ height: 200 }} dangerouslySetInnerHTML={{ __html: "에디터 로딩..." }} /> });
