'use client'
import * as React from 'react';
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import IconBox from './IconBox';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  const pathname = usePathname()
  const routes = [
    {
      name: "Home",
      icon: <HiHome size={25} />,
      href: "/",
      active: pathname !== "/search"
    },
    {
      name: "Search",
      icon: <BiSearch size={25} />,
      href: "/search",
      active: pathname === "/search"
    }
  ]
  return (
    <div className='bg-neutral-900 p-5 flex flex-col gap-5 rounded-lg'>
      {routes.map(({icon , name , href , active}) => (
        <div  key={name}>
          <IconBox href={href} icon={icon} name={name} active={active} />
        </div>
      ))}
    </div>
  );
}
