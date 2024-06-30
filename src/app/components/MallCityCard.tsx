/** @jsxImportSource @emotion/react */
'use client'

import React, { useEffect, useImperativeHandle, useMemo, useState } from 'react'
import classNames from 'classnames'
import { Divider as AntdDivider } from 'antd'
import Divider from './Divider'
import ArrowRight from './icons/ArrowRight'
import MallProduct from './MallProduct'

const data = [
  {
    id: '1',
    city: '昆明',
    englishCity: 'Kunming',
    desc: '昆明是一个风景优美的城市，也是中国面向东南亚、南亚、东盟开放的重要枢纽城市。有鲜花饼、蜡染、云烟、宣威火腿、乌铜走银、昆明牙雕、路南挑花、云南食用菌等特色商品。',
    products: [
      {
        id: '01',
        image: '/mall-city-product-picture-0.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.60',
      },
      {
        id: '02',
        image: '/mall-city-product-picture-1.png',
        title: '洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋',
        price: '32.00',
      },
    ],
  },
  {
    id: '2',
    city: '曲靖',
    englishCity: 'Qujing',
    desc: '曲靖是中国西南地区的一个重要城市，以其丰富的自然资源和独特的地理环境孕育出了许多特色农产品和美食，有宣威火腿、罗平小黄姜、富源魔芋、良板鸭、沾益小粑粑、等特色商品。',
    products: [
      {
        id: '03',
        image: '/mall-city-product-picture-2.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.50',
      },
      {
        id: '04',
        image: '/mall-city-product-picture-3.png',
        title: '登荣香辣爽口鸡辣子鸡肉蛋白肉好吃的辣条8090后怀旧美食小卖部小零食 爽口鸡23g*20包',
        price: '19.80',
      },
    ],
  },
  {
    id: '3',
    city: '玉溪',
    englishCity: 'Yuxi',
    desc: '玉溪的特产丰富多样，涵盖了茶叶、水果、农产品、手工制品等多个领域，有澄江藕粉、华宁柑桔、易门豆豉、玉林泉酒、通海豆末糖、玉溪油卤腐、峨山银毫绿茶、抚仙湖抗浪鱼等特色商品。',
    products: [
      {
        id: '01',
        image: '/mall-city-product-picture-4.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.60',
      },
      {
        id: '02',
        image: '/mall-city-product-picture-5.png',
        title: '洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋',
        price: '32.00',
      },
    ],
  },
  {
    id: '4',
    city: '昭通',
    englishCity: 'Zhaotong',
    desc: '昭通是中国西南地区的一个地级市，位于云南省东北部，拥有丰富多样的地方美食和特产，有昭通酱、昭通苹果、昭通油糕稀豆粉、盐津乌骨鸡、昭通天麻、巧家小碗红糖、昭通花椒等特色商品。',
    products: [
      {
        id: '03',
        image: '/mall-city-product-picture-6.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.50',
      },
      {
        id: '04',
        image: '/mall-city-product-picture-7.png',
        title: '登荣香辣爽口鸡辣子鸡肉蛋白肉好吃的辣条8090后怀旧美食小卖部小零食 爽口鸡23g*20包',
        price: '19.80',
      },
    ],
  },
  {
    id: '5',
    city: '保山',
    englishCity: 'Baoshan',
    desc: '云南保山的特产丰富多样，具有独特的地域特色和历史文化，有保山猪、龙陵黄山羊、腾冲红花油茶油、保山小粒咖啡、龙陵紫皮石斛、槟榔江水牛、腾冲饵丝、保山透心绿豆等特色商品。',
    products: [
      {
        id: '01',
        image: '/mall-city-product-picture-8.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.60',
      },
      {
        id: '02',
        image: '/mall-city-product-picture-9.png',
        title: '洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋',
        price: '32.00',
      },
    ],
  },
  {
    id: '6',
    city: '丽江',
    englishCity: 'Lijiang',
    desc: '云南丽江是中国著名的旅游城市，以其优美的自然风光和丰富的文化遗产而闻名。除了美丽的景色，丽江还拥有许多独特的特产和特色美食，有丽江粑粑、腊排骨火锅、东巴纸、牦牛肉干等特色商品。',
    products: [
      {
        id: '03',
        image: '/mall-city-product-picture-10.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.50',
      },
      {
        id: '04',
        image: '/mall-city-product-picture-11.png',
        title: '登荣香辣爽口鸡辣子鸡肉蛋白肉好吃的辣条8090后怀旧美食小卖部小零食 爽口鸡23g*20包',
        price: '19.80',
      },
    ],
  },
  {
    id: '7',
    city: '普洱',
    englishCity: 'Puer',
    desc: '普洱市位于云贵高原边缘，是中国云南省的一个重要城市，以其丰富的土特产和独特的地理环境而闻名。普洱市不仅是茶马古道上的重要驿站，也是普洱茶的重要产地，拥有多种具有地方特色的传统美食、小吃、农产品、手工制品和工艺品等。',
    products: [
      {
        id: '01',
        image: '/mall-city-product-picture-12.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.60',
      },
      {
        id: '02',
        image: '/mall-city-product-picture-13.png',
        title: '洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋',
        price: '32.00',
      },
    ],
  },
  {
    id: '8',
    city: '临沧',
    englishCity: 'Lincang',
    desc: '云南临沧市位于云南省西南部，因濒临澜沧江而得名，是一个具有丰富自然资源和多样的民族文化的城市。临沧不仅风景秀丽，还拥有众多特色美食和特产，有临沧普洱茶、永德芒果、凤庆滇红茶、稀豆粉米线、佤山烤香猪等特色商品。',
    products: [
      {
        id: '03',
        image: '/mall-city-product-picture-14.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.50',
      },
      {
        id: '04',
        image: '/mall-city-product-picture-15.png',
        title: '登荣香辣爽口鸡辣子鸡肉蛋白肉好吃的辣条8090后怀旧美食小卖部小零食 爽口鸡23g*20包',
        price: '19.80',
      },
    ],
  },

  {
    id: '9',
    city: '德宏',
    englishCity: 'Dehong',
    desc: '云南德宏州，位于云南省西南部，是一个气候资源丰富、动植物种类繁多的地区。其特产种类丰富，既有传统农产品，也有独特的地方小吃和手工艺品。有芒市石斛、梁河回龙茶、瑞丽柠檬、德宏芭蕉、遮放米、德宏水牛、盈江翡翠、盈江竹筒饭等特色商品。',
    products: [
      {
        id: '01',
        image: '/mall-city-product-picture-16.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.60',
      },
      {
        id: '02',
        image: '/mall-city-product-picture-17.png',
        title: '洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋',
        price: '32.00',
      },
    ],
  },
  {
    id: '10',
    city: '怒江',
    englishCity: 'Nujiang',
    desc: '怒江特产丰富多样，涵盖了传统美食、小吃、农产品、手工制品和工艺品等多个领域，有福贡云黄连、独龙牛、兰坪绒毛鸡、怒江鱼生、漆油鸡、贡山大理石、瓦姑茶、兔峨衣主梨等特色商品。',
    products: [
      {
        id: '03',
        image: '/mall-city-product-picture-18.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.50',
      },
      {
        id: '04',
        image: '/mall-city-product-picture-19.png',
        title: '登荣香辣爽口鸡辣子鸡肉蛋白肉好吃的辣条8090后怀旧美食小卖部小零食 爽口鸡23g*20包',
        price: '19.80',
      },
    ],
  },
  {
    id: '11',
    city: '迪庆',
    englishCity: 'Diqing',
    desc: '迪庆州位于中国西南部，是一个多民族聚居的地区，拥有丰富的自然资源和独特的地理环境。因此，迪庆州不仅风景秀丽，而且生产了许多具有地方特色的农产品和手工艺品，有维西百花蜜、香格里拉松茸、香格里拉牦牛肉、迪庆藏猪等特色商品。',
    products: [
      {
        id: '01',
        image: '/mall-city-product-picture-20.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.60',
      },
      {
        id: '02',
        image: '/mall-city-product-picture-21.png',
        title: '洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋',
        price: '32.00',
      },
    ],
  },
  {
    id: '12',
    city: '大理',
    englishCity: 'Dali',
    desc: '大理是中国著名的旅游城市，以其独特的地理环境和丰富的民族文化而闻名。这里不仅有美丽的自然风光，还有许多具有地方特色的特产，有洱源梅子、宾川柑橘、下关沱茶、诺邓火腿、夹沙乳扇、永平白鹅、南涧无量山乌骨鸡等特色商品。',
    products: [
      {
        id: '03',
        image: '/mall-city-product-picture-22.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.50',
      },
      {
        id: '04',
        image: '/mall-city-product-picture-23.png',
        title: '登荣香辣爽口鸡辣子鸡肉蛋白肉好吃的辣条8090后怀旧美食小卖部小零食 爽口鸡23g*20包',
        price: '19.80',
      },
    ],
  },
  {
    id: '13',
    city: '楚雄',
    englishCity: 'Chuxiong',
    desc: '楚雄州是一个农业大区，拥有丰富的自然资源和独特的地理环境，因此生产了许多具有地方特色的特产，有大姚核桃、牟定腐乳、楚雄牛肝菌、双柏白竹山茶、元谋番茄等特色商品。',
    products: [
      {
        id: '01',
        image: '/mall-city-product-picture-24.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.60',
      },
      {
        id: '02',
        image: '/mall-city-product-picture-25.png',
        title: '洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋',
        price: '32.00',
      },
    ],
  },
  {
    id: '14',
    city: '红河',
    englishCity: 'Honghe',
    desc: '红河哈尼族彝族自治州位于云南省东南部，是一个多民族聚居的边疆少数民族自治州，拥有丰富的自然资源和独特的文化底蕴。红河州的特产种类繁多，涵盖了农产品、手工制品、工艺品等多个方面，展示了当地人民的智慧和创造力。',
    products: [
      {
        id: '03',
        image: '/mall-city-product-picture-26.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.50',
      },
      {
        id: '04',
        image: '/mall-city-product-picture-27.png',
        title: '登荣香辣爽口鸡辣子鸡肉蛋白肉好吃的辣条8090后怀旧美食小卖部小零食 爽口鸡23g*20包',
        price: '19.80',
      },
    ],
  },
  {
    id: '15',
    city: '文山',
    englishCity: 'Wenshan',
    desc: '文山壮族苗族自治州是中国西南部的一个著名的民族自治州，拥有丰富的自然资源和独特的地方文化。文山不仅是一个多民族聚居地，还因其独特的地理位置和气候条件，孕育了许多具有地方特色的农产品、食品和手工艺品。',
    products: [
      {
        id: '01',
        image: '/mall-city-product-picture-28.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.60',
      },
      {
        id: '02',
        image: '/mall-city-product-picture-29.png',
        title: '洱宝话梅云南大理特产网红酸甜果干孕妇休闲零食 话梅80克*3袋',
        price: '32.00',
      },
    ],
  },
  {
    id: '16',
    city: '西双版纳',
    englishCity: 'Xishuangbanna',
    desc: '云南西双版纳的特产丰富多样，涵盖了食品、茶叶、手工艺品和热带水果等多个类别。有普洱茶、南糯白毫、云南咖啡、热带水果、傣族手工艺品、竹筒香茶、门巴木碗、野生蜂蜜等特色商品。',
    products: [
      {
        id: '03',
        image: '/mall-city-product-picture-30.png',
        title: '宣福威云南火腿宣威整腿切块2年乡村老火腿生吃三年中方礼盒无骨腊肉 1000g 2肥8瘦',
        price: '65.50',
      },
      {
        id: '04',
        image: '/mall-city-product-picture-31.png',
        title: '登荣香辣爽口鸡辣子鸡肉蛋白肉好吃的辣条8090后怀旧美食小卖部小零食 爽口鸡23g*20包',
        price: '19.80',
      },
    ],
  },
]

