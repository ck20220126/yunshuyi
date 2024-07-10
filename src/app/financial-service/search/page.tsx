import Breadcrumb from '@/app/components/Breadcrumb'
import FinancialServiceCard from '@/app/components/FinancialServiceCard'
import SearchCard from '@/app/components/SearchCard'

export default function Search() {
  return (
    <div className="pr-sider-padding">
      <div className="mx-[11.75%] mt-[30px] pb-[150px]">
        <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '金融服务', link: '/financial-service' }, { title: '金融产品' }]} />
        <SearchCard
          className="mt-[30px]"
          tags={[
            {
              title: '机构类型',
              name: 'type',
              options: [
                {
                  label: '不限',
                  value: 'all',
                },
                {
                  label: '银行',
                  value: 'bank',
                },
                {
                  label: '其他金融机构',
                  value: 'other',
                }
              ],
              defaultValue: 'all',
            },
            {
              title: '贷款额度',
              name: 'quota',
              options: [
                {
                  label: '不限',
                  value: 'all',
                },
                {
                  label: '10万及以下',
                  value: '01',
                },
                {
                  label: '11万-100万',
                  value: '02',
                },
                {
                  label: '101万-200万',
                  value: '03',
                },
                {
                  label: '201万-500万',
                  value: '04',
                },
                {
                  label: '501万-1000万',
                  value: '05',
                },
                {
                  label: '1000万以上',
                  value: '06',
                }
              ],
              defaultValue: 'all',
            },
            {
              title: '贷款额度',
              name: 'quota',
              options: [
                {
                  label: '不限',
                  value: 'all',
                },
                {
                  label: '6个月及以下',
                  value: '00',
                },
                {
                  label: '7-12个月',
                  value: '01',
                },
                {
                  label: '13-18个月',
                  value: '02',
                },
                {
                  label: '19-24个月',
                  value: '03',
                },
                {
                  label: '25-30个月',
                  value: '04',
                },
                {
                  label: '31-36个月',
                  value: '05',
                },
                {
                  label: '37个月以上',
                  value: '06',
                }
              ],
              defaultValue: 'all',
            },
            {
              title: '担保方式',
              name: 'guaranteeMode',
              options: [
                {
                  label: '不限',
                  value: 'all',
                },
                {
                  label: '抵押',
                  value: 'bank',
                },
                {
                  label: '信用',
                  value: 'other',
                }
              ],
              defaultValue: 'all',
            },
          ]}
          showFilterBar={false}
        />

        <FinancialServiceCard bankLogo="/bank-8.webp" title="短期流动资金贷款" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-2.webp" title="普惠型小微企业标准化房产抵押授信" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-8.webp" title="短期流动资金贷款" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-2.webp" title="普惠型小微企业标准化房产抵押授信" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-8.webp" title="短期流动资金贷款" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-2.webp" title="普惠型小微企业标准化房产抵押授信" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-8.webp" title="短期流动资金贷款" className="mt-[30px]" />
        <FinancialServiceCard bankLogo="/bank-2.webp" title="普惠型小微企业标准化房产抵押授信" className="mt-[30px]" />
      </div>
    </div>
  )
}
