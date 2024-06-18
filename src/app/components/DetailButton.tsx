/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";
import classNames from "classnames";
import Image from "next/image";

export default function DetailButton(props: {
  color?: string
  className?: string
  children?: React.ReactNode
  useHover?: boolean
}) {

  const { color = '#86909C', useHover = true } = props

  return (
    <div 
      role="button" 
      className={classNames(`inline-flex items-center`, props.className)} 
      css={css`
        color: ${color};
        ${useHover ? `
          &:hover {
            color: #1D5FFF;
            .icon {
              background-color: #1D5FFF;
              border-color: transparent;
              color: white;
            }
          }
        ` : ''}
      `}
    >
      <div 
        className="w-[60px] h-[60px] flex justify-center items-center icon"
        css={css`
          border: 1px solid ${color};
          border-radius: 9999px;
        `}
      >
        <svg width="31" height="13" viewBox="0 0 31 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.1095 4.68714L24.4445 4.68714L24.5719 4.3773L25.8318 1.3136L30.2535 12.0566L0.746442 12.0566L3.77913 4.68714L24.1095 4.68714Z" stroke="currentColor"/>
        </svg>
      </div>
      {props.children && <span className="ml-[20px]">{ props.children }</span>}
    </div>
  )
}
