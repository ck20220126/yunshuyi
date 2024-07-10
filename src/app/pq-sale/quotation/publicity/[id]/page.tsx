import classNames from 'classnames'
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
  orderInfos: [
    {
      label: '成交日期',
      value: '2024-04-03 09:28',
    },
    {
      label: '单价',
      value: '3.00元/kg',
    },
    {
      label: '成交金额 (元)',
      value: '56503.57',
    },
    {
      label: '供应商名称',
      value: '小张冰鲜水果店',
      block: true,
    },
    {
      label: '发货地址',
      value: '云南省 大理白族自治州 大理市 经济开发区春华路',
      block: true,
    },
  ],
}

export const runtime = 'edge';

export default function Publicity() {
  return (
    <div className="pr-sider-padding">
      <div className="mx-[11.75%] mt-[30px] pb-[150px]">
        <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '集采集售', link: '/pq-sale' }, { title: '招采结果公示', link: '/pq-sale/quotation' }, { title: '招采结果公示详情' }]} />
        <div className="mt-[30px] border border-[#EBECF0]">
          <div className="px-[40px] py-[20px] bg-[#f7f8fa] leading-[28px] text-[20px] font-bold">采购标题：大理宾川柑橘苗-报价公示（示例）</div>
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
          <div className="px-[40px] py-[20px] bg-[#f7f8fa] leading-[28px] text-[20px] font-bold">成交信息</div>
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
