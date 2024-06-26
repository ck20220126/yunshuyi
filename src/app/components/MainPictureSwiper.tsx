/** @jsxImportSource @emotion/react */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { css } from '@emotion/react'
import ArrowRight from './icons/ArrowRight'

const ToggleButton = (props: { disabled?: boolean; className?: string, onClick?: () => void }) => {
  return (
    <div 
      role="button" 
      className={classNames('border border-[#EBECF0] text-[#C9CDD4] flex justify-center items-center', { 'opacity-50': props.disabled }, props.className)}
      onClick={props.onClick}
    >
      <ArrowRight />
    </div>
  )
}

export default function MainPictureSwiper(props: { 
  images: { src: string }[]
  scene?: 'mall' | 'procure'
  className?: string
}) {

  const { images, scene = 'mall' } = props || {}
  const primaryColor = {
    'mall': '#876442',
    'procure': '#1d5fff'
  }[scene]

  const [index, setIndex] = useState(0)

  function togglePicture(val) {
    let newIndex = index + val
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex > images.length - 1) {
      newIndex = images.length - 1
    }

    setIndex(newIndex)
  }

  return (
    <div className={props.className}>
      <div className="relative w-full aspect-square">
        <Image src={images[index].src} fill alt={images[index].src} className="border border-[#EBECF0] object-cover" />
      </div>
      <div className="mt-[10px] px-[36px] relative select-none">
        <ToggleButton disabled={index === 0} className="absolute left-0 top-0 bottom-0 w-[26px] transform rotate-180" onClick={() => togglePicture(-1)} />
        <div
          className="flex-1 grid grid-cols-5 gap-x-[10px]"
          css={css`
            .item {
              position: relative;
              &::after {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 1px solid border #ebecf0;
                transition: border 0.2s ease-in-out;
              }
              &.active::after {
                border-width: 2px;
                border-color: ${primaryColor};
              }
            }
          `}
        >
          {images.map((item, _index) => (
            <div key={`picture-${_index}`} className={classNames('relative aspect-square item cursor-pointer', { active: _index === index })} onClick={() => setIndex(_index)}>
              <Image src={item.src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
        <ToggleButton disabled={index >= images.length - 1} className="absolute right-0 top-0 bottom-0 w-[26px]" onClick={() => togglePicture(1)} />
      </div>
    </div>
  )
}
