/** @jsxImportSource @emotion/react */
'use client'

import { css } from '@emotion/react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ProcureProduct(props: { id: string; title: string; price: string; address: string; image: string; liked?: boolean }) {
  const [hover, setHover] = useState(false)

  return (
    <Link
      href={`/pq-sale/procure/${props.id}`}
      css={css`
        .product {
          position: relative;
          &::after {
            content: '';
            display: block;
            position: absolute;
            inset: 0;
            border: 1px solid #ebecf0;
          }
          &.active::after {
            border-width: 2px;
            border-color: #1d5fff;
          }
        }
      `}
    >
      <motion.div
        className={classNames('product', { active: hover } )}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        <div className="relative pt-[100%]">
          <Image src={props.image} fill alt="" className="object-cover" />
          <motion.div
            className="absolute bottom-0 left-0 right-0 text-white bg-[#1D5FFF]/90 py-[8px] leading-[24px] text-[16px] font-bold text-center"
            initial={false}
            animate={{ opacity: hover ? 1 : 0 }}
          >
            查看详情
          </motion.div>
        </div>
        <div className="p-[10px]">
          <p className="mt-[10px] leading-[22px] text-[14px]">{props.title}</p>
          <p className="mt-[10px] text-[#F33030] leading-[12px] text-[10px]">
            ¥<span className="inline-block ml-[2px] leading-[22px] text-[18px] font-bold">{props.price}</span>
          </p>
          <div className="my-[10px] border-t border-dashed border-[#EBECF0]" />
          <div className="flex items-center leading-[16px] text-[13px] text-[#86909C]">
            <span className="flex-1">{props.address}</span>
            <Image src={props.liked ? '/ic-favorite-fill.svg' : '/ic-favorite.svg'} width={16} height={16} alt="" className="flex-shrink-0" />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
