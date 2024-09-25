import { Button, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import React from 'react'

function CartItem() {
  return (
    <div className='p-5 border shadow-lg rounded-md'>
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img className='w-full h-full oject-cover object-top' src="https://www.calvinklein.com.my/dw/image/v2/BGLQ_PRD/on/demandware.static/-/Sites-ck-master-catalog/default/dw50cdc955/40EM721/C25_01_40EM721E5D_MO-ST-F1.jpg?sw=548&sh=685&q=90" alt="product" />
        </div>

        <div className='ml-5 space-y-1'>
          <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
          <p className='opacity-70'>Size: L, White</p>
          <p className='opacity-70 mt-2'>Seller: Lorem, ipsum dolor.</p>
          <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-6">
            <p className='font-semibold'>रु456</p>
            <p className='line-through opacity-50'>रु6546</p>
            <p className='text-green-600 font-semibold'>80% off</p>
          </div>
        </div>
      </div>



      <div className='lg:flex items-center lg:space-x-10 pt-4'>
        <div className='flex items-center space-x-2'>
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className='py-1 px-7 border rounded-sm'>3</span>
          <IconButton sx={{ color: "#7e22ce" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "#7e22ce" }}>Remove</Button>
        </div>
      </div>

    </div>
  )
}
export default CartItem
