/** @jsxImportSource @emotion/react */
'use client'

import { css } from '@emotion/react'
import DetailCover from '../components/DetailCover'
import Image from 'next/image'
import Divider from '../components/Divider'
import Link from 'next/link'
import ArrowRight from '../components/icons/ArrowRight'
import FinancialServiceCard from '../components/FinancialServiceCard'

export default function FinancialService() {
  return (
    <div className="pr-[232px]">
      <DetailCover image="/financial-service-header.png" title="供应链 金融服务支撑" subtitle="下游企业通过预付款融资方式拉长支付采购货款的账期，同时这也解决核心企业的生产资金需求" />
      <div className="px-[11.75%] py-[150px]">
        <div
          className="grid grid-cols-3 gap-x-[30px]"
          css={css`
            .item {
              .content {
                position: relative;
                padding-left: 20px;
                padding-bottom: 30px;
                &::before {
                  content: '';
                  display: block;
                  width: 1px;
                  height: 100%;
                  background-color: #ebecf0;
                  position: absolute;
                  left: 0;
                  top: 0;
                }
              }
            }
          `}
        >
          <div className="item">
            <div className="content">
              <h3 className="leading-[28px] text-[20px] font-bold">提高供应链整体资金运转效率</h3>
              <p className="mt-[10px] leading-[24px] text-[16px]">通过采用预付款融资模式，购货方可以延长支付采购货款的期限，提高其生产效率和经营效益。</p>
            </div>
            <div className="mt-[20px] h-[246px] relative">
              <Image src={'/financial-service-img1.png'} alt="" fill />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <h3 className="leading-[28px] text-[20px] font-bold">提升供应链整体业务规模</h3>
              <p className="mt-[10px] leading-[24px] text-[16px]">通过采用预付款融资模式，购货方可以通过支付较少的资金获得更多的货物，从而实现杠杆采购。</p>
            </div>
            <div className="mt-[20px] h-[246px] relative">
              <Image src={'/financial-service-img2.png'} alt="" fill />
            </div>
          </div>
          <div className="item">
            <div className="content">
              <h3 className="leading-[28px] text-[20px] font-bold">金融机构稳定获利</h3>
              <p className="mt-[10px] leading-[24px] text-[16px]">降低金融机构坏账率，给投资方带来比较稳定的收益，达到各方共赢。</p>
            </div>
            <div className="mt-[20px] h-[246px] relative">
              <Image src={'/financial-service-img3.png'} alt="" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f7f8fa] px-[11.75%] py-[50px]">
        <div className="relative">
          <p className="leading-[44px] text-[20px] text-[#c9cdd4]">Partner</p>
          <h2 className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">为你推荐</h2>
          <Divider className="my-[30px]" />
          <Link href={'/financial-service/search'} className="absolute right-0 bottom-[30px] flex items-center leading-[24px] text-[16px] text-[#4E5969]">
            <span>查看更多</span>
            <ArrowRight className="size-[22px]" />
          </Link>
        </div>
        <FinancialServiceCard bankLogo="/bank-8.png" title="短期流动资金贷款" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-2.png" title="普惠型小微企业标准化房产抵押授信" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-8.png" title="短期流动资金贷款" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-2.png" title="普惠型小微企业标准化房产抵押授信" className="mt-[30px]" />
      </div>
      <div className="px-[11.75%] py-[50px]">
        <div className="relative">
          <p className="leading-[44px] text-[20px] text-[#c9cdd4]">Partner</p>
          <h2 className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">合作机构</h2>
          <Divider className="my-[30px]" />
        </div>
        <div className='border border-[#EBECF0] px-[30px] py-[44px] inline-flex flex-wrap gap-x-[100px] gap-y-[27px]'>
          <img src='/bank-1.png' height={50} />
          <img src='/bank-2.png' height={50} />
          <img src='/bank-3.png' height={50} />
          <img src='/bank-4.png' height={50} />
          <img src='/bank-5.png' height={50} />
          <img src='/bank-6.png' height={50} />
          <img src='/bank-7.png' height={50} />
          <img src='/bank-8.png' height={50} />
          <img src='/bank-9.png' height={50} />
          <img src='/bank-10.png' height={50} />
        </div>
      </div>
    </div>
  )
}
