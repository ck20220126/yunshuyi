/** @jsxImportSource @emotion/react */
'use client'

import { useState } from 'react'
import classNames from 'classnames'
import { css } from '@emotion/react'
import { useLockBodyScroll } from 'react-use'
import useLayout from '@/hooks/useLayout'

import Image from 'next/image'
import Link from 'next/link'
import ArrowRight from '../icons/ArrowRight'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuToggle } from './MenuToggle'

type Props = {
  className?: string
}

const menuItemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 10,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
}
export const MenuGroup = (props: { title: string; list: { title: string; link?: string }[], onClickItem?: () => void }) => {
  const { title, list } = props
  return (
    <motion.div variants={menuItemVariants} initial={{ opacity: 0, x: 10 }} className="border border-white px-[30px] pt-[80px] pb-[50px]">
      <h2 className="font-bold leading-[76px] text-[66px] text-center">{title}</h2>
      <ul className="mt-[75px]">
        {list.map((item, index) => (
          <li key={`menu-${index}`} className="menu-item">
            <Link href={item.link} className="menu-item__link" onClick={props.onClickItem}>
              {item.title}
              <ArrowRight className="size-[16px]" />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const menus = [
  {
    title: '01',
    list: [
      {
        title: '询价采购',
        link: '/pq-sale',
      },
      {
        title: '招采报价',
        link: '/pq-sale',
      },
      {
        title: '招采结果查询',
        link: '#',
      },
      {
        title: '我的采购清单',
        link: '#',
      },
    ],
  },
  {
    title: '02',
    list: [
      {
        title: '云品优选',
        link: '#',
      },
      {
        title: '云品优选',
        link: '#',
      },
    ],
  },
  {
    title: '03',
    list: [
      {
        title: '金融产品',
        link: '#',
      },
    ],
  },
  {
    title: '04',
    list: [
      {
        title: '物流服务',
        link: '#',
      },
    ],
  },
]

const MenuLayer = (props: { open?: boolean; onClose?: () => void }) => {
  useLockBodyScroll(!!props.open)

  function onClickItem() {
    props?.onClose?.()
  }
  return (
    <AnimatePresence>
      {props.open && (
        <motion.div className="fixed z-[1000] inset-0 bg-black/95 overflow-y-auto text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          <div className="relative w-full min-h-full mx-auto pt-[10%] pb-[13%]">
            <motion.div
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.02 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
              className="relative px-[15%] grid grid-cols-4 gap-x-[30px]"
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
              {menus.map((group, groupIndex) => (
                <MenuGroup key={`menu-group-${groupIndex}`} title={group.title} list={group.list} onClickItem={onClickItem} />
              ))}
            </motion.div>
          </div>
          <p className="absolute bottom-[10px] left-0 right-0 px-[5%] py-[6.5%] leading-[26px] text-[12px] text-[#c9cdd4] text-center">
            版权所有 © 2009-2020 云南天成科技股份有限公司 ALL RIGHTS RESERVED.
            <span className="inline-block mx-[50px]">滇ICP备11003338号</span>
            增值电信业务经营许可证号：滇B1、B2-20090035
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default function Sider(props: Props) {
  const [openMenuPopup, setOpenMenuPopup] = useState(false)

  const { backgroundOpacity } = useLayout()

  return (
    <motion.div
      animate={openMenuPopup ? 'open' : 'closed'}
      css={css`
        --icon-color: ${backgroundOpacity === 1 ? '#1D2129' : 'white'};
        --color: ${backgroundOpacity === 1 ? '#86909C' : 'white'};
        color: var(--color);
        .icon {
          color: var(--icon-color);
        }
      `}
    >
      <aside
        className={classNames('w-sider-width fixed z-10 top-0 right-0 bottom-0 white text-center pt-[50px] pb-[184px] flex flex-col justify-center items-center', props.className)}
        css={css`
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
        `}
      >
        <div className="bg-white absolute inset-0 transition-opacity" style={{ opacity: backgroundOpacity }} />
        <div
          className={classNames('absolute bottom-[138px] transition-opacity duration-200 more-menus', backgroundOpacity === 1 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}
        >
          <Link href={'#'} className="flex flex-col justify-center items-center">
            <div className="w-[56px] h-[56px] rounded-full border border-[#ebecf0] flex items-center justify-center">
              <Image src="/ic-menu-service.svg" width={26} height={26} alt="" />
            </div>
            <p className="mt-[10px] leading-[20px] text-[13px]">在线客服</p>
          </Link>
          <Link href={'#'} className="mt-[25px] flex flex-col justify-center items-center">
            <div className="w-[56px] h-[56px] rounded-full border border-[#ebecf0] flex items-center justify-center">
              <Image src="/ic-menu-order.svg" width={26} height={26} alt="" />
            </div>
            <p className="mt-[10px] leading-[20px] text-[13px]">我的采购单</p>
          </Link>
          <Link href={'#'} className="mt-[25px] flex flex-col justify-center items-center">
            <div className="w-[56px] h-[56px] rounded-full border border-[#ebecf0] flex items-center justify-center">
              <Image src="/ic-menu-shop.svg" width={26} height={26} alt="" />
            </div>
            <p className="mt-[10px] leading-[20px] text-[13px]">我的购物车</p>
          </Link>
        </div>
      </aside>
      <div
        className={classNames('fixed w-sider-width top-[35vh] right-0 z-[1001] flex justify-center leading-[20px] text-[14px]')}
        css={css`
          ${openMenuPopup &&
          `
            &, .icon {
              color: white;
            }  
          `}
        `}
      >
        <div role="button" className="inline-flex flex-col justify-center items-center relative select-none" onClick={() => setOpenMenuPopup((val) => !val)}>
          {/* <div
            className="w-[42px] h-[42px] relative"
            css={css`
              position: relative;
              &::before,
              &::after {
                content: '';
                display: block;
                position: absolute;
                width: 100%;
                height: 3px;
                left: 0;
                top: 50%;
                background-color: ${openMenuPopup ? 'white' : '#1D2129'};
                transform-origin: center;
                transition: transform linear 0.2s, background-color linear 0.2s;
              }
              &::before {
                transform-origin: center;
                transform: translateY(${openMenuPopup ? '0' : '-7px'}) rotate(${openMenuPopup ? '45deg' : '0deg'});
              }
              &::after {
                transform-origin: center;
                transform: translateY(${openMenuPopup ? '0' : '4px'}) rotate(${openMenuPopup ? '-45deg' : '0deg'});
              }
            `}
          >
          </div> */}
          <MenuToggle className="icon size-[42px]" />
          <span className="mt-[10px]">{!openMenuPopup ? '菜单' : ' '}</span>
        </div>
      </div>
      <MenuLayer open={openMenuPopup} onClose={() => setOpenMenuPopup(false)} />
    </motion.div>
  )
}
