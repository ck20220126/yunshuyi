'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Tabs from '../components/Tabs'
import ArticleCard from '../components/ArticleCard'
import DetailCover from '../components/DetailCover'

const news = {
  'copanyNews': [
    {
      id: '0-1',
      image: '/new-img1.webp',
      title: '关于用友畅捷通T+13和T+16系统的安全防护公告',
      desc: '近期，我们注意到用友畅捷通T+系列软件存在 SQL注入漏洞(QVD-2023-13612)反序列化漏洞(QVD-2023-13615)，且漏洞相关技术细节已在互联网上公开，风险系数较高，建议使用用友T+系列软件尽快进行漏洞修补。',
      type: '公司动态',
      date: '2024-02-05',
    },
    {
      id: '0-2',
      image: '/new-img2.webp',
      title: 'ZStack伙伴私享荟成功举办',
      desc: '本次私享荟一改往日呆板的会议形式，而采取更为宽松和自由的方式展开，希望为伙伴们营造更为自由的交流氛围。来自不同领域的行业伙伴齐聚位于百大国际派的天成科技。',
      type: '公司动态',
      date: '2024-02-05',
    },
  ],
  'hotNews': [
    {
      id: '1-1',
      image: '/new-img2.webp',
      title: '关于支持实施县域商业建设行动的通知',
      desc: '近期，全国大部分地区已经完成城乡居民医保费用集中征缴工作，参保群众已经享受到了医疗保障服务。全国基本医保参保情况如何？居民医保缴费标准是否合理？未生病的居民参加基本医保是否“吃亏了”？国家医保局有关司负责人就社会关心的问题接受了记者的...',
      type: '热点新闻',
      date: '2024-02-05',
    },
    {
      id: '1-2',
      image: '/new-img1.webp',
      title: '聚焦新质生产力 提升县域产业链发展水平',
      desc: '2024年1月，习近平总书记在中共中央政治局第十一次集体学习时强调，“要围绕发展新质生产力布局产业链，提升产业链供应链韧性和安全水平”。县域作为我国经济发展的基本单元，是发展新质生产力的重要空间载体。围绕发展新质生产力科学布局县域产业链并不断提升其发展水平，可为县域经济发展开辟新领域新赛道，为全方位推动高质量发展增势赋能。',
      type: '热点新闻',
      date: '2024-02-05',
    },
  ],
}

export default function Info() {
  const [active, setActive] = useState<string>('copanyNews')

  const currentNews = useMemo(() => {
    return news[active]
  }, [active])

  return (
    <div className="pr-[232px]">
      <DetailCover image="/news-header-bg.webp" title="新闻与媒体" subtitle="传播行业互联网资讯，共建供应链体系" />
      <div className="px-[11.75%] pt-[130px] pb-[150px]">
        <Tabs
          list={[
            {
              value: 'copanyNews',
              label: '公司动态',
            },
            {
              value: 'hotNews',
              label: '热点新闻',
            },
          ]}
          active={active}
          onChange={setActive}
        />
        <div className="mt-[30px]">
          {currentNews.map((item, index) => (
            <ArticleCard key={`article-${index}`} data={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
