import Breadcrumb from '@/app/components/Breadcrumb'
import Image from 'next/image'

export default function Search() {
  return (
    <div className="pr-[232px]">
      <div className="mx-[11.75%] mt-[30px] pb-[150px]">
        <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '金融服务', link: '/financial-service' }, { title: '金融产品', link: '/financial-service-search' }, { title: '金融产品详情' }]} />
        <div className="mt-[30px] border border-[#EBECF0]">
          <div className="px-[40px] py-[15px] flex items-center bg-[#f7f8fa]">
            <img src={'/bank-8.webp'} height={50} />
            <div className="mx-[20px] w-[1px] h-[40px] bg-[#c9cdd4]" />
            <span className="leading-[28px] text-[20px] font-bold">短期流动资金贷款（示例）</span>
          </div>
          <div className="px-[40px] pt-[50px] pb-[70px] flex justify-between">
            <div className="flex items-center">
              <div>
                <p className="leading-[24px] text-[16px] text-[#86909C]">参考范围</p>
                <p className="mt-[8px] inline-flex items-baseline leading-[42px] text-[36px] text-[#F33030] font-bold">
                  10-100<span className="relative -top-[2px] ml-[5px] leading-[24px] text-[16px] font-normal">万</span>
                </p>
              </div>
              <div className="ml-[100px]">
                <p className="leading-[24px] text-[16px] text-[#86909C]">参考利率</p>
                <p className="mt-[8px] leading-[42px] text-[36px] text-[#4E5969]">5%-6%</p>
              </div>
              <div className="ml-[100px]">
                <p className="leading-[24px] text-[16px] text-[#86909C]">贷款期限</p>
                <p className="mt-[8px] leading-[42px] text-[36px] text-[#4E5969]">12-120月</p>
              </div>
              <div className="w-[1px] h-full border-r border-[#C9CDD4] ml-[100px]" />
            </div>
            <div role="button" className="min-w-[320px] h-[60px] inline-flex items-center justify-center px-[32px] rounded-[4px] bg-[#1D5FFF] text-white leading-[28px] text-[20px] font-bold">
              立即申请
            </div>
          </div>
        </div>
        <div className="mt-[30px] border border-[#EBECF0]">
          <div className="px-[40px] py-[20px] bg-[#f7f8fa] leading-[28px] text-[20px]">产品介绍</div>
          <div className="px-[40px] pt-[40px] py-[50px]">
            <div className="flex items-start leading-[28px] text-[16px]">
              <span className="flex-shrink-0 w-[100px] text-[#86909C]">产品简介</span>
              <p className="flex-grow-1 ml-[20px]">
                流动资金贷款是根据客户在生产经营过程中短期或中期资金需求，为保证客户正常生产经营周转而发放的本外币贷款。对于与邮储银行合作年限较长、合作关系良好的优质客户，邮储银行还可提供流动资金循环贷款，该种贷款是邮储银行为客户设计的一种灵活、便利贷款产品。邮储银行按照一定标准核定可以给予客户的流动资金贷款额度，在合同期限内，约定最高借款额，在贷款合同金额和有效期内，借款人可根据需要多次提款、逐笔还款、循环使用。
                固定资产贷款与项目融资贷款是根据客户固定资产投资活动的资金需求，邮储银行向客户发放的用于新建、扩建、改造、购置、安装固定资产投资项目的本外币贷款。
              </p>
            </div>
            <div className="mt-[20px] flex items-start leading-[28px] text-[16px]">
              <span className="flex-shrink-0 w-[100px] text-[#86909C]">产品优势</span>
              <p className="flex-grow-1 ml-[20px]">
                期限灵活：涵盖短、中、长不同期限的资金需求；<br />
                用途多样：满足基本建设、技术改造等不同用途的资金需求；<br />
                币种丰富：满足人民币、外币不同的币种需求；<br />
                审批快捷：审批效率高，审批方式快捷；<br />
                资金优势：充足的资金规模，满足客户的资金需求。
              </p>
            </div>
            <div className="mt-[20px] flex items-start leading-[28px] text-[16px]">
              <span className="flex-shrink-0 w-[100px] text-[#86909C]">申请条件</span>
              <p className="flex-grow-1 ml-[20px]">满足我行授信条件</p>
            </div>
            <div className="mt-[20px] flex items-start leading-[28px] text-[16px]">
              <span className="flex-shrink-0 w-[100px] text-[#86909C]">申请材料</span>
              <p className="flex-grow-1 ml-[20px]">基础资料及项目资料</p>
            </div>
            <div className="mt-[20px] flex items-start leading-[28px] text-[16px]">
              <span className="flex-shrink-0 w-[100px] text-[#86909C]">担保方式</span>
              <p className="flex-grow-1 ml-[20px]">抵押，质押，一般保证，信用</p>
            </div>
            <div className="mt-[20px] flex items-start leading-[28px] text-[16px]">
              <span className="flex-shrink-0 w-[100px] text-[#86909C]">还款方式</span>
              <p className="flex-grow-1 ml-[20px]">多种还本方式</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
