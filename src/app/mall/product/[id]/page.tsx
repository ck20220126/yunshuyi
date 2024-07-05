/** @jsxImportSource @emotion/react */
'use client'

import { useState } from 'react'
import classNames from 'classnames'
import { css } from '@emotion/react'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumb from '@/app/components/Breadcrumb'
import Stepper from '@/app/components/Stepper'
import Divider from '@/app/components/Divider'
import ArrowRight from '@/app/components/icons/ArrowRight'
import MallProduct from '@/app/components/MallProduct'
import MainPictureSwiper from '@/app/components/MainPictureSwiper'
import Estimation from '@/app/components/Estimation'

const tabs = [
  {
    title: '商品介绍',
    name: 'productInfo',
  },
  {
    title: '评价(5)',
    name: 'estimation',
  },
]

const detail = {
  infos: [
    { label: '品牌', value: '农家散装' },
    { label: '是否进口', value: '否' },
    { label: '产品标准号', value: '见包装' },
    { label: '保质期', value: '12个月' },
    { label: '净含量(规格)', value: '5L' },
    { label: '储藏方法', value: '阴凉干燥处' },
    { label: '工艺类型', value: '浸出' },
    { label: '生产日期', value: '见包装' },
    { label: '包装', value: '桶装' },
    { label: '特产', value: '非特产' },
    { label: '原料', value: '包谷' },
    { label: '香型', value: '清香' },
  ],
}

