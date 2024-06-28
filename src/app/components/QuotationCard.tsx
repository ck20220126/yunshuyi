import { Button, ConfigProvider } from 'antd'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function QuotationCard(props: {
  id: React.Key
  tag: string
  title: string
  infos: {
    label: string
    value: string
  }[]
  className?: string
  liked?: boolean
  onLike?: () => void
}) {
  return (
    <div className={classNames('border border-[#EBECF0] p-[30px] bg-white', props.className)}>
      <div className="inline-block p-[5px] bg-[#BEDAFF66] rounded-[4px] leading-[20px] text-[14px] text-[#1D5FFF] font-bold">{props.tag}</div>
      <h3 className="my-[15px] h-[56px] leading-[28px] text-[20px] font-bold line-clamp-2">{props.title}</h3>
      {props.infos.map((item, index) => (
        <p key={`info-${index}`} className="mt-[5px]">
          <span className="text-[#86909C]">{item.label}</span>
          <span>{item.value}</span>
        </p>
      ))}
      <div className="my-[30px] border-t border-dotted border-[#EBECF0]" />
      <div className="flex h-[44px]">
        <div role="button" className="flex-shrink-0 flex items-center justify-center h-full w-[64px] rounded-[4px] bg-[#F7F8FA]" onClick={props.onLike}>
          <Image src={props.liked ? '/ic-favorite-fill.svg' : '/ic-favorite.svg'} width={24} height={24} alt="" />
        </div>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                paddingBlockLG: 21,
              }
            },
          }}
        >
          <Button block size="large" type="primary" href={`/pq-sale/quotation/form/${props.id}`} className="flex-1 ml-[10px]">
            立即询价
          </Button>
        </ConfigProvider>
      </div>
    </div>
  )
}
