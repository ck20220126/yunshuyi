import classNames from "classnames";
import Image from "next/image";
import DetailButton from "./DetailButton";
import Link from "next/link";

export default function ArticleCard(props: {
  data: any
  showTypeDate?: boolean
  bordered?: boolean
  className?: string
}) {
  const { data, showTypeDate = true, bordered = true } = props
  return (
    <Link href={`/article/${data.id}`} className={classNames('flex py-[50px]', {'border-b border-[#EBECF0]': bordered}, props.className)}>
      <div className="flex-1 h-[328px] relative">
        <Image src={data.image} fill alt="" className="object-cover" />
      </div>
      <div className="ml-[50px] flex-1">
        {showTypeDate && <p className="leading-[22px] text-[14px]">{ data.articleType } · { data.date }</p>}
        <h2 className="mt-[10px] leading-[44px] text-[28px]">{ data.title }</h2>
        <p className="line-clamp-4 mt-[15px] leading-[30px] text-[16px]">{ data.desc }</p>
        <DetailButton className="mt-[30px]">查看详情</DetailButton>
      </div>
    </Link>
  )
}
