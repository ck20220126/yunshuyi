/** @jsxImportSource @emotion/react */
"use client";

import { useEffect, useRef, useState } from "react";
import { css } from '@emotion/react'
import { useVisibilityChange } from "@uidotdev/usehooks";
import classNames from "classnames";
import Image from "next/image";

type Props = {
  className?: string;
  interval?: number
  list: {
    url: string
    title?: string
    subtitles?: string[]
  }[]
};

export default function HomeBanner(props: Props) {
  const { list, interval = 5000 } = props || {}
  const [current, setCurrent] = useState(0)

  const total = list?.length
  const currentPage = (current + 1)
  
  const timer = useRef<ReturnType<typeof setInterval>>()
  function startRotation() {
    if (timer.current)
      return
  
    timer.current = setInterval(() => {
      setCurrent(val => val + 1 === list?.length ? 0 : val + 1)
    }, interval)
  }
  function endRotation() {
    if (timer.current) {
      clearInterval(timer.current)
      timer.current = undefined
    }
  }
  useEffect(() => {
    return () => {
      endRotation()
    }
  }, [])

  // 优化: 离开页面时暂停轮播
  const documentVisible = useVisibilityChange()
  useEffect(() => {
    documentVisible ? startRotation() : endRotation()
  }, [documentVisible])
  
  return (
    <div className={classNames('relative text-white', props.className)}>
      {list.map((item, idx) => (
        <div 
          key={`banner-${idx}`} 
          className={classNames('w-full h-full inset-0 absolute opacity-0 transition-opacity duration-500', { active: current === idx })}
          css={css`
            &.active {
              z-index: 1;
              opacity: 1;
            }
          `}
        >
          <Image
            src={item.url}
            alt="banner"
            fill
            className="object-cover"
          />
          {!!(item.title || item.subtitles?.length > 0) && (
            <div className="absolute z-1 w-full top-1/2 -translate-y-1/2 text-center">
              {item.title ? <h2 className="leading-[112px] font-bold text-[80px]">{ item.title }</h2> : null}
              {(item.subtitles?.length > 0) && (
                <p className="mt-[30px] inline-flex items-center leading-[28px] text-[20px]">
                  {item.subtitles.map((subtitle, subtitleIdx) => (
                    <span key={`subtitle-${idx}-${subtitleIdx}`} className="inline-flex items-center" css={css`
                      &:not(:first-of-type)::before {
                        content: '';
                        width: 1px;
                        height: 20px;
                        background: rgba(255,255,255,0.5);
                        margin: 0 25px;
                      }
                    `}>
                      { subtitle }
                    </span>
                  ))}
                </p>
              )}
            </div>
          )}
          
        </div>
      ))}
      <div className="pagination absolute z-10 right-0 bottom-[100px] w-[232px] leading-[20px] text-[18px] text-center">
        <div className="inline-flex flex-col items-center justify-center leading-[20px] text-[18px]">
          <span className='font-bold'>{currentPage.toString().padStart(2, '0')}</span>
          <span className="w-full my-[.5em] h-[1px] bg-white transform -rotate-[15deg]"></span>
          <span>{total.toString().padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}
