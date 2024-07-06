import Link from "next/link"
import ArrowRight from "./icons/ArrowRight"
import Image from "next/image"
import classNames from "classnames"

export default function Breadcrumb(props: {
  list: { title: string, link?: string }[]
  className?: string
}) {

  const { list } = props || {}
  return (
    <div className={classNames('flex items-center text-[#86909C] leading-[20px] text-[14px]', props.className)}>
      <Image src={'/ic-map-line.svg'} width={16} height={16} alt="" className="mr-[5px]" />
      <span>当前位置：</span>
      {props.list.map((item, index) => (
        <div key={`menu-${index}`} className="flex items-center">
          {index > 0 && <ArrowRight className="size-[12px] mx-[5px]" />}
          {index < list.length - 1 ? <Link href={item?.link} className="hover:underline">{ item?.title }</Link> : <span className="text-[#1D2129]">{ item.title }</span>}
        </div>
      ))}
    </div>
  )
}
