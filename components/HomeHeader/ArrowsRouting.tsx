"use client"
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

export interface IAppProps {
}
export default function App (props: IAppProps) {
  const router = useRouter()
  const handleNext = () => {
      router.forward()
  }
  const handleBack = () => {
    router.back()
  }
  const handleHome = () => {
    router.push("/")
  }
  const handleSearch = () => {
    router.push("/search")
  }
  return (
    <div>
      <div className='flex gap-2 max_900:hidden'>
        <button onClick={handleBack} className='p-1 bg-[#111] rounded-full hover:opacity-80 transition-all'>
          <MdKeyboardArrowLeft size={30}/>
        </button>
        <button onClick={handleNext} className='p-1 bg-[#111] rounded-full hover:opacity-80 transition-all'>
          <MdKeyboardArrowRight size={30}/>
        </button>
      </div>

      <div className='hidden max_900:flex gap-2'>
        <button onClick={handleHome} className='p-2 bg-[white] text-black rounded-full hover:opacity-80 transition-all'>
          <HiHome size={20} className=''/>
        </button>
        <button onClick={handleSearch} className='p-2 bg-[white] text-black rounded-full hover:opacity-80 transition-all'>
          <BiSearch size={20} className=''/>
        </button>
      </div>
    </div>
  );
}
