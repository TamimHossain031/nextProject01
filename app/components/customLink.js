"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function CustomLink({path,children}) {
    const pathName = usePathname();
    const active = pathName == path;
    
  return (
    <Link className={active ? 'bg-red-600' : 'bg-green-600'} href={path}>{children}</Link>
  )
}