const Sku = (props: {
  className?: string
  options: {
    label: string
    image: string
    value: string
  }[]
}) => {
  const { options } = props || {}
  const [active, setActive] = useState(options[0]?.value)

  return (
    <div className="flex gap-x-[20px]">
      {options.map((item) => (
        <div
          key={`sku-${item.value}`}
          role="button"
          className={classNames('flex items-center border text-[#86909C]', active === item.value ? 'border-[#876442]' : 'border-[#EBECF0]')}
          onClick={() => setActive(item.value)}
        >
          <Image src={item.image} alt="" width={38} height={38} />
          <span className="mx-[15px]">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export const runtime = 'edge';

export default function ProcureDetail() {
  const [liked, setLiked] = useState(false)

  const [tabActive, setTabActive] = useState(tabs[0].name)
  return (
    <>
      <div className="pr-[232px]">
        <div className="mx-[11.75%] mt-[30px] pb-[150px]">
          <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '云品优选', link: '/mall' }, { title: '全部商品', link: '/mall/search' }, { title: '商品详情' }]} />
          <div className="mt-[50px] flex">
            <MainPictureSwiper
              images={[
                {
                  src: '/mall-product-picture-1.webp',
                },
                {
                  src: '/mall-product-picture-2.webp',
                },
                {
                  src: '/mall-product-picture-3.webp',
                },
                {
                  src: '/mall-product-picture-4.webp',
                },
                {
                  src: '/mall-product-picture-5.webp',
                },
              ]}
              className="flex-shrink-0 w-[520px]"
            />
            <div className="relative flex-1 mt-[20px] ml-[50px] pb-[212px]">
              <h2 className="leading-[32px] text-[24px]">昆明 | 禄劝农家自烤酒 500g散装</h2>
              <p className="mt-[15px] leading-[22px] text-[14px] text-[#86909C]">自然纯酿，传承匠心——每一滴都是好山好水的馈赠</p>
              <div className="min-h-[94px] flex mt-[30px] px-[15px] py-[20px] border-t border-dotted border-[#876442] bg-[#876442]/5 text-[#86909C]">
                <span className="min-w-[60px]">价格</span>
                <p className="ml-[20px] flex items-baseline text-[#F33030] font-bold">
                  <span className="leading-[18px] text-[16px]">¥</span>
                  <span className="ml-[1px] leading-[22px] text-[20px]">64.9</span>
                </p>
              </div>
              <div className="ml-[15px] mt-[40px] leading-[24px] text-[16px]">
                <div className="flex items-center">
                  <span className="min-w-[60px] mr-[20px] text-[#1D2129]/60">规格</span>
                  <Sku
                    options={[
                      {
                        label: '45度 500g散装',
                        image: '/product-sku-1.webp',
                        value: '1',
                      },
                      {
                        label: '52度 1500g散装',
                        image: '/product-sku-2.webp',
                        value: '2',
                      },
                    ]}
                  />
                </div>
                <div className="mt-[15px] flex items-center">
                  <span className="min-w-[60px] mr-[20px] text-[#1D2129]/60">采购量</span>
                  <Stepper />
                </div>
                <div className="absolute bottom-[94px] left-0 flex">
                  <div role="button" className="min-w-[240px] min-h-[60px] flex items-center justify-center rounded-[4px] bg-[#876442] leading-[28px] text-[20px] text-white font-bold">
                    立即订购
                  </div>
                  <div
                    role="button"
                    className="ml-[20px] min-w-[280px] min-h-[60px] flex items-center justify-center rounded-[4px] border border-[#876442] leading-[28px] text-[20px] text-[#876442] font-bold"
                  >
                    加入采购清单
                  </div>
                  <div
                    role="button"
                    onClick={() => setLiked((val) => !val)}
                    className="ml-[20px] min-h-[60px] px-[18px] flex items-center justify-center rounded-[4px] border border-[#EBECF0] leading-[24px] text-[16px]"
                  >
                    <img src={liked ? '/ic-favorite-fill.svg' : '/ic-favorite.svg'} alt="" className="flex-shrink-0 size-[24px]" />
                    <span className="ml-[8px]">收藏</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[100px] relative">
            <h2 className="mt-[5px] leading-[32px] text-[24px] text-[#1d2129] font-bold">推荐商品</h2>
            <Divider className="mt-[30px]" />
            <Link href={'/financial-service/search'} className="absolute right-0 bottom-[30px] flex items-center leading-[24px] text-[16px] text-[#4E5969]">
              <span>查看更多</span>
              <ArrowRight className="size-[22px]" />
            </Link>
          </div>
          <div className="mt-[30px] grid grid-cols-5 gap-x-[22px]">
            <MallProduct id="01" image="/mall-product-1.webp" title="曲靖 | 宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦" price="65.60" />
            <MallProduct id="02" image="/mall-product-2.webp" title="大理 | 洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋" price="32.00" />
            <MallProduct id="03" image="/mall-product-3.webp" title="红河 | 石屏包浆豆腐700g*2盒" price="34.80" />
            <MallProduct id="04" image="/mall-product-4.webp" title="昆明 | 散养走地鸡 900g" price="59.00" />
            <MallProduct id="05" image="/mall-product-1.webp" title="昆明 | 散养走地鸡 900g" price="59.00" />
          </div>
          <div className="mt-[100px] border border-[#EBECF0]">
            <div
              className="flex h-[68px] bg-[#F7F8FA] border-b border-[#EBECF0] leading-[28px] text-[20px]"
              css={css`
                .item {
                  &.active {
                    background-color: white;
                    position: relative;
                    font-weight: bold;
                    &::before,
                    &::after {
                      content: '';
                      width: 100%;
                      position: absolute;
                      left: 0;
                    }
                    &::before {
                      height: 2px;
                      background-color: #1d5fff;
                      top: -2px;
                    }
                    &::after {
                      height: 1px;
                      background-color: white;
                      bottom: -1px;
                    }
                  }
                }
              `}
            >
              {tabs.map((item) => (
                <div
                  role="button"
                  key={`tab-${item.name}`}
                  className={classNames('min-w-[160px] flex items-center justify-center item', { active: tabActive === item.name })}
                  onClick={() => setTabActive(item.name)}
                >
                  {item.title}
                </div>
              ))}
            </div>
            {
              {
                productInfo: (
                  <div className="p-[40px] pb-[150px]">
                    <div className="grid grid-cols-3 gap-[20px] leading-[24px] text-[16px]">
                      {detail.infos.map((item, index) => (
                        <div key={`info-${index}`} className="flex">
                          <span className="min-w-[100px] flex-shrink-0 text-[#86909C]">{item.label}</span>
                          <span className="flex-grow-0 ml-[20px]">{item.value}</span>
                        </div>
                      ))}
                    </div>
                    <Divider color="#EBECF0" highlightColor="transparent" className="mt-[50px]" />
                    <div className="mt-[50px] px-[60px] leading-[30px] text-[16px]">
                      <p>自烤包谷酒是云南地区一种传统的自制酒，其制作过程复杂且具有独特的风味。以下是详细的制作方法和相关信息：</p>
                      <ol className="list-decimal pl-[1em]">
                        <li>
                          <p>原料准备：</p>
                          <ul>
                            <li>包谷（玉米）是主要原料，需要将玉米煮熟后拌上酒曲。</li>
                            <li>有些方法中提到将玉米粉碎并用水碾成细末，然后与温水按1:3的比例搅拌均匀。</li>
                          </ul>
                        </li>
                        <li>
                          <p>发酵过程：</p>
                          <ul className="list-disc">
                            <li>将拌好的玉米和酒曲放入土坛子或甑子中进行发酵。发酵时间根据不同的方法有所不同，有的需要120天，有的则在30个小时左右。</li>
                            <li>发酵过程中，玉米的糖分会发生转化，产生酒精。</li>
                          </ul>
                        </li>
                        <li>
                          <p>储存与密封：</p>
                          <ul className="list-disc">
                            <li>发酵完成后，将酒液放入不漏水的缸里面进行密封储存，以保持酒质。</li>
                            <li>有些方法中提到将蒸熟的玉米粉末装入密封桶内进行腐蚀，然后用高温煮开后再次密封。</li>
                          </ul>
                        </li>
                        <li>
                          <p>酒度与口感：</p>
                          <ul className="list-disc">
                            <li>包谷酒的酒度较高，有的可达52度，但饮用时口感绵软、清甜顺滑，幽香淡雅，回味无穷，不会辣嗓也不会上头。</li>
                            <li>发酵过程中，玉米的糖分会发生转化，产生酒精。</li>
                          </ul>
                        </li>
                      </ol>
                      <br />
                      <p>
                        <img src="/mall-product-detail-1.webp" style={{ width: '100%' }} />
                      </p>
                    </div>
                  </div>
                ),
                estimation: (
                  <>
                    <Estimation className="px-[40px] pt-[50px] pb-[80px]" />
                  </>
                ),
              }[tabActive]
            }
          </div>
        </div>
      </div>
    </>
  )
}
