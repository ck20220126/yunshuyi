/** @jsxImportSource @emotion/react */
'use client'

import { css } from '@emotion/react'
import classNames from 'classnames'

type Item = {
  value: string
  label: string
}
export default function Tabs(props: {
  list: {
    value: string
    label: string
  }[]
  active?: string
  extra?: JSX.Element
  onChange?: (tab: Item['value']) => void
  className?: string
}) {
  const { list, active, extra, onChange } = props || {}
  return (
    <div
      className={classNames('relative flex items-center', props.className)}
      css={css`
        &::after {
          content: '';
          height: 1px;
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: #ebecf0;
        }
        .tab {
          position: relative;
          &::after {
            content: '';
            display: none;
            width: 100%;
            height: 1px;
            background-color: #1d5fff;
            position: absolute;
            bottom: -20px;
            left: 0;
            z-index: 1;
          }
          &:not(:first-of-type) {
            margin-left: 50px;
          }
          &.active {
            font-weight: bold;
            &::after {
              display: block;
            }
          }
        }
      `}
    >
      <div className="flex-1 flex py-[20px] leading-[28px] text-[20px]">
        {list.map((item) => (
          <div key={`tab-${item.value}`} className={classNames('cursor-pointer tab', { active: active === item.value })} onClick={() => onChange?.(item.value)}>
            {item.label}
          </div>
        ))}
      </div>
      {extra && <div className="flex-shrink-0">{extra}</div>}
    </div>
  )
}
