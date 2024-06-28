/** @jsxImportSource @emotion/react */
'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import * as echarts from 'echarts/core'
import ReactECharts from 'echarts-for-react'
import Link from 'next/link'
import DetailCover from '../components/DetailCover'
import Divider from '../components/Divider'
import ArrowRight from '../components/icons/ArrowRight'
import MallProduct from '../components/MallProduct'
import MallCityCard from '../components/MallCityCard'
import { ECharts } from 'echarts'

function MyMap() {}

export default function Store() {
  const echartsRef = useRef<ECharts>()

  const [initial, setInitial] = useState(false)

  async function init() {
    const yunnanData = await (await fetch('/yunnan.json')).json()
    const yunnanFullData = await (await fetch('/yunnan-full.json')).json()
    echarts.registerMap('yunnanMap', yunnanData as any)
    echarts.registerMap('yunnanFullMap', yunnanFullData as any)

    setTimeout(() => {
      setInitial(true)
    }, 300)
  }

  useEffect(() => {
    init()
  }, [])

  const option = {
    series: [
      {
        type: 'map',
        mapType: 'yunnanMap',
        label: {
          show: false,
        },
        itemStyle: {
          areaColor: 'transparent',
          borderColor: '#876442',
          borderWidth: 2,
        },
        select: {
          itemStyle: {
            areaColor: 'transparent',
          },
          label: {
            show: false,
          },
        },
        emphasis: {
          itemStyle: {
            areaColor: 'transparent',
          },
          label: {
            show: false,
          },
        },
      },
    ],
    roam: false,
    zoom: 1.25,
  }

  const defaultCity = '昆明'
  const [city, setCity] = useState(defaultCity)

  const fullMapoption = {
    series: [
      {
        type: 'map',
        mapType: 'yunnanFullMap',
        nameMap: {
          昆明市: '昆明',
          曲靖市: '曲靖',
          玉溪市: '玉溪',
          保山市: '保山',
          昭通市: '昭通',
          丽江市: '丽江',
          普洱市: '普洱',
          临沧市: '临沧',
          楚雄彝族自治州: '楚雄',
          红河哈尼族彝族自治州: '红河',
          文山壮族苗族自治州: '文山',
          西双版纳傣族自治州: '西双版纳',
          大理白族自治州: '大理',
          德宏傣族景颇族自治州: '德宏',
          怒江傈僳族自治州: '怒江',
          迪庆藏族自治州: '迪庆',
        },
        borderColor: '#000', // 外边框颜色
        borderWidth: 2, // 外边框宽度
        label: {
          show: true,
          position: [1, 100],
          fontSize: 13,
          offset: [2, 0],
          align: 'center',
          color: '#86909C',
        },
        itemStyle: {
          areaColor: '#F6EFE9',
          borderColor: '#876442',
          borderType: [2, 4],
          borderDashOffset: 2,
        },
        select: {
          itemStyle: {
            areaColor: '#876442',
          },
          label: {
            color: '#fff',
          },
        },
        emphasis: {
          itemStyle: {
            areaColor: 'rgba(135,100,66, 0.2)',
          },
          label: {
            color: '#876442',
          },
        },
        roam: false,
        zoom: 1.25,
      },
    ],
  }

  function onChartReady(instance) {

    instance.dispatchAction({
      type: 'select',
      name: defaultCity,
    })
    console.log('{onChartReady} instance:', instance)

    echartsRef.current = instance
    // selectCity(defaultCity)
  }

  function selectCity(_city: string) {
    echartsRef.current?.dispatchAction?.({
      type: 'select',
      name: _city,
    })
    
    // setCity(_city)
  }

  const Map = (props: { option: any }) => {
    return useMemo(() => {
      return (
        <ReactECharts
          option={props.option}
          className="absolute inset-0"
          style={{ height: '100%' }}
          onEvents={{
            click: ({ name }) => {
              selectCity(name)
            },
          }}
          onChartReady={onChartReady}
        />
      )
    }, [props.option])
  }

  return (
    <div className="pr-[232px]">
      <DetailCover image="/mall-header.png" title="禄劝农家散装自烤酒" subtitle="500g散装 | ¥25.00" />
      <div className="px-[11.75%] pt-[150px] pb-[50px] min-h-[890px] flex bg-[#F6EFE9]">
        <div className="flex-1 relative">
          {initial && (
            <>
              {
                /* <ReactECharts option={option} className="absolute inset-0" style={{ height: '100%' }} /> */
                <Map option={fullMapoption} />
              }
            </>
          )}
        </div>
        <div className="flex-shrink-0">
          <MallCityCard city={city} onChangeCity={(_city) => {
            selectCity(_city)
          }} />
        </div>
      </div>
      <div className="px-[11.75%] py-[150px]">
        <div className="relative">
          <p className="leading-[44px] text-[20px] text-[#c9cdd4]">Preferred</p>
          <h2 className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">云品优选</h2>
          <Divider className="my-[30px]" highlightColor="#876442" />
          <Link href={'/mall/search'} className="absolute right-0 bottom-[30px] flex items-center leading-[24px] text-[16px] text-[#4E5969]">
            <span>查看更多</span>
            <ArrowRight className="size-[22px]" />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-x-[30px]">
          <MallProduct id="01" image="/mall-product-1.png" title="曲靖 | 宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦" price="65.60" />
          <MallProduct id="02" image="/mall-product-2.png" title="大理 | 洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋" price="32.00" />
          <MallProduct id="03" image="/mall-product-3.png" title="红河 | 石屏包浆豆腐700g*2盒" price="34.80" />
          <MallProduct id="04" image="/mall-product-4.png" title="昆明 | 散养走地鸡 900g" price="59.00" />
        </div>
      </div>
    </div>
  )
}
