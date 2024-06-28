/** @jsxImportSource @emotion/react */
'use client'

import React, { useState } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'

import Image from 'next/image'
import Link from 'next/link'
import DetailCover from '../components/DetailCover'
import Divider from '../components/Divider'
import Tabs from '../components/Tabs'
import ArrowRight from '../components/icons/ArrowRight'
import QuotationCard from '../components/QuotationCard'
import { Table } from 'antd'

const quotationData = {
  '01': [
    {
      id: '1-1',
      tag: '大宗粮油',
      title: '采购 大理宾川柑橘苗-皇帝柑/沃柑苗/柳叶桔-岩溪晚芦(芦柑) 大批量购买',
      infos: [
        {
          label: '采购数量：：',
          value: '100吨',
        },
        {
          label: '收货地点：：',
          value: '云南省楚雄州武定县己衣镇',
        },
        {
          label: '发布日期：：',
          value: '2024-02-113',
        },
        {
          label: '剩余时间：：',
          value: '0天',
        },
        {
          label: '已有报价：：',
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
          label: '采购数量：：',
          value: '200包',
        },
        {
          label: '收货地点：：',
          value: '云南省昆明市西山区 环城南路',
        },
        {
          label: '发布日期：：',
          value: '2024-04-01',
        },
        {
          label: '剩余时间：：',
          value: '25天',
        },
        {
          label: '已有报价：：',
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
          label: '采购数量：：',
          value: '50吨',
        },
        {
          label: '收货地点：：',
          value: '云南省楚雄州禄丰市仁兴镇',
        },
        {
          label: '发布日期：：',
          value: '2024-04-10',
        },
        {
          label: '剩余时间：：',
          value: '24天',
        },
        {
          label: '已有报价：：',
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
          label: '采购数量：：',
          value: '1000株',
        },
        {
          label: '收货地点：：',
          value: '云南省楚雄州武定县发窝乡',
        },
        {
          label: '发布日期：：',
          value: '2024-01-30',
        },
        {
          label: '剩余时间：：',
          value: '0天',
        },
        {
          label: '已有报价：：',
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
          label: '采购数量：：',
          value: '1吨',
        },
        {
          label: '收货地点：：',
          value: '云南省昆明市 五华区高新产业园',
        },
        {
          label: '发布日期：：',
          value: '2024-03-29',
        },
        {
          label: '剩余时间：：',
          value: '7天',
        },
        {
          label: '已有报价：：',
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
          label: '采购数量：：',
          value: '700卷',
        },
        {
          label: '收货地点：：',
          value: '云南省昆明市 五华区高新产业园',
        },
        {
          label: '发布日期：：',
          value: '2024-02-25',
        },
        {
          label: '剩余时间：：',
          value: '2天',
        },
        {
          label: '已有报价：：',
          value: '32条',
        },
      ],
    },
  ],
  '02': [
    {
      id: '2-1',
      tag: '工程招标',
      title: '云南省第一人民医院血型试剂卡孵育器项目',
      infos: [
        { label: '采购方式：', value: '公开招标' },
        { label: '收货地址：', value: '云南省昆明市' },
        { label: '发布日期：', value: '2024-05-27' },
        { label: '剩余时间：', value: '5天' },
        { label: '已有报价：', value: '6条' },
      ],
    },
    {
      id: '2-2',
      tag: '工程招标',
      title: '云南省第一人民医院腔镜镜头项目',
      infos: [
        { label: '采购方式：', value: '公开招标' },
        { label: '收货地址：', value: '云南省昆明市' },
        { label: '发布日期：', value: '2024-05-27' },
        { label: '剩余时间：', value: '5天' },
        { label: '已有报价：', value: '4条' },
      ],
    },
    {
      id: '2-3',
      tag: '工程招标',
      title: '龙街乡邦床村罗家组烤烟基地建设项目',
      infos: [
        { label: '采购方式：', value: '公开招标' },
        { label: '收货地址：', value: '云南省昭通市彝良县' },
        { label: '发布日期：', value: '2024-05-23' },
        { label: '剩余时间：', value: '10天' },
        { label: '已有报价：', value: '7条' },
      ],
    },
    {
      id: '2-4',
      tag: '工程招标',
      title: '文山市人民医院医技楼1楼安装配电柜及电缆项目',
      infos: [
        { label: '采购方式：', value: '公开招标' },
        { label: '收货地址：', value: '云南省文山州文山市' },
        { label: '发布日期：', value: '2024-05-22' },
        { label: '剩余时间：', value: '10天' },
        { label: '已有报价：', value: '3条' },
      ],
    },
    {
      id: '2-5',
      tag: '工程招标',
      title: '云南送变电工程有限公司2024年度安全技术服务专项采购（公开竞争性谈判）',
      infos: [
        { label: '采购方式：', value: '竞争性谈判' },
        { label: '收货地址：', value: '云南省昆明市' },
        { label: '发布日期：', value: '2024-05-20' },
        { label: '剩余时间：', value: '5天' },
        { label: '已有报价：', value: '8条' },
      ],
    },
    {
      id: '2-6',
      tag: '工程招标',
      title: '云南省烟草公司丽江市公司2024-2026年报废物资回收处置服务项目',
      infos: [
        { label: '采购方式：', value: '公开招标' },
        { label: '收货地址：', value: '云南省昆明市' },
        { label: '发布日期：', value: '2024-05-27' },
        { label: '剩余时间：', value: '10天' },
        { label: '已有报价：', value: '17条' },
      ],
    },
  ],
  '03': [
    {
      id: '3-1',
      tag: '服务招标',
      title: '云南润滇工程技术咨询有限公司关于东川区生活垃圾处理项目',
      infos: [
        { label: '采购方式：', value: '公开招标' },
        { label: '收货地址：', value: '云南省昆明市东川区' },
        { label: '发布日期：', value: '2024-05-27' },
        { label: '剩余时间：', value: '15天' },
        { label: '已有报价：', value: '19条' },
      ],
    },
    {
      id: '3-2',
      tag: '服务招标',
      title: '中国铁路昆明局集团有限公司云南昆铁房地产开发经营有限责任公司土地增值税清算...',
      infos: [
        { label: '采购方式：', value: '公开招标' },
        { label: '收货地址：', value: '云南省昆明市' },
        { label: '发布日期：', value: '2024-05-27' },
        { label: '剩余时间：', value: '7天' },
        { label: '已有报价：', value: '33条' },
      ],
    },
    {
      id: '3-3',
      tag: '服务招标',
      title: '云南锡业职业技术学院全媒体站群管理系统建设项目Ⅰ...',
      infos: [
        { label: '采购方式：', value: '公开招标' },
        { label: '收货地址：', value: '云南省红河州个旧市' },
        { label: '发布日期：', value: '2024-05-27' },
        { label: '剩余时间：', value: '20天' },
        { label: '已有报价：', value: '3条' },
      ],
    },
    {
      id: '3-4',
      tag: '服务招标',
      title: '昆明市运输和港航事业发展中心昆明网约车安全监管系统（一期）建设项目',
      infos: [
        { label: '采购方式：', value: '公开招标' },
        { label: '收货地址：', value: '云南省昆明市' },
        { label: '发布日期：', value: '2024-05-27' },
        { label: '剩余时间：', value: '15天' },
        { label: '已有报价：', value: '17条' },
      ],
    },
    {
      id: '3-5',
      tag: '服务招标',
      title: '云南隆阳农村商业银行股份有限公司信贷档案采购项目竞争性谈商公告',
      infos: [
        { label: '采购方式：', value: '竞争性谈判' },
        { label: '收货地址：', value: '云南省保山市' },
        { label: '发布日期：', value: '2024-05-20' },
        { label: '剩余时间：', value: '5天' },
        { label: '已有报价：', value: '8条' },
      ],
    },
    {
      id: '3-6',
      tag: '服务招标',
      title: '昆明市安居集团有限公司选聘年度废旧物资处置评估服务机构（二次）',
      infos: [
        { label: '采购方式：', value: '竞争性谈判' },
        { label: '收货地址：', value: '云南省昆明市' },
        { label: '发布日期：', value: '2024-05-27' },
        { label: '剩余时间：', value: '10天' },
        { label: '已有报价：', value: '43条' },
      ],
    },
  ],
}

