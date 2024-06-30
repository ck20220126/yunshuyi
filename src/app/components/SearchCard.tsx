/** @jsxImportSource @emotion/react */
'use client'

import { useImmer } from 'use-immer'
import classNames from 'classnames'
import { isEmpty } from 'lodash-es'
import { Button, Divider, Input } from 'antd'
import { CaretDownFilled, CaretUpFilled, DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import React, { useEffect, useMemo, useState } from 'react'

type Tag = {
  label: string
  value: string
}
const Tags = (props: { className?: string; options: Tag[]; defaultValue?: Tag['value'][]; multiple?: boolean; showExpand?: boolean; onChange?: (values: string[]) => void }) => {
  const { options, defaultValue, multiple, showExpand, onChange } = props

  const [selectedKeys, setSelectedKeys] = useImmer(defaultValue)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    onChange?.(selectedKeys)
  }, [selectedKeys])

  function onClickItem(item: Tag) {
    setSelectedKeys((draft) => {
      if (!multiple) {
        return [item.value]
      }

      if (item.value === 'all') {
        return ['all']
      }

      const _index = draft.findIndex((_item) => _item === item.value)
      if (_index > -1) {
        draft.splice(_index, 1)
        if (!draft?.length && options.find((item) => item.value === 'all')) {
          draft.push('all')
        }
      } else {
        draft.push(item.value)
      }
      if (draft.length > 1) {
        const allIndex = draft.findIndex((item) => item === 'all')
        if (allIndex > -1) {
          draft.splice(allIndex, 1)
        }
      }
      return
    })
  }

  return (
    <div className="flex items-start">
      <div className={classNames('flex-1 flex flex-wrap gap-[15px]', { 'h-[32px] overflow-hidden': showExpand && !expanded }, props.className)}>
        {options.map((item) => (
          <div
            key={`tag-${item.value}`}
            role="button"
            className={classNames('py-[5px] px-[20px] flex justify-center items-center rounded-[4px] leading-[22px] text-[16px] bg-[#F7F8FA] text-[#4E5969] transition', {
              '!bg-[#1D5FFF] text-white': selectedKeys.includes(item.value),
            })}
            onClick={() => onClickItem(item)}
          >
            {item.label}
          </div>
        ))}
      </div>
      {showExpand && (
        <div role="button" className="ml-[150px] mt-[5px] flex-shrink-0 flex items-center leading-[22px] text-[16px]" onClick={() => setExpanded((val) => !val)}>
          <span>{expanded ? '收起' : '展开'}</span>
          <DownOutlined className={classNames('ml-[10px] size-[10px] transition-transform', { 'transform rotate-180': expanded })} />
        </div>
      )}
    </div>
  )
}

type FilterType = undefined | 'ascend' | 'descend'
const defaultRenderTotal: Props['pagination']['renderTotal'] = (options) => {
  return (
    <>
      共 <span className="text-[#1D5FFF]">{options.total}</span> 条数据
    </>
  )
}

