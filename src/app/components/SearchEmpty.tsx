import classNames from "classnames"

export default function SearchEmpty(props: {
  className?: string
  keyword?: string
}) {
  const { keyword } = props || {}
  return (
    <div className={classNames('flex justify-center items-center', props.className)}>
      <img src="/illus-empty.svg" className="size-[124px]" />
      <p className="ml-[40px] leading-[24px] text-[16px]">抱歉，没有找到{keyword ? <>与“<span className="text-[#1D5FFF]">{keyword}</span>”</> : ''}相关信息哦</p>
    </div>
  )
}