const publicityData = [
  {
    id: '1',
    purchaseProductName: '大理宾川柑橘苗报价公示',
    supplierName: '小张冰鲜水果店',
    publicDate: '2024-05-21',
    transactionAmount: 23456.0,
  },
  {
    id: '2',
    purchaseProductName: '高筋面粉报价公示',
    supplierName: '胶东特产馆',
    publicDate: '2024-04-12',
    transactionAmount: 133456.0,
  },
  {
    id: '3',
    purchaseProductName: '70g打印纸（A4）500页面/包报价公示',
    supplierName: '乡吧佬土特产',
    publicDate: '2024-05-30',
    transactionAmount: 47832.0,
  },
  {
    id: '4',
    purchaseProductName: '小麦粉报价公示',
    supplierName: '张飞龙的店',
    publicDate: '2024-05-12',
    transactionAmount: 36782.0,
  },
  {
    id: '5',
    purchaseProductName: '单晶冰糖报价公示',
    supplierName: '迁西县献林农产品销售有限公司',
    publicDate: '2024-05-30',
    transactionAmount: 313456.0,
  },
  {
    id: '6',
    purchaseProductName: '热敏收银纸57x50超市小票纸5750mm/卷报价公示',
    supplierName: '贵州省公路工程集团有限公司',
    publicDate: '2024-04-12',
    transactionAmount: 57902.0,
  },
  {
    id: '7',
    purchaseProductName: '猪副产品猪肘类报价公示', // 已更正为“猪肘类”
    supplierName: '丰具鑫澳猪副产品经营店',
    publicDate: '2024-03-11',
    transactionAmount: 135671.0,
  },
  {
    id: '8',
    purchaseProductName: '土豆迷你土豆报价公示',
    supplierName: '鼎泰丰香料行',
    publicDate: '2024-03-17',
    transactionAmount: 793356.0,
  },
]

