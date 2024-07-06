import { Metadata } from 'next';
import { articles } from '@/utils/mock';
import Breadcrumb from '@/app/components/Breadcrumb'


export async function generateMetadata({ params }): Promise<Metadata> {
  const id = params.id;
  const detail = articles[id] || articles['home-1']
  return {
    title: detail?.title || '',
    description: detail?.desc || detail?.title || '',
  };
}

export const runtime = 'edge'
const menuMeta = {
  'default': { title: '新闻媒体', link: '/news' },
  'logistics': { title: '仓储物流', link: '/logistics' },
}
export default function Article({ params }) {
  const id = params.id

  const detail = articles[id] || articles['new-1']

  const menu = menuMeta[detail.type] || menuMeta['default']

  return (
    <div>
      <div className="pr-[232px] pb-[150px]">
        <div className="mt-[10px] mx-[11.75%] py-[20px] border-b border-[#EBECF0]">
          <Breadcrumb list={[{ title: '首页', link: '/' }, menu, { title: '文章详情' }]} />
        </div>
        <div className="mt-[50px] px-[15.5%]">
          <h1 className="leading-[44px] text-[36px] font-bold">{detail.title}</h1>
          <div className="mt-[40px] leading-[30px] text-[16px]">
            {detail.content && <div dangerouslySetInnerHTML={{ __html: detail.content }} />}
          </div>
        </div>
      </div>
    </div>
  )
}
