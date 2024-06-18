/** @jsxImportSource @emotion/react */
'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function NewCard(props: {
  data: {
    image: string
    title: string
    link: string
    type: string
    date: string
  }
  className?: string
}) {
  const { data } = props || {}

  const [hover, setHover] = useState(false)
  return (
    <motion.div
      className={classNames('relative h-[500px] text-white cursor-pointer', props.className)}
      whileHover={{ '--bg-opacity': '0.8' } as any}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      <Image src={data.image} fill alt="" className="z-0" />
      <motion.div
        className="absolute bottom-0 left-0 w-full p-[50px]"
        style={{ backgroundColor: 'rgba(29, 95, 255, var(--bg-opacity))' }}
        initial={false}
        animate={{ '--bg-opacity': hover ? 0.9 : 0 } as any}
      >
        {/* <motion.div className='absolute inset-0 bg-[#1D5FFF] opacity-0' animate={hover ? 'active' : 'inactive'}
          variants={{
            active: {
              opacity: 0.9,
            },
            inactive: {
              opacity: 0,
            },
          }} /> */}
        <p className="leading-[22px] text-[14px]">
          {data.type} · {data.date}
        </p>
        <h3 className="mt-[10px] leading-[44px] text-[28px] font-bold">{data.title}</h3>
        <motion.div
          className="overflow-hidden"
          animate={hover ? 'active' : 'inactive'}
          variants={{
            active: {
              height: '30px',
              translateX: 0,
              translateY: 0,
            },
            inactive: {
              height: 0,
              translateX: '-40px',
              translateY: '5px',
            },
          }}
        >
          <i className="block pt-[20px] w-[44px] h-[10px]">
            <svg width="44" height="10" viewBox="0 0 44 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5H43M43 5L39 1M43 5L39 9" stroke="currentColor" />
            </svg>
          </i>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
