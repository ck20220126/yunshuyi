/** @jsxImportSource @emotion/react */
'use client'

import { articles } from '@/utils/mock'
import DetailCover from '../components/DetailCover'
import ArticleCard from '../components/ArticleCard'

const articleList = [
  articles['logistics-1'],
  articles['logistics-2'],
  articles['logistics-3'],
]

export default function FinancialService() {
  return (
    <div className="pr-sider-padding">
      <DetailCover image="/logistics-header.webp" title="供应链 仓储物流服务" subtitle="利用互联网、物联网、大数据、人工智能、云计算、区块链、5G等关键技术实现整个物流体系无人化、数字化、智能化" />
      <div className="px-[11.75%] py-[150px]">
        {articleList.map((item, index) => (
          <ArticleCard key={`article-${index}`} data={item} showTypeDate={false} bordered={index !== articleList.length - 1} />
        ))}
      </div>
    </div>
  )
}
