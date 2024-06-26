/** @jsxImportSource @emotion/react */
'use client'

import Link from 'next/link'
import DetailCover from '../components/DetailCover'
import Divider from '../components/Divider'
import ArrowRight from '../components/icons/ArrowRight'
import MallProduct from '../components/MallProduct'

export default function Store() {
  return (
    <div className="pr-[232px]">
      <DetailCover image="/mall-header.png" title="禄劝农家散装自烤酒" subtitle="500g散装 | ¥25.00" />
      <div className="px-[11.75%] py-[150px]">
        <div className="relative">
          <p className="leading-[44px] text-[20px] text-[#c9cdd4]">Preferred</p>
          <h2 className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">云品优选</h2>
          <Divider className="my-[30px]" highlightColor="#876442" />
          <Link href={'/mall/search'} className="absolute right-0 bottom-[30px] flex items-center leading-[24px] text-[16px] text-[#4E5969]">
            <span>查看更多</span>
            <ArrowRight className="size-[22px]" />
          </Link>
        </div>
        <div className='grid grid-cols-4 gap-x-[30px]'>
          <MallProduct id="01" image="/mall-product-1.png" title="曲靖 | 宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦" price="65.60" />
          <MallProduct id="02" image="/mall-product-2.png" title="大理 | 洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋" price="32.00" />
          <MallProduct id="03" image="/mall-product-3.png" title="红河 | 石屏包浆豆腐700g*2盒" price="34.80" />
          <MallProduct id="04" image="/mall-product-4.png" title="昆明 | 散养走地鸡 900g" price="59.00" />
        </div>
      </div>
    </div>
  )
}
