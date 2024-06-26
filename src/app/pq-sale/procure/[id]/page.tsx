/** @jsxImportSource @emotion/react */
'use client'

import { useState } from 'react'
import classNames from 'classnames'
import { css } from '@emotion/react'
import { Button, Table } from 'antd'
import Link from 'next/link'
import Breadcrumb from '@/app/components/Breadcrumb'
import Stepper from '@/app/components/Stepper'
import Divider from '@/app/components/Divider'
import ArrowRight from '@/app/components/icons/ArrowRight'
import ProcureProduct from '@/app/components/ProcureProduct'
import MainPictureSwiper from '@/app/components/MainPictureSwiper'
import Estimation from '@/app/components/Estimation'
import PriceChart from '@/app/components/PriceChart'

const tabs = [
  {
    title: '商品介绍',
    name: 'productInfo',
  },
  {
    title: '价格波动',
    name: 'priceFluctuation',
  },
  {
    title: '成交记录',
    name: 'transactionRecord',
  },
  {
    title: '评价(421)',
    name: 'estimation',
  },
  {
    title: '采购流程',
    name: 'procureProcess',
  },
]

const detail = {
  infos: [
    { label: '品牌', value: '苏油坊' },
    { label: '是否进口', value: '否' },
    { label: '保质期', value: '12个月' },
    { label: '产品标准号', value: '见包装' },
    { label: '储藏方法', value: '阴凉干燥处' },
    { label: '工艺类型', value: '浸出' },
    { label: '净含量（规格）', value: '5L' },
    { label: '生产日期', value: '新日期' },
    { label: '酸价 ≤', value: '0.2' },
    { label: '特产', value: '非特产' },
    { label: '包装', value: '精装' },
    { label: '原料', value: '菜籽' },
  ],
  transactionRecord: [
    {
      id: '1',
      purchaser: '大理州人民政府白甸街道办事处',
      title: '苏油坊*2.5L菜籽油',
      quantity: '10桶',
      amount: '649.00',
      time: '2024-05-28 07:43',
    },
    {
      id: '2',
      purchaser: '昆明广播电视台',
      title: '苏油坊*2.5L菜籽油',
      quantity: '100桶',
      amount: '5999.00',
      time: '2024-05-28 00:51',
    },
    {
      id: '3',
      purchaser: '昆明市民政局',
      title: '苏油坊*2.5L菜籽油',
      quantity: '8桶',
      amount: '519.20',
      time: '2024-05-27 18:55',
    },
    {
      id: '4',
      purchaser: '大理州人民政府办公室',
      title: '苏油坊*2.5L菜籽油',
      quantity: '476桶',
      amount: '23800.00',
      time: '2024-05-27 10:38',
    },
    {
      id: '5',
      purchaser: '大理技师学院',
      title: '苏油坊*2.5L菜籽油',
      quantity: '32桶',
      amount: '2076.80',
      time: '2024-05-27 08:16',
    },
    {
      id: '6',
      purchaser: '大理市中等职业学校',
      title: '苏油坊*2.5L菜籽油',
      quantity: '13桶',
      amount: '843.70',
      time: '2024-05-26 18:26',
    },
    {
      id: '7',
      purchaser: '楚雄技师学院',
      title: '苏油坊*2.5L菜籽油',
      quantity: '10桶',
      amount: '649.00',
      time: '2024-05-26 09:51',
    },
    {
      id: '8',
      purchaser: '大姚县人力资源和社会保障局',
      title: '苏油坊*2.5L菜籽油',
      quantity: '10桶',
      amount: '649.00',
      time: '2024-05-25 23:27',
    },
    {
      id: '9',
      purchaser: '绿春县人力资源和社会保障局',
      title: '苏油坊*2.5L菜籽油',
      quantity: '34桶',
      amount: '2206.60',
      time: '2024-05-22 13:17',
    },
    {
      id: '10',
      purchaser: '云南农业大学',
      title: '苏油坊*2.5L菜籽油',
      quantity: '34桶',
      amount: '2206.60',
      time: '2024-05-22 10:58',
    },
    {
      id: '11',
      purchaser: '楚雄州人民医院',
      title: '苏油坊*2.5L菜籽油',
      quantity: '100桶',
      amount: '5999.00',
      time: '2024-05-22 05:26',
    },
    {
      id: '12',
      purchaser: '楚雄彝族自治州文体街道社区卫生服务中心',
      title: '苏油坊*2.5L菜籽油',
      quantity: '10桶',
      amount: '649.00',
      time: '2024-05-22 04:57',
    },
    {
      id: '13',
      purchaser: '沾益县人力资源和社会保障局',
      title: '苏油坊*2.5L菜籽油',
      quantity: '12桶',
      amount: '778.80',
      time: '2024-05-22 02:07',
    },
    {
      id: '14',
      purchaser: '中共沾益县委组织部',
      title: '苏油坊*2.5L菜籽油',
      quantity: '124桶',
      amount: '7427.60',
      time: '2024-05-21 00:57',
    },
    {
      id: '15',
      purchaser: '曲靖市住房公积金管理中心',
      title: '苏油坊*2.5L菜籽油',
      quantity: '100桶',
      amount: '5999.00',
      time: '2024-05-21 00:15',
    },
  ],
  procureProcessList: [
    {
      icon: '/ic-process-product.svg',
      title: '选购商品',
      desc: '买家根据采购需求挑选商品，与商家商治达成合作意向后，买家提交订单',
    },
    {
      icon: '/ic-process-draft.svg',
      title: '签订合同',
      desc: '商家根据双方洽谈约定，填写电子合同条款，买家确认无误后，双方签署合同（注:买家可与商家协商商品数量、价格、配送批次、配送方式、配送时间、发票开具及其他特殊商品资质要求）',
    },
    {
      icon: '/ic-process-wallet.svg',
      title: '下单支付',
      desc: '买家确认订单信息无误，按照合同约定，选择相应的支付方式支付货款（注:平台支持即时支付与周期结算两种交易模式，周期结算交易在确认收货后，买家须依据合同约定的支付时间完成支付）',
    },
    {
      icon: '/ic-process-device.svg',
      title: '平台备货',
      desc: '平台按照合同约定，根据订单信息进行备货，及开具发票（注:买家若需开具发票，须确认开票信息无误，若因买家责任造成的开票问题，产生的额外成本由买家承担）',
    },
    {
      icon: '/ic-process-truck.svg',
      title: '平台发货',
      desc: '平台按合同约定的时间发货，并及时更新物流信息（注:若合同对物流方式有约定的，商家须按合同约定履行;若合同无相关约定的，商家可在配送时间内自主选择物流方式）',
    },

    {
      icon: '/ic-process-check.svg',
      title: '确认收货',
      desc: '买家收到商品后，检查商品、商品报告、发票等，达到收货标准后及时确认收货，完成订单（注:商品送达后，若买家未确认收货且没有异议的，平台在五个自然日后将订单状态自动变更为“已收货”）',
    },

    {
      icon: '/ic-process-service.svg',
      title: '售后服务',
      desc: '若买家对收到的商品或交易过程有疑问，请及时联系商家，双方依据合同约定协商解决',
    },

    {
      icon: '/ic-process-estimation.svg',
      title: '交易评价',
      desc: '订单完成后，买家根据实际交易情况，在平台上进行评价（注:订单完成后15个自然日内未做评价的，系统将默认好评，买方可在30个自然日内对本次交易追加评价）',
    },
  ],
}

