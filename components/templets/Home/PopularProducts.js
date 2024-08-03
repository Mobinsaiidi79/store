import PopularProductBox from '@/components/modules/PopularProductBox/PopularProductBox'
import React from 'react'

export default function PopularProducts() {
  return (
    <div data-aos="fade-right" className='my-20  w-full flex gap-y-12 flex-col items-center'>
        <h4 className='font-bold text-md'>محصولات محبوب </h4>
        <PopularProductBox/>
    </div>
  )
}
