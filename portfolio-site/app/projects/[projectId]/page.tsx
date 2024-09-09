"use client"
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Project() {
    const pathname = usePathname();

  return(
    <h1>project {pathname.slice(10, 13)}</h1>
  );
}
