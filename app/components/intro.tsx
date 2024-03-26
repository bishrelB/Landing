import React from 'react'
import Categories from './Categories'
import { Search } from 'lucide-react'
import { Input } from '@nextui-org/react'

const Intro = () => {
  return (
    <main className="flex h-[90vh] w-full px-12 flex-col justify-center bg-black text-white">
      <div className='flex flex-col gap-y-6 w-[48%]'>
        <div className='flex flex-col gap-y-2'>
          <div className="text-4xl font-bold">
            Trade with Purpose.
          </div>
          <div className='text-xl'>
            Discover Mongolian Sustainable Agricultural Products for Your Business Needs.
          </div>
        </div>
        <div className='w-[80%] p-1 bg-white rounded-xl flex justify-between'>
          <div className='text-md text-black flex items-center w-full px-4'>
            <Input type='text' placeholder='Search'/>
          </div>
          <button className='w-[42px] h-[42px] bg-[#57CC99] rounded-lg flex items-center justify-center'><Search size={20}/></button>
        </div>
        <div>
          Frequently searched :
        </div>
      </div>
  </main>
  )
}

export default Intro