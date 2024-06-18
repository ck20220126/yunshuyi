/** @jsxImportSource @emotion/react */
'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { useWindowScroll } from "@uidotdev/usehooks";
import { css } from "@emotion/react";

type Props = {
  className?: string
}
export default function Header(props: Props) {

  const [{ y }] = useWindowScroll();
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  useEffect(() => {
    const _opacity = Math.min(1, y / 100)
    
    if (_opacity !== backgroundOpacity) {
      setBackgroundOpacity(_opacity)
    }
  }, [y])

  return (
    <header className={classNames('w-full max-w-[1920px] pr-[232px] fixed z-20 top-0 left-1/2 -translate-x-1/2', props.className)}>
      <div 
        className="absolute inset-0 bg-white z-0"
        css={css`
          &::after {
            content: "";
            display: block;
            height: 1px;
            background: #C9CDD4;
            position: absolute;
            left: 0;
            right: 232px;
            bottom: -1px;
          }
        `}
        style={{ opacity: backgroundOpacity }} />
      <div className={classNames('relative z-1 h-[150px] flex items-center justify-between px-[100px]', backgroundOpacity > 0.5 ? 'text-red' : 'text-white')}>
        <Link href={"/"}>
          {/* <Image src={"/logo-white.png"} width={192} height={80} alt="logo" /> */}
        </Link>
        <div className="inline-flex items-center">
          <Link href={"#"} title="集采集售" className="p-[25px]">集采集售</Link>
          <Link href={"#"} title="云品优选" className="p-[25px]">云品优选</Link>
          <Link href={"#"} title="金融服务" className="p-[25px]">金融服务</Link>
          <Link href={"#"} title="仓储物流" className="p-[25px]">仓储物流</Link>
          <div className="w-[1px] h-[56px] bg-white/40 mx-[70px]" />
          <Link href={"#"} title="工作台（企业用户）" className="inline-flex items-center p-[25px]">
            {/* <Image src={"ic-user.svg"} width={24} height={24} alt="" className="mr-[10px]" /> */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_85_189)">
                <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z" fill="currentColor"/>
              </g>
              <defs>
                <clipPath id="clip0_85_189">
                  <rect width="24" height="24" fill="currentColor"/>
                </clipPath>
              </defs>
            </svg>
            <span>工作台（企业用户）</span>
          </Link>
          <Link href={"#"} title="登录/注册" className="inline-flex items-center p-[25px] pr-0">
            {/* <Image src={"ic-workbench.svg"} width={24} height={24} alt="" className="mr-[10px]" /> */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_85_192)">
                <path d="M5 11H19V5H5V11ZM21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4ZM19 13H5V19H19V13ZM7 15H10V17H7V15ZM7 7H10V9H7V7Z" fill="currentCOlor"/>
              </g>
              <defs>
                <clipPath id="clip0_85_192">
                  <rect width="24" height="24" fill="currentCOlor"/>
                </clipPath>
              </defs>
            </svg>
            <span>登录/注册</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
