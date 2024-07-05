import classNames from 'classnames'
import Breadcrumb from '@/app/components/Breadcrumb'

const detail = {
  infos: [
    {
      label: '项目类型',
      value: '工程招标',
    },
    {
      label: '招标单位',
      value: '云南省第一人民医院',
    },
    {
      label: '采购方式',
      value: '公开招标',
    },
    {
      label: '发布公告时间',
      value: '2024-04-03 09:28',
    },
    {
      label: '截止时间',
      value: '2024-04-20 23:59',
    },
    {
      label: '招采单编号',
      value: '590973211733',
      block: false
    },
  ],
  orderInfos: [
    {
      label: '成交日期',
      value: '2024-04-03 09:28',
    },
    {
      label: '采购方式',
      value: '公开招标',
    },
    {
      label: '成交金额 (元)',
      value: '56503.57',
    },
    {
      label: '成交供应商',
      value: '楚雄州古路桥集团有限责任公司',
      block: true,
    },
    {
      label: '备注',
      value: '供应商对成交公示有异议的，应当在成交公示发布次日起三日内，以书面形式向采购人提出质疑，逾期将不予受理。',
      block: true,
    },
  ],
}

export const runtime = 'edge';

export default function BiddingDetail() {
  return (
    <div className="pr-[232px]">
      <div className="mx-[11.75%] mt-[30px] pb-[150px]">
        <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '集采集售', link: '/pq-sale' }, { title: '招采结果公示', link: '/pq-sale/quotation' }, { title: '招采结果公示详情' }]} />
        <div className="mt-[30px] border border-[#EBECF0]">
          <div className="px-[40px] py-[20px] bg-[#f7f8fa] leading-[28px] text-[20px] font-bold">招标标题：云南省第一人民医院血型试剂卡孵育器项目（示例）</div>
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
          <div className="px-[40px] py-[20px] bg-[#f7f8fa] leading-[28px] text-[20px] font-bold">中标信息</div>
          <div className="px-[40px] pt-[40px] py-[50px] text-[16px] leading-[24px] flex flex-wrap gap-[20px]">
            {detail.orderInfos.map((item, index) => (
              <div key={`info-${index}`} className={classNames('flex items-center', item.block ? 'w-full' : 'w-[calc(33.3333%-20px)]')}>
                <span className="flex-shrink-0 w-[100px] text-[#86909C]">{item.label}</span>
                <span className="ml-[20px] flex-1">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
