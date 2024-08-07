/** @jsxImportSource @emotion/react */
'use client'

import { useState } from 'react'
import { usePrevious } from '@uidotdev/usehooks'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'

import Divider from './Divider'
import DetailButton from './DetailButton'
import Link from 'next/link'

const list = [
  {
    englishTitle: 'Supply Chain',
    img: '/column-swiper-1.webp',
    title: '集采急售',
    desc: '搭建服务县域的供应链平台，助力供应链上下游之间实现数字化、扁平化、共享化，涵盖销售、 营销、物流等核心能力，助力县域挖掘经济发展新动能',
    link: '/pq-sale',
  },
  {
    englishTitle: 'Finance',
    img: '/column-swiper-2.webp',
    title: '金融服务',
    desc: '构建“云数驿金融生态圈”，通过整合内外部产业资源、金融资源，发展金融业务平台，为客户提供便捷、高效、优质的金融服务，实现各方利益相关体的合作共赢',
    link: '/financial-service',
  },
  {
    englishTitle: 'Logistics',
    img: '/column-swiper-3.webp',
    title: '仓储物流',
    desc: '以物流数字经济构建发展新格局，利用互联网、物联网、大数据和人工智能作为技术支撑，搭建全新的物流仓储平台，全面提升商业流通效率、助力产业服务升级',
    link: '/logistics',
  },
]

export default function ColumnSwiper() {
  const [current, setCurrent] = useState(undefined)
  const [hoverIndex, setHoverIndex] = useState(1)
  const prevCurrent = usePrevious(current)

  return (
    <div className="grid grid-cols-3 h-[800px] text-white relative">
      {list.map((item, index) => (
        <motion.div
          
          key={`swiper-${index}`}
          className="flex cursor-pointer"
          onHoverStart={() => {
            setCurrent(index)
            setHoverIndex(4)
          }}
          onHoverEnd={() => {
            setCurrent(undefined)
            setHoverIndex(3)
          }}
        >
          <motion.img
            src={item.img}
            className="object-cover absolute w-1/3 h-full top-0"
            animate={current === index ? 'active' : 'inactive'}
            variants={{
              active: { width: '100%', zIndex: hoverIndex, left: 0 },
              inactive: { zIndex: prevCurrent === index ? 2 : 1 },
            }}
          />
          <Link
            href={item.link} 
            className="relative z-10 px-[100px] py-[150px]"
            css={css`
              transition: opacity 0.15s ease-in;
              opacity: ${current === undefined || current === index ? 1 : 0.5};
              &::before {
                content: "";
                display: ${index === 0 ? 'none' : 'block'};
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 1px;
                border-left: 1px solid rgba(255, 255, 255);
                transform: translateX(-50%);
              }  
            `}
          >
            <p className="leading-[44px] text-[20px] text-white/60">{ item.englishTitle }</p>
            <p className="mt-[5px] leading-[44px] text-[36px] font-bold">
              { item.title }
            </p>
            <Divider highlightColor='white' color="rgba(235, 236, 240, 0.2)" className="my-[30px]" />
            <p className=" leading-[28px] text-[16px]">
              { item.desc }
            </p>
            <DetailButton color="white" useHover={false} className="mt-[50px]">查看详情</DetailButton>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
