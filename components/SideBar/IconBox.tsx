import * as React from "react";
import Link  from 'next/link';

export interface IAppProps {
  icon: React.ReactNode;
  name: string;
  active: boolean;
  href: string;
}

export default function App({ icon: Icon, name, active , href }: IAppProps) {
  return (
    <Link href={href} className={`flex items-center  w-fit transition-all gap-3 hover:font-bold hover:text-white ${active ? "font-bold text-white": "text-neutral-500"}`}>
      <h1 className="-translate-y-[1px] ">{Icon}</h1>
      <h1 className="font-medium">{name}</h1>
    </Link>
  );
}
