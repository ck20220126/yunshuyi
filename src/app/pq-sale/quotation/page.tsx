/** @jsxImportSource @emotion/react */
'use client'

import { useState } from 'react'
import Breadcrumb from '@/app/components/Breadcrumb'
import QuotationCard from '@/app/components/QuotationCard'
import SearchCard, { Props as SearchCardProps } from '@/app/components/SearchCard'
import SearchEmpty from '@/app/components/SearchEmpty'

const data = {
  purchaseList: {
    default: [
      {
        id: 'random-id-1',
        category: '农资粮油',
        title: '采购 大理宾川柑橘苗-皇帝柑/沃柑苗/柳叶桔-岩溪晚芦(芦柑) 大批量购买',
        infos: [
          { label: '采购数量：', value: '100吨' },
          { label: '收货地址：', value: '云南省楚雄州武定县己衣镇' },
          { label: '发布日期：', value: '2024-02-11' },
          { label: '剩余时间：', value: '0天' },
          { label: '已有报价：', value: '24条' },
        ],
      },
      {
        id: 'random-id-2',
        category: '办公用品',
        title: '采购 70g打印纸 (A4) 500页面/包',
        infos: [
          { label: '采购数量：', value: '200包' },
          { label: '收货地址：', value: '云南省昆明市西山区 环城南路' },
          { label: '发布日期：', value: '2024-04-01' },
          { label: '剩余时间：', value: '25天' },
          { label: '已有报价：', value: '31条' },
        ],
      },
      {
        id: 'random-id-3',
        category: '农资粮油',
        title: '采购 小麦粉',
        infos: [
          { label: '采购数量：', value: '50吨' },
          { label: '收货地址：', value: '云南省楚雄州禄丰市仁兴镇' },
          { label: '发布日期：', value: '2024-04-10' },
          { label: '剩余时间：', value: '24天' },
          { label: '已有报价：', value: '7条' },
        ],
      },
      {
        id: 'random-id-4',
        category: '农资农产',
        title: '采购 大理宾川柑橘苗',
        infos: [
          { label: '采购数量：', value: '1000株' },
          { label: '收货地址：', value: '云南省楚雄州武定县发窝乡' },
          { label: '发布日期：', value: '2024-01-30' },
          { label: '剩余时间：', value: '0天' },
          { label: '已有报价：', value: '36条' },
        ],
      },
      {
        id: 'random-id-5',
        category: '农资粮油',
        title: '采购 单晶冰糖',
        infos: [
          { label: '采购数量：', value: '1吨' },
          { label: '收货地址：', value: '云南省昆明市 五华区高新产业园' },
          { label: '发布日期：', value: '2024-03-29' },
          { label: '剩余时间：', value: '7天' },
          { label: '已有报价：', value: '21条' },
        ],
      },
      {
        id: 'random-id-6',
        category: '办公用品',
        title: '采购 热敏收银纸57x50超市小票纸5750mm/卷',
        infos: [
          { label: '采购数量：', value: '700卷' },
          { label: '收货地址：', value: '云南省昆明市 五华区高新产业园' },
          { label: '发布日期：', value: '2024-02-25' },
          { label: '剩余时间：', value: '2天' },
          { label: '已有报价：', value: '32条' },
        ],
      },
      {
        id: 'random-id-7',
        category: '工程招标',
        title: '云南省第一人民医院电动式升卡婴育设备项目',
        infos: [
          { label: '采购方式：', value: '公开招标' },
          { label: '收货地址：', value: '云南省昆明市' },
          { label: '发布日期：', value: '2024-05-27' },
          { label: '剩余时间：', value: '6天' },
          { label: '已有报价：', value: '8条' },
        ],
      },
      {
        id: 'random-id-8',
        category: '工程招标',
        title: '云南省第一人民医院胶质瘤救头项目',
        infos: [
          { label: '采购方式：', value: '公开招标' },
          { label: '收货地址：', value: '云南省昆明市' },
          { label: '发布日期：', value: '2024-05-27' },
          { label: '剩余时间：', value: '6天' },
          { label: '已有报价：', value: '4条' },
        ],
      },
      {
        id: 'random-id-9',
        category: '工程招标',
        title: '龙谷乡邦村罗家组烟基建设项目',
        infos: [
          { label: '采购方式：', value: '公开招标' },
          { label: '收货地址：', value: '云南省' },
          { label: '发布日期：', value: '2024-05-23' },
          { label: '剩余时间：', value: '7天' },
          { label: '已有报价：', value: '7条' },
        ],
      },
      {
        id: 'random-id-10',
        category: '工程招标',
        title: '文山市人民医院医技楼安装配电柜及电缆项目',
        infos: [
          { label: '采购方式：', value: '公开招标' },
          { label: '收货地址：', value: '云南省文山壮族苗族自治州' },
          { label: '发布日期：', value: '2024-05-22' },
          { label: '剩余时间：', value: '30天' },
          { label: '已有报价：', value: '3条' },
        ],
      },
      {
        id: 'random-id-11',
        category: '工程招标',
        title: '云南建设发展工程有限公司2024年度安全技术服务专项采购项目（公开竞争性谈判）',
        infos: [
          { label: '采购方式：', value: '竞争性谈判' },
          { label: '收货地址：', value: '云南省昆明市' },
          { label: '发布日期：', value: '2024-05-20' },
          { label: '剩余时间：', value: '33天' },
          { label: '已有报价：', value: '6条' },
        ],
      },
      {
        id: 'random-id-12',
        category: '工程招标',
        title: '云南清源实业有限公司2024-2026年度报废物资处置技术服务项目',
        infos: [
          { label: '采购方式：', value: '公开招标' },
          { label: '收货地址：', value: '云南省' },
          { label: '发布日期：', value: '2024-05-27' },
          { label: '剩余时间：', value: '17天' },
          { label: '已有报价：', value: '10条' },
        ],
      },
      {
        id: 'random-id-13',
        category: '工程招标',
        title: '云南润通科技有限公司关于弥川区生活垃圾处置项目',
        infos: [
          { label: '采购方式：', value: '公开招标' },
          { label: '收货地址：', value: '云南省大理白族自治州' },
          { label: '发布日期：', value: '2024-05-27' },
          { label: '剩余时间：', value: '33天' },
          { label: '已有报价：', value: '8条' },
        ],
      },
      {
        id: 'random-id-14',
        category: '工程招标',
        title: '中铁集团隧道局昆明公司昆仑地块地下室车位工程项目（钢筋混凝土项目）',
        infos: [
          { label: '采购方式：', value: '公开招标' },
          { label: '收货地址：', value: '云南省昆明市' },
          { label: '发布日期：', value: '2024-05-27' },
          { label: '剩余时间：', value: '33天' },
          { label: '已有报价：', value: '6条' },
        ],
      },
      {
        id: 'random-id-15',
        category: '工程招标',
        title: '云南通用职业技术学院建筑媒体学院建设项目',
        infos: [
          { label: '采购方式：', value: '公开招标' },
          { label: '收货地址：', value: '云南省' },
          { label: '发布日期：', value: '2024-05-27' },
          { label: '剩余时间：', value: '33天' },
          { label: '已有报价：', value: '6条' },
        ],
      },
    ],
  },
}

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

  const [purchaseList, setPurchaseList] = useState([...data.purchaseList.default])

  const [keyword, setKeyword] = useState('')
  const onSearch: SearchCardProps['onChange'] = ({ searchKeyword }) => {
    setKeyword(searchKeyword)
    setPurchaseList(data.purchaseList[searchKeyword || 'default'] || [])
  }

  return (
    <div className="pr-[232px]">
      <div className="mx-[11.75%] mt-[30px] pb-[150px]">
        <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '集采集售', link: '/pq-sale' }, { title: '招采报价' }]} />
        <SearchCard
          className="mt-[30px]"
          tags={[
            {
              title: '采购内容',
              name: 'type',
              options: [
                {
                  label: '全部',
                  value: 'all',
                },
                {
                  label: '物资招采',
                  value: '01',
                },
                {
                  label: '工程招标',
                  value: '02',
                },
                {
                  label: '服务招标',
                  value: '03',
                },
              ],
              defaultValue: 'all',
            },
          ]}
          filters={[
            {
              title: '公告发布时间',
              name: 'publicDate',
              type: 'sort',
            },
            {
              title: '报价条数',
              name: 'recordTotal',
              type: 'sort',
            },
            {
              title: '报价截止日期',
              name: 'endDate',
              type: 'sort',
            },
          ]}
          pagination={{
            total: 50,
            renderTotal({ total }) {
              return (
                <>
                  共 <span className="text-[#1D5FFF]">{total}</span> 条公告
                </>
              )
            },
          }}
          onSearch={onSearch}
        />
        {purchaseList.length ? (
          <div className="mt-[30px] grid grid-cols-3 gap-[30px]">
            {purchaseList.map((item) => (
              <QuotationCard key={`quotation-${item.id}`} id={item.id} tag={item.category} title={item.title} infos={item.infos} liked={likeIds.includes(item.id)} onLike={() => onJoinLike(item)} />
            ))}
          </div>
        ) : (
          <SearchEmpty keyword={keyword} className="mt-[150px]" />
        )}
      </div>
    </div>
  )
}