export type Props = { city?: string; onChangeCity?: (city: string) => void; className?: string }

const MallCityCard = React.forwardRef<
  {
    changeCity?: (city: string) => void
  },
  Props
>((props, ref) => {
  const { city, onChangeCity } = props || {}
  const [index, setIndex] = useState(0)

  const len = data.length
  const current = useMemo(() => {
    const value = data[index]
    return value
  }, [index])

  useEffect(() => {
    onChangeCity?.(current.city)
  }, [current])

  function toggleIndex(val) {
    const newVal = index + val
    if (newVal < 0) {
      setIndex(0)
    } else if (newVal >= len) {
      setIndex(len - 1)
    } else {
      setIndex(newVal)
    }
  }

  function changeCity(_city) {
    const newIndex = data.findIndex((item) => item.city === _city)
    if (newIndex > -1) {
      setIndex(newIndex)
    }
  }

  useEffect(() => {
    changeCity(city)
  }, [city])

  useImperativeHandle(
    ref,
    () => {
      return {
        changeCity,
      }
    },
    []
  )

  return (
    <div className={classNames('w-[590px] bg-white broder border-[#E6D9CD] px-[50px] py-[45px]', props.className)}>
      <div className="relative">
        <p className="leading-[44px] text-[20px] text-[#c9cdd4]">{current.englishCity}</p>
        <h2 className="mt-[5px] leading-[44px] text-[36px] text-[#1d2129] font-bold">{current.city}</h2>
        <Divider className="my-[30px]" highlightColor="#876442" />
        <div className="absolute right-0 bottom-[30px] flex items-center select-none">
          <div
            role="button"
            className={classNames('flex items-center justify-center size-[50px] rounded-full border border-[#86909C] text-[#86909C]', { 'bg-[#1D5FFF] border-transparent text-white': index > 0 })}
            onClick={() => toggleIndex(-1)}
          >
            <ArrowRight className="size-[24px] transform rotate-180" />
          </div>
          <div
            role="button"
            className={classNames('ml-[20px] flex items-center justify-center size-[50px] rounded-full border border-[#86909C] text-[#86909C]', {
              'bg-[#1D5FFF] border-transparent text-white': index < len - 1,
            })}
            onClick={() => toggleIndex(1)}
          >
            <ArrowRight className="size-[24px]" />
          </div>
        </div>
      </div>
      {current.desc && <p className="mt-[30px] leading-[24px] text-[16px] text-[#4E5969]">{current.desc}</p>}
      <AntdDivider dashed />
      <div className="grid grid-cols-2 gap-x-[30px]">
        {current.products.map((item) => (
          <MallProduct key={`product-${item.id}`} {...item} />
        ))}
      </div>
    </div>
  )
})

MallCityCard.displayName = 'MallCityCard'

export default MallCityCard
