'use client'
import { useState } from 'react'
import classNames from 'classnames'

import Image from 'next/image'
import HomeBanner from './components/HomeBanner'
import Divider from './components/Divider'
import DetailButton from './components/DetailButton'
import ColumnSwiper from './components/ColumnSwiper'
import HomeNewCard from './components/HomeNewCard'
import NewSwiper from './components/NewSwiper'
import Link from 'next/link'

const banners = [
  {
    url: '/home-banner-1.webp',
    title: '智能化供应链，引领数字化时代',
    subtitles: ['数智化大宗商品集采・集售', '供应链金融服务', '供应链仓储物流'],
  },
  {
    url: '/home-banner-2.webp',
    title: '智能化供应链，引领数字化时代',
    subtitles: ['数智化大宗商品集采・集售', '供应链金融服务', '供应链仓储物流'],
  },
]

const news = [
  {
    id: 'home-1',
    type: '公司动态',
    date: '2024-02-05',
    title: '关于用友畅捷通T+13和T+16系统的安全防护公告',
    image: '/new-img1.webp',
  },
  {
    id: 'home-2',
    type: '热点新闻',
    date: '2024-02-05',
    title: '关于支持实施县域商业建设行动的通知',
    image: '/new-img2.webp',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeBanner list={banners} className="w-full h-dvh" />
      {/* content start */}
      {/* 1688 */}
      <div className="pr-sider-padding">
        <div className="py-[100px] max-w-[1090px] mx-[auto] relative">
          <Image src={'/one-bg-2.webp'} alt="" fill className="absolute w-full h-full object-cover" />
          <div className="relative z-10 flex justify-center">
            <div className="w-[60%] flex gap-x-[30px]">
              <div className="flex-1 h-[500px] relative">
                <Image src={'/one-img1.webp'} alt="" fill className="object-cover" />
              </div>
              <div className="flex-1 h-[500px] relative mt-[100px]">
                <Image src={'/one-img2.webp'} alt="" fill className="object-cover" />
              </div>
            </div>
            <div className="w-[46.69%] flex-shrink-0 ml-[13.76%] mt-[100px]">
              <p className="leading-[44px] text-[20px] text-[#c9cdd4]">Supply Chain</p>
              <h2 className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">
                共建 · 共享 · 共赢
                <br />
                构建共融共生的供应链商业生态
              </h2>
              <Divider className="my-[30px]" />
              <p className="text-[#4e5969] leading-[28px] text-[16px]">
                供应链是指在产品或服务从原材料采购到最终消费者手中的整个过程中，涉及到的物流、信息流和资金流的一系列活动和环节。包括了将产品从供应商送到消费者的整个链条，涵盖了生产及流通过程中，涉及将产品或服务提供给最终用户活动的上游与下游企业所形成的网链结构。
              </p>
              <Link href="/info">
                <DetailButton className="mt-[50px]">查看详情</DetailButton>
              </Link>
            </div>
          </div>
        </div>

        <ColumnSwiper />

        <NewSwiper className="py-[150px]" />

        <div
          className="min-h-[523px] px-[6.5%] pt-[100px] pb-[96px] text-white text-center"
          style={{ background: 'url("/four-bg.webp") no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <h2 className="leading-[44px] text-[36px] font-[600]">立足供应链、服务产业链、创造价值链</h2>
          <p className="mt-[30px] leading-[24px] text-[16px]">致力构建新型行业生态、引领新型生活方式、关注社会群体和个体，为多元用户创造价值</p>
          <div className="mt-[127px] grid grid-cols-4">
            <div>
              <p>
                <span className="leading-[54px] text-[48px] font-bold">34783</span>
                <span className="inline-block leading-[28px] text-[20px] font-[500] ml-[10px]">w</span>
              </p>
              <p className="mt-[20px] leading-[28px] text-[20px]">平台交易总额</p>
            </div>
            <div>
              <p>
                <span className="leading-[54px] text-[48px] font-bold">174</span>
                <span className="inline-block leading-[28px] text-[20px] font-[500] ml-[10px]">w</span>
              </p>
              <p className="mt-[20px] leading-[28px] text-[20px]">日均交易额</p>
            </div>
            <div>
              <p>
                <span className="leading-[54px] text-[48px] font-bold">34567</span>
                <span className="inline-block leading-[28px] text-[20px] font-[500] ml-[10px]">个</span>
              </p>
              <p className="mt-[20px] leading-[28px] text-[20px]">企业买家</p>
            </div>
            <div>
              <p>
                <span className="leading-[54px] text-[48px] font-bold">24167</span>
                <span className="inline-block leading-[28px] text-[20px] font-[500] ml-[10px]">个</span>
              </p>
              <p className="mt-[20px] leading-[28px] text-[20px]">平台供应商</p>
            </div>
          </div>
        </div>

        <div className="bg-[#F7F8FA] py-[150px]">
          <div className='max-w-[1688px] pl-[17.77%] mx-[auto] flex justify-between'>
            <div className="flex-1 mr-[10.8%] pt-[20px]">
              <p className="leading-[44px] text-[20px] text-[#c9cdd4]">Partners</p>
              <h2 className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">合作生态</h2>
              <Divider className="my-[30px]" />
              <p className="text-[#4e5969] leading-[28px] text-[16px]">
                以强大的资源整合能力依托新型互联网技术基础，将供应链中的各个企业和组织连接起来，实现信息共享、业务协同和合作交流，为企业和组织提供更多的商业机会和合作伙伴，拓展业务领域和市场份额
              </p>
            </div>
            {/* TODO: image placeholder */}
            <div className="flex-shrink-0 w-[59.07%] h-[454px] grid grid-cols-3 border-b border-r border-[#EBECF0]">
              <div className="flex items-center justify-center border-t border-l border-[#EBECF0] relative before:absolute before:w-[1px] before:h-[10px] before:-top-[11px] before:-left-[1px] before:bg-[#E8ECF0] after:absolute after:w-[10px] after:h-[1px] after:-top-[1px] after:-left-[11px] after:bg-[#E8ECF0]">
                <Image src="/business-partner-icon-1.webp" alt="" width={149} height={70} />
              </div>
              <div className="flex items-center justify-center border-t border-l border-[#EBECF0] relative before:absolute before:w-[1px] before:h-[10px] before:-top-[11px] before:-left-[1px] before:bg-[#E8ECF0]">
                <Image src="/business-partner-icon-2.webp" alt="" width={149} height={70} />
              </div>
              <div className="flex items-center justify-center border-t border-l border-[#EBECF0] relative before:absolute before:w-[1px] before:h-[10px] before:-top-[11px] before:-left-[1px] before:bg-[#E8ECF0] after:absolute after:w-[1px] after:h-[10px] after:-top-[11px] after:-right-[1px] after:bg-[#E8ECF0]">
                <Image src="/business-partner-icon-3.webp" alt="" width={149} height={70} />
              </div>
              <div className="flex items-center justify-center border-t border-l border-[#EBECF0] relative before:absolute before:w-[10px] before:h-[1px] before:-top-[-1px] before:-left-[11px] before:bg-[#E8ECF0] after:absolute after:w-[10px] after:h-[1px] after:-bottom-[1px] after:-left-[11px] after:bg-[#E8ECF0]">
                <Image src="/business-partner-icon-4.webp" alt="" width={149} height={70} />
              </div>
              <div className="flex items-center justify-center border-t border-l border-[#EBECF0]">
                <Image src="/business-partner-icon-5.webp" alt="" width={149} height={70} />
              </div>
              <div className="flex items-center justify-center border-t border-l border-[#EBECF0]">
                <Image src="/business-partner-icon-6.webp" alt="" width={149} height={70} />
              </div>
              <div className="flex items-center justify-center border-t border-l border-[#EBECF0] relative before:absolute before:w-[1px] before:h-[10px] before:-bottom-[11px] before:-left-[1px] before:bg-[#E8ECF0] after:absolute after:w-[10px] after:h-[1px] after:-bottom-[1px] after:-left-[11px] after:bg-[#E8ECF0]">
                <Image src="/business-partner-icon-7.webp" alt="" width={149} height={70} />
              </div>
              <div className="flex items-center justify-center border-t border-l border-[#EBECF0] relative before:absolute before:w-[1px] before:h-[10px] before:-bottom-[11px] before:-left-[1px] before:bg-[#E8ECF0]">
                <Image src="/business-partner-icon-8.webp" alt="" width={149} height={70} />
              </div>
              <div className="flex items-center justify-center border-t border-l border-[#EBECF0] relative before:absolute before:w-[1px] before:h-[10px] before:-bottom-[11px] before:-left-[1px] before:bg-[#E8ECF0] after:absolute after:w-[1px] after:h-[10px] after:-bottom-[11px] after:-right-[1px] after:bg-[#E8ECF0]">
                <Image src="/business-partner-icon-9.webp" alt="" width={149} height={70} />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1688px] py-[150px] pl-[17.77%] mx-[auto] flex justify-between">
          <div className="flex-1 mr-[10.8%] pt-[20px]">
            <p className="leading-[44px] text-[20px] text-[#c9cdd4]">News</p>
            <h2 className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">新闻与媒体</h2>
            <Divider className="my-[30px]" />
            <Link href={'/news'}>
              <DetailButton className="mt-[50px]">查看更多</DetailButton>
            </Link>
          </div>
          <div className="flex-shrink-0 w-[59.07%]">
            {news.map((item, index) => (
              <HomeNewCard data={item} key={`new-${index}`} className={classNames('aspect-[1.84/1] h-auto', { 'mt-[30px]': index > 0 })} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
