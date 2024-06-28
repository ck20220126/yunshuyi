'use client'

import { useSearchParams } from 'next/navigation';
import Breadcrumb from '@/app/components/Breadcrumb'
import ProcureProduct from '@/app/components/ProcureProduct'
import SearchCard from '@/app/components/SearchCard'

export default function Procure() {

  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'all'

  return (
    <div className="pr-[232px]">
      <div className="mx-[11.75%] mt-[30px] pb-[150px]">
        <Breadcrumb list={[{ title: '首页', link: '/' }, { title: '集采集售', link: '/pq-sale' }, { title: '询价采购' }]} />
        <SearchCard
          className="mt-[30px]"
          tags={[
            {
              title: '行业',
              name: 'type',
              options: [
                {
                  label: '全部',
                  value: 'all',
                },
                {
                  label: '大宗粮油',
                  value: '1',
                },
                {
                  label: '建筑建材',
                  value: '2',
                },
                {
                  label: '办公用品',
                  value: '3',
                },
                {
                  label: '日用百货',
                  value: '4',
                },
                {
                  label: '生鲜食品',
                  value: '5',
                },
                {
                  label: '农资农产',
                  value: '6',
                },
              ],
              defaultValue: type,
            },
            {
              title: '发货地区',
              name: 'area',
              multiple: true,
              showExpand: true,
              options: [
                {
                  label: '全部',
                  value: 'all',
                },
                {
                  label: '昆明',
                  value: '01',
                },
                {
                  label: '保山',
                  value: '02',
                },
                {
                  label: '丽江',
                  value: '03',
                },
                {
                  label: '楚雄',
                  value: '04',
                },
                {
                  label: '玉溪',
                  value: '05',
                },
                {
                  label: '西双版纳',
                  value: '06',
                },
                {
                  label: '红河',
                  value: '07',
                },
                {
                  label: '迪庆',
                  value: '08',
                },
                {
                  label: '曲靖',
                  value: '09',
                },
                {
                  label: '昆明',
                  value: '11',
                },
                {
                  label: '保山',
                  value: '12',
                },
                {
                  label: '丽江',
                  value: '13',
                },
                {
                  label: '楚雄',
                  value: '14',
                },
                {
                  label: '玉溪',
                  value: '15',
                },
                {
                  label: '西双版纳',
                  value: '16',
                },
                {
                  label: '红河',
                  value: '17',
                },
                {
                  label: '迪庆',
                  value: '18',
                },
                {
                  label: '曲靖',
                  value: '19',
                },
              ],
            },
          ]}
          filters={[
            {
              title: '公告发布时间',
              name: 'publicDate',
              type: 'sort',
            },
            {
              title: '报价条数',
              name: 'recordTotal',
              type: 'sort',
            },
            {
              title: '报价截止日期',
              name: 'endDate',
              type: 'sort',
            },
          ]}
          pagination={{ total: 50 }}
        />
        <div className="mt-[30px] grid grid-cols-5 gap-x-[22px] gap-y-[30px]">
          <ProcureProduct id="01" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
          <ProcureProduct id="02" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
          <ProcureProduct id="03" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
          <ProcureProduct id="04" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
          <ProcureProduct id="05" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
          <ProcureProduct id="06" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
          <ProcureProduct id="07" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
          <ProcureProduct id="08" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
          <ProcureProduct id="09" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
          <ProcureProduct id="10" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
          <ProcureProduct id="11" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
          <ProcureProduct id="12" image="/procure-product-1.png" title="食用植物调和油 5L装 多种规格支持贴牌代工 批发代发" price="64.9" address="昆明高新区总仓发货" />
        </div>
      </div>
    </div>
  )
}
