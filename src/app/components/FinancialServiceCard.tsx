import Link from 'next/link'
import ArrowRight from './icons/ArrowRight'
import Image from 'next/image'
import classNames from 'classnames'

export default function FinancialServiceCard(props: { 
  bankLogo: string
  title: string
  className?: string 
}) {
  const tags = ['额度高', '利率低']
  return (
    <div className={classNames('border border-[#EBECF0] bg-white px-[30px] pt-[40px] pb-[60px]', props.className)}>
      <div className="relative">
        <div className="flex items-center">
          <img src={props.bankLogo} alt="" height={50} />
          <span className="ml-[30px] leading-[28px] text-[20px] font-bold">{ props.title }</span>
          <div className="ml-[15px] flex items-center">
            {tags.map((item, index) => (
              <span key={`tag-${index}`} className={classNames('rounded-[4px] bg-[#e83535]/10 text-[#F33030] leading-[20px] text-[13px]', { 'ml-[10px]': index > 0 })}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <Link href={'/financial-service/detail'} className="absolute right-[10px] bottom-[10px] flex items-center leading-[24px] text-[16px] text-[#4E5969]">
          <span>查看详情</span>
          <ArrowRight className="size-[22px]" />
        </Link>
      </div>
      <div className="mt-[20px] h-[1px] bg-[#EBECF0]" />
      <div className="mt-[30px] flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <p className='text-[#86909C]'>参考范围</p>
            <p className='mt-[10px] inline-flex items-baseline leading-[28px] text-[24px] text-[#F33030] font-bold'>10-100<span className='relative -top-[2px] ml-[5px] leading-[22px] text-[14px] font-normal'>万</span></p>
          </div>
          <div className='w-[1px] h-[36px] border-r border-dashed border-[#EBECF0] mx-[50px]' />
          <div>
            <p className='text-[#86909C]'>参考利率</p>
            <p className='mt-[10px] leading-[28px] text-[20px] text-[#4E5969]'>5%-6%</p>
          </div>
          <div className='w-[1px] h-[36px] border-r border-dashed border-[#EBECF0] mx-[50px]' />
          <div>
            <p className='text-[#86909C]'>贷款期限</p>
            <p className='mt-[10px] leading-[28px] text-[20px] text-[#4E5969]'>12-120月</p>
          </div>
        </div>
        <div role='button' className='min-w-[275px] py-[12px] px-[24px] rounded-[4px] bg-[#1D5FFF] text-white leading-[24px] text-[16px] text-center font-bold'>立即申请</div>
      </div>
    </div>
  )
}