const biddingDetails = [
  {
    id: '1',
    projectName: '云南省第一人民医院血型试剂卡孵育器项目',
    biddingCompany: '云南省第一人民医院',
    publishDate: '2024-03-12',
  },
  {
    id: '2',
    projectName: '云南省第一人民医院腔镜镜头项目',
    biddingCompany: '云南省第一人民医院',
    publishDate: '2024-01-30',
  },
  {
    id: '3',
    projectName: '龙街乡邦庆村罗家组烤烟基地建设项目',
    biddingCompany: '龙街乡邦庆村村委会',
    publishDate: '2024-02-12',
  },
  {
    id: '4',
    projectName: '文山市人民医院医技楼1楼安装配电柜及电缆项目',
    biddingCompany: '文山市人民医院',
    publishDate: '2024-06-12',
  },
  {
    id: '5',
    projectName: '云南送变电工程有限公司2024年度安全技术服务专项采购（公开竞争性谈判）',
    biddingCompany: '云南电网公司',
    publishDate: '2024-03-10',
  },
  {
    id: '6',
    projectName: '云南省烟草公司丽江市公司2024-2026年报废物资回收处置服务项目',
    biddingCompany: '云南烟草',
    publishDate: '2024-03-11',
  },
  {
    id: '7',
    projectName: '云南润滇工程技术咨询有限公司关于东川区生活垃圾处置项目',
    biddingCompany: '云南润滇工程技术咨询有限公司',
    publishDate: '2024-04-24',
  },
  {
    id: '8',
    projectName: '中国铁路昆明局集团有限公司云南昆铁房地产开发经营有限责任公司土地增值税清算服务业务外',
    biddingCompany: '中国铁路昆明局集团有限公司',
    publishDate: '2024-05-24',
  },
]

