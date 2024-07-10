/** @jsxImportSource @emotion/react */
'use client'

import { useState } from 'react'
import classNames from 'classnames'

import Breadcrumb from '@/app/components/Breadcrumb'
import ArrowRight from '@/app/components/icons/ArrowRight'
import MallProduct from '@/app/components/MallProduct'
import { Button, Checkbox, ConfigProvider, Pagination } from 'antd'
const { Group: CheckboxGroup } = Checkbox

const data = {
  filters: [
    {
      label: '商品产地',
      name: 'city',
      options: [
        {
          label: '昆明市',
          value: '00',
        },
        {
          label: '曲靖市',
          value: '01',
        },
        {
          label: '玉溪市',
          value: '02',
        },
        {
          label: '保山市',
          value: '03',
        },
        {
          label: '昭通市',
          value: '04',
        },
        {
          label: '丽江市',
          value: '05',
        },
        {
          label: '普洱市',
          value: '06',
        },
        {
          label: '临沧市',
          value: '07',
        },
        {
          label: '德宏傣族景颇族自治州',
          value: '08',
        },
        {
          label: '怒江傈僳族自治州',
          value: '09',
        },
        {
          label: '迪庆藏族自治州',
          value: '10',
        },
        {
          label: '大理白族自治州',
          value: '11',
        },

        {
          label: '楚雄彝族自治州',
          value: '12',
        },
        {
          label: '红河哈尼族彝族自治州',
          value: '13',
        },
        {
          label: '文山壮族苗族自治州',
          value: '14',
        },
      ],
    },
    {
      label: '商品分类',
      name: 'class',
      options: [
        {
          label: '土特产',
          value: '01',
        },
        {
          label: '特价商品',
          value: '02',
        },
        {
          label: '上新',
          value: '03',
        },
      ],
    },
  ],
}

export default function Search() {
  const [expandedName, setExpandedName] = useState('city')

  function onClickFilterItem(name) {
    setExpandedName((val) => (val !== name ? name : ''))
  }

  return (
    <div className="pr-sider-padding">
      <ConfigProvider
        theme={{
          components: {
            Checkbox: {
              borderRadiusSM: 0,
              lineHeight: 1.5,
              fontSize: 16,
              lineWidth: 2,
            },
          },
        }}
      >
        <div className="flex">
          <div className="flex-shrink-0 w-[350px] border-r border-[#C9CDD4] p-[50px] pl-[100px] select-none">
            {data.filters.map((item) => (
              <div key={`filter-${item.name}`} className="py-[30px] border-b border-red-[#EBECF0]">
                <div role="button" className="flex items-center leading-[28px] text-[20px] font-bold" onClick={() => onClickFilterItem(item.name)}>
                  <span className="flex-1">{item.label}</span>
                  <ArrowRight className={classNames('flex-shrink-0 w-[24px] transform ro', expandedName === item.name ? '-rotate-90' : 'rotate-90')} />
                </div>
                {!!item?.options?.length && (
                  <div className={classNames('grid overflow-hidden transition-[grid]', expandedName === item.name ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                    <CheckboxGroup className="min-h-0 !mt-[30px] flex flex-col gap-y-[15px]">
                      {item.options.map((option) => (
                        <Checkbox key={`filter-${item.name}-${option.value}`} value={option.value} className="w-full">
                          {option.label}
                        </Checkbox>
                      ))}
                    </CheckboxGroup>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex-1 px-[150px] pb-[150px]">
            <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '云品优选', link: '/mall' }, { title: '全部商品' }]} className="my-[50px]" />
            <div className="mt-[50px] grid grid-cols-4 gap-[30px]">
              <MallProduct id="01" image="/mall-product-1.webp" title="曲靖 | 宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦" price="65.60" />
              <MallProduct id="02" image="/mall-product-2.webp" title="大理 | 洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋" price="32.00" />
              <MallProduct id="03" image="/mall-product-3.webp" title="红河 | 石屏包浆豆腐700g*2盒" price="34.80" />
              <MallProduct id="04" image="/mall-product-4.webp" title="昆明 | 散养走地鸡 900g" price="59.00" />
              <MallProduct id="001" image="/mall-product-1.webp" title="曲靖 | 宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦" price="65.60" />
              <MallProduct id="002" image="/mall-product-2.webp" title="大理 | 洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋" price="32.00" />
              <MallProduct id="003" image="/mall-product-3.webp" title="红河 | 石屏包浆豆腐700g*2盒" price="34.80" />
              <MallProduct id="004" image="/mall-product-4.webp" title="昆明 | 散养走地鸡 900g" price="59.00" />
              <MallProduct id="0001" image="/mall-product-1.webp" title="曲靖 | 宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦" price="65.60" />
              <MallProduct id="0002" image="/mall-product-2.webp" title="大理 | 洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋" price="32.00" />
              <MallProduct id="0003" image="/mall-product-3.webp" title="红河 | 石屏包浆豆腐700g*2盒" price="34.80" />
              <MallProduct id="0004" image="/mall-product-4.webp" title="昆明 | 散养走地鸡 900g" price="59.00" />
            </div>
            <div className="mt-[50px] flex justify-center">
              <Pagination
                total={300}
                showSizeChanger={false}
                itemRender={(_, type, originalElement) => {
                  if (type === 'prev') {
                    return <Button>上一页</Button>
                  }
                  if (type === 'next') {
                    return <Button>下一页</Button>
                  }
                  return originalElement
                }}
              />
            </div>
          </div>
        </div>
      </ConfigProvider>
    </div>
  )
}
