/** @jsxImportSource @emotion/react */
'use client'

import { useState } from 'react'
import classNames from 'classnames'
import { css } from '@emotion/react'

import Link from 'next/link'
import { Button, Input, Table } from 'antd'
import Breadcrumb from '@/app/components/Breadcrumb'

const detail = {
  infos: [
    {
      label: '采购内容',
      value: '物资招采',
    },
    {
      label: '品类',
      value: '农资农产',
    },
    {
      label: '采购数量',
      value: '100吨',
    },
    {
      label: '发布公告时间',
      value: '2024-04-03 09:28',
    },
    {
      label: '采购截止时间',
      value: '2024-04-20 23:59',
    },
    {
      label: '剩余时间',
      value: '24天',
    },
    {
      label: '收货地址',
      value: '云南省 昆明市 高新区 商院路百大国际派1栋A座',
      block: true,
    },
  ],

  records: [
    {
      id: '1',
      supplierName: '大理漾江果业有限公司',
      quotation: '******',
      time: '2024-05-25 18:14',
    },
    {
      id: '2',
      supplierName: '大理玲曦果业有限公司',
      quotation: '******',
      time: '2024-05-25 18:14',
    },
    {
      id: '3',
      supplierName: '大理佰香果业有限公司',
      quotation: '******',
      time: '2024-05-25 18:14',
    },
    {
      id: '4',
      supplierName: '大理红水果商贸公司',
      quotation: '******',
      time: '2024-05-25 18:14',
    },
    {
      id: '5',
      supplierName: '大理能丰鲜果配送服务部',
      quotation: '******',
      time: '2024-05-25 18:14',
    },
    {
      id: '6',
      supplierName: '大理守山林果业有限公司',
      quotation: '******',
      time: '2024-05-25 18:14',
    },
    {
      id: '7',
      supplierName: '大理神龙果铺有限公司',
      quotation: '******',
      time: '2024-05-25 18:14',
    },
  ],
}

export const runtime = 'edge';

export default function QuotationForm() {
  const [inputMessage, setInputMessage] = useState('')
  const [liked, setLiked] = useState(false)

  return (
    <div className="pr-[232px]">
      <div className="mx-[11.75%] mt-[30px] pb-[150px]">
        <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '集采集售', link: '/pq-sale' }, { title: '招采报价', link: '/pq-sale/quotation' }, { title: '详情' }]} />
        <div className="mt-[30px] border border-[#EBECF0]">
          <div className="px-[40px] py-[20px] bg-[#f7f8fa] leading-[28px] text-[20px] font-bold">采购标题：采购 大理宾川柑橘苗-皇帝柑/沃柑苗/柳叶桔-岩溪晚芦(芦柑) 大批量购买（示例）</div>
          <div className="px-[40px] pt-[40px] py-[50px] text-[16px] leading-[24px] flex flex-wrap gap-[20px]">
            {detail.infos.map((item, index) => (
              <div key={`info-${index}`} className={classNames('flex items-center', item.block ? 'w-full' : 'w-[calc(33.3333%-20px)]')}>
                <span className="flex-shrink-0 w-[100px] text-[#86909C]">{item.label}</span>
                <span className="ml-[20px] flex-1">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[30px] border border-[#EBECF0]">
          <div className="px-[40px] py-[20px] bg-[#f7f8fa] leading-[28px] text-[20px] font-bold">我要报价</div>
          <div className="px-[40px] pt-[40px] py-[50px]">
            <div className="text-[16px] leading-[24px] flex flex-wrap gap-[20px]">
              <div className={classNames('flex items-start')}>
                <span className="mt-[5px] flex-shrink-0 w-[100px] text-[#86909C]">报价须知</span>
                <div className="ml-[20px] flex-1 leading-[34px] text-[16px]">
                  目前参与采购报价，需要成为云数驿的正式供应商。
                  <br />
                  如果您还未注册成为正式供应商，请在报价前，完成云数驿正式供应商的注册（注册-登录账号-进入工作台完成企业认证即可）
                  <br />
                  <Link href="#" className="text-[#F33030] underline">
                    点击注册云数驿账号
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-[50px] flex h-[60px]">
              <Input value={inputMessage} size="large" placeholder="请输入报价信息，例如999元/kg" onInput={(e: any) => setInputMessage(e.target.value)} className="!h-full flex-1" />

              <div className="ml-[40px] !h-full flex-shrink-0 flex items-center">
                <Button type="primary" size="large" disabled={!inputMessage} className="w-[320px] !h-full">
                  立即报价
                </Button>
                <div
                  role="button"
                  onClick={() => setLiked((val) => !val)}
                  className="ml-[20px] h-full px-[18px] flex items-center justify-center rounded-[4px] border border-[#EBECF0] leading-[24px] text-[16px]"
                >
                  <img src={liked ? '/ic-favorite-fill.svg' : '/ic-favorite.svg'} alt="" className="flex-shrink-0 size-[24px]" />
                  <span className="ml-[8px]">收藏</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[30px] border border-[#EBECF0]">
          <div className="px-[40px] py-[20px] bg-[#f7f8fa] leading-[28px] text-[20px] font-bold">供应商报价（7条）</div>
          <div className="px-[40px] pt-[32px] py-[50px]">
            <Table
              dataSource={detail.records}
              rowKey="id"
              columns={[
                {
                  dataIndex: 'supplierName',
                  title: '供应商名称',
                },
                {
                  dataIndex: 'quotation',
                  title: '供应商报价',
                  render(value) {
                    return <span className='text-[#F33030]'>{value}</span>
                  }
                },
                {
                  dataIndex: 'time',
                  title: '报价时间',
                },
              ]}
              pagination={false}
              css={css`
                .ant-table {
                  border-radius: 0;
                  line-height: 24px;
                  font-size: 16px;
                  .ant-table-thead {
                    .ant-table-cell {
                      background: none;
                      padding: 8px 0;
                      color: #4e5969;
                      font-weight: normal;
                      border-bottom: none;
                      &::before {
                        display: none;
                      }
                    }
                  }
                  .ant-table-tbody {
                    .ant-table-cell {
                      padding: 8px 0;
                      border-bottom: none;
                    }
                  }
                }
              `}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
