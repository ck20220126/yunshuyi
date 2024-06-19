/** @jsxImportSource @emotion/react */
'use client'

import React, { useState } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import DetailCover from '../components/DetailCover'
import Divider from '../components/Divider'
import Tabs from '../components/Tabs'
import ArrowRight from '../components/icons/ArrowRight'
import QuotationCard from '../components/QuotationCard'
import { css } from '@emotion/react'

const quotationList = [
  {
    id: '1-1',
    tag: '大宗粮油',
    title: '采购 大理宾川柑橘苗-皇帝柑/沃柑苗/柳叶桔-岩溪晚芦(芦柑) 大批量购买',
    infos: [
      {
        label: '采购数量：',
        value: '100吨',
      },
      {
        label: '收货地点：',
        value: '云南省楚雄州武定县己衣镇',
      },
      {
        label: '发布日期：',
        value: '2024-02-113',
      },
      {
        label: '剩余时间：',
        value: '0天',
      },
      {
        label: '已有报价：',
        value: '24条',
      },
    ],
  },
  {
    id: '1-2',
    tag: '办公用品',
    title: '采购 70g打印纸（A4）500页面/包',
    infos: [
      {
        label: '采购数量：',
        value: '200包',
      },
      {
        label: '收货地点：',
        value: '云南省昆明市西山区 环城南路',
      },
      {
        label: '发布日期：',
        value: '2024-04-01',
      },
      {
        label: '剩余时间：',
        value: '25天',
      },
      {
        label: '已有报价：',
        value: '31条',
      },
    ],
  },
  {
    id: '1-3',
    tag: '大宗粮油',
    title: '采购 小麦粉',
    infos: [
      {
        label: '采购数量：',
        value: '50吨',
      },
      {
        label: '收货地点：',
        value: '云南省楚雄州禄丰市仁兴镇',
      },
      {
        label: '发布日期：',
        value: '2024-04-10',
      },
      {
        label: '剩余时间：',
        value: '24天',
      },
      {
        label: '已有报价：',
        value: '7条',
      },
    ],
  },
  {
    id: '1-4',
    tag: '农资农产',
    title: '采购 大理宾川柑橘苗',
    infos: [
      {
        label: '采购数量：',
        value: '1000株',
      },
      {
        label: '收货地点：',
        value: '云南省楚雄州武定县发窝乡',
      },
      {
        label: '发布日期：',
        value: '2024-01-30',
      },
      {
        label: '剩余时间：',
        value: '0天',
      },
      {
        label: '已有报价：',
        value: '36条',
      },
    ],
  },
  {
    id: '1-5',
    tag: '大宗粮油',
    title: '采购 单晶冰糖',
    infos: [
      {
        label: '采购数量：',
        value: '1吨',
      },
      {
        label: '收货地点：',
        value: '云南省昆明市 五华区高新产业园',
      },
      {
        label: '发布日期：',
        value: '2024-03-29',
      },
      {
        label: '剩余时间：',
        value: '7天',
      },
      {
        label: '已有报价：',
        value: '21条',
      },
    ],
  },
  {
    id: '1-6',
    tag: '办公用品',
    title: '采购 热敏收银纸57x50超市小票纸5750mm/卷',
    infos: [
      {
        label: '采购数量：',
        value: '700卷',
      },
      {
        label: '收货地点：',
        value: '云南省昆明市 五华区高新产业园',
      },
      {
        label: '发布日期：',
        value: '2024-02-25',
      },
      {
        label: '剩余时间：',
        value: '2天',
      },
      {
        label: '已有报价：',
        value: '32条',
      },
    ],
  },
]

