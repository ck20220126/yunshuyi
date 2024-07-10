/** @jsxImportSource @emotion/react */
'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { css } from '@emotion/react'
import Image from 'next/image'
import useLayout from '@/hooks/useLayout'

type Props = {
  className?: string
}
export default function Header(props: Props) {

  const { immersive, backgroundOpacity } = useLayout()

  const footerRef = useRef<HTMLDivElement>()
  const [rectHeight, setRectRight] = useState<number>(0)
  useEffect(() => {
    if (!footerRef.current) return

    const { height } = footerRef.current.getBoundingClientRect()
    setRectRight(height)

  }, [])

  return (
    <>
      <header ref={footerRef} className={classNames('w-full min-w-[1400px] pr-sider-padding fixed z-20 top-0 left-1/2 -translate-x-1/2', props.className)}>
        <div
          className="absolute inset-0 bg-white z-0 transition-opacity"
          css={css`
            &::after {
              content: '';
              display: block;
              height: 1px;
              background: #c9cdd4;
              position: absolute;
              left: 0;
              right: 232px;
              bottom: -1px;
            }
          `}
          style={{ opacity: backgroundOpacity }}
        />
        <div
          className={classNames('relative z-1 h-[128px] flex items-center justify-between pl-[100px] py-[28px] text-[16px]', backgroundOpacity <= 0.5 && 'text-white')}
          css={css`
            .item {
              padding: 25px 0;
              margin: 0 25px;
              position: relative;
              &:after {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                bottom: 15px;
                width: 100%;
                height: 1px;
                background-color: ${backgroundOpacity <= 0.5 ? 'white' : '#1D5FFF'};
                transform: scale(0);
                transform-origin: left center;
                transition: transform 0.2s ease-in;
              }
              &:hover::after {
                transform: scale(1);
              }
            }
          `}
        >
          <Link href={'/'} className='block flex-shrink-0'>
            <Image src={backgroundOpacity <= 0.5 ? '/logo-white.webp' : '/logo.webp'} width={154} height={64} alt="logo" />
          </Link>
          <div className="inline-flex items-center">
            <Link href={'/pq-sale'} title="集采集售" className="item">
              集采集售
            </Link>
            <Link href={'/mall'} title="云品优选" className="item">
              云品优选
            </Link>
            <Link href={'/financial-service'} title="金融服务" className="item">
              金融服务
            </Link>
            <Link href={'/logistics'} title="仓储物流" className="item">
              仓储物流
            </Link>
            <div className="w-[1px] h-[56px] bg-white/40 mx-[70px]" />
            <Link href={'#'} title="工作台（企业用户）" className="inline-flex items-center item">
              <i className="size-[24px]">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_85_189)">
                    <path
                      d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_85_189">
                      <rect width="24" height="24" fill="currentColor" />
                    </clipPath>
                  </defs>
                </svg>
              </i>
              <span>工作台（企业用户）</span>
            </Link>
            <Link href={'#'} title="登录/注册" className="item inline-flex items-center pr-0">
              {/* <Image src={"ic-workbench.svg"} width={24} height={24} alt="" className="mr-[10px]" /> */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_85_192)">
                  <path
                    d="M5 11H19V5H5V11ZM21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4ZM19 13H5V19H19V13ZM7 15H10V17H7V15ZM7 7H10V9H7V7Z"
                    fill="currentCOlor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_85_192">
                    <rect width="24" height="24" fill="currentCOlor" />
                  </clipPath>
                </defs>
              </svg>
              <span>登录/注册</span>
            </Link>
          </div>
        </div>
      </header>
      {/* placeholder */}
      {!immersive && <div className="h-[128px]" />}
    </>
  )
}
