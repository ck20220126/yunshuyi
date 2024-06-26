import Breadcrumb from '@/app/components/Breadcrumb'
import ProcureProduct from '@/app/components/ProcureProduct'

export default function Procure() {
  return (
    <div className="pr-[232px]">
      <div className="mx-[11.75%] mt-[30px] pb-[150px]">
        <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '集采集售', link: '/pq-sale' }, { title: '询价采购' }]} />
        <div className="mt-[30px] border border-[#EBECF0] p-[30px]"></div>
        <div className="mt-[30px] border border-[#EBECF0] p-[30px]"></div>
        <div className="mt-[30px] grid grid-cols-5 gap-x-[22px] gap-y-[30px]">
          <ProcureProduct id='01' image='/procure-product-1.png' title='食用植物调和油 5L装 多种规格支持贴牌代工 批发代发' price='64.9' address='昆明高新区总仓发货' />
          <ProcureProduct id='02' image='/procure-product-1.png' title='食用植物调和油 5L装 多种规格支持贴牌代工 批发代发' price='64.9' address='昆明高新区总仓发货' />
          <ProcureProduct id='03' image='/procure-product-1.png' title='食用植物调和油 5L装 多种规格支持贴牌代工 批发代发' price='64.9' address='昆明高新区总仓发货' />
          <ProcureProduct id='04' image='/procure-product-1.png' title='食用植物调和油 5L装 多种规格支持贴牌代工 批发代发' price='64.9' address='昆明高新区总仓发货' />
          <ProcureProduct id='05' image='/procure-product-1.png' title='食用植物调和油 5L装 多种规格支持贴牌代工 批发代发' price='64.9' address='昆明高新区总仓发货' />
          <ProcureProduct id='06' image='/procure-product-1.png' title='食用植物调和油 5L装 多种规格支持贴牌代工 批发代发' price='64.9' address='昆明高新区总仓发货' />
          <ProcureProduct id='07' image='/procure-product-1.png' title='食用植物调和油 5L装 多种规格支持贴牌代工 批发代发' price='64.9' address='昆明高新区总仓发货' />
          <ProcureProduct id='08' image='/procure-product-1.png' title='食用植物调和油 5L装 多种规格支持贴牌代工 批发代发' price='64.9' address='昆明高新区总仓发货' />
          <ProcureProduct id='09' image='/procure-product-1.png' title='食用植物调和油 5L装 多种规格支持贴牌代工 批发代发' price='64.9' address='昆明高新区总仓发货' />
          <ProcureProduct id='10' image='/procure-product-1.png' title='食用植物调和油 5L装 多种规格支持贴牌代工 批发代发' price='64.9' address='昆明高新区总仓发货' />
          <ProcureProduct id='11' image='/procure-product-1.png' title='食用植物调和油 5L装 多种规格支持贴牌代工 批发代发' price='64.9' address='昆明高新区总仓发货' />
          <ProcureProduct id='12' image='/procure-product-1.png' title='食用植物调和油 5L装 多种规格支持贴牌代工 批发代发' price='64.9' address='昆明高新区总仓发货' />
        </div>
      </div>
    </div>
  )
}