const publicityData = [
  {
    purchaseProductName: '大理宾川柑橘苗报价公示',
    supplierName: '小张冰鲜水果店',
    publicDate: '2024-05-21',
    transactionAmount: 23456.0,
  },
  {
    purchaseProductName: '高筋面粉报价公示',
    supplierName: '胶东特产馆',
    publicDate: '2024-04-12',
    transactionAmount: 133456.0,
  },
  {
    purchaseProductName: '70g打印纸（A4）500页面/包报价公示',
    supplierName: '乡吧佬土特产',
    publicDate: '2024-05-30',
    transactionAmount: 47832.0,
  },
  {
    purchaseProductName: '小麦粉报价公示',
    supplierName: '张飞龙的店',
    publicDate: '2024-05-12',
    transactionAmount: 36782.0,
  },
  {
    purchaseProductName: '单晶冰糖报价公示',
    supplierName: '迁西县献林农产品销售有限公司',
    publicDate: '2024-05-30',
    transactionAmount: 313456.0,
  },
  {
    purchaseProductName: '热敏收银纸57x50超市小票纸5750mm/卷报价公示',
    supplierName: '贵州省公路工程集团有限公司',
    publicDate: '2024-04-12',
    transactionAmount: 57902.0,
  },
  {
    purchaseProductName: '猪副产品猪肘类报价公示', // 已更正为“猪肘类”
    supplierName: '丰具鑫澳猪副产品经营店',
    publicDate: '2024-03-11',
    transactionAmount: 135671.0,
  },
  {
    purchaseProductName: '土豆迷你土豆报价公示',
    supplierName: '鼎泰丰香料行',
    publicDate: '2024-03-17',
    transactionAmount: 793356.0,
  },
]

const biddingDetails = [
  {
    projectName: '云南省第一人民医院血型试剂卡孵育器项目',
    biddingCompany: '云南省第一人民医院',
    publishDate: '2024-03-12',
  },
  {
    projectName: '云南省第一人民医院腔镜镜头项目',
    biddingCompany: '云南省第一人民医院',
    publishDate: '2024-01-30',
  },
  {
    projectName: '龙街乡邦庆村罗家组烤烟基地建设项目',
    biddingCompany: '龙街乡邦庆村村委会',
    publishDate: '2024-02-12',
  },
  {
    projectName: '文山市人民医院医技楼1楼安装配电柜及电缆项目',
    biddingCompany: '文山市人民医院',
    publishDate: '2024-06-12',
  },
  {
    projectName: '云南送变电工程有限公司2024年度安全技术服务专项采购（公开竞争性谈判）',
    biddingCompany: '云南电网公司',
    publishDate: '2024-03-10',
  },
  {
    projectName: '云南省烟草公司丽江市公司2024-2026年报废物资回收处置服务项目',
    biddingCompany: '云南烟草',
    publishDate: '2024-03-11',
  },
  {
    projectName: '云南润滇工程技术咨询有限公司关于东川区生活垃圾处置项目',
    biddingCompany: '云南润滇工程技术咨询有限公司',
    publishDate: '2024-04-24',
  },
  {
    projectName: '中国铁路昆明局集团有限公司云南昆铁房地产开发经营有限责任公司土地增值税清算服务业务外',
    biddingCompany: '中国铁路昆明局集团有限公司',
    publishDate: '2024-05-24',
  },
]

const ProcCard = (props: { id: number; image: string; title: string; className?: string }) => {
  return (
    <Link href={`/procurement?type=${props.id}`} className={classNames('block', props.className)}>
      <motion.div className={'relative w-full h-full'} initial={{ '--mark-bg': 'rgba(0,0,0,0.5)' } as any} whileHover={{ '--mark-bg': 'rgba(29, 95, 255, 0.9)' } as any}>
        <Image src={props.image} fill alt="" className="object-cover" />
        <motion.div className={classNames('absolute inset-0 flex items-center justify-center text-white')} style={{ backgroundColor: 'var(--mark-bg)' }}>
          <h3 className="leading-[32px] text-[24px]">{props.title}</h3>
        </motion.div>
      </motion.div>
    </Link>
  )
}