const ProcureClassCard = (props: { id: number; image: string; title: string; className?: string }) => {
  return (
    <Link href={`/pq-sale/procure?type=${props.id}`} className={classNames('block', props.className)}>
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
      <div className="ml-[11.75%]">
        <div className="mt-[150px]">
          <p className="leading-[44px] text-[20px] text-[#c9cdd4]">Procure</p>
          <h2 className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">询价采购</h2>
          <Divider className="my-[30px]" />
        </div>
      </div>
      <div className="flex gap-x-[30px] pb-[150px]">
        <div className="flex-1 flex gap-x-[30px] border-blue-100">
          <ProcureClassCard id={1} image="/procure-img1.png" title="大宗粮油" className="h-full flex-1" />
          <div className="flex-1">
            <ProcureClassCard id={2} image="/procure-img2.png" title="建筑建材"className="h-[280px]" />
            <ProcureClassCard id={3} image="/procure-img3.png" title="办公用品" className="mt-[30px] h-[280px]" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-x-[30px]">
          <div className="flex-1 flex">
            <ProcureClassCard id={4} image="/procure-img4.png" title="日用百货" className="flex-1 h-[280px] " />
            <ProcureClassCard id={5} image="/procure-img5.png" title="生鲜食品" className="ml-[30px] flex-1 h-[280px]" />
          </div>
          <ProcureClassCard id={6} image="/procure-img6.png" title="农资农产" className="flex-1 mt-[30px]" />
        </div>
      </div>

      <div className="px-[11.75%] py-[50px] bg-[#F7F8FA]">
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
            <Link href={'/pq-sale/quotation'} className="flex items-center leading-[24px] text-[16px] text-[#4E5969]">
              <span>查看更多</span>
              <ArrowRight className="size-[22px]" />
            </Link>
          }
          className="mt-[30px]"
        />
        <div className="mt-[30px] grid grid-cols-3 gap-[30px]">
          {quotationData[quotationActive].map((item) => (
            <QuotationCard key={`quotation-${item.id}`} id={item.id} tag={item.tag} title={item.title} infos={item.infos} liked={likeIds.includes(item.id)} onLike={() => onJoinLike(item)} />
          ))}
        </div>
      </div>
      <div className="px-[11.75%] py-[150px]">
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
            <Link href={'/pq-sale/quotation/result'} className="flex items-center leading-[24px] text-[16px] text-[#4E5969]">
              <span>查看更多</span>
              <ArrowRight className="size-[22px]" />
            </Link>
          }
          className="mt-[30px]"
        />
        <div
          className="mt-[30px]"
          css={css`
            .ant-table {
              border: 1px solid #c9cdd4;
              border-radius: 0;
              line-height: 24px;
              font-size: 16px;
              .ant-table-cell {
                &:first-of-type {
                  padding-left: 50px !important;
                }
                &:last-of-type {
                  padding-right: 50px !important;
                }
              }
              .ant-table-thead {
                .ant-table-cell {
                  background: #f7f8fa;
                  padding-top: 25px;
                  padding-bottom: 25px;
                  &::before {
                    display: none;
                  }
                }
              }
              .ant-table-tbody {
                .ant-table-cell {
                  padding: 20px;
                }
              }
            }
          `}
        >
          {
            {
              '01': (
                <Table
                  dataSource={publicityData}
                  rowKey="id"
                  pagination={false}
                  columns={[
                    {
                      key: 'purchaseProductName',
                      dataIndex: 'purchaseProductName',
                      title: '采购商品名称',
                    },
                    {
                      key: 'supplierName',
                      dataIndex: 'supplierName',
                      title: '供应商名称',
                    },
                    {
                      key: 'publicDate',
                      dataIndex: 'publicDate',
                      title: '公示日期',
                    },
                    {
                      key: 'transactionAmount',
                      dataIndex: 'transactionAmount',
                      title: '成交金融（元）',
                    },
                  ]}
                />
              ),
              '02': (
                <>
                  <Table
                    dataSource={biddingDetails}
                    rowKey="id"
                    pagination={false}
                    columns={[
                      {
                        key: 'projectName',
                        dataIndex: 'projectName',
                        title: '项目名称',
                      },
                      {
                        key: 'biddingCompany',
                        dataIndex: 'biddingCompany',
                        title: '招标企业',
                      },
                      {
                        key: 'publishDate',
                        dataIndex: 'publishDate',
                        title: '发布时间',
                      },
                    ]}
                  />
                </>
              ),
            }[publicityActive]
          }
        </div>
      </div>
    </div>
  )
}
