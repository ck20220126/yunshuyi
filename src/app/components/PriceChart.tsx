/** @jsxImportSource @emotion/react */
'use client'

import * as echarts from 'echarts/core'
import ReactECharts from 'echarts-for-react'
import { useMemo, useState } from 'react'
import { Button } from 'antd'
import ArrowRight from './icons/ArrowRight'
import classNames from 'classnames'

// ['04-25', '04-26', '04-27', '04-28', '04-29', '04-30', '05-01', '05-02', '05-03', '05-04'],
// [50.9, 50.9, 50.9, 50.9, 50.9, 50.9, 57.5, 50.9, 50.9, 50.9]
const data = [
  {
    date: '04-25',
    value: 50.9,
  },
  {
    date: '04-26',
    value: 50.9,
  },
  {
    date: '04-27',
    value: 50.9,
  },
  {
    date: '04-28',
    value: 50.9,
  },
  {
    date: '04-29',
    value: 50.9,
  },
  {
    date: '04-30',
    value: 50.9,
  },
  {
    date: '05-01',
    value: 57.5,
  },
  {
    date: '05-02',
    value: 50.9,
  },
  {
    date: '05-03',
    value: 50.9,
  },
  {
    date: '05-04',
    value: 50.9,
  },
  {
    date: '05-05',
    value: 50.9,
  },
  {
    date: '05-06',
    value: 50.9,
  },
  {
    date: '05-07',
    value: 57.5,
  },
  {
    date: '05-08',
    value: 65.5,
  },
  {
    date: '05-09',
    value: 57.5,
  },
  {
    date: '05-10',
    value: 65.5,
  },
  {
    date: '05-11',
    value: 57.5,
  },
  {
    date: '05-12',
    value: 50.9,
  },
  {
    date: '05-13',
    value: 50.9,
  },
  {
    date: '05-14',
    value: 50.9,
  },
]

const size = 10
const len = Math.floor(data.length / size)
export default function PriceChart(props: { className?: string }) {
  // const [currentData, setCurrentData] = useState([])
  const [index, setIndex] = useState(0)

  const currentData = useMemo(() => {
    const newIndex = index * size
    return data.slice(newIndex, newIndex + size)
  }, [index])

  function toggleIndex(val) {
    const newVal = index + val
    if (newVal < 0) {
      setIndex(0)
    } else if (newVal >= len) {
      setIndex(data.length / size - 1)
    } else {
      setIndex(newVal)
    }
  }

  const option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(29, 33, 41, 0.7)',
      textStyle: {
        color: 'white',
      },
      formatter: function (params) {
        // 自定义 tooltip 显示内容
        var tooltipContent = ''
        params.forEach(function (item) {
          console.log('item:', item)
          tooltipContent += `
            <div>
              ${item.axisValue.replace(/([0-9]+)-([0-9]+)/, '$1月$2日')}<br />
              <strong>${item.data}元/桶</strong>
            </div>
          `
        })
        return tooltipContent
      },
    },
    grid: {
      left: '4%',
      right: '2%',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: currentData.map((item) => item.date),
      splitLine: {
        show: false,
      },
    },
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 1,
        },
        itemStyle: {
          color: '#1D5FFF',
        },
        symbol: 'circle',
        showSymbol: true,
        symbolSize: 10,
        emphasis: {
          symbolSize: 20,
        },
        areaStyle: {
          opacity: 1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(29, 95, 255, 0.15)',
            },
            {
              offset: 1,
              color: 'transparent',
            },
          ]),
        },
        data: currentData.map((item) => item.value),
      },
    ],
  }
  return (
    <div className={props.className}>
      <ReactECharts option={option} style={{ height: '600px' }} />
      <div className="flex items-center justify-center">
        <div
          role="button"
          className={classNames('flex items-center justify-center size-[60px] rounded-full border border-[#86909C] text-[#86909C]', { 'opacity-50': index < 1 })}
          onClick={() => toggleIndex(-1)}
        >
          <ArrowRight className="size-[24px] transform rotate-180" />
        </div>
        <span className="px-[28px] text-[16px]">
          {currentData[0].date} - {currentData.at(-1).date}
        </span>
        <div
          role="button"
          className={classNames('flex items-center justify-center size-[60px] rounded-full border border-[#86909C] text-[#86909C]', { 'opacity-50': index >= len - 1 })}
          onClick={() => toggleIndex(1)}
        >
          <ArrowRight className="size-[24px]" />
        </div>
      </div>
    </div>
  )
}