export default function ProcureDetail() {
  const [liked, setLiked] = useState(false)

  const [tabActive, setTabActive] = useState(tabs[0].name)

  function onPage(page) {
    console.log('{onPage} page: ', page)
  }
  return (
    <>
      <div className="pr-[232px]">
        <div className="mx-[11.75%] mt-[30px] pb-[150px]">
          <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '集采集售', link: '/pq-sale' }, { title: '询价采购', link: '/pq-sale/procure' }, { title: '商品详情' }]} />
          <div className="mt-[50px] flex">
            <MainPictureSwiper
              images={[
                {
                  src: '/procure-picture-1.png',
                },
                {
                  src: '/procure-picture-2.png',
                },
                {
                  src: '/procure-picture-3.png',
                },
                {
                  src: '/procure-picture-4.png',
                },
                {
                  src: '/procure-picture-5.png',
                },
              ]}
              scene="procure"
              className="flex-shrink-0 w-[520px]"
            />
            <div className="flex-1 mt-[20px] ml-[50px]">
              <h2 className="leading-[32px] text-[24px]">苏油坊*2.5L菜籽油 物理压榨 桶装食用油·纯香低芥酸（示例）</h2>
              <p className="mt-[15px] leading-[22px] text-[14px] text-[#86909C]">
                菜籽油是我国主要的食用油之一，尤其是在长江流域及西南、西北等地区广泛种植和生产，产量居世界首位。中国经过近10年的努力，将传统的劣质高芥酸菜籽油改良为低芥酸菜籽油，使其在大宗植物油中的营养品质显著提升。
              </p>
              <div className="flex mt-[30px] px-[15px] py-[20px] border-t border-dotted border-[#F33030] bg-[#FCF0F0] text-[#86909C]">
                <div className="min-w-[60px]">
                  <p>售价</p>
                  <p className="mt-[10px]">1桶起订</p>
                </div>
                <div className="ml-20px">
                  <p className="flex items-baseline leading-[22px] text-[#F33030] text-[20px] font-bold">
                    <span className="mr-[1px] leading-[20px] text-[16px]">¥</span>64.9
                  </p>
                  <p className="mt-[10px]">一桶起订</p>
                </div>
                <div className="mx-[30px] w-[1px] bg-[#F33030]/50 transform scale-x-50" />
                <div className="ml-20px">
                  <p className="flex items-baseline leading-[22px] text-[#F33030] text-[20px] font-bold">
                    <span className="mr-[1px] leading-[20px] text-[16px]">¥</span>59.9
                  </p>
                  <p className="mt-[10px]">50-199桶起订</p>
                </div>
                <div className="mx-[30px] w-[1px] bg-[#F33030]/50 transform scale-x-50" />
                <div className="ml-20px">
                  <p className="flex items-baseline leading-[22px] text-[#F33030] text-[20px] font-bold">
                    <span className="mr-[1px] leading-[20px] text-[16px]">¥</span>50.0
                  </p>
                  <p className="mt-[10px]">≥200桶起订</p>
                </div>
              </div>
              <div className="ml-[15px] mt-[20px] leading-[24px] text-[16px] relative pb-[120px]">
                <div className="flex items-center">
                  <span className="min-w-[60px] mr-[20px] text-[#1D2129]/60">规格</span>
                  <span>5L/桶</span>
                </div>
                <div className="mt-[10px] flex items-center">
                  <span className="min-w-[60px] mr-[20px] text-[#1D2129]/60">发货地</span>
                  <span>昆明高新区总仓发货</span>
                </div>
                <div className="mt-[10px] flex items-center">
                  <span className="min-w-[60px] mr-[20px] text-[#1D2129]/60">销售量</span>
                  <span>423</span>
                </div>
                <div className="mt-[15px] flex items-center">
                  <span className="min-w-[60px] mr-[20px] text-[#1D2129]/60">采购量</span>
                  <Stepper />
                </div>
                <div className="absolute bottom-0 left-0 flex">
                  <div role="button" className="min-w-[240px] min-h-[60px] flex items-center justify-center rounded-[4px] bg-[#1D5FFF] leading-[28px] text-[20px] text-white font-bold">
                    立即订购
                  </div>
                  <div
                    role="button"
                    className="ml-[20px] min-w-[280px] min-h-[60px] flex items-center justify-center rounded-[4px] border border-[#1D5FFF] leading-[28px] text-[20px] text-[#1D5FFF] font-bold"
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
            <ProcureProduct id="01" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
            <ProcureProduct id="02" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
            <ProcureProduct id="03" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
            <ProcureProduct id="04" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
            <ProcureProduct id="05" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
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
                      <p>
                        菜籽油，通常称为“菜油”，是从甘兰型油菜和白菜型油菜的种子中提取的一种植物油，其含油量在22%-49%之间，平均约40%。这种油不仅富含蛋白质（21%-27%）和磷脂（约1%），还包含多种营养成分，如脂肪酸、维生素E和抗氧化剂等。
                      </p>
                      <br />
                      <p>
                        菜籽油是我国主要的食用油之一，尤其是在长江流域及西南、西北等地区广泛种植和生产，产量居世界首位。中国经过近10年的努力，将传统的劣质高芥酸菜籽油改良为低芥酸菜籽油，使其在大宗植物油中的营养品质显著提升。
                      </p>
                      <br />
                      <p>
                        然而，菜籽油也存在一些缺点。首先，它含有人造反式脂肪，这可能对健康产生不利影响。其次，菜籽油中的芥酸和芥子苷对某些人来说可能引起过敏反应，并与肥胖有关。此外，菜籽油的生产过程中可能会使用化学物质和基因改造技术，这也是消费者需要注意的问题。
                      </p>
                      <br />
                      <p>
                        为了减少这些负面影响，推荐选择双低菜籽油，即低硫苷、低芥酸的菜籽油。这种油能软化血管，预防心血管疾病，并且营养品质更好。尽管如此，菜籽油仍然具有丰富的营养价值，有助于促进心血管健康、提供抗氧化保护、支持骨骼健康和促进消化健康。
                      </p>
                      <br />
                      <p>
                        <img src="/procure-detail-1.png" style={{ width: '100%' }} />
                      </p>
                    </div>
                  </div>
                ),
                priceFluctuation: <PriceChart className="pb-[80px]" />,
                transactionRecord: (
                  <div className="mt-[20px] px-[30px] pb-[80px]">
                    <Table
                      dataSource={detail.transactionRecord}
                      rowKey="id"
                      pagination={{
                        total: 300,
                        pageSize: 15,
                        position: ['bottomCenter'],
                        className: '!mt-[30px] select-none',
                        showSizeChanger: false,
                        itemRender: (_, type, originalElement) => {
                          if (type === 'prev') {
                            return <Button>上一页</Button>
                          }
                          if (type === 'next') {
                            return <Button>下一页</Button>
                          }
                          return originalElement
                        },
                      }}
                      columns={[
                        {
                          key: 'purchaser',
                          dataIndex: 'purchaser',
                          title: '采购单位',
                        },
                        {
                          key: 'title',
                          dataIndex: 'title',
                          title: '货品规格',
                        },
                        {
                          key: 'quantity',
                          dataIndex: 'quantity',
                          title: '采购数量',
                        },
                        {
                          key: 'amount',
                          dataIndex: 'amount',
                          title: '成交金融（元）',
                        },
                        {
                          key: 'time',
                          dataIndex: 'time',
                          title: '发布时间',
                        },
                      ]}
                      css={css`
                        .ant-table {
                          border-radius: 0;
                          .ant-table-thead {
                            line-height: 22px;
                            font-size: 14px;
                            .ant-table-cell {
                              background: none;
                              padding: 15px 0;
                              color: #4e5969;
                              font-weight: normal;
                              &::before {
                                display: none;
                              }
                            }
                          }
                          .ant-table-tbody {
                            line-height: 24px;
                            font-size: 16px;
                            .ant-table-cell {
                              padding: 15px 0;
                              border-bottom: none;
                            }
                          }
                        }
                      `}
                    />
                  </div>
                ),
                estimation: (
                  <>
                    <Estimation className="px-[40px] pt-[50px] pb-[80px]" />
                  </>
                ),
                procureProcess: (
                  <div className="m-[60px] relative">
                    {detail.procureProcessList.map((item, index) => (
                      <div key={`process-${index}`} className="mt-[40px] flex">
                        <div className="relative z-10 mt-[11px] flex-shrink-0 size-[44px] rounded-full flex justify-center items-center bg-[#1D5FFF] leading-[28px] text-[24px] text-white font-bold">
                          {index + 1}
                        </div>
                        <div className="ml-[70px] flex-grow-1 flex float-start">
                          <div className="flex-shrink-0 size-[66px] rounded-full flex justify-center items-center border border-[#EBECF0]">
                            <img src={item.icon} className="size-[32px]" />
                          </div>
                          <div className="ml-[20px] flex-1">
                            <h4 className="mt-[5px] leading-[28px] text-[20px]">{item.title}</h4>
                            <p className="mt-[4px] leading-[24px] text-[16px] text-[#86909C]">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="absolute left-[21px] top-[32px] w-[2px] h-[calc(100%-84px)] border-r border-dashed border-[#EBECF0]" />
                  </div>
                ),
              }[tabActive]
            }
          </div>
        </div>
      </div>
    </>
  )
}
