/** @jsxImportSource @emotion/react */
'use client'

import { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import QuotationCard from '../components/QuotationCard'

const purchaseList = [
  {
    id: '1',
    category: '大宗粮油',
    projectName: '采购大理宾川柑橘苗',
    infos: [
      { value: '100吨', label: '采购数量：' },
      { value: '云南省楚雄州武定县已衣镇', label: '收货地点：' },
      { value: '2024-02-11', label: '发布日期：' },
      { value: '0天', label: '剩余时间：' },
      { value: '24条', label: '已有报价：' },
    ],
  },
  {
    id: '2',
    category: '办公用品',
    projectName: '采购70g打印纸（A4）500页面/包',
    infos: [
      { value: '200包', label: '采购数量：' },
      { value: '云南省昆明市西山区环城南路', label: '收货地点：' },
      { value: '2024-04-01', label: '发布日期：' },
      { value: '25天', label: '剩余时间：' },
      { value: '31条', label: '已有报价：' },
    ],
  },
  {
    id: '3',
    category: '大宗粮油',
    projectName: '采购小麦粉',
    infos: [
      { value: '50吨', label: '采购数量：' },
      { value: '云南省楚雄州禄丰市仁兴镇', label: '收货地点：' },
      { value: '2024-04-10', label: '发布日期：' },
      { value: '24天', label: '剩余时间：' },
      { value: '7条', label: '已有报价：' },
    ],
  },
  {
    id: '4',
    category: '农资农产',
    projectName: '柳叶桔-岩溪晚芦(芦柑）大批量购买',
    infos: [
      { value: '大批量购买', label: '采购数量：' },
      { value: '云南省昆明市五华区高新产业园', label: '收货地点：' }, // 根据截图，收货地点未提供
      { value: '2024-01-30', label: '发布日期：' },
      { value: '0天', label: '剩余时间：' },
      { value: '36条', label: '已有报价：' },
    ],
  },
  {
    id: '5',
    category: '大宗粮油',
    projectName: '采购单晶冰糖',
    infos: [
      { value: '1吨', label: '采购数量：' },
      { value: '云南省昆明市五华区高新产业园', label: '收货地点：' },
      { value: '2024-03-29', label: '发布日期：' },
      { value: '7天', label: '剩余时间：' },
      { value: '21条', label: '已有报价：' },
    ],
  },
  {
    id: '6',
    category: '办公用品',
    projectName: '采购热敏收银纸57x50超市小票纸5750mm/卷',
    infos: [
      { value: '700卷', label: '采购数量：' },
      { value: '云南省昆明市五华区高新产业园', label: '收货地点：' },
      { value: '2024-02-25', label: '发布日期：' },
      { value: '2天', label: '剩余时间：' },
      { value: '32条', label: '已有报价：' },
    ],
  },
]

export default function Procurement() {
  const [likeIds, setLikeIds] = useState<React.Key[]>([])

  function onJoinLike(item) {
    setLikeIds((val) => {
      const newList = [...val]
      const _index = likeIds.findIndex((id) => id === item.id)
      if (_index > -1) {
        newList.splice(_index, 1)
      } else {
        newList.push(item.id)
      }
      return newList
    })
  }

  return (
    <div className="pr-[232px]">
      <div className="mx-[10.5%] mt-[30px] pb-[150px]">
        <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '集采集售', link: '/pq-sale' }, { title: '招采报价' }]} />
        <div className="mt-[30px] border border-[#EBECF0] p-[30px]"></div>
        <div className="mt-[30px] border border-[#EBECF0] p-[30px]"></div>
        <div className="mt-[30px] grid grid-cols-3 gap-[30px]">
          {purchaseList.map((item) => (
            <QuotationCard
              key={`quotation-${item.id}`}
              id={item.id}
              tag={item.category}
              title={item.projectName}
              infos={item.infos}
              liked={likeIds.includes(item.id)}
              onLike={() => onJoinLike(item)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
