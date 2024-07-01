/** @jsxImportSource @emotion/react */
'use client'

import { css } from '@emotion/react'
import DetailCover from '../components/DetailCover'
import ArticleCard from '../components/ArticleCard'

const articleList = [
  {
    id: '1-1',
    image: '/logistics-article-1.webp',
    title: '智能仓储管理系统(WMS)',
    desc: '新兴技术如自动化机器人（AGV/AMR）、无人驾驶车辆、自动分拣系统等正在逐步改变传统的仓储物流模式。这些技术提高了物流作业的效率和精确度，减少了人力成本，并且降低了错误率。',
  },
  {
    id: '1-2',
    image: '/logistics-article-2.webp',
    title: '新兴物流技术',
    desc: '新兴技术如自动化机器人（AGV/AMR）、无人驾驶车辆、自动分拣系统等正在逐步改变传统的仓储物流模式。这些技术提高了物流作业的效率和精确度，减少了人力成本，并且降低了错误率。',
  },
  {
    id: '1-3',
    image: '/logistics-article-3.webp',
    title: '供应链战略与合作',
    desc: '供应链战略与合作在仓储物流中的作用和重要性不仅体现在降低成本、提高效率、增强韧性和稳定性、促进创新、优化资源配置和提升服务水平等方面，还在于保障供应链的高效管理，从而为企业带来更大的竞争优势和长期发展潜力。',
  },
]

export default function FinancialService() {
  return (
    <div className="pr-[232px]">
      <DetailCover image="/logistics-header.webp" title="供应链 仓储物流服务" subtitle="利用互联网、物联网、大数据、人工智能、云计算、区块链、5G等关键技术实现整个物流体系无人化、数字化、智能化" />
      <div className="px-[11.75%] py-[150px]">
        {articleList.map((item, index) => (
          <ArticleCard key={`article-${index}`} data={item} showTypeDate={false} bordered={index !== articleList.length - 1} />
        ))}
      </div>
    </div>
  )
}
