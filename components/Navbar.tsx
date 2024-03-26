import React from 'react'

const Navbar = () => {
  return (
    <div className='z-30 fixed w-full px-12 flex justify-between py-4 text-white bg-[#10261C] text-sm text-medium'>
        <div className='flex gap-x-6'>
          <div>Responsible Nomad</div>
          <div>Become supplier</div>
        </div>
        <div className='flex gap-x-6'>
            <div>EN</div>
            <div>Help</div>
        </div>
    </div>
  )
}

export default Navbar
//fixed top-0