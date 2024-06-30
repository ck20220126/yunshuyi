/** @jsxImportSource @emotion/react */
'use client'

import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { css } from '@emotion/react'
import { usePathname } from 'next/navigation'
import { useLockBodyScroll, useWindowScroll, useWindowSize } from '@uidotdev/usehooks'
import { useScrollbarWidth } from 'react-use'
import Image from 'next/image'
import Link from 'next/link'
import ArrowRight from '../icons/ArrowRight'

type Props = {
  className?: string
}

const MenuLayer = (props: { open?: boolean; onClose?: () => void }) => {
  useLockBodyScroll()
  return (
    <div className={classNames('fixed z-[1000] inset-0 bg-black/95 overflow-y-auto text-white', props.open ? 'block' : 'hidden')}>
      <div className="relative max-w-[1920px] min-h-full mx-auto pt-[10%] pb-[13%]">
        <div className='relative'>
          <div
            className="px-[15%] grid grid-cols-4 gap-x-[30px]"
            css={css`
              .menu-item {
                display: flex;
                align-items: center;
                line-height: 22px;
                font-size: 14px;
                padding: 15px 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                transition: border linear 0.2s;
                &:hover {
                  border-color: white;
                }
                &::before {
                  content: '';
                  width: 4px;
                  height: 4px;
                  border-radius: 4px;
                  background-color: white;
                  margin: 0 8px;
                  flex-shrink: 0;
                }

                &__link {
                  flex: 1;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                }
              }
            `}
          >
            <div className="border border-white px-[30px] pt-[80px] pb-[50px]">
              <h2 className="font-bold leading-[76px] text-[66px] text-center">01</h2>
              <ul className="mt-[75px]">
                <li className="menu-item">
                  <Link href={'#'} className="menu-item__link">
                    询价采购
                    <ArrowRight className="size-[16px]" />
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'#'} className="menu-item__link">
                    招采报价
                    <ArrowRight className="size-[16px]" />
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'#'} className="menu-item__link">
                    招采结果查询
                    <ArrowRight className="size-[16px]" />
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'#'} className="menu-item__link">
                    我的采购清单
                    <ArrowRight className="size-[16px]" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border border-white px-[30px] pt-[80px] pb-[50px]">
              <h2 className="font-bold leading-[76px] text-[66px] text-center">01</h2>
              <ul className="mt-[75px]">
                <li className="menu-item">
                  <Link href={'#'} className="menu-item__link">
                    云品优选
                    <ArrowRight className="size-[16px]" />
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href={'#'} className="menu-item__link">
                    我的购物车
                    <ArrowRight className="size-[16px]" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border border-white px-[30px] pt-[80px] pb-[50px]">
              <h2 className="font-bold leading-[76px] text-[66px] text-center">03</h2>
              <ul className="mt-[75px]">
                <li className="menu-item">
                  <Link href={'#'} className="menu-item__link">
                    金融产品
                    <ArrowRight className="size-[16px]" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border border-white px-[30px] pt-[80px] pb-[50px]">
              <h2 className="font-bold leading-[76px] text-[66px] text-center">04</h2>
              <ul className="mt-[75px]">
                <li className="menu-item">
                  <Link href={'#'} className="menu-item__link">
                    物流服务
                    <ArrowRight className="size-[16px]" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='absolute right-[5%] top-1/2 -translate-y-1/2 cursor-pointer' onClick={props.onClose}>
            <Image src="/ic-close.svg" width={32} height={32} alt="" />
          </div>
        </div>
        <p className="absolute bottom-[10px] left-0 right-0 px-[5%] py-[6.5%] leading-[26px] text-[12px] text-[#c9cdd4] text-center">
          版权所有 © 2009-2020 云南天成科技股份有限公司 ALL RIGHTS RESERVED.
          <span className="inline-block mx-[50px]">滇ICP备11003338号</span>
          增值电信业务经营许可证号：滇B1、B2-20090035
        </p>
        {/* <p className="absolute bottom-[10px] left-0 right-0 px-[5%] py-[6.5%] leading-[26px] text-[12px] text-[#c9cdd4] text-center">songtsam: 占位</p> */}
      </div>
    </div>
  )
}
export default function Sider(props: Props) {
  const [openMenuPopup, setOpenMenuPopup] = useState(false)

  const { width } = useWindowSize()
  const [rectRight, setRectRight] = useState(0)
  const scrollbarWidth = useScrollbarWidth()
  useEffect(() => {
    setRectRight(width > 1920 ? Math.floor((width - 1920 - scrollbarWidth) / 2): 0)
  }, [width])

  
  const pathname = usePathname()
  const [{ y: scrollY }] = useWindowScroll();
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  useEffect(() => {
    if (!['/'].includes(pathname)) {
      setBackgroundOpacity(1)
      return
    }

    const _opacity = Math.min(1, scrollY / 100)
    
    if (_opacity !== backgroundOpacity) {
      setBackgroundOpacity(_opacity)
    }
  }, [scrollY])
  function onClickMenu() {
    setOpenMenuPopup(true)
  }

  return (
    <>
      <aside
        className={classNames('w-[233px] fixed z-10 top-0 right-0 bottom-0 white text-center pt-[50px] pb-[184px] flex flex-col justify-center items-center', props.className)}
        css={css`
          --translate-x: ${-rectRight}px;
          --icon-color: ${backgroundOpacity === 1 ? '#1D2129' : 'white'};
          --color: ${backgroundOpacity === 1 ? '#86909C' : 'white'};

          transform: translate3d(var(--translate-x), 0, 0);
          color: var(--color);
          &::before {
            content: '';
            display: block;
            width: 1px;
            position: absolute;
            z-index: 1;
            background-color: ${backgroundOpacity === 1 ? '#C9CDD4' : 'rgba(255, 255, 255, 0.4)'};
            left: 0;
            top: 50px;
            bottom: 100px;
            transition: background-color linear 0.2s;
          }

          .icon {
            color: var(--icon-color);
          }
        `}
      >
        <div className='bg-white absolute inset-0' style={{ opacity: backgroundOpacity }} />
        <div className='relative z-1'>
          <div 
            className="flex flex-col justify-center items-center leading-[20px] text-[14px] cursor-pointer" 
            onClick={onClickMenu}
          >
            <i className="icon">
              <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 14H42V17H0V14Z" fill="currentColor"/>
                <path d="M0 25H42V28H0V25Z" fill="currentColor"/>
              </svg>
            </i>
            <span className="mt-[10px]">菜单</span>
          </div>
          <div className={classNames('mt-[132px] min-h-[308px] more-menus transition-opacity duration-200', backgroundOpacity === 1 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}>
            <Link href={"#"} className='flex flex-col justify-center items-center'>
              <div className='w-[56px] h-[56px] rounded-full border border-[#ebecf0] flex items-center justify-center'>
                <Image src="/ic-menu-service.svg" width={26} height={26} alt="" />
              </div>
              <p className='mt-[10px] leading-[20px] text-[13px]'>在线客服</p>
            </Link>
            <Link href={"#"} className='mt-[25px] flex flex-col justify-center items-center'>
              <div className='w-[56px] h-[56px] rounded-full border border-[#ebecf0] flex items-center justify-center'>
                <Image src="/ic-menu-order.svg" width={26} height={26} alt="" />
              </div>
              <p className='mt-[10px] leading-[20px] text-[13px]'>我的采购单</p>
            </Link>
            <Link href={"#"} className='mt-[25px] flex flex-col justify-center items-center'>
              <div className='w-[56px] h-[56px] rounded-full border border-[#ebecf0] flex items-center justify-center'>
                <Image src="/ic-menu-shop.svg" width={26} height={26} alt="" />
              </div>
              <p className='mt-[10px] leading-[20px] text-[13px]'>我的购物车</p>
            </Link>
          </div>
        </div>
        
      </aside>
      {openMenuPopup && <MenuLayer open onClose={() => setOpenMenuPopup(false)} />}
    </>
  )
}
