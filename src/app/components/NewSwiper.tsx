/** @jsxImportSource @emotion/react */
'use client'

import { useRef, useState } from 'react'
import classNames from 'classnames'
import { css } from '@emotion/react'

import Image from 'next/image'
import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react'
import { motion } from 'framer-motion'
import Divider from './Divider'
import ArrowRight from './icons/ArrowRight'
import 'swiper/css'

const list = [
  {
    title: '小黄牛数字供应链平台',
    desc: '小黄牛供应链立足隆阳区发展基础，围绕民生相关的多个产业，以“小黄牛供应链平台”为承载，构建本地资源交易产业链整合，生活服务、公共服务为一体的“数字产业供应链集群”，打造数字经济产业供应链平台标杆。',
    image: '/new-swiper-img1.webp',
    statistics: [
      {
        title: '合作企业 (个)',
        value: '427',
      },
      {
        title: '交易总金额 (亿元)',
        value: '23.93',
      },
      {
        title: '交易订单 (万个)',
        value: '855.06',
      },
      {
        title: '日均交易额 (万元)',
        value: '232.79',
      },
    ],
  },
  {
    title: '知百道数字供应链平台',
    desc: '知百道数字经济供应链是楚雄彝族自治州首个县域数字经济产业供应链平台，旨在打造"传统企业+平台数字运营"的"城市大数据运营中心"，其核心是为武定县政府及用户提供便捷的服务及资源整合交易服务',
    image: '/new-swiper-img2.webp',
    statistics: [
      {
        title: '合作企业 (个)',
        value: '125',
      },
      {
        title: '交易总金额 (万元)',
        value: '5167.76',
      },
      {
        title: '交易订单 (万个)',
        value: '25.2',
      },
      {
        title: '日均交易额 (万元)',
        value: '11.02',
      },
    ],
  },
  {
    title: '峡谷之星数字供应链平台',
    desc: '峡谷之星县域经济产业数字化供应链平台立足兰坪县产业发展基础，围绕民生相关的多个产业，以"兰坪县域供应链平台"为承载，构建兰坪县资源交易、供应链服务，生活服务、公共服务为一体的"数字经济产业供应链集群”。',
    image: '/new-swiper-img3.webp',
    statistics: [
      {
        title: '合作企业 (个)',
        value: '62',
      },
      {
        title: '交易总金额 (万元)',
        value: '5188.30',
      },
      {
        title: '交易订单 (万个)',
        value: '42.96',
      },
      {
        title: '日均交易额 (万元)',
        value: '61.67',
      },
    ],
  },
]

const ToggleButton = (props: { className?: string; disabled?: boolean; onClick?: () => void }) => {
  return (
    <div
      className={classNames('flex items-center justify-center size-[60px] rounded-full border border-[#86909C] cursor-pointer text-[#86909C]', props.className)}
      css={css`
        ${props.disabled ? `
          opacity: 0.6;
          cursor: default;
        ` : `
          &:hover {
            background-color: #1D5FFF;
            color: white;
          }
        `}
      `}
      onClick={!props.disabled ? props.onClick : undefined}
    >
      <ArrowRight className={classNames('size-[24px] rotate-180')} />
    </div>
  )
}

export default function NewSwiper(props: { className?: string }) {
  const [current, setCurrent] = useState(undefined)

  const swiper = useRef<SwiperClass>()

  const [swiperIndex, setSwiperIndex] = useState(0)
  function toggleSwiper(type: 'prev' | 'next') {
    if (type === 'prev') {
      setSwiperIndex((val) => val - 1)
      swiper.current?.slidePrev()
    } else if (type === 'next') {
      setSwiperIndex((val) => val + 1)
      swiper.current.slideNext()
    }
  }

  return (
    // 1688
    <div className={classNames('relative flex', props.className)}>
      <div className="flex-1 mr-[10.8%] pt-[20px]">
        <p className="leading-[44px] text-[20px] text-[#c9cdd4]">County level</p>
        <h2 className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">{list[swiperIndex].title}</h2>
        <Divider className="my-[30px]" />
        <p className="text-[#4e5969] leading-[28px] text-[16px]">{list[swiperIndex].desc}</p>

        <div className="mt-[30px] flex items-center">
          <ToggleButton disabled={swiperIndex === 0} onClick={() => toggleSwiper('prev')} />
          <ToggleButton disabled={swiperIndex >= list.length - 1} className={'ml-[50px] rotate-180'} onClick={() => toggleSwiper('next')} />
        </div>
      </div>
      {/* 420+200+920 1540 */} 
      <div className="flex-shrink-0 w-[59.07%] aspect-[1.84/1] border text-white">
        <Swiper className="w-full h-full" allowTouchMove={false} onSwiper={(_swiper) => (swiper.current = _swiper)}>
          {list.map((item, index) => (
            <SwiperSlide key={`swiper-${index}`}>
              <motion.div className="relative w-full h-full" onHoverStart={() => setCurrent(index)} onHoverEnd={() => setCurrent(undefined)}>
                <Image src={item.image} fill alt="" className="bg-red-200 object-cover" />
                <motion.div
                  className="absolute bottom-0 left-0 w-full p-[50px]"
                  style={{ backgroundColor: 'rgba(29, 95, 255, var(--bg-opacity))' }}
                  initial={false}
                  animate={{ '--bg-opacity': current === index ? 0.9 : 0 } as any}
                >
                  <h3 className="leading-[44px] text-[28px]">{item.title}</h3>
                  <motion.div className="grid" initial={false} animate={{ gridTemplateRows: current === index ? '1fr' : '0fr' }} transition={{ duration: 0.3 }}>
                    <motion.div className="overflow-hidden" initial={false} animate={{ opacity: current === index ? 1 : 0 }} transition={{ delay: 0.2, ease: 'easeIn' }}>
                      <Divider highlightColor="white" color="rgba(235, 236, 240, 0.2)" className="my-[30px]" />
                      <div className="flex items-center">
                        {item.statistics.map((stat, statIdx) => (
                          <div
                            key={`${stat}-${index}-${statIdx}`}
                            css={css`
                              flex: 1;
                              display: flex;
                              &::before {
                                content: "",
                                display: ${statIdx > 0 ? 'block' : 'none'};
                                margin: 0 50px;
                                background-color: rgba(255,255,255,0.2);
                                width: 1px;
                                height: 50px;
                              }
                            `}
                          >
                            <div>
                              <p className="leading-[28px] text-[24px] font-bold">{stat.value}</p>
                              <p className="mt-[5px] leading-[24px] text-[16px]">{stat.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
