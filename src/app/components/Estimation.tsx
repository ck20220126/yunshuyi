/** @jsxImportSource @emotion/react */
'use client'

import classNames from 'classnames'
import { Button, Divider, Pagination, Rate } from 'antd'
import { useState } from 'react'

const levels = [
  {
    label: '全部',
    value: 'all',
  },
  {
    label: '四星',
    value: 'four',
  },
  {
    label: '三星',
    value: 'three',
  },
  {
    label: '一星两星',
    value: 'oneAndTwo',
  },
]

const list = [
  {
    avatar: '/default-avatar.png',
    phone: '151****4389',
    name: '大理州人民政府办公室',
    rate: 5,
    date: '2024-04-03 09:28',
    product: '西王浓香花生油 桶装冷榨源头工厂 家用食用凉拌热炒油 5升',
    content: '是正品口价格实惠，物流快，会继续采购',
  },
  {
    avatar: '/default-avatar.png',
    phone: '151****4389',
    name: '大理州人民政府办公室',
    rate: 4,
    date: '2024-04-03 09:28',
    product: '西王浓香花生油 桶装冷榨源头工厂 家用食用凉拌热炒油 5升',
    content: '是正品口价格实惠，物流快，会继续采购',
  },
  {
    avatar: '/default-avatar.png',
    phone: '151****4389',
    name: '大理州人民政府办公室',
    rate: 5,
    date: '2024-04-03 09:28',
    product: '西王浓香花生油 桶装冷榨源头工厂 家用食用凉拌热炒油 5升',
    content: '是正品口价格实惠，物流快，会继续采购',
  },
  {
    avatar: '/default-avatar.png',
    phone: '151****4389',
    name: '大理州人民政府办公室',
    rate: 4,
    date: '2024-04-03 09:28',
    product: '西王浓香花生油 桶装冷榨源头工厂 家用食用凉拌热炒油 5升',
    content: '是正品口价格实惠，物流快，会继续采购',
  },
  {
    avatar: '/default-avatar.png',
    phone: '151****4389',
    name: '大理州人民政府办公室',
    rate: 5,
    date: '2024-04-03 09:28',
    product: '西王浓香花生油 桶装冷榨源头工厂 家用食用凉拌热炒油 5升',
    content: '是正品口价格实惠，物流快，会继续采购',
  },
  {
    avatar: '/default-avatar.png',
    phone: '151****4389',
    name: '大理州人民政府办公室',
    rate: 4,
    date: '2024-04-03 09:28',
    product: '西王浓香花生油 桶装冷榨源头工厂 家用食用凉拌热炒油 5升',
    content: '是正品口价格实惠，物流快，会继续采购',
  },
]

export default function Estimation(props: { className?: string }) {
  const [currentLevel, setCurrentLevel] = useState(levels[0].value)
  return (
    <div className={classNames(props.className)}>
      <div className="flex">
        {levels.map((item, index) => (
          <div
            key={`level-${item.value}`}
            role="button"
            className={classNames('min-w-[104px] h-[38px] flex justify-center items-center rounded-[4px] leading-[22px] text-[16px] bg-[#F7F8FA] text-[#4E5969] transition', {
              'ml-[20px]': index > 0,
              '!bg-[#1D5FFF] text-white': currentLevel === item.value,
            })}
            onClick={() => setCurrentLevel(item.value)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <Divider className="!mt-[20px] !mb-0" />
      {list.map((item, index) => (
        <div key={`item-${index}}`} className="flex items-start py-[40px] border-b border-[#EBECF0]">
          <div className="flex-shrink-0 w-[375px] flex items-center">
            <img src={item.avatar} alt="" className="size-[60px] rounded-full object-cover" />
            <div className="ml-[15px] text-[12px] leading-[16px] text-[#4E5969]">
              <p className="leading-[28px] text-[20px]">{item.phone}</p>
              <p className="mt-[8px] text-[16px] text-[#86909C]">{item.name}</p>
            </div>
          </div>
          <div className="w-[1px] h-[60px] bg-[#EBECF0] ml-[10px]" />
          <div className="ml-[40px] text-[16px]">
            <Rate value={item.rate} disabled />
            <p className="mt-[8px] flex items-center text-[#86909C]">
              <span>{item.product}</span>
              <span className="ml-[20px]">{item.date}</span>
            </p>
            <p className="mt-[20px]">{item.content}</p>
          </div>
        </div>
      ))}

      <div className="mt-[50px] flex justify-center items-center">
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
  )
}