export type Props = {
  className?: string
  tags?: {
    title: string
    name: string
    options: {
      label: string
      value: string
    }[]
    multiple?: boolean
    showExpand?: boolean
    defaultValue?: string
  }[]
  filters?: {
    title: string
    name: string
    type: 'sort'
    options?: {
      label: string
      value: string
    }[]
  }[]
  pagination?: {
    total?: number
    pageSize?: number
    renderTotal?: (options: { total: number; currentPage: number; pageSize: number }) => React.ReactNode
  }
  showFilterBar?: boolean
  extra?: React.ReactNode
  onChange?: (params: { searchKeyword?: string; tags: Record<string, any>; filters: Record<string, any> }) => void
  onSearch?: (params: { searchKeyword?: string; tags: Record<string, any>; filters: Record<string, any> }) => void
}
const SearchCard = (props: Props) => {
  const { tags, filters, extra, pagination = { pageSize: 15 }, showFilterBar = true, onChange, onSearch } = props
  const { pageSize = 15, total, renderTotal = defaultRenderTotal } = pagination

  const [searchInputValue, setSearchInputValue] = useState('')

  const [filterParams, setFilterParams] = useImmer<Record<string, FilterType>>({})

  const filterTypeMeta: FilterType[] = [undefined, 'ascend', 'descend']
  function onClickFilter(item: Props['filters'][0]) {
    const filterName = item.name
    const _index = filterTypeMeta.indexOf(filterParams[filterName])
    let newIndex = _index + 1
    if (newIndex >= filterTypeMeta.length) {
      newIndex = 0
    }

    setFilterParams((draft) => {
      draft[filterName] = filterTypeMeta[newIndex]
      return
    })
  }

  const [toggleOptionParams, setToggleOptionParams] = useImmer<Record<string, any>>({})
  function onClickToggleOption(item: Props['filters'][0]) {
    const { name, options } = item
    const index = options.findIndex((_item) => _item.value === toggleOptionParams[name])
    let newIndex = index + 1
    if (newIndex >= filterTypeMeta.length) {
      newIndex = 0
    }

    setToggleOptionParams((draft) => {
      draft[name] = filterTypeMeta[newIndex]
      return
    })
  }

  const [currentPage, setCurrentPage] = useState(0)
  const [pageTotal, setPageTotal] = useState(1)

  useEffect(() => {
    if (total && pageSize) {
      setPageTotal(Math.ceil(total / pageSize))
    }
  }, [pageSize, total])

  function updateCurrentPage(val) {
    const newVal = currentPage + val
    if (newVal < 0) {
      setCurrentPage(0)
    } else if (newVal >= pageTotal) {
      setCurrentPage(pageTotal - 1)
    } else {
      setCurrentPage(newVal)
    }
  }

  const [tagParams, setTagParams] = useImmer<Record<string, any>>({})
  function onChangetags(name: string, values: string[]) {
    setTagParams((draft) => {
      draft[name] = values
      return
    })
  }

  const params = useMemo(() => {
    return { searchKeyword: searchInputValue, tags: tagParams, filters: { ...filterParams, ...toggleOptionParams } }
  }, [searchInputValue, filterParams, toggleOptionParams, tagParams])

  useEffect(() => {
    onChange?.(params)
  }, [params])

  function onSubmit() {
    onSearch?.(params)
  }

  return (
    <div className={classNames('select-none', props.className)}>
      <div className="border border-[#EBECF0] p-[30px]">
        <div className="flex items-center">
          <span className="min-w-[82px] flex-shrink-0 text-[14px] text-[#86909C]">搜索</span>
          <div className="ml-[15px] flex-1 flex items-center">
            <div className="flex-1 relative">
              <Input
                size="large"
                placeholder="请输入关键字搜索"
                className={classNames('w-full')}
                allowClear
                suffix={
                  <img src="/ic-search.svg" className={classNames('w-full', { hidden: !!searchInputValue })} />
                }
                onChange={(event) => setSearchInputValue(event.target.value)}
                onPressEnter={onSubmit}
              />

              {/* <div className="size-[20px] absolute z-[10] right-[16px] top-1/2 transform -translate-y-1/2">
                <img src="/ic-search.svg" className={classNames('w-full', { hidden: !!searchInputValue })} />
              </div> */}
            </div>
            <Button htmlType="submit" type="primary" size="large" className="w-[144px] ml-[20px] flex-shrink-0" onClick={onSubmit}>
              搜索
            </Button>
          </div>
        </div>
        {tags.map((item) => (
          <div key={`tags-${item.name}`}>
            <Divider dashed />
            <div className="flex">
              <span className="min-w-[82px] mt-[5px] flex-shrink-0 leading-[22px] text-[14px] text-[#86909C]">{item.title}</span>
              <div className="ml-[15px] flex-1 flex items-center">
                <Tags options={item.options} defaultValue={[item.defaultValue]} multiple={item.multiple} showExpand={item.showExpand} onChange={(values) => onChangetags(item.name, values)} />
              </div>
            </div>
          </div>
        ))}
      </div>
      {showFilterBar && (
        <div className="mt-[30px] border border-[#EBECF0] p-[15px] flex justify-between">
          <div className="flex-1 flex">
            {!isEmpty(filters) && (
              <div className="filter flex gap-x-[10px]">
                {filters.map((item) => (
                  <div key={`filter-${item.name}`} className="py-[10px] px-[15px] filter-item">
                    {
                      {
                        sort: (
                          <div role="button" className={classNames('flex', filterParams[item.name] ? 'text-[#1D5FFF]' : 'text-[#86909C]')} onClick={() => onClickFilter(item)}>
                            <span>{item.title}</span>
                            <div className="ml-[5px] flex flex-col items-center justify-center text-[12px]">
                              <CaretUpFilled className={classNames('relative -bottom-[2px]', filterParams[item.name] === 'ascend' ? 'text-[#1D5FFF]' : '!text-[#4E5969]')} />
                              <CaretDownFilled className={classNames('relative -top-[2px]', filterParams[item.name] === 'descend' ? 'text-[#1D5FFF]' : '!text-[#4E5969]')} />
                            </div>
                          </div>
                        ),
                        toggleOption: (
                          <div role="button" className={classNames('flex', filterParams[item.name] ? 'text-[#1D5FFF]' : 'text-[#86909C]')} onClick={() => onClickToggleOption(item)}>
                            <span>{item.title}</span>
                          </div>
                        ),
                      }[item.type]
                    }
                  </div>
                ))}
              </div>
            )}
            {extra}
          </div>
          {pagination && (
            <div className="flex-shrink-0 flex items-center leading-[22px] text-[16px] text-[#86909C]">
              <div>{renderTotal({ total, currentPage, pageSize })}</div>
              <div className="ml-[60px] flex items-center">
                <div role="button" className={classNames('size-[20px] flex items-center justify-center', { 'opacity-50': currentPage === 0 })} onClick={() => updateCurrentPage(-1)}>
                  <LeftOutlined />
                </div>
                <div className="mx-[10px] text-[#4E5969]">
                  <span className="text-[#1D5FFF]">{currentPage + 1}</span> / {pageTotal}
                </div>
                <div role="button" className={classNames('size-[20px] flex items-center justify-center', { 'opacity-50': currentPage >= pageTotal - 1 })} onClick={() => updateCurrentPage(1)}>
                  <RightOutlined />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchCard
