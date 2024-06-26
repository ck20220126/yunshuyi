import Breadcrumb from '@/app/components/Breadcrumb'
import FinancialServiceCard from '@/app/components/FinancialServiceCard'

export default function Search() {
  return (
    <div className="pr-[232px]">
      <div className="mx-[11.75%] mt-[30px] pb-[150px]">
        <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '金融服务', link: '/financial-service' }, { title: '金融产品' }]} />

        <FinancialServiceCard bankLogo="/bank-8.png" title="短期流动资金贷款" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-2.png" title="普惠型小微企业标准化房产抵押授信" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-8.png" title="短期流动资金贷款" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-2.png" title="普惠型小微企业标准化房产抵押授信" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-8.png" title="短期流动资金贷款" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-2.png" title="普惠型小微企业标准化房产抵押授信" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-8.png" title="短期流动资金贷款" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-2.png" title="普惠型小微企业标准化房产抵押授信" className="mt-[30px]" />
      </div>
    </div>
  )
}
