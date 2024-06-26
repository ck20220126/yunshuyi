/** @jsxImportSource @emotion/react */
'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function StoreProduct(props: { id: string; title: string; price: string; image: string }) {

  return (
    <Link href={`/mall/product/${props.id}`}>
      <div className="relative aspect-square">
        <Image src={props.image} fill alt="" className="object-cover" />
      </div>
      <p className="mt-[15px] leading-[24px] text-[16px] line-clamp-1">{props.title}</p>
      <p className="mt-[10px] text-[#876442] leading-[28px] text-[20px]">
        ¥ {props.price}
      </p>
    </Link>
  )
}
