import Breadcrumb from '@/app/components/Breadcrumb'

export default function ProcureDetail() {
  return (
    <>
      <div className="pr-[232px]">
        <div className="mx-[10.5%] mt-[30px] pb-[150px]">
          <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '集采集售', link: '/pq-sale' }, { title: '询价采购', link: '/pq-sale/procure' }, { title: '商品详情' }]} />
        </div>
      </div>
    </>
  )
}
