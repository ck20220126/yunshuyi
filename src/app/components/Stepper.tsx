'use client'

import { useState } from "react"
import { isUndefined } from "lodash-es"
import classNames from "classnames"

export default function Stepper(props: {
  min?: number
  max?: number
  defaultValue?: number
  className?: string
}) {

  const { defaultValue, min = 1, max } = props

  const [value, setValue] = useState(isUndefined(defaultValue) ? min : defaultValue)

  function onInput(e) {
    setValue(e.target.value.replace(/[^0-9]/g, ''))
  }

  function subtract() {
    setValue(val => {
      const newVal = val - 1
      return newVal < min? min : newVal
    })
  }

  function add() {
    setValue(val => {
      const newVal = val + 1
      return newVal > max ? max : newVal
    })
  }

  return (
    <div className={classNames('flex border border-[#EBECF0] h-[38px] select-none', props.className)}>
      <div role="button" onClick={subtract} className="w-[36px] border-r border-[#EBECF0] flex items-center justify-center">
        <img src="/ic-subtract.svg" className="size-[16px]" />
      </div>
      <input value={value} className="w-[80px] outline-none leading-[22px] text-[14px] text-center" onInput={onInput} />
      <div role="button" onClick={add} className="w-[36px] border-l border-[#EBECF0] flex items-center justify-center">
        <img src="/ic-add.svg" className="size-[16px]" />
      </div>
    </div>
  )
}
