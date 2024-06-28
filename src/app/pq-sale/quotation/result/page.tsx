/** @jsxImportSource @emotion/react */
'use client'

import { useSearchParams } from 'next/navigation'
import Breadcrumb from '@/app/components/Breadcrumb'
import SearchCard from '@/app/components/SearchCard'
import { useState } from 'react'
import { Table } from 'antd'
import { css } from '@emotion/react'
import Link from 'next/link'

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

export default function QuotationResult() {
  const searchParams = useSearchParams()

  const [search, setSearch] = useState<Record<string, any>>({})
  function onSearchChange(value) {
    setSearch(value)
  }

  return (
    <div className="pr-[232px]">
      <div className="mx-[11.75%] mt-[30px] pb-[150px]">
        <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '集采集售', link: '/pq-sale' }, { title: '招采结果公示' }]} />
        <SearchCard
          className="mt-[30px]"
          tags={[
            {
              title: '采购内容',
              name: 'type',
              options: [
                {
                  label: '报价公示',
                  value: '01',
                },
                {
                  label: '招标公示',
                  value: '02',
                },
              ],
              defaultValue: '01',
            },
          ]}
          filters={[
            {
              title: '公告发布时间',
              name: 'publicDate',
              type: 'sort',
            },
            {
              title: '报价截止日期',
              name: 'endDate',
              type: 'sort',
            },
            {
              title: '成交金额',
              name: 'price',
              type: 'sort',
            },
          ]}
          pagination={{ total: 4322 }}
          onChange={onSearchChange}
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
                    {
                      title: '操作',
                      key: 'action',
                      render: (_, row) => <Link href={`/pq-sale/quotation/publicity/${row.id}`}>查看详情</Link>,
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
                      {
                        title: '操作',
                        key: 'action',
                        render: (_, row) => <Link href={`/pq-sale/quotation/biddingDetail/${row.id}`}>查看详情</Link>,
                      },
                    ]}
                  />
                </>
              ),
              undefined: null,
            }[search?.tags?.type]
          }
        </div>
      </div>
    </div>
  )
}