export default function CpSale() {
  const [quotationActive, setQuotationActive] = useState('01')
  const [publicityActive, setPublicityActive] = useState('01')

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
      <DetailCover image="/cp-sale-header-bg.png" title="大宗商品供应链" subtitle="立足供应链、服务产业链、创造价值链" />
      <div className="ml-[10.5%]">
        <div className="mt-[150px]">
          <p className="leading-[44px] text-[20px] text-[#c9cdd4]">Procure</p>
          <h2 className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">询价采购</h2>
          <Divider className="my-[30px]" />
        </div>
      </div>
      <div className="flex gap-x-[30px] pb-[150px]">
        <div className="flex-1 flex gap-x-[30px] border-blue-100">
          <ProcCard image="/procure-img1.png" title="大宗粮油" id={1} className="h-full flex-1" />
          <div className="flex-1">
            <ProcCard image="/procure-img2.png" title="建筑建材" id={2} className="h-[280px]" />
            <ProcCard image="/procure-img3.png" title="办公用品" id={3} className="mt-[30px] h-[280px]" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-x-[30px]">
          <div className="flex-1 flex">
            <ProcCard image="/procure-img4.png" title="日用百货" id={4} className="flex-1 h-[280px] " />
            <ProcCard image="/procure-img5.png" title="生鲜食品" id={5} className="ml-[30px] flex-1 h-[280px]" />
          </div>
          <ProcCard image="/procure-img6.png" title="农资农产" id={6} className="flex-1 mt-[30px]" />
        </div>
      </div>

      <div className="px-[10.5%] py-[50px] bg-[#F7F8FA]">
        <p className="leading-[44px] text-[20px] text-[#c9cdd4]">Quotation</p>
        <h2 className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">招采报价</h2>
        <Tabs
          list={[
            {
              value: '01',
              label: '物资招采',
            },
            {
              value: '02',
              label: '服务招标',
            },
            {
              value: '03',
              label: '工程招标',
            },
          ]}
          active={quotationActive}
          onChange={setQuotationActive}
          extra={
            <Link href={'/quotation'} className="flex items-center leading-[24px] text-[16px] text-[#4E5969]">
              <span>查看更多</span>
              <ArrowRight className="size-[22px]" />
            </Link>
          }
          className="mt-[30px]"
        />
        <div className="mt-[30px] grid grid-cols-3 gap-[30px]">
          {quotationList.map((item) => (
            <QuotationCard key={`quotation-${item.id}`} id={item.id} tag={item.tag} title={item.title} infos={item.infos} liked={likeIds.includes(item.id)} onLike={() => onJoinLike(item)} />
          ))}
        </div>
      </div>
      <div className="px-[10.5%] py-[150px]">
        <p className="leading-[44px] text-[20px] text-[#c9cdd4]">Publicity</p>
        <h2 className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">招采结果</h2>
        <Tabs
          list={[
            {
              value: '01',
              label: '报价公示',
            },
            {
              value: '02',
              label: '招标公示',
            },
          ]}
          active={publicityActive}
          onChange={setPublicityActive}
          extra={
            <Link href={'/quotation-result'} className="flex items-center leading-[24px] text-[16px] text-[#4E5969]">
              <span>查看更多</span>
              <ArrowRight className="size-[22px]" />
            </Link>
          }
          className="mt-[30px]"
        />
        <div
          className="mt-[30px]"
          css={css`
            .p-datatable-table {
              border: 1px solid #c9cdd4;
              tr {
                border-top: 1px solid #c9cdd4;
              }
              thead tr {
                border-top: none;
              }
            }
          `}
        >
          {
            {
              '01': (
                <DataTable
                  value={publicityData}
                  className="w-full"
                  css={css`
                    .p-datatable-table {
                      border: 1px solid #c9cdd4;
                      tr {
                        border-top: 1px solid #c9cdd4;
                      }
                      thead tr {
                        border-top: none;
                      }
                    }
                  `}
                >
                  <Column field="purchaseProductName" header="采购商品名称"></Column>
                  <Column field="supplierName" header="供应商名称"></Column>
                  <Column field="publicDate" header="公示日期"></Column>
                  <Column field="transactionAmount" header="成交金额（元）"></Column>
                </DataTable>
              ),
              '02': (
                <DataTable value={biddingDetails} className="w-full">
                  <Column field="projectName" header="项目名称"></Column>
                  <Column field="biddingCompany" header="招标企业"></Column>
                  <Column field="publishDate" header="发布时间"></Column>
                </DataTable>
              ),
            }[publicityActive]
          }
        </div>
      </div>
    </div>
  )
}
